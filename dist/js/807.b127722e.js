"use strict";(self["webpackChunkproject_macaron"]=self["webpackChunkproject_macaron"]||[]).push([[807],{6955:function(e,s,t){t.d(s,{Z:function(){return I}});var a=t(3396),l=t(7139),r=t(9242);const o={class:"fw-bolder mb-3 ms-2"},i={class:"px-2"},n={class:"mb-1"},c={class:"d-flex justify-content-between"},d=(0,a._)("p",{class:"mb-1"},"小計",-1),u={class:"mb-1"},m=(0,a._)("div",{class:"d-flex justify-content-between"},[(0,a._)("p",{class:"mb-1"},"運費"),(0,a._)("p",{class:"mb-1"},"活動免運")],-1),p={key:0,class:"input-group mb-2 pt-1"},b={key:1,class:"d-flex justify-content-between flex-wrap"},f={class:"w-100 mb-1"},y={class:"mb-1"},_={class:"mb-1 flex-fill text-end"},g={key:2,class:"d-flex justify-content-between"},v=(0,a._)("p",{class:"mb-1"},"優惠券折扣",-1),h=(0,a._)("p",{class:"mb-1 flex-fill text-end"},"-0 元",-1),w=[v,h],k=(0,a._)("p",{class:"mb-1 fs-5 fw-bolder"},"總計",-1),x={class:"mb-1 fs-5 fw-bolder"};function C(e,s,t,v,h,C){const W=(0,a.up)("WebLoading");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(W,{"is-loading":h.isLoading},null,8,["is-loading"]),(0,a._)("div",{class:(0,l.C_)(["card border-secondary mb-3 text-secondary",{"border-0":!t.isEdit}])},[(0,a._)("div",{class:(0,l.C_)(["card-body p-3 bg-light",{rounded:t.isEdit}])},[(0,a._)("h5",o,[(0,a.WI)(e.$slots,"title",{},(()=>[(0,a.Uk)("訂單確認")]))]),(0,a._)("div",i,[(0,a._)("p",n," 商品共 "+(0,l.zw)(t.cartInfo.carts.reduce(((e,s)=>e+s.qty),0))+" 件 ",1),(0,a._)("div",c,[d,(0,a._)("p",u,(0,l.zw)(e.$filters.currency(t.cartInfo.total))+" 元",1)]),m]),(0,a._)("div",{class:(0,l.C_)(["px-2 py-1",{"bg-secondary-subtle":t.isEdit,"border-top border-secondary-subtle":!t.isEdit}])},[t.isEdit?((0,a.wg)(),(0,a.iD)("div",p,[(0,a.wy)((0,a._)("input",{type:"text",class:"form-control border-secondary border-end-0",placeholder:"輸入優惠碼","onUpdate:modelValue":s[0]||(s[0]=e=>h.couponCode=e)},null,512),[[r.nr,h.couponCode]]),(0,a._)("button",{class:"btn btn-dark",type:"button",onClick:s[1]||(s[1]=(...e)=>C.useCoupon&&C.useCoupon(...e))}," 套用 ")])):(0,a.kq)("",!0),t.cartInfo.carts[0].coupon?((0,a.wg)(),(0,a.iD)("div",b,[(0,a._)("p",f,[(0,a.WI)(e.$slots,"coupon",{},(()=>[(0,a.Uk)("已套用的優惠券：")]))]),(0,a._)("p",y,(0,l.zw)(`${t.cartInfo.carts[0].coupon.code} ${t.cartInfo.carts[0].coupon.title}`),1),(0,a._)("p",_,(0,l.zw)(e.$filters.currency(t.cartInfo.final_total-t.cartInfo.total))+" 元 ",1)])):((0,a.wg)(),(0,a.iD)("div",g,w))],2),(0,a._)("div",{class:(0,l.C_)(["d-flex justify-content-between border-top border-secondary pt-1 px-2",{"border-secondary-subtle":!t.isEdit,"mt-2":t.isEdit}])},[k,(0,a._)("p",x," NT$ "+(0,l.zw)(e.$filters.currency(t.cartInfo.final_total))+" 元 ",1)],2),(0,a.WI)(e.$slots,"button")],2)],2)],64)}var W={data(){return{couponCode:"",isLoading:!1}},props:["cartInfo","isEdit"],inject:["emitter"],methods:{useCoupon(){const e="https://vue3-course-api.hexschool.io/api/nn_macaron/coupon";this.isLoading=!0,this.axios.post(e,{data:{code:this.couponCode}}).then((e=>{this.isLoading=!1,e.data.success?(this.emitter.emit("sendMsg",{message:"已套用優惠",status:"success"}),this.emitter.emit("updateCart")):this.couponError(e.data.message)})).catch((e=>{this.isLoading=!1,this.couponError(e)}))},couponError(e){this.emitter.emit("sendMsg",{message:e,status:"error"})}}},E=t(89);const V=(0,E.Z)(W,[["render",C]]);var I=V},1030:function(e,s,t){t.d(s,{Z:function(){return z}});var a=t(3396),l=t(7139),r=t(9242);const o={class:"py-2 px-3 d-flex align-items-baseline justify-content-between"},i={class:"text-secondary mb-0 fw-bolder"},n={class:"list-group rounded-0"},c={class:"d-flex flex-column flex-sm-row"},d={style:{"max-width":"100px"},class:"d-flex align-items-center mb-2 mb-sm-0"},u=["src","alt"],m={class:"px-0 px-sm-3 w-auto align-self-sm-center"},p={key:0,class:"mt-2 mb-0"},b={key:1,class:"mt-2 mb-0"},f={class:"text-danger"},y={class:"badge rounded-pill bg-secondary ms-1",style:{"vertical-align":"baseline"}},_={class:"my-2"},g={key:2,class:"input-group input-group-sm w-auto mb-2"},v=["onClick"],h=(0,a._)("i",{class:"bi bi-dash-lg"},null,-1),w=[h],k={class:"input-group-text bg-white border-start-0 border-end-0 border-secondary"},x=["onClick"],C=(0,a._)("i",{class:"bi bi-plus-lg"},null,-1),W=[C],E={key:3,class:"mb-2"},V={class:"mb-0"},I=["onClick"],q={class:"text-end"};function $(e,s,t,h,C,$){const D=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",o,[(0,a._)("h5",i,[(0,a.WI)(e.$slots,"title",{},(()=>[(0,a.Uk)("購物清單")])),(0,a.Uk)(" ("+(0,l.zw)(t.cartInfo.carts.reduce(((e,s)=>e+s.qty),0))+") ",1)]),t.isEdit?((0,a.wg)(),(0,a.iD)("a",{key:0,href:"#",class:"link-gray link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover",onClick:s[0]||(s[0]=(0,r.iM)((e=>this.emitter.emit("cartReset")),["prevent"]))},"清空購物車")):(0,a.kq)("",!0)]),(0,a._)("ul",n,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.cartInfo.carts,((s,r)=>((0,a.wg)(),(0,a.iD)("li",{class:"list-group-item d-flex flex-column-reverse flex-sm-row border-secondary-subtle border-start-0 border-end-0",key:"cart"+r},[(0,a._)("div",c,[(0,a._)("div",d,[(0,a._)("img",{src:s.product.imageUrl,alt:s.product.title,class:"img-fluid"},null,8,u)]),(0,a._)("div",m,[(0,a.Wm)(D,{to:`/product/${s.product.id}`,class:"fw-bolder link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover",target:"_blank"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(s.product.title),1)])),_:2},1032,["to"]),s.product.origin_price===s.product.price?((0,a.wg)(),(0,a.iD)("p",p," 單價 NT$"+(0,l.zw)(e.$filters.currency(s.product.origin_price))+"元 ",1)):((0,a.wg)(),(0,a.iD)("p",b,[(0,a.Uk)(" 單件優惠價 "),(0,a._)("span",f,"NT$"+(0,l.zw)(e.$filters.currency(s.product.price))+"元",1),(0,a._)("span",y,(0,l.zw)(Math.floor(s.product.price/s.product.origin_price*10))+"折",1)])),(0,a._)("p",_,"規格："+(0,l.zw)(s.product.unit),1),t.isEdit?((0,a.wg)(),(0,a.iD)("div",g,[(0,a._)("button",{class:(0,l.C_)(["btn btn-outline-secondary",{disabled:1===s.qty}]),type:"button",onClick:e=>$.cartAdjustNum({product_id:s.product.id,qty:s.qty-1},s.id)},w,10,v),(0,a._)("span",k,(0,l.zw)(s.qty),1),(0,a._)("button",{class:(0,l.C_)(["btn btn-outline-secondary",{disabled:10===s.qty}]),type:"button",onClick:e=>$.cartAdjustNum({product_id:s.product.id,qty:s.qty+1},s.id)},W,10,x)])):((0,a.wg)(),(0,a.iD)("p",E,"數量："+(0,l.zw)(s.qty),1)),(0,a._)("p",V,"小計："+(0,l.zw)(s.total)+" 元",1)])]),t.isEdit?((0,a.wg)(),(0,a.iD)("button",{key:0,type:"button",class:"btn-close ms-auto",onClick:e=>$.emitter.emit("cartDeleteItem",s.id),title:"移除品項"},null,8,I)):(0,a.kq)("",!0)])))),128))]),(0,a._)("div",q,[(0,a._)("a",{href:"#",class:(0,l.C_)(["btn btn-outline-secondary mt-2",{"d-none":!C.scolltopShow||!t.isEdit}]),onClick:s[1]||(s[1]=(0,r.iM)(((...e)=>$.scrolltop&&$.scrolltop(...e)),["prevent"]))},"TOP",2)])],64)}var D={data(){return{scolltopShow:!1}},props:["cartInfo","isEdit"],inject:["emitter"],methods:{cartAdjustNum(e,s){this.emitter.emit("cartAdjustNum",{data:e,cartId:s})},scrolltop(){window.scrollTo({top:0,behavior:"smooth"})}},created(){window.addEventListener("scroll",(()=>{this.scolltopShow=!0}))}},U=t(89);const j=(0,U.Z)(D,[["render",$]]);var z=j},2807:function(e,s,t){t.r(s),t.d(s,{default:function(){return S}});var a=t(3396),l=t(7139);const r={class:"container py-5"},o={key:0,class:"row flex-column-reverse flex-lg-row justify-content-lg-evenly"},i={class:"col-lg-4"},n={class:"col-lg-6"},c={class:"card border-secondary mb-5 text-secondary"},d={class:"card-body p-3 bg-secondary-subtle rounded"},u=(0,a._)("h5",{class:"fw-bolder mb-3"},"訂購人資料",-1),m={class:"mb-3"},p=(0,a._)("label",{for:"purchaser",class:"form-label"},"訂購人姓名*",-1),b={class:"mb-3"},f=(0,a._)("label",{for:"email",class:"form-label"},"Email*",-1),y={class:"mb-3"},_=(0,a._)("label",{for:"tel",class:"form-label"},"手機*",-1),g={class:"mb-3"},v=(0,a._)("label",{for:"delivery",class:"form-label"},"運送方式*",-1),h=(0,a._)("option",{value:"",disabled:""},"請選擇運送方式",-1),w=(0,a._)("option",{value:"門市取貨"},"門市取貨",-1),k=(0,a._)("option",{value:"貨運低溫宅配"},"貨運低溫宅配",-1),x=(0,a._)("option",{value:"超商冷藏運送"},"超商冷藏運送",-1),C={key:0,class:"mb-3"},W=(0,a._)("label",{for:"contact",class:"form-label"},"配送門市*",-1),E={key:1,class:"mb-3"},V=(0,a._)("label",{for:"contact",class:"form-label"},"地址*",-1),I={class:"mb-3"},q=(0,a._)("label",{for:"message",class:"form-label"},"備註 (字數限制100字)",-1),$=["onClick"];function D(e,s,t,D,U,j){const z=(0,a.up)("WebLoading"),L=(0,a.up)("OrderCard"),M=(0,a.up)("Orderlist"),S=(0,a.up)("VField"),N=(0,a.up)("ErrorMessage"),Z=(0,a.up)("VForm");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(z,{"is-loading":U.isLoading},null,8,["is-loading"]),(0,a._)("div",r,[t.cartInfo.carts[0].product?((0,a.wg)(),(0,a.iD)("div",o,[(0,a._)("div",i,[(0,a.Wm)(L,{"cart-info":t.cartInfo,isEdit:!1},{title:(0,a.w5)((()=>[(0,a.Uk)("訂單資料")])),coupon:(0,a.w5)((()=>[(0,a.Uk)("優惠券折扣：")])),_:1},8,["cart-info"]),(0,a.Wm)(M,{"cart-info":t.cartInfo,isEdit:!1},null,8,["cart-info"])]),(0,a._)("div",n,[(0,a._)("div",c,[(0,a._)("div",d,[u,(0,a.Wm)(Z,{onSubmit:j.onSubmit},{default:(0,a.w5)((({errors:e,validate:t})=>[(0,a._)("div",m,[p,(0,a.Wm)(S,{id:"purchaser",name:"訂購人姓名",type:"text",class:(0,l.C_)(["form-control",{"is-invalid":e["訂購人姓名"]}]),placeholder:"請輸入訂購人姓名",rules:"required",modelValue:U.purchaser.name,"onUpdate:modelValue":s[0]||(s[0]=e=>U.purchaser.name=e)},null,8,["class","modelValue"]),(0,a.Wm)(N,{name:"訂購人姓名",class:"invalid-feedback"})]),(0,a._)("div",b,[f,(0,a.Wm)(S,{id:"email",name:"email",type:"email",class:(0,l.C_)(["form-control",{"is-invalid":e["email"]}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:U.purchaser.email,"onUpdate:modelValue":s[1]||(s[1]=e=>U.purchaser.email=e)},null,8,["class","modelValue"]),(0,a.Wm)(N,{name:"email",class:"invalid-feedback"})]),(0,a._)("div",y,[_,(0,a.Wm)(S,{id:"tel",name:"手機",type:"text",class:(0,l.C_)(["form-control",{"is-invalid":e["手機"]}]),placeholder:"請輸入手機號碼",rules:j.isPhone,modelValue:U.purchaser.tel,"onUpdate:modelValue":s[2]||(s[2]=e=>U.purchaser.tel=e)},null,8,["class","rules","modelValue"]),(0,a.Wm)(N,{name:"手機",class:"invalid-feedback"})]),(0,a._)("div",g,[v,(0,a.Wm)(S,{id:"delivery",name:"運送方式",class:(0,l.C_)(["form-select",{"is-invalid":e["運送方式"]}]),rules:"required",modelValue:U.delivery.way,"onUpdate:modelValue":s[3]||(s[3]=e=>U.delivery.way=e),as:"select"},{default:(0,a.w5)((()=>[h,w,k,x])),_:2},1032,["class","modelValue"]),(0,a.Wm)(N,{name:"運送方式",class:"invalid-feedback"})]),"超商冷藏運送"===U.delivery.way?((0,a.wg)(),(0,a.iD)("div",C,[W,(0,a.Wm)(S,{id:"contact",name:"地址",type:"text",class:(0,l.C_)(["form-control",{"is-invalid":e["地址"]}]),placeholder:"請填寫配送超商門市",rules:"required",modelValue:U.delivery.address,"onUpdate:modelValue":s[4]||(s[4]=e=>U.delivery.address=e)},null,8,["class","modelValue"]),(0,a.Wm)(N,{name:"地址",class:"invalid-feedback"})])):"貨運低溫宅配"===U.delivery.way?((0,a.wg)(),(0,a.iD)("div",E,[V,(0,a.Wm)(S,{id:"contact",name:"地址",type:"text",class:(0,l.C_)(["form-control",{"is-invalid":e["地址"]}]),placeholder:"請輸入收貨地址",rules:"required",modelValue:U.delivery.address,"onUpdate:modelValue":s[5]||(s[5]=e=>U.delivery.address=e)},null,8,["class","modelValue"]),(0,a.Wm)(N,{name:"地址",class:"invalid-feedback"})])):(0,a.kq)("",!0),(0,a._)("div",I,[q,(0,a.Wm)(S,{id:"message",name:"備註",type:"text",class:(0,l.C_)(["form-control",{"is-invalid":e["備註"]}]),placeholder:"如欲指定禮盒包裝、緞帶顏色等特殊需求，請留言給我們，會有專人與您電話聯繫！",rules:"max:100",modelValue:U.message,"onUpdate:modelValue":s[6]||(s[6]=e=>U.message=e),rows:"3",as:"textarea"},null,8,["class","modelValue"]),(0,a.Wm)(N,{name:"備註",class:"invalid-feedback"})]),(0,a._)("button",{type:"button",class:"btn btn-secondary w-100",onClick:e=>j.onSubmit(t)}," 下一步 ",8,$)])),_:1},8,["onSubmit"])])])])])):(0,a.kq)("",!0)])],64)}t(560);var U=t(1030),j=t(6955),z={data(){return{purchaser:{email:"",name:"",tel:"",address:""},message:"",delivery:{way:"",address:""},isLoading:!1}},inject:["emitter"],props:["cartInfo"],components:{Orderlist:U.Z,OrderCard:j.Z},methods:{isPhone(e){const s=/^(09)[0-9]{8}$/;return!!s.test(e)||"請填寫正確的電話號碼"},async onSubmit(e){try{const s=await e();if(!s.valid)return;this.purchaser.address=`${this.delivery.way}：${this.delivery.address||"到店"}`}catch(t){this.emitter.emit("sendMsg",{message:"表單驗證失敗",status:"error"})}const s="https://vue3-course-api.hexschool.io/api/nn_macaron/order";this.isLoading=!0,this.axios.post(s,{data:{user:this.purchaser,message:this.message}}).then((e=>{e.data.success?this.$router.push(`/order/payment/${e.data.orderId}`):(this.isLoading=!1,this.submitError(e.data.message))})).catch((e=>{this.isLoading=!1,this.submitError(e)}))},submitError(e){this.emitter.emit("sendMsg",{message:e,status:"error"})}}},L=t(89);const M=(0,L.Z)(z,[["render",D]]);var S=M}}]);
//# sourceMappingURL=807.b127722e.js.map