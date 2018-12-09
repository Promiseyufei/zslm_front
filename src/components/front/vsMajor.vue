<template>
    <div class="body">
        <el-popover
                placement="left"
                width="160"
                v-model="visible2">

            <div style="text-align: right; margin: 0">
                <div style="text-align: center;font-size: 18px;padding-bottom:10px;border-bottom: solid 2px #ccc;color: rgb(42, 173, 115)" >
                    院校对比
                    <i @click="removeAll()" style="cursor: pointer;float: right;font-size: 13px;line-height: 27.4px;color: #c6c5c5">清空</i>
                </div>
                <div v-for="(item,index) in colleges" style="text-align: left;padding: 10px;border-bottom: solid 1px #c6c5c5">
                    {{item.college}}
                    <i  class="el-icon-close" @click="remove(index)" style="cursor: pointer;float: right"></i>
                </div>
                <el-button slot="reference"
                           style="padding: 12px;width: 100%;margin: 10px auto;background-color:rgb(42, 173, 115) !important;
                           color: white !important;"
                @click="vs">
                    院校对比
                </el-button>
            </div>
            <el-button slot="reference" class="el-icon-back" style="padding: 12px"></el-button>
        </el-popover>
    </div>
</template>
<style scoped>
    .body{
        display: inline-block;
        position: fixed;
        z-index: 1000;
        top: 50%;
        right: 0;
    }

</style>
<script>
    export default {
        data() {
            return {
                visible2: false,
                colleges:[

                ],
                cookieName:'vsMajor'
            };
        },
        methods:{
            info(){
                this.colleges =   JSON.parse(this.getMajors())
            },
            addMajor(name,id){
               var obj = {college:name,id:id}
               var obj_arr =  JSON.parse(this.getMajors())


                if(obj_arr != null && obj_arr.lenght == 4){
                    this.message(true,"对比列表已满", 'info');
                }else{
                    if(obj_arr == null)
                        obj_arr = []
                    obj_arr.push(obj)
                    this.setCookie(obj_arr)
                }
            },
            setCookie(obj_arr){
                var obj_json = JSON.stringify(obj_arr)
                document.cookie = this.cookieName + "="+ escape (obj_json)+ ";"
            },
            getMajors(){
                var arr,reg=new RegExp("(^| )"+this.cookieNamee+"=([^;]*)(;|$)");
                let cookie = document.cookie.split(";")
                let index = 0;
                let i = 0
                for( i in cookie){
                    if(cookie[i].indexOf(this.cookieName) != -1)
                        index = i;
                }
                if(index == 0)
                    return null
                let obj = cookie[i]
                obj = obj.split('=')
                let obj_arr = unescape(obj[1]);
                return obj_arr
            },
            remove(index){
                this.colleges.splice(index,1)
                this.setCookie(this.colleges)
            },
            removeAll(){
                this.colleges = [];
                this.setCookie(this.colleges)
            },
            vs(){
                let id = '';
                for(let i in this.colleges){
                    id+=this.colleges[i].id+','
                }

                id = id.substr(0,id.length-1)
                console.log(id)
            }
        },
        mounted(){
            this.info()
        }
    }
</script>