/**
* -----------------------------------------------------
* Created by uforgot on 2018. 3. 21.
* game_changer_poll
* -----------------------------------------------------
*/

<template>
    <section class="container poll" :style="{'border-color':data.color}">
        <!--<h1 class="title" :style="{color:data.color}">{{data.title}}</h1>-->
        <table class="table is-hoverable is-fullwidth">
            <thead>
            <tr>
                <th :style="{color:data.color, 'border-color':data.color}"></th>
                <th :style="{'border-color':data.color}"></th>
                <th :style="{'border-color':data.color}"></th>
            </tr>
            </thead>
            <tbody>
                <component-list-item v-for="(list,index) in data.lists" :data="list" :key="index"></component-list-item>
            </tbody>
            <tfoot>
            <tr>
                <th :style="{color:data.color, 'border-color':data.color}"></th>
                <th :style="{'border-color':data.color}"></th>
                <th :style="{'border-color':data.color}"></th>
            </tr>
            </tfoot>
        </table>
    </section>
</template>

<style scoped lang="scss">
    h1 {position:absolute; font-size:1.5rem; line-height:0.5em; top:-10px;}
    .poll {
        box-sizing:border-box;
        /*border:solid 1px;*/
        padding:1.2rem;
        /*margin-bottom:2rem;*/
        background:#ffffff;
        }
    table {margin-bottom:0;}
    th {text-align:center; font-size:1rem; font-weight:normal; line-height:1.2em; padding-bottom:1em; vertical-align:middle; font-size:0.7rem;}
    th:first-child{width:20%; text-align:left; font-weight:bold; font-size:1.0rem; margin-left:20px;}
    th:nth-child(2){width:50%;}
    
</style>

<script>
    import ComponentListItem from "./component-list-item.vue";

    export default {
        mixins: [],
        components: {ComponentListItem},

        props: {
            'data':{}
        },
        data: function () {
            return {
                color:'#cccccc'
            };
        },

        computed: {},
        methods: {},
        watch: {},

        //life cycle
        //beforeCreate : function() {},
        //created : function() {},
        //beforeMount : function() {},
        //mounted : function() {},
        //beforeUpdate : function() {},
        //updated : function() {},
        //activated : function() {},
        //deactivated : function() {},
        //beforeDestroy : function () {},
        //destroyed : function() {},
        dummy: {}
    }
</script>
