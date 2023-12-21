"use strict";(self["webpackChunkproject_macaron"]=self["webpackChunkproject_macaron"]||[]).push([[692],{3692:function(e,t,o){o.r(t),o.d(t,{default:function(){return te}});var s=o(3396),i=o(7139);const n={class:"d-flex justify-content-between pt-4 py-3 pe-1"},a=(0,s._)("h2",{class:"m-0 text-secondary fw-bolder"},"優惠券列表",-1),u={class:"table table-hover align-middle"},l=(0,s._)("thead",{class:"border-dark"},[(0,s._)("tr",null,[(0,s._)("th",null,"優惠券代碼"),(0,s._)("th",null,"優惠券名稱"),(0,s._)("th",{class:"text-center"},"折扣內容"),(0,s._)("th",null,"優惠截止時間"),(0,s._)("th",null,"優惠券狀態"),(0,s._)("th",{width:"150",class:"text-center"},"編輯/刪除")])],-1),d={class:"text-center"},c={key:0,class:"bi bi-check fw-bolder"},r={key:1,class:"bi bi-x"},p={key:2,class:"text-danger"},h={key:3},m={key:4,class:"text-danger"},g={key:5},_={class:"text-center"},b={class:"btn-group btn-group-sm",role:"group","aria-label":"Basic example"},f=["onClick"],C=["onClick"];function x(e,t,o,x,w,k){const y=(0,s.up)("LoadingVue"),M=(0,s.up)("couponModal"),D=(0,s.up)("deleteModal"),T=(0,s.up)("pagination");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(y,{active:w.isLoading,style:{"z-index":"1056"}},null,8,["active"]),(0,s.Wm)(M,{"temp-coupon":w.tempCoupon,onUpdateCoupon:k.updateCoupon,onCreateCoupon:k.createCoupon,ref:"couponModal"},null,8,["temp-coupon","onUpdateCoupon","onCreateCoupon"]),(0,s.Wm)(D,{ref:"deleteModal","delete-item":w.deleteCoupon,item:"優惠券",onDelete:k.deleteId},null,8,["delete-item","onDelete"]),(0,s._)("div",n,[a,(0,s._)("button",{type:"button",class:"btn btn-secondary align-self-center me-3",onClick:t[0]||(t[0]=e=>k.editCoupon())}," 新增優惠券 ")]),(0,s._)("table",u,[l,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(w.couponList,((t,o)=>((0,s.wg)(),(0,s.iD)("tr",{key:"coupon"+o},[(0,s._)("td",null,(0,i.zw)(t.code),1),(0,s._)("td",null,(0,i.zw)(t.title),1),(0,s._)("td",d,(0,i.zw)(t.percent/10+"折"),1),(0,s._)("td",null,(0,i.zw)(e.$filters.unixToDatetime(t.due_date)),1),(0,s._)("td",{class:(0,i.C_)(k.checkStatus(t)?"text-success":"text-gray")},[k.checkStatus(t)?((0,s.wg)(),(0,s.iD)("i",c)):((0,s.wg)(),(0,s.iD)("i",r)),t.due_date<Date.now().toString().substring(0,10)?((0,s.wg)(),(0,s.iD)("span",p,"已過期")):((0,s.wg)(),(0,s.iD)("span",h,"尚未過期")),(0,s.Uk)(", "),t.is_enabled?((0,s.wg)(),(0,s.iD)("span",g,"啟用")):((0,s.wg)(),(0,s.iD)("span",m,"未啟用"))],2),(0,s._)("td",_,[(0,s._)("div",b,[(0,s._)("button",{type:"button",class:"btn btn-outline-success",onClick:e=>k.editCoupon(t)}," 編輯 ",8,f),(0,s._)("button",{type:"button",class:"btn btn-outline-danger",onClick:e=>k.deleteConfirm(t)}," 刪除 ",8,C)])])])))),128))])]),(0,s.Wm)(T,{"page-info":w.pageInfo,onSetPage:k.getCoupon},null,8,["page-info","onSetPage"])],64)}var w=o(9242);const k={class:"modal fade",tabindex:"-1",ref:"couponModal"},y={class:"modal-dialog modal-lg modal-dialog-scrollable"},M={class:"modal-content"},D={class:"modal-header bg-secondary"},T=(0,s._)("h1",{class:"modal-title fs-5 text-white"},"優惠券資料",-1),v={class:"modal-body p-4 text-secondary"},$={class:"mb-3"},L=(0,s._)("label",{for:"code",class:"form-label"},"優惠券代碼*",-1),S={class:"mb-3"},H=(0,s._)("label",{for:"title",class:"form-label"},"優惠券名稱*",-1),U={class:"mb-3"},V=(0,s._)("label",{for:"percent",class:"form-label"},[(0,s.Uk)("折扣內容* "),(0,s._)("span",{class:"text-muted"},"(限制：1~99)")],-1),z={class:"ms-1"},j={class:"d-flex"},I={class:"me-5"},W=(0,s._)("label",{for:"dueDate",class:"form-label"},"優惠截止日期*",-1),Z=(0,s._)("label",{for:"dueTimeHour",class:"form-label"},"優惠截止時間*",-1),Y={class:"text-muted ms-1",style:{"font-size":"0.75rem"}},E={class:"form-check mb-3"},F=["checked"],J=(0,s._)("label",{for:"is_enabled",class:"form-check-label"},"是否啟用*",-1),N={class:"modal-footer"};function O(e,t,o,n,a,u){const l=(0,s.up)("LoadingVue");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(l,{active:a.isLoading,style:{"z-index":"1056"}},null,8,["active"]),(0,s._)("div",k,[(0,s._)("div",y,[(0,s._)("div",M,[(0,s._)("div",D,[T,(0,s._)("button",{type:"button",class:"btn-close",onClick:t[0]||(t[0]=(...e)=>u.hideModal&&u.hideModal(...e))})]),(0,s._)("div",v,[(0,s._)("div",$,[L,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",id:"code","onUpdate:modelValue":t[1]||(t[1]=e=>a.coupon.code=e),placeholder:"請輸入優惠券代碼"},null,512),[[w.nr,a.coupon.code]])]),(0,s._)("div",S,[H,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":t[2]||(t[2]=e=>a.coupon.title=e),placeholder:"請輸入優惠券名稱"},null,512),[[w.nr,a.coupon.title]])]),(0,s._)("div",U,[V,(0,s._)("div",null,[(0,s.wy)((0,s._)("input",{type:"number",class:"form-control d-inline-block me-1",style:{width:"250px"},id:"percent","onUpdate:modelValue":t[3]||(t[3]=e=>a.coupon.percent=e),min:"1",max:"99",placeholder:"請輸入折扣數（如：90）"},null,512),[[w.nr,a.coupon.percent]]),(0,s.Uk)(" ="),(0,s._)("span",z,(0,i.zw)(a.coupon.percent?a.coupon.percent/10:"？")+"折",1)])]),(0,s._)("div",j,[(0,s._)("div",I,[W,(0,s.wy)((0,s._)("input",{type:"date",class:"form-control",style:{width:"250px"},id:"dueDate",ref:"dueDateDefault","onUpdate:modelValue":t[4]||(t[4]=e=>a.dueDateLocal=e),onInput:t[5]||(t[5]=e=>a.dueDateLocal=e.target.value),min:"2123-1-01",max:"2123-12-31"},null,544),[[w.nr,a.dueDateLocal]])]),(0,s._)("div",null,[Z,(0,s._)("div",null,[(0,s.wy)((0,s._)("input",{type:"number",class:"form-control d-inline-block w-auto",id:"dueTimeHour","onUpdate:modelValue":t[6]||(t[6]=e=>a.dueTimeHour=e),placeholder:"時",min:"0",max:"23"},null,512),[[w.nr,a.dueTimeHour]]),(0,s.Uk)("： "),(0,s.wy)((0,s._)("input",{type:"number",class:"form-control d-inline-block w-auto",id:"dueHour","onUpdate:modelValue":t[7]||(t[7]=e=>a.dueTimeMinute=e),placeholder:"分",min:"0",max:"59"},null,512),[[w.nr,a.dueTimeMinute]]),(0,s.Uk)("： "),(0,s.wy)((0,s._)("input",{type:"number",class:"form-control d-inline-block w-auto",id:"dueHour","onUpdate:modelValue":t[8]||(t[8]=e=>a.dueTimeSec=e),placeholder:"秒",min:"0",max:"59"},null,512),[[w.nr,a.dueTimeSec]])])])]),(0,s._)("p",Y," 截止日 unix 格式："+(0,i.zw)(u.dueDate_unix),1),(0,s._)("div",E,[(0,s.wy)((0,s._)("input",{type:"checkbox",name:"is_enabled",id:"is_enabled",class:"form-check-input active","onUpdate:modelValue":t[9]||(t[9]=e=>a.coupon.is_enabled=e),checked:1===a.coupon.is_enabled},null,8,F),[[w.e8,a.coupon.is_enabled]]),J])]),(0,s._)("div",N,[(0,s._)("button",{type:"button",class:"btn btn-outline-gray",onClick:t[10]||(t[10]=(...e)=>u.hideModal&&u.hideModal(...e))}," 取消 "),(0,s._)("button",{type:"button",class:"btn btn-secondary",onClick:t[11]||(t[11]=(...e)=>u.updateCoupon&&u.updateCoupon(...e))},(0,i.zw)(a.coupon.id?"更新":"新增"),1)])])])],512)],64)}o(560);var P=o(7972),B=o.n(P),K={data(){return{modal:{},coupon:{code:"",percent:90,is_enabled:!0},dueDateDefault:"",dueDateLocal:"",dueTimeHour:"23",dueTimeMinute:"59",dueTimeSec:"59",isLoading:!1}},props:["tempCoupon"],emits:["updateCoupon","createCoupon"],inject:["emitter"],watch:{tempCoupon(){this.getData()},dueDate_unix(){10===this.dueDate_unix.toString().length&&(this.coupon.due_date=this.dueDate_unix)},dueTimeHour(){this.dueTimeHour=this.checkValue(this.dueTimeHour,23,0)},dueTimeMinute(){this.dueTimeMinute=this.checkValue(this.dueTimeMinute,59,0)},dueTimeSec(){this.dueTimeSec=this.checkValue(this.dueTimeSec,59,0)},coupon:{handler(){""!==this.coupon.percent&&(this.coupon.percent=this.checkValue(this.coupon.percent,99,1))},deep:!0}},computed:{dueDate_unix(){if(this.dueDateLocal&&""!==this.dueTimeHour&&""!==!this.dueTimeMinute&&""!==!this.dueTimeSec){const e=`${this.dueDateLocal} ${this.dueTimeHour}:${this.dueTimeMinute}:${this.dueTimeSec}`;return this.$filters.datetimeToUnix(e)}return"請輸入截止日期與時間！"}},methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide(),this.getData()},getData(){if(this.coupon=JSON.parse(JSON.stringify(this.tempCoupon)),this.coupon.due_date){this.dueDateLocal=this.$filters.unixToDate(this.coupon.due_date);const e=this.$filters.unixToTime(this.coupon.due_date).split(":");this.dueTimeHour=e[0],this.dueTimeMinute=e[1],this.dueTimeSec=e[2]}else this.dueDateLocal=this.dueDateDefault,this.dueTimeHour=24,this.dueTimeMinute=59,this.dueTimeSec=59,this.coupon.is_enabled=!0},updateCoupon(){const e=this.checkFormatError().join(", ");e?this.emitter.emit("sendMsg",{message:e,status:"error",title:"資料格式錯誤"}):(this.coupon.is_enabled=this.coupon.is_enabled?1:0,this.coupon.id?this.$emit("updateCoupon",this.coupon):this.$emit("createCoupon",this.coupon))},checkValue(e,t,o){return e<o?o:e>t?t:e},checkFormatError(){const e=[];return this.coupon.code||e.push("優惠券代碼為必填"),this.coupon.title||e.push("優惠券名稱為必填"),this.coupon.percent||e.push("折扣內容日為必填"),this.coupon.due_date||e.push("優惠截止日為必填"),e}},mounted(){this.modal=new(B())(this.$refs.couponModal,{backdrop:"static"}),this.dueDateDefault=this.$filters.unixToDate(new Date/1e3)}},q=o(89);const A=(0,q.Z)(K,[["render",O]]);var G=A,Q=o(81),R=o(6567),X={data(){return{couponList:[],tempCoupon:{},couponStatus:{},deleteCoupon:{},isLoading:!1,pageInfo:{}}},inject:["emitter"],components:{couponModal:G,deleteModal:Q.Z,pagination:R.Z},methods:{getCoupon(e=1){this.isLoading=!0,window.scrollTo({top:0});const t="https://vue3-course-api.hexschool.io/api/nn_macaron/admin/coupons?page=1";this.axios.get(t).then((e=>{this.isLoading=!1,e.data.success?(this.couponList=e.data.coupons,this.pageInfo=e.data.pagination):this.emitter.emit("sendMsg",{message:`優惠券讀取失敗：${e.data.message}`,status:"error"})})).catch((e=>{this.emitter.emit("sendMsg",{message:`優惠券讀取失敗：${e}`,status:"error"})}))},editCoupon(e={}){this.tempCoupon=e,this.$refs.couponModal.showModal()},updateCoupon(e){this.isLoading=!0;const t=`https://vue3-course-api.hexschool.io/api/nn_macaron/admin/coupon/${e.id}`;this.axios.put(t,{data:e}).then((t=>{this.isLoading=!1,t.data.success?(this.emitter.emit("sendMsg",{message:`優惠券已更新：${e.title}`,status:"success"}),this.$refs.couponModal.hideModal(),this.getCoupon()):this.emitter.emit("sendMsg",{message:t.data.message.join(", "),status:"error",title:"優惠券更新失敗"})})).catch((e=>{this.emitter.emit("sendMsg",{message:e,status:"error",title:"優惠券更新失敗"})}))},createCoupon(e){const t="https://vue3-course-api.hexschool.io/api/nn_macaron/admin/coupon";this.axios.post(t,{data:e}).then((t=>{this.isLoading=!1,t.data.success?(this.emitter.emit("sendMsg",{message:`已新增優惠券：${e.title}`,status:"success"}),this.$refs.couponModal.hideModal(),this.getCoupon()):this.emitter.emit("sendMsg",{message:t.data.message.join(", "),status:"error",title:"優惠券新增失敗"})})).catch((e=>{this.emitter.emit("sendMsg",{message:e,status:"error",title:"優惠券新增失敗"})}))},deleteConfirm(e){this.deleteCoupon=e,this.$refs.deleteModal.showModal()},deleteId(){this.isLoading=!0,this.$refs.deleteModal.hideModal();const e=`https://vue3-course-api.hexschool.io/api/nn_macaron/admin/coupon/${this.deleteCoupon.id}`;this.axios.delete(e).then((e=>{this.isLoading=!1,e.data.success?this.emitter.emit("sendMsg",{message:`已刪除優惠券：${this.deleteCoupon.title}`,status:"success"}):this.emitter.emit("sendMsg",{message:`${e.data.message}`,status:"error",title:"優惠券刪除失敗"}),this.getCoupon(this.pageInfo.current_page)})).catch((e=>{this.emitter.emit("sendMsg",{message:`${e}`,status:"error",title:"優惠券刪除失敗"})}))},checkStatus(e){return e.due_date>Date.now().toString().substring(0,10)&&e.is_enabled}},created(){this.getCoupon()}};const ee=(0,q.Z)(X,[["render",x]]);var te=ee}}]);
//# sourceMappingURL=692.9c7a2aa3.js.map