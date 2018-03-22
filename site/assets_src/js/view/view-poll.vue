/**
* -----------------------------------------------------
* Created by uforgot on 2018. 3. 21.
* game_changer_poll
* -----------------------------------------------------
*/

<template>
    <div>
        <component-poll v-for="(pollData,index) in pollDatas" :data="pollData" :key="index" :index="index" @update="updateScore"></component-poll>
        <section class="container poll-btn has-text-centered">
            <a class="button is-large is-info" @click="setResult" >결과보기</a>
        </section>
    </div>
</template>

<style scoped lang="scss">
    .poll-btn {
        padding:0 0 4rem 0;
        }
</style>

<script>
    import {EventBus} from "./event-bus";
    import ComponentPoll from "./component-poll.vue";
    
    export default {
        mixins: [],
        components: {ComponentPoll},

        props: {},
        data: function () {
            return {
                scores:[],
                pollDatas : [
                    {
                        title:'Mental',
                        color:EventBus.POINT_COLORS[0],
                        polls:[
                            '나는 현재의 나 자신을 특별히 좋아한다',
                            '나는 삶이 확실히 살아갈 가치가 있는 것이라고 생각한다',
                            '내가 하고 싶은 것과 내가 해왔던 것과 차이가 나지 않는다',
                            '개인적인 문제를 잘 해결할 수 있다는 자신감이  있다',
                            '자주 일상에서 짜증이 나는 것을 잘 조절할 수 있다'
                        ]
                    },
                    {
                        title:'Family',
                        color:EventBus.POINT_COLORS[1],
                        polls:[
                            '가족과 함께 있을 때 기쁨을 자주 느낀다',
                            '우리 가족은 가족관계가 평등한 정도에 만족한다',
                            '우리 가족은 가족 내의 변화(이사, 입학, 이직) 등에 대한 가족의 적응력 정도에 만족한다',
                            '우리 가족의 갈등 상황 대처에 만족한다 ',
                            '우리 가족은 부모자녀 간에 서로 존중하는 정도에 만족한다'
                        ]
                    },
                    {
                        title:'Work',
                        color:EventBus.POINT_COLORS[2],
                        polls:[
                            '나는 현재 직장과 업무에 만족 한다',
                            '나는 회사에서 인정받고 있다',
                            '나는 일과 가족의 균형을 잘 맞추고 있다고 생각한다',
                            '나는 최는 5년간 이직을 고민한 적이 없다',
                            '나는 회사에서의 비젼을 알고 있으며 이를 성취하기 위해 최선을 다한다'
                        ]
                    },
                    {
                        title:'Social',
                        color:EventBus.POINT_COLORS[3],
                        polls:[
                            '나는 내가 속한 사회에 일원이라는 생각을 한다',
                            '나는 가정, 학교, 직장 등에서 인정받고 있다고 생각 한다',
                            '나는 사람들과의 관계에 있어서 주도적이며 자신감이 있다',
                            '나는 다른 사람과 어울리는데 있어서 어떠한 문제점도 가지고 있지 않다',
                            '나는 사회적으로 내가 도움이 된다고 생각 한다'
                        ]
                    },
                    {
                        title:'Financial',
                        color:EventBus.POINT_COLORS[4],
                        polls:[
                            '나는 현재 경제적으로 만족하고 있다',
                            '나는 현재 주거 환경에 만족하고 있으며, 이것 때문에 걱정하지 않는다',
                            '나는 지난 5년 간 경제적인 어려움 때문에 고민한 적이 없다',
                            '나는 본인 또는 자녀의 교육이나 취직 문제로 고민하지 않는다',
                            '나 또는 우리 가족은 은퇴 후 경제적으로 걱정 없이 살 준비를 하고 있다'
                        ]
                    }
                ]
            };
        },

        computed: {},
        methods: {
            setResult : function() {
                console.log('show result');
                EventBus.SCORES = this.scores;
                console.log(EventBus.SCORES);
              
                this.$router.push({name:'result'});
            },
            updateScore : function($e) {
                this.scores[$e.index] = parseInt($e.value);
                console.log(this.scores);
            }
            
        },
        watch: {},

        //life cycle
        //beforeCreate : function() {},
        //created : function() {},
        //beforeMount : function() {},
        mounted : function() {
            scrollTo(0,0);
            let i;
            for (i=0;i<this.pollDatas.length;i++) {
                this.scores.push(EventBus.DEFAULT_SCORE * this.pollDatas[i].polls.length);
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
