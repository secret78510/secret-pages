(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30154852"],{"1a67":function(e,s,t){"use strict";t("2570")},2570:function(e,s,t){},"7a76":function(e,s,t){"use strict";var a=function(){var e=this,s=e._self._c;return s("div",{staticClass:"message-alert"},e._l(e.messages,(function(t,a){return s("div",{key:a,staticClass:"alert alert-dismissible",class:"alert-"+t.status},[e._v(" "+e._s(t.message)+" "),s("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(s){return e.removeMessage(a)}}},[s("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])])})),0)},i=[],n=(t("14d9"),{data(){return{messages:[]}},methods:{updateMessage(e,s){const t=new Date;this.messages.push({message:e,status:s,timestamp:t}),this.removeMessageWithTiming(t)},removeMessage(e){this.messages.splice(e,1)},removeMessageWithTiming(e){setTimeout(()=>{this.messages.forEach((s,t)=>{s.timestamp===e&&this.messages.splice(t,1)})},2e3)}},created(){this.$bus.$on("message:push",(e,s="warning")=>{this.updateMessage(e,s)})}}),o=n,r=(t("c030"),t("2877")),u=Object(r["a"])(o,a,i,!1,null,null,null);s["a"]=u.exports},aa92:function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e._self._c;return e.isLogined?e._e():s("div",[s("AlertMessage"),s("form",{staticClass:"form",on:{submit:function(s){return s.preventDefault(),e.signin.apply(null,arguments)}}},[s("h1",[e._v("登入")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"input",attrs:{type:"email",autocomplete:"off",name:"email",placeholder:"信箱",required:""},domProps:{value:e.user.username},on:{input:function(s){s.target.composing||e.$set(e.user,"username",s.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"input",attrs:{type:"password",autocomplete:"off",placeholder:"密碼",name:"password",required:""},domProps:{value:e.user.password},on:{input:function(s){s.target.composing||e.$set(e.user,"password",s.target.value)}}}),s("input",{staticClass:"submit",attrs:{type:"submit",value:"登入"}})]),s("i",{staticClass:"fas fa-times icon",attrs:{title:"回到上一頁"},on:{click:function(s){return e.previous()}}})],1)},i=[],n=(t("14d9"),t("7a76")),o={data(){return{user:{username:"",password:""},isLogined:!0}},components:{AlertMessage:n["a"]},methods:{signin(){const e="https://vue-course-api.hexschool.io/admin/signin";this.$http.post(e,this.user).then(e=>{if(e.data.success){const{token:s}=e.data,{expired:t}=e.data;document.cookie=`hexToken=${s}; expires=${new Date(t)}`,document.cookie=`hexTokenExpired=${t}; expires=${new Date(t)}`,this.$router.push("/manage/product")}else this.$bus.$emit("message:push","密碼錯誤")})},previous(){window.history.back()}},mounted(){const e=document.cookie.replace(/(?:(?:^|.*;\s*)hexTokenExpired\s*=\s*([^;]*).*$)|^.*$/,"$1"),s=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");s&&Number(e)>Date.now()?this.$router.push("/manage/product"):this.isLogined=!1}},r=o,u=(t("1a67"),t("2877")),c=Object(u["a"])(r,a,i,!1,null,"57f3b44c",null);s["default"]=c.exports},c030:function(e,s,t){"use strict";t("edec")},edec:function(e,s,t){}}]);
//# sourceMappingURL=chunk-30154852.8e085206.js.map