/**
* -----------------------------------------------------
* Created by uforgot on 2018. 3. 21.
* game_changer_poll
* -----------------------------------------------------
*/

<template>
    <div>
        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        2018 행복지수 조사
                    </h1>
                    <h2 class="subtitle">
                        본 설문은 행복에 대한 인식과 영향을 끼치는 요소를 파악하기 위한 기초 자료를 수집하기 위한 목적으로 진행되는 조사입니다.<br>
                        본 설문은 무기명으로 이루어지며, 본 설문 외 다른 목적으로 사용되지 않습니다.
                    </h2>
                </div>
            </div>
        </section>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<style scoped lang="scss">
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
        opacity: 1;
        }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        transition: opacity .5s;
        opacity: 0;
        }
    .hero {
        height:280px;
        background:#3273dc;
        margin-bottom:2rem;
        
        h1 {
            margin-top:1rem;
            color:#fff;
            font-size:3rem;
            text-align:center;
            padding:1rem;
            }
        h2 {
            color:#fff;
            font-size:1rem;
            text-align:center;
            line-height:1.5em;
            font-weight:bold;
            }
        }
    .container {
       
        }
</style>

<script>
    import ComponentPoll from './component-poll.vue';
    import ViewPoll from './view-poll.vue';
    import ViewResult from './view-result.vue';
    import VueRouter from 'vue-router';

    const routes = [
        { path:'*', redirect:'/poll'},
        { path:'', redirect:'/poll'},
        { name:'poll', path: '/poll', component: ViewPoll },
        { name:'result', path: '/result', component: ViewResult}
    ];
    
    const router = new VueRouter({
        mode:'hash',
        routes: routes,
    });
    
    export default {
        router,
        mixins: [],
        components: {
            ViewPoll,
            ComponentPoll},

        props: {
          test:0
        },
        data: function () {
            return {
            };
        },

        computed: {},
        methods: {},
        watch: {},

        //life cycle
        //beforeCreate : function() {},
        //created : function() {},
        //beforeMount : function() {},
        mounted : function() {
          console.log('init completed');
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
