webpackJsonp([2],{129:function(e,t,r){r(540);var a=r(10)(r(146),r(527),"data-v-aa37bef6",null);e.exports=a.exports},146:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{username:"",password:"",re_password:""}},methods:{register:function(){var e=this;""!=e.username&&""!=e.password&&""!=e.re_password?e.password!=e.re_password?e.$message.error("密码校验不正确！"):this.$ajax.post("http://127.0.0.1:3000/register",this.$qs.stringify({username:e.username,password:e.password})).then(function(t){1==t.data.code?(e.$message.success("注册成功"),setTimeout(function(){e.$router.push("/login")},500)):e.$message.error(t.data.ms)}):e.$message.error("请输入完整信息！")},login:function(){this.$router.push("/login")}}}},242:function(e,t,r){t=e.exports=r(0)(),t.push([e.i,"#register[data-v-aa37bef6]{width:100%;height:100%;background:#2f4d69}.register-box[data-v-aa37bef6]{width:300px;margin:auto;text-align:center;position:absolute;top:25%;bottom:0;left:0;right:0}.register-box .title[data-v-aa37bef6]{font-size:28px;color:#fff;margin-bottom:25px}.register-box .el-input[data-v-aa37bef6]{height:40px;width:300px;margin-bottom:10px}.register-box .el-input input[data-v-aa37bef6]{height:40px}.register-box .el-button--default[data-v-aa37bef6]{width:300px;height:40px;margin-top:10px;background-color:#619ac5;border:0;color:#fff;box-shadow:0 0 3px #333;font-size:16px;letter-spacing:8px}.register-box .el-button--text[data-v-aa37bef6]{margin-top:10px;margin-left:0;color:#fff}",""])},527:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"register"},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.register(t):null}}},[r("div",{staticClass:"register-box"},[r("div",{staticClass:"title"},[e._v("注册博客管理账号")]),e._v(" "),r("el-input",{attrs:{placeholder:"请输入账号",name:"username"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),e._v(" "),r("el-input",{attrs:{type:"password",placeholder:"请输入密码",name:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),r("el-input",{attrs:{type:"password",placeholder:"请确认密码",name:"re_password"},model:{value:e.re_password,callback:function(t){e.re_password=t},expression:"re_password"}}),e._v(" "),r("el-button",{on:{click:e.register}},[e._v("注册")]),e._v(" "),r("el-button",{attrs:{type:"text"},on:{click:e.login}},[e._v("已有账号，立即登陆")])],1)])},staticRenderFns:[]}},540:function(e,t,r){var a=r(242);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r(57)("1d279ebb",a,!0)}});
//# sourceMappingURL=2.build.js.map