/**
* -----------------------------------------------------
* Created by uforgot on 2018. 3. 21.
* game_changer_poll
* -----------------------------------------------------
*/

<template>
    <div>
        <section class="container graph">
            <div class="comment" :style="{'background-color':colors[highIndex]}">
                행복지수는 {{average}}%입니다.<br>
                {{titles[highIndex]}}에 대해서는 아래 정보를 확인하세요.<br>
                <div style="font-size:1rem; margin-top:1.5em;">설문에 응모해 주셔서 감사합니다.</div>
            </div>
            <div class="caption">
                <table class="table is-fullwidth">
                    <tbody>

                    <!--<tr>-->
                        <!--<td><div class="title is-4">결과안내</div></td>-->
                        <!--<td ></td>-->
                    <!--</tr>-->


                    <tr>
                        <td><div class="title is-4" :style="{color:colors[0]}">Mental</div></td>
                        <td ><div style="text-align:right" class="title is-4" :style="{color:colors[0]}">{{percentValue[0]}}%</div></td>
                    </tr>

                    <tr>
                        <td><div class="title is-4" :style="{color:colors[1]}">Family</div></td>
                        <td><div style="text-align:right" class="title is-4" :style="{color:colors[1]}">{{percentValue[1]}}%</div></td>
                    </tr>

                    <tr>
                        <td><div class="title is-4" :style="{color:colors[2]}">Work</div></td>
                        <td><div style="text-align:right"class="title is-4" :style="{color:colors[2]}">{{percentValue[2]}}%</div></td>
                    </tr>

                    <tr>
                        <td><div class="title is-4" :style="{color:colors[3]}">Social</div></td>
                        <td><div style="text-align:right"class="title is-4" :style="{color:colors[3]}">{{percentValue[3]}}%</div></td>
                    </tr>

                    <tr>
                        <td><div class="title is-4" :style="{color:colors[4]}">Financial</div></td>
                        <td><div style="text-align:right"class="title is-4" :style="{color:colors[4]}">{{percentValue[4]}}%</div></td>
                    </tr>

                    </tbody>
                </table>
                
                <!--<div class="caption">Mental</div>-->
                <!--<div class="caption">Family</div>-->
                <!--<div class="caption">Work</div>-->
                <!--<div class="caption">Social</div>-->
                <!--<div class="caption">Financial</div>-->
            </div>
        </section>
    </div>
</template>

<style scoped lang="scss">
    .comment {
        z-index:100;
        width:35%;
        position:absolute;
        font-size:1.5rem;
        font-weight:bold;
        bottom:0;
        color:#fff;
        padding:1.5em;
        border-radius:1em;
        }
    table {
        background:none;
        }
    td {
        /*border:0;*/
        }
    .title {
        text-align:left;
        font-weight:bold;
        margin-top:0.5em;
        margin-bottom:0.5em;
        }
    progress {
        margin-bottom:0.5em;
        }
    
    .graph {
        margin-top:4em;
        margin-bottom:4em;
        background:#ffffff;
        height:600px;
        }
    .caption {
        z-index:100;
        position:absolute;
        left:0;
        width:35%;
        }
</style>

<script>
    import {EventBus} from "./event-bus";
    import * as d3 from 'd3';
    
    export default {
        mixins: [],
        components: {},

        props: {},
        data: function () {
            return {
                average:0,
                percentValue:[],
                highIndex:0,
                titles:['Mental','Family','Work','Social','Financial'],
                colors:['#00d1b2', '#3272dc', '#1f9bee', '#22d15f', '#ff3860', '#ffdd56']
            };
        },
 
        computed: {},
        methods: {
            draw : function () {
                let dataset = [1, 1, 1, 1, 1];
                let colors = [EventBus.POINT_COLORS[0], EventBus.POINT_COLORS[1], EventBus.POINT_COLORS[2], EventBus.POINT_COLORS[3], EventBus.POINT_COLORS[4], EventBus.POINT_COLORS[5]];
                
                let width = 600;
                let height = 600;
                let initialAnimDelay = 300;
                let arcAnimDelay = 150;
                let arcAnimDur = 2500;
                let secDur = 1000;
                let secIndividualdelay = 150;
    
                let radius = 300;
                
                let svg = d3.select('.graph').append('svg').attr('width',width).attr('height',height).attr('class','chart').append('g');
                
                svg.attr('transform', 'translate(' + width / 2 + ', ' + height / 2 + ')');
    
                let pie = d3.layout.pie().value(function (d) {
                    return d;
                });
 
                
                let arcArray = [];
                let scoreArray = EventBus.SCORES;
                let tmpRadius;
                let tmpPercent;
                let i;
                
                for (i=0;i<scoreArray.length;i++) {
                    tmpRadius = (scoreArray[i]*3.7 + 0.3)/100;
                    tmpPercent = Math.floor(scoreArray[i]*4);
                    this.average += tmpPercent;
                    this.percentValue.push(tmpPercent);
                    arcArray.push(
                        d3.svg.arc().outerRadius(radius * tmpRadius).innerRadius(radius * 0.1)
                    );
                }
                
                this.average = Math.floor(this.average/i);
                
                console.log('----->');
                console.log(scoreArray);
                console.log(arcArray);
                
                let arc = d3.svg.arc().outerRadius(radius).innerRadius(0);
                // console.log(arc);
    
                svg.append("g").attr("class", "back");
                svg.append("g").attr("class", "slices");
                
                let back = svg.select('.back').datum([1]).selectAll('path').data(pie);
                back.enter().append('path').attr({
                    'fill': function fill(d, i) {
                        return 'rgba(255,242,102,0.4)';
                    },
                    'd':arc,
                    'stroke-width': '25px',
                    'transform': function transform(d, i) {
                        return 'rotate(0, 0, 0)';
                    }
                }).style('opacity', 0).transition().delay(function (d, i) {
                    return i * arcAnimDelay + initialAnimDelay;
                }).duration(arcAnimDur).ease('elastic').style('opacity', 1).attr('transform', 'rotate(0,0,0)');
                
                // let slice = svg.select('.slices').datum(dataset).selectAll('path').data(pie);
                let cnt = 0;
                let slice = svg.select('.slices').datum([1,1,1,1,1]).selectAll('path').data(pie);
                
                for (cnt=0; cnt<arcArray.length;cnt++) {
                    
                    slice.enter().append('path').attr({
                        'fill': function fill(d, i) {
                            if (i === cnt) return colors[i];
                            return 'rgba(0,0,0,0)';
                        },
                        'd': arcArray[cnt],
                        'stroke-width': '25px',
                        'transform': function transform(d, i) {
                            return 'rotate(-40, 0, 0)';
                        }
                    }).style('opacity', 0).transition().delay(function (d, i) {
                        return i * arcAnimDelay + initialAnimDelay;
                    }).duration(arcAnimDur).ease('elastic').style('opacity', 1).attr('transform', 'rotate(0,0,0)');
    
                }

                
                // slice.enter().append('path').attr({
                //     'fill': function fill(d, i) {
                //         return colors[i];
                //     },
                //     'd':arcArray[cnt],
                //     'stroke-width': '25px',
                //     'transform': function transform(d, i) {
                //         return 'rotate(-90, 0, 0)';
                //     }
                // }).style('opacity', 0).transition().delay(function (d, i) {
                //     return i * arcAnimDelay + initialAnimDelay;
                // }).duration(arcAnimDur).ease('elastic').style('opacity', 1).attr('transform', 'rotate(0,0,0)');
                //
                
                slice.transition().delay(function (d, i) {
                    return arcAnimDur + i * secIndividualdelay;
                }).duration(secDur).attr('stroke-width', '5px');
            }
        },
        watch: {
        
        },

        //life cycle
        //beforeCreate : function() {},
        //created : function() {},
        //beforeMount : function() {},
        mounted : function() {
            this.draw();
    
            
            let highPoll = EventBus.SCORES[0];
            let i;
    
            for (i=0;i<EventBus.SCORES.length; i++) {
                // console.log(EventBus.SCORES[i]);
                if (highPoll > EventBus.SCORES[i]) {
                    highPoll = EventBus.SCORES[i];
                    this.highIndex = i;
                }
            }
        },
        beforeUpdate : function() {
        },
        updated : function() {
        },
        activated : function() {

        },
        //deactivated : function() {},
        //beforeDestroy : function () {},
        //destroyed : function() {},
        dummy: {}
    }
</script>
