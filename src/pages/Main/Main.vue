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
                <svg t="1621477167011" class="icon" viewBox="0 0 1261 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1084" height="20">
                    <path d="M1181.538462 1024H78.769231a78.769231 78.769231 0 0 1-78.769231-78.769231V78.769231a78.769231 78.769231 0 0 1 78.769231-78.769231h1102.769231a78.769231 78.769231 0 0 1 78.76923 78.769231v866.461538a78.769231 78.769231 0 0 1-78.76923 78.769231zM95.310769 929.476923h1071.261539V94.523077H95.310769z" fill="rgb(64, 158, 255)" p-id="1085"></path>
                    <path d="M512.787692 918.449231l-207.950769-283.569231-253.636923 214.252308-51.2-60.652308L318.227692 519.876923l200.073846 273.329231 391.483077-439.532308 344.221539 498.609231-64.590769 44.110769-287.507693-415.113846-389.12 437.169231z" fill="rgb(64, 158, 255)" p-id="1086"></path>
                    <path d="M355.249231 393.846154A118.153846 118.153846 0 1 1 472.615385 275.692308 118.153846 118.153846 0 0 1 355.249231 393.846154z m0-173.292308a55.138462 55.138462 0 1 0 55.138461 55.138462 55.138462 55.138462 0 0 0-55.138461-55.138462z" fill="rgb(64, 158, 255)" p-id="1087"></path></svg>
                海报
            </b-list-group-item>
            <b-list-group-item id="course" ref="course" @click="clickHref('course')" class="navItem" type="button">
                <svg t="1621479310671" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1918" height="24"><path d="M907.1 959.6H119c-14.1 0-25.5-11.4-25.5-25.5s11.4-25.5 25.5-25.5h788.1c14.1 0 25.5 11.4 25.5 25.5s-11.4 25.5-25.5 25.5zM899.8 850.4H427.1c-14.1 0-25.5-11.4-25.5-25.5s11.4-25.5 25.5-25.5h472.7c14.1 0 25.5 11.4 25.5 25.5s-11.4 25.5-25.5 25.5zM659.9 229.3l-111-77.2c-7.9-5.5-9.9-16.4-4.4-24.3L583.3 72c5.5-7.9 16.4-9.9 24.3-4.4l111 77.2c7.9 5.5 9.9 16.4 4.4 24.3L684.1 225c-5.5 7.9-16.3 9.8-24.2 4.3zM626.3 277.1l-113-78.5c-7.4-5.1-17.5-3.3-22.6 4.1L198.1 623.5c-7.4 10.6-12.2 22.7-14.2 35.5l-22.4 145.2c-1.9 12.2 11.3 21.1 21.9 14.8l127.8-75.4c10.5-6.2 19.5-14.5 26.5-24.5l292.7-419.4c5.1-7.4 3.3-17.5-4.1-22.6z" fill="rgb(191, 203, 217)" p-id="1919"></path></svg>
                微课录入
            </b-list-group-item>
            <b-list-group-item id="arrangeEdit" ref="arrangeEdit" @click="clickHref('arrangeEdit')" class="navItem" type="button">
                <svg t="1621479444906" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3894" height="26">
                    <path d="M694 112c17.673 0 32 14.327 32 32v31h122c35.346 0 64 28.654 64 64v219c0 17.673-14.327 32-32 32-17.496 0-31.713-14.042-31.996-31.47L848 458v-36H186c-3.492 0-6.854-0.56-10-1.593V848h251v0.015c0.333-0.01 0.666-0.015 1-0.015 17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32-0.334 0-0.667 0-1-0.015V912H176c-35.346 0-64-28.654-64-64V239c0-35.346 28.654-64 64-64h128v-31c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32v31h294v-31c0-17.673 14.327-32 32-32zM428 676c17.673 0 32 14.327 32 32 0 17.496-14.042 31.713-31.47 31.996L428 740H312c-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32h116z m-116-86c-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32h150c17.673 0 32 14.327 32 32 0 17.496-14.042 31.713-31.47 31.996L462 590H312z m-8-351H176v120.593A31.973 31.973 0 0 1 186 358h662V239H726v31c0 17.673-14.327 32-32 32-17.673 0-32-14.327-32-32v-31H368v31c0 17.673-14.327 32-32 32-17.673 0-32-14.327-32-32v-31z" fill="rgb(191, 203, 217)" p-id="3895"></path>
                    <path d="M742 520c122.607 0 222 99.393 222 222s-99.393 222-222 222-222-99.393-222-222 99.393-222 222-222z m0 60c-89.47 0-162 72.53-162 162s72.53 162 162 162 162-72.53 162-162-72.53-162-162-162z m-3.289 37.156c16.403 0 29.731 13.164 29.996 29.503l0.004 0.497v74.132h29.133c16.24 0 29.465 12.903 29.985 29.016l0.011 0.489 0.004 0.496c0 16.403-13.164 29.73-29.503 29.996l-0.497 0.004h-59a29.9 29.9 0 0 1-21.303-8.877 29.902 29.902 0 0 1-8.826-20.752l-0.004-0.504v-104c0-16.569 13.432-30 30-30z" p-id="3896" fill="rgb(191, 203, 217)"></path></svg>
                值班表
            </b-list-group-item>
            <b-list-group-item id="teacherEdit" ref="teacherEdit" @click="clickHref('teacherEdit')" class="navItem" type="button">
                <svg t="1621479632049" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5574"height="24">
                    <path d="M899 747.4c-9.8-24.9-21.5-48.7-35-71.3l-47.1 47c32.9 60 51.8 130.1 51.8 204.8 0 17.7 14.3 32 32 32s32-14.3 32-32c0.2-62.6-11.2-123.3-33.7-180.5zM726.7 291.5c0-125.7-102-227.5-227.8-227.5S271 165.8 271 291.5c0 79.4 40.8 149.4 102.6 190.1-15.3 4.9-30.3 10.7-45.1 17.5-51.8 23.6-98.3 57.4-138.1 100.3-39.7 42.8-70.8 92.6-92.6 148C75.4 804.6 64 865.3 64 927.9c0 17.7 14.3 32 32 32s32-14.3 32-32c0-221.6 166.1-401.8 370.3-401.8 49.5 0 96.7 10.6 139.9 29.8l48.1-48c-5.9-3.1-11.9-6-18-8.8-14.6-6.7-29.5-12.4-44.6-17.3 62.1-40.7 103-110.7 103-190.3zM614.6 407.1c-30.9 30.9-72 47.9-115.8 47.9-43.7 0-84.9-17-115.8-47.9-30.9-30.9-47.9-71.9-47.9-115.6 0-43.7 17-84.8 47.9-115.6C414 145 455.1 128 498.9 128s84.9 17 115.8 47.9c30.9 30.9 47.9 71.9 47.9 115.6 0 43.7-17 84.7-48 115.6z" fill="rgb(191, 203, 217)" p-id="5575"></path>
                    <path d="M777.9 506.9L530.5 754l82.5 82.4 247.4-247.2zM406.8 960l165-82.4-82.5-82.4zM942.9 424.4c-22.8-22.8-59.7-22.8-82.5 0l-41.2 41.2 40.7 40.7c0.2 0.2 0.4 0.4 0.5 0.6l0.6 0.6 40.7 40.6 41.2-41.2c22.8-22.8 22.8-59.7 0-82.5z" fill="rgb(191, 203, 217)" p-id="5576"></path></svg>
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
                        document.getElementById(i).style.color='rgb(191, 203, 217)';  //改变字体颜色
                        let tags = document.getElementById(i).getElementsByTagName("path");  //改变图标颜色

                        for (let i=0;i<tags.length;i++){
                            tags.item(i).setAttribute('fill','rgb(191, 203, 217)');
                        }

                            //tags.item(0).setAttribute('fill','rgb(191, 203, 217)');

                    }
                    else {
                        document.getElementById(itemId).style.color='rgb(64, 158, 255)';
                        let tags = document.getElementById(i).getElementsByTagName("path");  //改变图标颜色
                        //tags.item(0).setAttribute('fill','rgb(64, 158, 255)');
                        console.log(itemId+tags.length)
                        for (let i=0;i<tags.length;i++){
                            tags.item(i).setAttribute('fill','rgb(64, 158, 255)');
                        }
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
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
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
        margin-left: 210px;
    }
</style>