"use strict";(self["webpackChunkproject_macaron"]=self["webpackChunkproject_macaron"]||[]).push([[90],{4835:function(e,s,a){a.r(s),a.d(s,{default:function(){return F}});var o=a(3396),t=a(7139);const i={class:"d-flex flex-column",style:{"min-height":"100vh","background-image":"url(https://storage.googleapis.com/vue-course-api.appspot.com/nn_macaron/1702358732265.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=HfvexqBUIB45NzvHNtthSrfJKr2YI8wsveCN%2F2oXaew2ilPiL7a2wdZciHOlTA6D%2BLFKJumOAt%2FlGJ003ZEp%2FiRmq416egwi61ludKxcXUsYvECX5LxXJMgIS7prbpxI%2F2BEIH31DxGHifMbUAL5Ctc1MvJ7hK4NBVbo7HqdV5w%2FaVRVm5r%2FtOe2G%2FpIfzEz%2BpXHQN%2FTQwZTKzz4Ef6Ki0nEG2Wxt9PKgayXngBoTLTqWwYW518zgIjgAUm16y3qEry7kK81blGWAsSRO%2FX5KVC4KfiuxJW%2F5dOPVoTbmbUB1JawJn4tlH9%2FP9SoynjDF%2FkyQPS6rfx1CFiLaurOpw%3D%3D)","background-size":"cover","background-position":"top center"}},r={class:"container"},n={class:"container py-5 flex-grow-1 d-flex align-items-center"},l={class:"row w-100 justify-content-center"},c={class:"col-lg-5"},d={class:"p-3 bg-light bg-opacity-25"},u=(0,o._)("h2",{class:"text-center mt-2 mb-3 text-secondary"},"後台登入",-1),m={class:"form-floating mb-4"},p=(0,o._)("label",{for:"username"},"帳號",-1),h={class:"form-floating mb-4"},g=(0,o._)("label",{for:"password"},"密碼",-1),v=["onClick"];function f(e,s,a,f,b,w){const x=(0,o.up)("LoadingVue"),k=(0,o.up)("DashBoardNav"),_=(0,o.up)("ToastList"),y=(0,o.up)("VField"),F=(0,o.up)("ErrorMessage"),L=(0,o.up)("VForm");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(x,{active:b.isLoading},null,8,["active"]),(0,o._)("div",i,[(0,o.Wm)(k,{isLogin:!1}),(0,o._)("div",r,[(0,o.Wm)(_)]),(0,o._)("div",n,[(0,o._)("div",l,[(0,o._)("div",c,[(0,o._)("div",d,[u,(0,o.Wm)(L,null,{default:(0,o.w5)((({errors:e,validate:a})=>[(0,o._)("div",m,[(0,o.Wm)(y,{type:"email",name:"email",id:"username",class:(0,t.C_)(["form-control",{"is-invalid":e["email"]}]),rules:"email|required",modelValue:b.user.username,"onUpdate:modelValue":s[0]||(s[0]=e=>b.user.username=e),placeholder:"請輸入帳號"},null,8,["class","modelValue"]),(0,o.Wm)(F,{name:"email",class:"invalid-feedback"}),p]),(0,o._)("div",h,[(0,o.Wm)(y,{type:"password",name:"password",id:"password",class:(0,t.C_)(["form-control",{"is-invalid":e["password"]}]),rules:"required",modelValue:b.user.password,"onUpdate:modelValue":s[1]||(s[1]=e=>b.user.password=e),placeholder:"請輸入帳號"},null,8,["class","modelValue"]),(0,o.Wm)(F,{name:"password",class:"invalid-feedback"}),g]),(0,o._)("button",{type:"button",class:"btn btn-secondary w-100",onClick:e=>w.submit(a)}," 登入 ",8,v)])),_:1})])])])])])],64)}a(560);var b=a(399),w=a(6534),x=a(8557),k={data(){return{user:{username:"",password:""},isLoading:!1}},components:{DashBoardNav:b.Z,ToastList:w.Z},provide(){return{emitter:x.Z}},methods:{async submit(e){try{const s=await e();if(!s.valid)return}catch(a){return void x.Z.emit("sendMsg",{message:"表單驗證失敗",status:"error"})}this.isLoading=!0;const s="https://vue3-course-api.hexschool.io/admin/signin";this.axios.post(s,this.user).then((e=>{if(this.isLoading=!1,e.data.success){const{token:s,expired:a}=e.data;document.cookie=`webToken=${s}; expires=${new Date(a)}`,this.$router.push("/dashboard/salesReport")}else x.Z.emit("sendMsg",{message:e.data.message,status:"error"}),this.user.password=""})).catch((e=>{x.Z.emit("sendMsg",{message:`登入失敗(${e})`,status:"error"})}))}},mounted(){const e="https://vue3-course-api.hexschool.io/api/user/check",s=document.cookie.split("; ").find((e=>e.startsWith("webToken=")))?.split("=")[1];this.axios.defaults.headers.common.Authorization=s,this.isLoading=!0,this.axios.post(e).then((e=>{this.isLoading=!1,e.data.success&&this.$router.push("/dashboard/salesReport")}))}},_=a(89);const y=(0,_.Z)(k,[["render",f]]);var F=y}}]);
//# sourceMappingURL=90.5b9f5579.js.map