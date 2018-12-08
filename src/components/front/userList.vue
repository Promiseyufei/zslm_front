<template>
    <div class="c-div div_v60iAm gerencaidan">
        <div id="follow" class="c-div div_jR3IYS userlist "
              @mouseleave="outHoverUserList(userlist[0],userlist_box[0],userlist_h[0])"
                @mouseenter="onHoverUserList(userlist[0],userlist_box[0],userlist_h[0])">
            <div id="follow_box"  class="c-div div_bWWE5A userlist_box ">
            </div>
            <h1 id="follow_h" class="c-heading heading_Bxhtr7 " @click="jump(0)" >我的关注</h1>
        </div>
        <div id="active" class="c-div div_jR3IYS userlist c-action-click"
             @mouseleave="outHoverUserList(userlist[1],userlist_box[1],userlist_h[1])"
                @mouseenter="onHoverUserList(userlist[1],userlist_box[1],userlist_h[1])">
            <div id="active_box" class="c-div div_bWWE5A userlist_box">

            </div>
            <h1 id="active_h" class="c-heading heading_Bxhtr7" @click="jump(1)">我的活动</h1>
        </div>
        <div id="coupon" class="c-div div_jR3IYS userlist c-action-click" @mouseleave="outHoverUserList(userlist[2],userlist_box[2],userlist_h[2])"
             @mouseenter="onHoverUserList(userlist[2],userlist_box[2],userlist_h[2])">
            <div id="coupon_box" class="c-div div_bWWE5A userlist_box " data-c_e_id="div68e8d5e1"></div>
            <h1 id="coupon_h" class="c-heading heading_Bxhtr7" @click="jump(2)">我的优惠券</h1>
        </div>
        <div id="message" class="c-div div_jR3IYS userlist c-action-click"
             @mouseleave="outHoverUserList(userlist[3],userlist_box[3],userlist_h[3])"
             @mouseenter="onHoverUserList(userlist[3],userlist_box[3],userlist_h[3])">
            <div id="message_box" class="c-div div_bWWE5A userlist_box" data-c_e_id="div93d02825"></div>
            <h1 id="message_h" class="c-heading heading_Bxhtr7" @click="jump(3)">我的消息</h1>
            <div class="c-div div_bQPBwF"></div>
        </div>
        <div id="my" class="c-div div_jR3IYS userlist c-action-click"
             @mouseleave="outHoverUserList(userlist[4],userlist_box[4],userlist_h[4])"
             @mouseenter="onHoverUserList(userlist[4],userlist_box[4],userlist_h[4])">
            <div id="my_box" class="c-div div_bWWE5A userlist_box" data-c_e_id="div8629c0b6"></div>
            <h1 id="my_h" class="c-heading heading_Bxhtr7" @click="jump(4)">我的帐户</h1>
        </div>
    </div>
</template>
<style scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    h1 {
        display: block;
        font-size: 2em;
        margin-block-start: 0.67em;
        margin-block-end: 0.67em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
    }

    h1 {
        font-size: 36px;
    }

    p, h1, h2, h3, h4 {
        min-width: 10px;
        min-height: 10px;
    }

    p, h1, h2, h3, h4, h5, h6, a {
        font-family: "Microsoft YaHei", "Hiragino Sans GB", SimHei, STHeiti;
    }

    img, p, h1, h2, h3, h4, h5, h6 {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }

    h1, .h1 {
        font-size: 36px;
    }

    h1, .h1, h2, .h2, h3, .h3 {
        margin-top: 20px;
        margin-bottom: 10px;
    }

    h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
        font-family: inherit;
        font-weight: 500;
        line-height: 1.1;
        color: inherit;
    }

    h1 {
        margin: .67em 0;
        font-size: 2em;
    }

    :before, :after {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    :before, :after {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .c-section, .c-container, .c-container-1, .c-container-2, .c-row, .c-column, .c-div, .c-list, .c-listitem, .c-tabpane {
        min-height: 80px;
    }

    .div_v60iAm:hover {
        box-shadow: rgba(0, 0, 0, 0.18) 0px 0px 15px 0px;
        transform: rotate(0deg) scale(1) translate(0%, 0%);
        transition: All 0.3s ease;
        -ms-transform: rotate(0deg) scale(1) translate(0%, 0%);
        -o-transform: rotate(0deg) scale(1) translate(0%, 0%);
        -moz-transform: rotate(0deg) scale(1) translate(0%, 0%);
        -webkit-transform: rotate(0deg) scale(1) translate(0%, 0%);
        -ms-transition: All 0.3s ease;
        -o-transition: All 0.3s ease;
        -moz-transition: All 0.3s ease;
        -webkit-transition: All 0.3s ease;
    }

    .div_v60iAm.gerencaidan {
        padding-left: 0px;
        padding-right: 0px;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .div_v60iAm {
        background-color: rgb(255, 255, 255);
        border-radius: 5px;
        border-style: none;
        padding-left: 30px;
        padding-right: 30px;
        transform: rotate(0deg) scale(1) translate(0%, 0%);
        transition: All 0.3s ease;
        -ms-transform: rotate(0deg) scale(1) translate(0%, 0%);
        -o-transform: rotate(0deg) scale(1) translate(0%, 0%);
        -moz-transform: rotate(0deg) scale(1) translate(0%, 0%);
        -webkit-transform: rotate(0deg) scale(1) translate(0%, 0%);
        -ms-transition: All 0.3s ease;
        -o-transition: All 0.3s ease;
        -moz-transition: All 0.3s ease;
        -webkit-transition: All 0.3s ease;
    }

    .div_jR3IYS.xuanzhong {
        background-color: rgba(52, 56, 58, 0.1);
    }

    .div_jR3IYS {
        min-height: auto;
        height: 55px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding-left: 20px;
        padding-right: 20px;
    }

    .div_bWWE5A.xuanzhong {
        background-color: rgba(0, 159, 160, 1);
    }

    .div_bWWE5A {
        height: 4px;
        width: 17px;
        min-height: auto;
        margin-right: 12px;
        background-color: transparent;
    }

    .div_bWWE5A.xuanzhong {
        background-color: rgba(0, 159, 160, 1);
    }

    .div_bWWE5A {
        height: 4px;
        width: 17px;
        min-height: auto;
        margin-right: 12px;
        background-color: transparent;
    }

    .heading_Bxhtr7.xuanzhong {
        color: rgb(0, 159, 160);
        font-weight: bold;
    }

    .heading_Bxhtr7 {
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: rgb(49, 49, 49);
        margin-top: 0px;
        margin-bottom: 0px;
        cursor: pointer;
    }

    .clearfix:before, .clearfix:after, .dl-horizontal dd:before, .dl-horizontal dd:after, .container:before, .container:after, .container-fluid:before, .container-fluid:after, .row:before, .row:after, .form-horizontal .form-group:before, .form-horizontal .form-group:after, .btn-toolbar:before, .btn-toolbar:after, .btn-group-vertical > .btn-group:before, .btn-group-vertical > .btn-group:after, .nav:before, .nav:after, .navbar:before, .navbar:after, .navbar-header:before, .navbar-header:after, .navbar-collapse:before, .navbar-collapse:after, .pager:before, .pager:after, .panel-body:before, .panel-body:after, .modal-footer:before, .modal-footer:after {
        display: table;
        content: " ";
    }

    .clearfix:after, .dl-horizontal dd:after, .container:after, .container-fluid:after, .row:after, .form-horizontal .form-group:after, .btn-toolbar:after, .btn-group-vertical > .btn-group:after, .nav:after, .navbar:after, .navbar-header:after, .navbar-collapse:after, .pager:after, .panel-body:after, .modal-footer:after {
        clear: both;
    }

    :before, :after {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    @media (max-width: 768px) {
        .div_v60iAm.gerencaidan {
            margin-bottom: 20px;
        }
    }
</style>
<script>


    export default {
        data() {
            return {
                // isCollapse: true,
                userlist:["follow","active","coupon","message","my"],
                userlist_box:["follow_box","active_box","coupon_box","message_box","my_box"],
                userlist_h:["follow_h","active_h","coupon_h","message_h","my_h"],
                url:['/front/firstMenuRouter/usercore/myFollow',
                        '/front/firstMenuRouter/usercore/myactive',
                        '/front/firstMenuRouter/usercore/mycoupon',
                        '/front/firstMenuRouter/usercore/myNews/dynamic',
                        '/front/firstMenuRouter/usercore/myAccount'],
                path_judge:''

            };
        },
        methods: {
            onHoverUserList(id, boxId,hId) {
                var dom = document.getElementById(id);
                dom.setAttribute('class', 'c-div div_jR3IYS userlist xuanzhong')
                var boxDom = document.getElementById(boxId);
                boxDom.setAttribute('class', 'c-div div_bWWE5A userlist_box xuanzhong')
                var boxH = document.getElementById(hId);
                boxH.setAttribute('class', 'c-heading heading_Bxhtr7 xuanzhong')
            },

            outHoverUserList(id, boxId,hId) {
                if(id == this.path_judge){
                    return
                }
                var dom = document.getElementById(id);
                dom.setAttribute('class', 'c-div div_jR3IYS userlist c-action-click')
                var boxDom = document.getElementById(boxId);
                boxDom.setAttribute('class', 'c-div userlist_box div_bWWE5A')
                var boxH = document.getElementById(hId);
                boxH.setAttribute('class', 'c-heading heading_Bxhtr7')

            },
            jump(index){
                this.$router.push(this.url[index])
            }

        },
        mounted(){
            let name = this.$route.name
            if(name == 'myfollow'){
                this.path_judge = this.userlist[0]
                this.onHoverUserList(this.userlist[0],this.userlist_box[0],this.userlist_h[0])
            }
            else if(name == 'myactive'){
                this.path_judge = this.userlist[1]
                this.onHoverUserList(this.userlist[1],this.userlist_box[1],this.userlist_h[1])
            }
            else if(name == 'usercore_coupon'){
                this.path_judge = this.userlist[2]
                this.onHoverUserList(this.userlist[2],this.userlist_box[2],this.userlist_h[2])
            }else if(name == 'myAccount'){
                this.path_judge = this.userlist[4]
                this.onHoverUserList(this.userlist[4],this.userlist_box[4],this.userlist_h[4])
            }else{
                this.path_judge = this.userlist[3]
                this.onHoverUserList(this.userlist[3],this.userlist_box[3],this.userlist_h[3])
            }
        }
    }
</script>