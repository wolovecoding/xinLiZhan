<template>
    <div id="main container">
        <header class="header row">
            <div class="col-sm-1"/>
            <div class="col-sm-4"><span style="font-family: 华文行楷;float: left" class="bg-gradient-primary text-info">心理站管理平台</span></div>
            <div class="col-sm-4"/>
            <div class="col-sm-3" style="float: right"> ***</div>
        </header>
        <body class="row">
            <b-list-group class="col-sm-2 nav">
                <b-list-group-item id="poster" ref="poster" @click="clickHref('poster')" class="navItem" type="button" style="color: rgb(64, 158, 255)">
                    <svg t="1619715033287" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1559"  height="24"><path d="M714.666667 117.333333v64h170.666666v704h-746.666666v-704h170.666666v-64h405.333334z m-405.333334 128h-106.666666v576h618.666666v-576h-106.666666v64h-405.333334v-64zM704 618.666667v64H320v-64h384z m0-192v64H320v-64h384zM650.666667 181.333333h-277.333334v64h277.333334v-64z" fill="rgb(64, 158, 255)" p-id="1560"></path></svg>
                    海报
                </b-list-group-item>
                <b-list-group-item id="course" ref="course" @click="clickHref('course')" class="navItem" type="button">
                    <svg t="1619715033287" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1559"  height="24"><path d="M714.666667 117.333333v64h170.666666v704h-746.666666v-704h170.666666v-64h405.333334z m-405.333334 128h-106.666666v576h618.666666v-576h-106.666666v64h-405.333334v-64zM704 618.666667v64H320v-64h384z m0-192v64H320v-64h384zM650.666667 181.333333h-277.333334v64h277.333334v-64z" fill="rgb(191, 203, 217)" p-id="1560"></path></svg>
                    微课录入
                </b-list-group-item>
                <b-list-group-item id="arrangeEdit" ref="arrangeEdit" @click="clickHref('arrangeEdit')" class="navItem" type="button">
                    <svg t="1619715033287" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1559"  height="24"><path d="M714.666667 117.333333v64h170.666666v704h-746.666666v-704h170.666666v-64h405.333334z m-405.333334 128h-106.666666v576h618.666666v-576h-106.666666v64h-405.333334v-64zM704 618.666667v64H320v-64h384z m0-192v64H320v-64h384zM650.666667 181.333333h-277.333334v64h277.333334v-64z" fill="rgb(191, 203, 217)" p-id="1560"></path></svg>
                    值班表
                </b-list-group-item>
                <b-list-group-item id="teacherEdit" ref="teacherEdit" @click="clickHref('teacherEdit')" class="navItem" type="button">
                    <svg t="1619715033287" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1559"  height="24"><path d="M714.666667 117.333333v64h170.666666v704h-746.666666v-704h170.666666v-64h405.333334z m-405.333334 128h-106.666666v576h618.666666v-576h-106.666666v64h-405.333334v-64zM704 618.666667v64H320v-64h384z m0-192v64H320v-64h384zM650.666667 181.333333h-277.333334v64h277.333334v-64z" fill="rgb(191, 203, 217)" p-id="1560"></path></svg>
                    老师信息录入
                </b-list-group-item>
            </b-list-group>
            <router-view class="col-sm-10 right-body"></router-view>
        </body>
    </div>
</template>

<script>

    export default {
        name: "Main",
        methods:{
            clickHref(itemId){
                for (const i in this.$refs){
                    if (i!=itemId){
                        document.getElementById(i).style.color='rgb(191, 203, 217)';
                        document.getElementById(i).getElementsByTagName("path").item(0).setAttribute('fill','rgb(191, 203, 217)');
                    }
                    else {
                        document.getElementById(itemId).style.color='rgb(64, 158, 255)';
                        document.getElementById(itemId).getElementsByTagName("path").item(0).setAttribute('fill','rgb(64, 158, 255)');
                    }
                }
                this.$router.push({name:itemId})

            }

        },
        data(){
            return {
                navStyle:{
                    color:'rgb(64, 158, 255)'
                }
            }
        }
    }
</script>

<style scoped>
    .header{
        background-color: #f7cdbc;
        height: 8%;
        width: 100%;
    }
    .header div{
        position: relative;
        height: 100%;
        padding:19px 0;
        font-size: 35px;
    }
    body{
        position: relative;
        z-index: -1;
    }
    .nav{
        z-index: 100;
        position: fixed;
        left: 0;
        buttom:0;
        width: 210px;
        border: 1px solid red;
        /*margin-top: 90px;*/
        padding-right: 0;
        height: 100%;
        background-color: rgb(48, 65, 86);
    }
    .navItem{

        /*height: 30px;*/
        text-align: left;
        padding: 15px 0px 15px 40px;
        width: 100%;
        background-color: rgb(48, 65, 86);
       /* color: rgb(64, 158, 255);*/
        color: rgb(191, 203, 217)
    }
    .navItem:hover{
        background-color: rgb(38,52,69);
    }

    .right-body{
        display: block;
        position: absolute;
        border: 1px solid greenyellow;
        margin-left: 210px;
    }

</style>