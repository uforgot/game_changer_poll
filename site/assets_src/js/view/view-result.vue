/**
* -----------------------------------------------------
* Created by uforgot on 2018. 3. 21.
* game_changer_poll
* -----------------------------------------------------
*/

<template>
    <div>
        <component-graph></component-graph>
        <component-list v-for="(listData,index) in resultData" :data="listData" :key="index"></component-list>
        <section class="container poll-btn has-text-centered">
            <router-link :to="{name:'poll'}"><a class="button is-large is-info">다시하기</a></router-link>
            <!--<a class="button is-large is-warning">Reset</a>-->
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
    import ComponentGraph from "./component-graph.vue";
    import ComponentList from "./component-list.vue";

    export default {
        mixins: [],
        components: {
            ComponentList,
            ComponentGraph},
        
        props: {},
        data: function () {
            return {
                resultData : [],
                listDatas : [
                    {
                        title:'Mental',
                        color:EventBus.POINT_COLORS[0],
                        lists:[
                            {
                                title:'살래 표현예술심리치유센터',
                                comment:
                                    '심리검사 및 개인& 그룹상담, 코칭\n' +
                                    '-에니어그램/MBTI/우울/대인관계/분노조절/외상 후 스트레스장애/움직임,동작 분석\n' +
                                    '-표현예술심리치유활동',
                                contact:
                                    'salleartstheraphy@gmail.com'
                            },
                            {
                                title:'서울정신분석심리상담소',
                                comment:
                                    '정신분석 심리치료\n' +
                                    '- 아동(놀이치료 & 미술치료)\n' +
                                    '- 청소년/성인/부부/가족',
                                contact:
                                    '서울 서대문구 충정로 11길 20 CI 빌딩\n' +
                                    'Tel: 0507-1452-0653\n' +
                                    'saeip2010@naver.com'
                            }
                        ]
                    }
                    ,
                    {
                        title:'Family',
                        color:EventBus.POINT_COLORS[1],
                        lists:[
                            {
                                title:'서울가족문제상담소',
                                comment:
                                    '부부상담, 가족상담, 자녀상담, 커플상담',
                                contact:
                                    '김미영 소장 (02-478-1366)'
                            },
                            {
                                title:'밝은희망 가족상담 센터',
                                comment:
                                    '검사프로그램 (가족 종합 심리검사, 성격이해검사, 대화문제 진단, 가족관계그림검사)\n' +
                                    '가족관계 개선 프로그램 (사춘기 자녀 가족, 부부, 한부보/혼합가족, 부모님 관계개선, 중독치료 프로그램, 부모교육 등)',
                                contact:
                                '서울 용산구 한강대로 211 대우월드마크 17F\n' +
                                '(Tel: 1522-7350)\n' +
                                'info@brighthope.co.kr'
                            }
                        ]
                    },
                    {
                        title:'Work',
                        color:EventBus.POINT_COLORS[2],
                        lists:[
                            {
                                title:'허그맘허그인EAP360',
                                comment:
                                    '기업 심리 상담 센터\n' +
                                    'EAP 상담 전문 기업 (심리상담,검사,치료)\n' +
                                    '- 조직문화개선, 개인 및 가정 문제 해결\n' +
                                    '컨설팅 (개인 및 기업 대상)\n' +
                                    '- 직무스트레스관리, 조직활성화교육전문 (전국 39개 네트워크, 전문가 600명)\n' +
                                    '교육 및 워크숍',
                                contact:
                                    'http://eap.hugmom.co.kr'
                            },
                            {
                                title:'밝음',
                                comment:
                                    'EAP 프로그램/심리상담,진단/코칭프로그램',
                                contact:
                                'happy@bhappy.co.kr' +
                                '02-516-9060'
                            }
                        ]
                    },
                    {
                        title:'Social',
                        color:EventBus.POINT_COLORS[3],
                        lists:[
                            {
                                title:'심리상담연구소 마음안',
                                comment:
                                    '심리 프로그램' +
                                    '- 상담 및 심리 평가' +
                                    '교육/연계 프로그램' +
                                    '- 인터넷/계임중독, 관계성 향상, 기업연계 (EAP) 강의 및 워크샵',
                                contact:
                                    '서울시 마포구 월드컵북로 402 KGIT센터 9층 909호\n' +
                                    'Tel: 02-302-5512'
                            },
                            {
                                title:'힐링유 심리상담센터',
                                comment:
                                    '심리치료 프로그램\n' +
                                    '우울증, 스트레스, 강박증, 공황장애 사회불안 등 인지 행동 치료',
                                contact:
                                '서울 강남구 선릉로 608, 4층\n' +
                                'Tel: 02-540-2668'
                            }
                        ]
                    },
                    {
                        title:'Financial',
                        color:EventBus.POINT_COLORS[4],
                        lists:[
                            {
                                title:'서울금융복지상담센터',
                                comment:
                                '채무조정상담, 가정재무상담, 복지서비스연계, 채무자대리인제도등',
                                contact:
                                '서울 마포구 백범로 31길 21\n' +
                                'Tel: 1644-0120'
                            },
                            {
                                title:'김진교육개발원',
                                comment:
                                '진로 컨설팅, 진로 적성,옥타그노시스 검사',
                                contact:
                                '서울 영등포구 여의대로 8 메리어트파크센터 B\n' +
                                'Tel: 02-556-7007'
                            },
                            {
                                title:'진로정보망 커리어넷',
                                comment:
                                    '커리어플래너, 진로심리검사, 진로상담',
                                contact:
                                'www.career.go.kr\n' +
                                '세종특별자치시 시청대로 370 세종국책연구단지 사회정책동 한국직업능력개발원 커리어넷'
                            }
                        ]
                    }
                ]
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
            scrollTo(0,0);
            
            let highIndex = 0;
            let highPoll = EventBus.SCORES[0];
            let i;
            
            for (i=0;i<EventBus.SCORES.length; i++) {
                
                if (highPoll > EventBus.SCORES[i]) {
                    highPoll = EventBus.SCORES[i];
                    highIndex = i;
                }
            }
            
            this.resultData.push(this.listDatas[highIndex]);
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
