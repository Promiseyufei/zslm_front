<template>

    <div class="c-div div_v60iAm guanzhu huodong" @click="updateStatus">
        <div class="row c-row row_E5qvBw">
            <span v-if="news.status == 0" style="width:5px;height:5px;background-color:#FF9900;border-radius:5px;margin-top:15px;margin-right:5px;"></span>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 c-column column_KR9WLK">
                <img class="c-image image_NXxCPj" src="http://qty83k.creatby.com/materials/2771/origin/1f7fb8acff94af6f93a34de300842574_origin.png">
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 c-column column_S6tf0c">
                <h1 class="c-heading textlink_e6pE3X daliebiao xiaoxi" style="color:#808080;">事项通知 &emsp;<span style="font-size:14px;color:#909090;">{{ news.create_time }}</span></h1>
            </div>
        </div>
        <div class="row c-row row_F2BBBz">
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 c-column column_AfewZV" style="margin-left:15px;">
                <a class="c-ellipse c-textlink textlink_e6pE3X daliebiao xiaoxi111" href="#" style="color:#686868;">{{ news.news_title }}</a>
                <p class="c-ellipse c-paragraph paragraph_XjkcYS">
                    {{ news.context }}
                </p>
                <div class="c-div div_QcKVUN kanzixun">
                    <div class="c-div div_IIlwIU kanzixun">
                        <h1 class="c-heading heading_3hU4sb grey">链接：<a :href="news.url">{{ news.url }}</a></h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['news'],
    data() {
        return {

        }
    },
    methods: {
        test() {

        },
        updateStatus() {
            let phone = this.getUserState('user');
            let newsId = this.news.news_id;
            if((typeof phone != 'undefined' || phone != '') && newsId != '') {
                this.post('/front/usercore/changeNewsStatus', {
                    newsId: newsId,
                    userPhone: phone
                }).then((response) => {
                    if(response.code == 0) {
                        this.news.status = 1;
                        this.message(true, '标记已读', 'info');
                    }
                })
            }

        }
    },
    mounted() {
        console.log(this.news)
    }
}
</script>
<style>
  .huodong{
    border-bottom:1px dashed #C0C0C0;
  }
</style>
<style scoped>
a {
 font-family: "Microsoft YaHei","Hiragino Sans GB",SimHei,STHeiti;
    text-decoration: none;
}
p {
    min-width: 10px;
    min-height: 10px;
}
p {
    font-family: "Microsoft YaHei","Hiragino Sans GB",SimHei,STHeiti;
}

.div_v60iAm.guanzhu.huodong {
    padding-top: 35px;
    padding-bottom: 35px;
    border-bottom:1px dashed #C0C0C0;
}

.div_v60iAm.guanzhu.huodong:nth-last-child(2){
  border: none;
}

@media (max-width: 767px) {
    .div_v60iAm.guanzhu.huodong {
        padding: 25px 10px 20px;
        padding-top: 20px;
    }
}

.div_v60iAm.guanzhu {
    padding-left: 25px;
    padding-right: 25px;
}
.div_v60iAm {
    background-color: rgb(255, 255, 255);
    border-style: none;
    padding-left: 30px;
    padding-right: 30px;
    transform: rotate(0deg) scale(1) translate(0%,0%);
    transition: All 0.3s ease;
    -ms-transform: rotate(0deg) scale(1) translate(0%,0%);
    -o-transform: rotate(0deg) scale(1) translate(0%,0%);
    -moz-transform: rotate(0deg) scale(1) translate(0%,0%);
    -webkit-transform: rotate(0deg) scale(1) translate(0%,0%);
    -ms-transition: All 0.3s ease;
    -o-transition: All 0.3s ease;
    -moz-transition: All 0.3s ease;
    -webkit-transition: All 0.3s ease;
}
.div_v60iAm:hover {
    box-shadow: rgba(0, 0, 0, 0.18) 0px 0px 15px 0px;
    transform: rotate(0deg) scale(1) translate(0%,0%);
    transition: All 0.3s ease;
    -ms-transform: rotate(0deg) scale(1) translate(0%,0%);
    -o-transform: rotate(0deg) scale(1) translate(0%,0%);
    -moz-transform: rotate(0deg) scale(1) translate(0%,0%);
    -webkit-transform: rotate(0deg) scale(1) translate(0%,0%);
    -ms-transition: All 0.3s ease;
    -o-transition: All 0.3s ease;
    -moz-transition: All 0.3s ease;
    -webkit-transition: All 0.3s ease;
}
.c-div {
    min-height: 80px;
}

.c-section, .c-container, .c-container-1, .c-container-2, .c-row, .c-column, .c-div, .c-list, .c-listitem, .c-tabpane {
    min-height: 80px;
}

.row {
    margin-right: -15px;
    margin-left: -15px;
}
.c-row {
    margin-left: 0;
    margin-right: 0;
    padding-right: 0;
    padding-left: 0;
}
.row_E5qvBw {
    min-height: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}



@media (min-width: 1200px) {
    .col-lg-6 {
        width: 50%;
    }
}
@media (min-width: 1200px) {
    .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {
        float: left;
    }

}
@media (min-width: 992px) {
    .col-md-6 {
        width: 50%;
    }
}

@media (min-width: 768px) {
    .col-sm-6 {
        width: 50%;
    }
}



.c-image {
    height: auto;
    width: auto;
    max-width: 100%;
    display: inline-block;
}

.row_E5qvBw .column_KR9WLK {
    width: auto;
    padding-left: 0px;
    padding-right: 0px;
    min-height: auto;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
}
.row_E5qvBw .column_KR9WLK img {
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    vertical-align: middle;
    border: 0;
}
.image_NXxCPj {
    width: 40px;
    height: 40px;
}
.column_S6tf0c {
    min-height: auto;
    width: auto;
    padding-top: 0px;
    padding-left: 20px;
}

@media (min-width: 1200px) {
    .col-lg-4 {
        width: 33.33333333%;
    }
}

@media (min-width: 1200px) {
    .col-lg-6 {
        width: 50%;
    }
}

@media (min-width: 1200px) {
    .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {
        float: left;
    }
}

@media (min-width: 992px) {
    .col-md-6 {
        width: 50%;
    }
}

@media (min-width: 992px) {
    .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {
        float: left;
    }
}

@media (min-width: 768px) {
    .col-sm-6 {
        width: 50%;
    }
}

@media (min-width: 768px) {
    .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {
        float: left;
    }
}

.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {
    float: left;
}
.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
}


.textlink_e6pE3X.daliebiao.xiaoxi {
    margin-top: 0px;
    margin-bottom: 10px;
}
.textlink_e6pE3X.daliebiao {
    width: auto;
    height: auto;
    font-size: 18px;
    font-weight: bold;
    font-stretch: normal;
    line-height: 25px;
    letter-spacing: 0px;
    color: rgb(72, 72, 72);
    display: block;
    clear: both;
    margin-bottom: 10px;
}
.textlink_e6pE3X {
    font-size: 14px;
    float: none;
    clear: both;
    display: inline-block;
    padding-left: 0px;
    color: #6e6e6e;
}
.textlink_e6pE3X h1 {
    min-width: 10px;
    min-height: 10px;
    font-family: "Microsoft YaHei","Hiragino Sans GB",SimHei,STHeiti;
}

.c-row {
    word-spacing: -4px;
}


.row_F2BBBz {
    margin-left: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
@media (max-width: 767px) {
    .row_F2BBBz {
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start;
    }

}

.column_AfewZV {
    width: auto;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 0%;
    flex: 1 1 0%;
    padding-top: 3px;
    padding-left: 30px;
}


.textlink_e6pE3X.daliebiao.xiaoxi111 {
    margin-bottom: 20px;
}
.textlink_e6pE3X.daliebiao {
    width: auto;
    height: auto;
    font-size: 18px;
    font-weight: bold;
    font-stretch: normal;
    line-height: 25px;
    letter-spacing: 0px;
    color: rgb(72, 72, 72);
    display: block;
    clear: both;
    margin-bottom: 10px;
}
.textlink_e6pE3X {
    font-size: 14px;
    float: none;
    clear: both;
    display: inline-block;
    padding-left: 0px;
    color: #6e6e6e;
}
.c-ellipse {
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
@media (max-width: 767px) {
    .column_AfewZV {
        padding-left: 0px;
        padding-right: 0px;
        width: 100%;
        padding-top: 0px;
    }
}

.div_0oZzVH.xiangqingye {
    margin-top: 0px;
    margin-bottom: 15px;
}
.div_0oZzVH {
    min-height: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    margin-top: 11px;
}
.div_eQPG16 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    min-height: auto;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    width: auto;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
}
.image_3wYLxF {
    margin-right: 12px;
}

.heading_58QPWV.bold {
    font-weight: bold;
    margin-right: 0px;
    line-height: 1.6em;
    width: auto;
}
.heading_58QPWV {
    color: rgb(110, 110, 110);
    font-size: 14px;
    margin-top: 0px;
    margin-bottom: 0px;
    line-height: 1.5em;
    font-weight: normal;
    margin-right: 0px;
    width: 70px;
    text-align: left;
}
.div_0oZzVH.xiangqingye.last {
    margin-bottom: 0px;
}
.heading_V5QM03 {
    font-size: 12px;
    color: rgb(255, 255, 255);
    background-color: rgb(0, 159, 160);
    border-radius: 60px;
    margin-top: 0px;
    text-align: left;
    padding: 3px 8px;
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    margin-bottom: 0px;
    width: auto;
    margin-left: 0;
    margin-right: auto;
}

.c-button {
    background-color: #000000;
    color: #FFFFFF;
}
.btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
}
@media (max-width: 767px) {
.textlink_e6pE3X.daliebiao.xiaoxi111 {
    margin-top: 0px;
}

}

@media (max-width: 767px) {
.textlink_e6pE3X.daliebiao {
    font-size: 16px;
    margin-top: 0px;
}
}


.paragraph_XjkcYS {
    width: auto;
    height: auto;
    font-family: MicrosoftYaHei;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 26px;
    letter-spacing: 0px;
    color: rgb(111, 111, 111);
    -webkit-line-clamp: 2;
}
.div_QcKVUN.kanzixun {
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.div_QcKVUN {
    min-height: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-top: 19px;
}
.div_IIlwIU.kanzixun {
    margin-right: 27px;
}
.div_IIlwIU {
    min-height: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-left: 0px;
}
.heading_3hU4sb.grey {
    color: #383b3d;
}
.heading_3hU4sb {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 14px;
    color: rgb(255, 255, 255);
    opacity: 0.7;
}
@media (max-width: 991px) {
    .heading_3hU4sb {
        font-size: 12px;
    }
}

</style>

