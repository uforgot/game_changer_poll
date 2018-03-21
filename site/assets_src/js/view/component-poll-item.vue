/**
* -----------------------------------------------------
* Created by uforgot on 2018. 3. 21.
* game_changer_poll
* -----------------------------------------------------
*/

<template>
    <tr>
        <td class="poll-title">{{pollTitle}}</td>
        <td><b-radio v-model="radio" native-value="5"></b-radio></td>
        <td><b-radio v-model="radio" native-value="4"></b-radio></td>
        <td><b-radio v-model="radio" native-value="3"></b-radio></td>
        <td><b-radio v-model="radio" native-value="2"></b-radio></td>
        <td><b-radio v-model="radio" native-value="1"></b-radio></td>
    </tr>
</template>

<style scoped lang="scss">
    .poll-title {text-align:left; font-size:0.9rem; line-height:2em;}
    td {text-align:center;}
</style>

<script>
    export default {
        mixins: [],
        components: {},

        props: {
            'index':0,
            'poll-title':''
        },
        data: function () {
            return {
                radio:'3'
            };
        },

        computed: {},
        methods: {},
        watch: {
            radio : function($newValue, $oldValue){
                // console.log($newValue);
                this.$emit('update', {value:$newValue, index:this.index});
            }
        },

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
