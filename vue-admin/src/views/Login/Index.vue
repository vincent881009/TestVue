<template>
  <div class="login">
    <!-- 内容区开始 -->
    <div class="login-wrap">
      <el-row>
        <H1 class="title">用户登陆</H1>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
          <el-form-item prop="name">
            <el-input v-model="ruleForm.name" placeholder="请输入用户名" prefix-icon="el-icon-user"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="ruleForm.password"
              placeholder="请输入密码"
              prefix-icon="el-icon-unlock"
              show-password
            ></el-input>
          </el-form-item>

          <el-form-item prop="code">
            <el-row :gutter="20">
              <el-col :span="14">
                <el-input v-model="ruleForm.code" placeholder="请输入验证码" prefix-icon="el-icon-key"></el-input>
              </el-col>
              <el-col :span="10">
                <el-button class="btn-block" type="success">获取验证码</el-button>
              </el-col>
            </el-row>
          </el-form-item>

          <el-form-item>
            <el-button class="btn-block" type="primary" @click="submitForm('ruleForm')">登陆</el-button>
            <!-- <el-button class="btn-block"  @click="resetForm('ruleForm')">重置</el-button> -->
          </el-form-item>

          <!-- <div class="login-btnArea">

          </div>-->
        </el-form>
      </el-row>
    </div>
    <!-- 内容区结束 -->
    <div class="login-footer">
      <h6>Copyright© {{getYear()}} {{myName}} 版权所有</h6>
    </div>
  </div>
</template>

<script>


import { Dologin } from "@/api/login.js"
// import $ from 'jquery'

export default {
  data() {
    return {
      myName: "yyu",
      ruleForm: {
        name: "",
        password: "",
        code: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "change" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(process.env.VUE_APP_TITLE)
          Dologin("yyu","123");
          
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getYear() {
      var myDate = new Date();
      var tYear = myDate.getFullYear();
      return tYear;
    },
    getData: function() {
      //诉求摘要展示
      //发送get请求
      this.$http.get("/front/sqzy").then(
        function(res) {
          this.content = res.body;
        },
        function() {
          console.log("请求失败处理");
        }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  color: white;
}
.login {
  background: url(~@/assets/images/bg.png) no-repeat center;
  background-size: 100% 100%; /*按比例缩放*/
  height: 100vh;
}
.login-wrap {
  width: 300px;
  height: 300px;
  margin: 0 auto; /*水平居中*/
  position: relative;
  top: 50%; /*偏移*/
  transform: translateY(-50%);
  line-height: 50px;
  padding: 15px 15px 15px 15px;
  background-color: rgba($color: #000000, $alpha: 0.1);
}
.login-btnArea {
  text-align: center;
}
.el-input__inner {
  background: #333333 !important;
  border: none;
  margin-bottom: 20px;
  text-indent: 20px;
  color: #fff;
}
.login-footer {
  position: absolute;
  left: 0;
  bottom: 5px;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  color: white;
  opacity: 0.8;
}
.btn-block {
  width: 100%;
  display: block;
}
</style>
