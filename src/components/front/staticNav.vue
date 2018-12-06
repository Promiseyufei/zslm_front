<template>
    <!--footer静态导航栏：关于我们、用户条款、帮助中心、法律声明-->
    <!-- <staticNav :state="state"></staticNav> -->
    <div>                                                 
        <div class="staticNav">
            <div @click = "toJump(index)" :class="{'activediv':index == state}" :key="index" v-for="(item,index) in data">
                <span :class="{'activespan':index == state}"></span>
                <p :class="{'activep':index == state}">{{item}}</p>
            </div>        
        </div>
    </div>
</template>

<script>
    export default{
        props:["state"],
        data(){
            return{
                data:["关于我们","用户条款","帮助中心","法律声明"],
            }
        },
        methods:{
            //跳到相应的模块，分别为（关于我们、用户条款、帮助中心、法律声明）
            toJump: function(index) {
                if(index==0) {
                    this.$router.push('/front/firstMenuRouter/aboutUs');
                }else if(index==1) {
                    // this.$router.push('/front/firstMenuRouter/lookActivity');
                }else if(index==2) {
                    // this.$router.push('/front/firstMenuRouter/viewInformation');
                }else {
                    // this.$router.push('/front/firstMenuRouter/searchCoach');
                }
            },
        },
        mounted(){

        }
    }
</script>

<style scoped>
    .staticNav{
        background-color: #fff;
        min-width: 305px;
        width: 305px;
        border-radius: 5px;
        padding: 9px 0;
    }
    .staticNav div span{
        width: 17px;
        height: 4px;
        background-color: #009fa0;
        margin-right: 12px;
        visibility: hidden;
    }
    .staticNav div{
        cursor: pointer;
        display: flex;
        align-items: center;
        padding: 20px 191px 19px 21px; 
    }
    /*.staticNav div:hover{
        background-color: #eaebeb;
    }
    .staticNav div:hover span{
        visibility: visible;
    }
    .staticNav div:hover p{
        color: rgb(0, 159, 160);
    }*/
    .staticNav div p{
        color: #313131;
        font-size: 16px;
    }
    .activediv{
        background-color: #eaebeb;
    }
    .activespan{
        visibility: visible !important;
    }
    .activep{
        color: rgb(0, 159, 160) !important;
    }
</style>