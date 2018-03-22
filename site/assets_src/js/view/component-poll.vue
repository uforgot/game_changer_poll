/**
* -----------------------------------------------------
* Created by uforgot on 2018. 3. 21.
* game_changer_poll
* -----------------------------------------------------
*/

<template>
    <section class="container poll" :style="{'border-color':data.color}">
        <h1 class="title" :style="{color:data.color}">{{data.title}}</h1>
        <table class="table is-hoverable is-fullwidth">
            <thead>
            <tr>
                <th :style="{'border-color':data.color}"></th>
                <th :style="{'border-color':data.color}">All the time</th>
                <th :style="{'border-color':data.color}">Most of the time</th>
                <th :style="{'border-color':data.color}">Some of the time</th>
                <th :style="{'border-color':data.color}">Not often</th>
                <th :style="{'border-color':data.color}">Never</th>
            </tr>
            </thead>
            <tbody>
                <component-poll-item v-for="(item,index) in data.polls" :poll-title="item" :key="index" :index="index" @update="updateScore"></component-poll-item>
            </tbody>
        </table>
    </section>
</template>

<style scoped lang="scss">
    .title{position:absolute;}
    .poll {
        box-sizing:border-box;
        /*border:solid 1px;*/
        padding:1.2rem;
        margin-bottom:2rem;
        background:#ffffff;
        }
    table {margin-bottom:0;}
    th {text-align:center; font-size:0.7rem; font-weight:normal; width:9%; line-height:1.2; padding-bottom:2em; vertical-align:middle;}
    th:first-child{width:55%;}
</style>

<script>
    import {EventBus} from "./event-bus";
    import ComponentPollItem from "./component-poll-item.vue";

    export default {
        mixins: [],
        components: {ComponentPollItem},

        props: {
            'index':0,
            'data':{}
        },
        data: function () {
            return {
                score:[],
                total:0
            };
        },

        computed: {},
        methods: {
            updateScore : function($e) {
                let i;
                let total = 0;
                
                this.score[$e.index] = parseInt($e.value);
                for (i=0;i<this.score.length;i++) {
                    total += this.score[i];
                }
    
                this.$emit('update', {value:total, index:this.index});
            }
        },
        watch: {
        },

        //life cycle
        //beforeCreate : function() {},
        //created : function() {},
        //beforeMount : function() {},
        mounted : function() {
            // this.score = new Array(this.data.polls.length);
            let i;
            for (i=0;i<this.data.polls.length;i++) {
                this.score.push(EventBus.DEFAULT_SCORE);
            }
        },
        //beforeUpdate : function() {},
        //updated : function() {},
        //activated : function() {},
        //deactivated : function() {},
        //beforeDestroy : function () {},
        //destroyed : function() {},
        dummy: {}
    }
</script>
