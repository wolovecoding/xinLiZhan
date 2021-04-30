<template>
    <div style="background-color: #e2ff6f;width: 100%;height: 100%;position: absolute">
        <div style="padding-top: 15%">
            <b-container>
                <b-row>
                    <b-col md="3"/>
                    <b-col md="6">
                        <b-form  id="login" style="text-align: left">
                            <div style="text-align: center;font-size: xx-large">欢迎</div>
                            <u/>
                            <b-form-group
                                    id="account"
                                    label="账号"
                                    label-align="left"
                                    label-for="account-in"
                                    :invalid-feedback="checkAct"
                                    :state="actState"
                            >

                                <b-form-input
                                        id="account-in"
                                        v-model="log.account"
                                        :state="actState"
                                        required
                                        placeholder="请输入账号"
                                        trim
                                >
                                </b-form-input>
                            </b-form-group>
                            <!--                        密码-->
                            <b-form-group
                                    id="password"
                                    label="密码"
                                    label-align="left"
                                    label-for="password-in"
                            >
                                <b-form-input :state="checkPsw"
                                              id="password-in"
                                              v-model="log.password"
                                              type="password"
                                              required
                                              placeholder="请输入密码"
                                >
                                </b-form-input>
                                <b-form-invalid-feedback :state="checkPsw" style="text-align: left">
                                    密码不能为空
                                </b-form-invalid-feedback>
                                <br/>
                                <b-button @click="submitlog" variant="success" class="subReg" style="">登录</b-button>
                                <b-button class="subReg" id="regMes" variant="success" style="float: right">注册</b-button>
                                <b-tooltip target="regMes" triggers="hover">
                                    请向数据库管理人员<b style="color: #e2ff6f">申请</b>
                                </b-tooltip>
                            </b-form-group>
                        </b-form>
                    </b-col>
                    <b-col md="3"/>
                </b-row>

            </b-container>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Login",
        created() {

        },
        data(){
            return{
                log:{
                    account:'',
                    password:''
                }
            }
        },
        computed:{
            //验证account
            actState(){
                return this.log.account.length>0 && this.isInt(this.log.account)
            },
            checkAct(){
                if (this.log.account.length<=0){
                    return "长度不能为空"
                }else if(!this.isInt(this.log.account)){
                    return "没有非数字的id"
                }
            },
            //验证密码
            checkPsw(){
                return this.log.password.length>0
            }
        },
        methods:{
            //判断是否是整数
            isInt(i){
                let re = /[1-9]+[0-9]*]*/
                if (!re.test(i)){
                    return false
                }else return true
            },
            submitlog(){
                if (this.actState&&this.checkPsw){
                    //请求
                    console.log("登录成功")
                }

            }
        }
    }
</script>

<style scoped>

#login{
    border: 1px solid brown;
    padding: 20px 50px 20px 50px;
}
.subReg{
    width: 30%;
    color: #e2ff6f;
    font-family: 幼圆;
    font-size: large;
    padding: 10px 10px;

}
</style>