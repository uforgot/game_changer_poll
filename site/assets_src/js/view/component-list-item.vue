/**
* -----------------------------------------------------
* Created by uforgot on 2018. 3. 21.
* game_changer_poll
* -----------------------------------------------------
*/

<template>
    <tr>
        <td>{{data.title}}</td>
        <td>{{data.comment}}</td>
        <td>{{data.contact}}</td>
    </tr>
</template>

<style scoped lang="scss">
    td {text-align:left; font-size:0.9rem; line-height:2em;}
</style>

<script>
    export default {
        mixins: [],
        components: {},

        props: {
            'data':{}
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
