"use strict";(self["webpackChunkproject_macaron"]=self["webpackChunkproject_macaron"]||[]).push([[974],{6955:function(t,e,s){s.d(e,{Z:function(){return z}});var r=s(3396),o=s(7139),i=s(9242);const a={class:"fw-bolder mb-3 ms-2"},d={class:"px-2"},c={class:"mb-1"},n={class:"d-flex justify-content-between"},l=(0,r._)("p",{class:"mb-1"},"小計",-1),u={class:"mb-1"},p=(0,r._)("div",{class:"d-flex justify-content-between"},[(0,r._)("p",{class:"mb-1"},"運費"),(0,r._)("p",{class:"mb-1"},"活動免運")],-1),m={key:0,class:"input-group mb-2 pt-1"},b={key:1,class:"d-flex justify-content-between flex-wrap"},g={class:"w-100 mb-1"},_={class:"mb-1"},h={class:"mb-1 flex-fill text-end"},f={key:2,class:"d-flex justify-content-between"},y=(0,r._)("p",{class:"mb-1"},"優惠券折扣",-1),w=(0,r._)("p",{class:"mb-1 flex-fill text-end"},"-0 元",-1),v=[y,w],k=(0,r._)("p",{class:"mb-1 fs-5 fw-bolder"},"總計",-1),x={class:"mb-1 fs-5 fw-bolder"};function C(t,e,s,y,w,C){const $=(0,r.up)("WebLoading");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)($,{"is-loading":w.isLoading},null,8,["is-loading"]),(0,r._)("div",{class:(0,o.C_)(["card border-secondary mb-3 text-secondary",{"border-0":!s.isEdit}])},[(0,r._)("div",{class:(0,o.C_)(["card-body p-3 bg-light",{rounded:s.isEdit}])},[(0,r._)("h5",a,[(0,r.WI)(t.$slots,"title",{},(()=>[(0,r.Uk)("訂單確認")]))]),(0,r._)("div",d,[(0,r._)("p",c," 商品共 "+(0,o.zw)(s.cartInfo.carts.reduce(((t,e)=>t+e.qty),0))+" 件 ",1),(0,r._)("div",n,[l,(0,r._)("p",u,(0,o.zw)(t.$filters.currency(s.cartInfo.total))+" 元",1)]),p]),(0,r._)("div",{class:(0,o.C_)(["px-2 py-1",{"bg-secondary-subtle":s.isEdit,"border-top border-secondary-subtle":!s.isEdit}])},[s.isEdit?((0,r.wg)(),(0,r.iD)("div",m,[(0,r.wy)((0,r._)("input",{type:"text",class:"form-control border-secondary border-end-0",placeholder:"輸入優惠碼","onUpdate:modelValue":e[0]||(e[0]=t=>w.couponCode=t)},null,512),[[i.nr,w.couponCode]]),(0,r._)("button",{class:"btn btn-dark",type:"button",onClick:e[1]||(e[1]=(...t)=>C.useCoupon&&C.useCoupon(...t))}," 套用 ")])):(0,r.kq)("",!0),s.cartInfo.carts[0].coupon?((0,r.wg)(),(0,r.iD)("div",b,[(0,r._)("p",g,[(0,r.WI)(t.$slots,"coupon",{},(()=>[(0,r.Uk)("已套用的優惠券：")]))]),(0,r._)("p",_,(0,o.zw)(`${s.cartInfo.carts[0].coupon.code} ${s.cartInfo.carts[0].coupon.title}`),1),(0,r._)("p",h,(0,o.zw)(t.$filters.currency(s.cartInfo.final_total-s.cartInfo.total))+" 元 ",1)])):((0,r.wg)(),(0,r.iD)("div",f,v))],2),(0,r._)("div",{class:(0,o.C_)(["d-flex justify-content-between border-top border-secondary pt-1 px-2",{"border-secondary-subtle":!s.isEdit,"mt-2":s.isEdit}])},[k,(0,r._)("p",x," NT$ "+(0,o.zw)(t.$filters.currency(s.cartInfo.final_total))+" 元 ",1)],2),(0,r.WI)(t.$slots,"button")],2)],2)],64)}var $={data(){return{couponCode:"",isLoading:!1}},props:["cartInfo","isEdit"],inject:["emitter"],methods:{useCoupon(){const t="https://vue3-course-api.hexschool.io/api/nn_macaron/coupon";this.isLoading=!0,this.axios.post(t,{data:{code:this.couponCode}}).then((t=>{this.isLoading=!1,t.data.success?(this.emitter.emit("sendMsg",{message:"已套用優惠",status:"success"}),this.emitter.emit("updateCart")):this.couponError(t.data.message)})).catch((t=>{this.isLoading=!1,this.couponError(t)}))},couponError(t){this.emitter.emit("sendMsg",{message:t,status:"error"})}}},D=s(89);const O=(0,D.Z)($,[["render",C]]);var z=O},272:function(t,e,s){s.d(e,{Z:function(){return W}});var r=s(3396),o=s(7139);const i={key:0},a={key:0,class:"alert alert-danger rounded-0 border-0 d-flex"},d=(0,r._)("i",{class:"bi bi-exclamation-triangle-fill me-2"},null,-1),c=(0,r._)("p",{class:"mb-0"},"訂單尚未完成，請完成付款手續",-1),n=[d,c],l={key:1,class:"alert alert-success rounded-0 border-0 d-flex"},u=(0,r._)("i",{class:"bi bi-check-circle me-2"},null,-1),p={class:"mb-0"},m={class:"row g-2 g-sm-3"},b={key:0,class:"col-12 border-secondary border-bottom pb-3"},g=(0,r._)("h5",{class:"fw-bolder"},"選擇付款方式",-1),_={class:"input-group"},h={class:"form-select"},f=(0,r._)("option",{value:"線上刷卡"},"線上刷卡",-1),y=(0,r._)("option",{value:"ATM轉帳"},"ATM轉帳",-1),w={value:"門市付款"},v=(0,r._)("div",{class:"col-sm-4"},[(0,r._)("h5",{class:"fw-bolder mb-0 mt-2 mt-sm-0"},"訂單狀態")],-1),k={class:"col-sm-8"},x={class:"mb-0"},C=(0,r._)("div",{class:"col-sm-4"},[(0,r._)("h5",{class:"fw-bolder mt-2 mt-sm-0 mb-0"},"訂購人資料")],-1),$={class:"col-sm-8"},D={class:"mb-1"},O={class:"mb-1"},z={class:"mb-1"},E={key:0,class:"mb-0",style:{"text-align":"justify"}};function j(t,e,s,d,c,j){const I=(0,r.up)("WebLoading");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(I,{"is-loading":c.isLoading},null,8,["is-loading"]),c.order.user?((0,r.wg)(),(0,r.iD)("div",i,[c.order.is_paid?((0,r.wg)(),(0,r.iD)("div",l,[u,(0,r._)("p",p," 訂單已成立！"+(0,o.zw)(c.order.user.address.indexOf("門市取貨")>-1?"商品將於七個工作天內完成，我們將與您聯繫確認取貨日期。":"商品將於七個工作天內送達。"),1)])):((0,r.wg)(),(0,r.iD)("div",a,n)),(0,r._)("div",{class:(0,o.C_)(["container p-4 bg-light text-secondary",{"mb-3":!c.order.is_paid,rounded:!c.order.is_paid,"bg-secondary-subtle":!c.order.is_paid,"border-secondary":!c.order.is_paid,border:!c.order.is_paid}])},[(0,r._)("div",m,[c.order.is_paid?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",b,[g,(0,r._)("div",_,[(0,r._)("select",h,[f,y,(0,r._)("option",w,(0,o.zw)(c.order.user.address.indexOf("門市取貨")>-1?"門市取貨付款":"門市付款"),1)]),(0,r._)("button",{class:"btn btn-secondary",type:"button",onClick:e[0]||(e[0]=(...t)=>j.payment&&j.payment(...t))}," 付款 ")])])),v,(0,r._)("div",k,[(0,r._)("p",x,(0,o.zw)(c.order.is_paid?"訂單已成立":"尚未付款"),1)]),C,(0,r._)("div",$,[(0,r._)("p",D,(0,o.zw)(c.order.user.name),1),(0,r._)("p",O,(0,o.zw)(c.order.user.tel),1),(0,r._)("p",z,(0,o.zw)(c.order.user.email),1),(0,r._)("p",{class:(0,o.C_)(["mb-0",{"mb-1":c.order.message}])},(0,o.zw)(c.order.user.address),3),c.order.message?((0,r.wg)(),(0,r.iD)("p",E,' 訂單備註："'+(0,o.zw)(c.order.message)+'" ',1)):(0,r.kq)("",!0)])])],2)])):(0,r.kq)("",!0)],64)}s(560);var I={data(){return{order:{},orderProducts:{},orderId:"",isLoading:!1}},inject:["emitter"],emits:["orderData","getError"],props:["isSearch"],methods:{getOrder(t){const e=`https://vue3-course-api.hexschool.io/api/nn_macaron/order/${t}`;this.isLoading=!0,this.axios.get(e).then((e=>{this.isLoading=!1,e.data.success?(e.data.order.is_paid&&"complete"!==this.$route.name?this.$router.push(`/order/complete/${t}`):e.data.order.is_paid||"payment"===this.$route.name||this.$router.push(`/order/payment/${t}`),this.order=e.data.order,this.orderProducts.carts=Object.values(e.data.order.products),this.orderProducts.final_total=e.data.order.total,this.orderProducts.total=this.orderProducts.carts.reduce(((t,e)=>(t+=e.total,t)),0),this.$emit("orderData",this.orderProducts)):this.getOrderFail()})).catch((()=>{this.isLoading=!1,this.getOrderFail()}))},getOrderFail(){this.isSearch?this.$emit("getError"):(this.emitter.emit("sendMsg",{message:"無此訂單",status:"error"}),this.$router.replace("/cart"))},payment(){const t=`https://vue3-course-api.hexschool.io/api/nn_macaron/pay/${this.$route.params.id}`;this.isLoading=!0,this.axios.post(t).then((t=>{this.isLoading=!1,t.data.success?this.$router.push(`/order/complete/${this.$route.params.id}`):this.emitter.emit("sendMsg",{message:"付款失敗，請聯繫店家",status:"error"})})).catch((t=>{this.isLoading=!1,alert(t)}))}},created(){this.isSearch||this.getOrder(this.$route.params.id)}},q=s(89);const L=(0,q.Z)(I,[["render",j]]);var W=L},1030:function(t,e,s){s.d(e,{Z:function(){return W}});var r=s(3396),o=s(7139),i=s(9242);const a={class:"py-2 px-3 d-flex align-items-baseline justify-content-between"},d={class:"text-secondary mb-0 fw-bolder"},c={class:"list-group rounded-0"},n={class:"d-flex flex-column flex-sm-row"},l={style:{"max-width":"100px"},class:"d-flex align-items-center mb-2 mb-sm-0"},u=["src","alt"],p={class:"px-0 px-sm-3 w-auto align-self-sm-center"},m={key:0,class:"mt-2 mb-0"},b={key:1,class:"mt-2 mb-0"},g={class:"text-danger"},_={class:"badge rounded-pill bg-secondary ms-1",style:{"vertical-align":"baseline"}},h={class:"my-2"},f={key:2,class:"input-group input-group-sm w-auto mb-2"},y=["onClick"],w=(0,r._)("i",{class:"bi bi-dash-lg"},null,-1),v=[w],k={class:"input-group-text bg-white border-start-0 border-end-0 border-secondary"},x=["onClick"],C=(0,r._)("i",{class:"bi bi-plus-lg"},null,-1),$=[C],D={key:3,class:"mb-2"},O={class:"mb-0"},z=["onClick"],E={class:"text-end"};function j(t,e,s,w,C,j){const I=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",a,[(0,r._)("h5",d,[(0,r.WI)(t.$slots,"title",{},(()=>[(0,r.Uk)("購物清單")])),(0,r.Uk)(" ("+(0,o.zw)(s.cartInfo.carts.reduce(((t,e)=>t+e.qty),0))+") ",1)]),s.isEdit?((0,r.wg)(),(0,r.iD)("a",{key:0,href:"#",class:"link-gray link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover",onClick:e[0]||(e[0]=(0,i.iM)((t=>this.emitter.emit("cartReset")),["prevent"]))},"清空購物車")):(0,r.kq)("",!0)]),(0,r._)("ul",c,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.cartInfo.carts,((e,i)=>((0,r.wg)(),(0,r.iD)("li",{class:"list-group-item d-flex flex-column-reverse flex-sm-row border-secondary-subtle border-start-0 border-end-0",key:"cart"+i},[(0,r._)("div",n,[(0,r._)("div",l,[(0,r._)("img",{src:e.product.imageUrl,alt:e.product.title,class:"img-fluid"},null,8,u)]),(0,r._)("div",p,[(0,r.Wm)(I,{to:`/product/${e.product.id}`,class:"fw-bolder link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover",target:"_blank"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)(e.product.title),1)])),_:2},1032,["to"]),e.product.origin_price===e.product.price?((0,r.wg)(),(0,r.iD)("p",m," 單價 NT$"+(0,o.zw)(t.$filters.currency(e.product.origin_price))+"元 ",1)):((0,r.wg)(),(0,r.iD)("p",b,[(0,r.Uk)(" 單件優惠價 "),(0,r._)("span",g,"NT$"+(0,o.zw)(t.$filters.currency(e.product.price))+"元",1),(0,r._)("span",_,(0,o.zw)(Math.floor(e.product.price/e.product.origin_price*10))+"折",1)])),(0,r._)("p",h,"規格："+(0,o.zw)(e.product.unit),1),s.isEdit?((0,r.wg)(),(0,r.iD)("div",f,[(0,r._)("button",{class:(0,o.C_)(["btn btn-outline-secondary",{disabled:1===e.qty}]),type:"button",onClick:t=>j.cartAdjustNum({product_id:e.product.id,qty:e.qty-1},e.id)},v,10,y),(0,r._)("span",k,(0,o.zw)(e.qty),1),(0,r._)("button",{class:(0,o.C_)(["btn btn-outline-secondary",{disabled:10===e.qty}]),type:"button",onClick:t=>j.cartAdjustNum({product_id:e.product.id,qty:e.qty+1},e.id)},$,10,x)])):((0,r.wg)(),(0,r.iD)("p",D,"數量："+(0,o.zw)(e.qty),1)),(0,r._)("p",O,"小計："+(0,o.zw)(e.total)+" 元",1)])]),s.isEdit?((0,r.wg)(),(0,r.iD)("button",{key:0,type:"button",class:"btn-close ms-auto",onClick:t=>j.emitter.emit("cartDeleteItem",e.id),title:"移除品項"},null,8,z)):(0,r.kq)("",!0)])))),128))]),(0,r._)("div",E,[(0,r._)("a",{href:"#",class:(0,o.C_)(["btn btn-outline-secondary mt-2",{"d-none":!C.scolltopShow||!s.isEdit}]),onClick:e[1]||(e[1]=(0,i.iM)(((...t)=>j.scrolltop&&j.scrolltop(...t)),["prevent"]))},"TOP",2)])],64)}var I={data(){return{scolltopShow:!1}},props:["cartInfo","isEdit"],inject:["emitter"],methods:{cartAdjustNum(t,e){this.emitter.emit("cartAdjustNum",{data:t,cartId:e})},scrolltop(){window.scrollTo({top:0,behavior:"smooth"})}},created(){window.addEventListener("scroll",(()=>{this.scolltopShow=!0}))}},q=s(89);const L=(0,q.Z)(I,[["render",j]]);var W=L},6974:function(t,e,s){s.r(e),s.d(e,{default:function(){return _}});var r=s(3396);const o={class:"container py-3 py-lg-5"},i={class:"row flex-column-reverse flex-lg-row justify-content-lg-evenly"},a={key:0,class:"col-lg-4"},d={class:"col-lg-6"},c={key:1,class:"col-lg-6"};function n(t,e,s,n,l,u){const p=(0,r.up)("OrderCard"),m=(0,r.up)("Orderlist"),b=(0,r.up)("OrderStatus");return(0,r.wg)(),(0,r.iD)("div",o,[(0,r._)("div",i,[l.getOrderComplete?((0,r.wg)(),(0,r.iD)("div",a,[(0,r.Wm)(p,{"cart-info":l.orderProducts,isEdit:!1},{title:(0,r.w5)((()=>[(0,r.Uk)("訂單資料")])),coupon:(0,r.w5)((()=>[(0,r.Uk)("優惠券折扣：")])),_:1},8,["cart-info"]),(0,r.Wm)(m,{"cart-info":l.orderProducts,isEdit:!1},{title:(0,r.w5)((()=>[(0,r.Uk)("訂單明細")])),_:1},8,["cart-info"])])):(0,r.kq)("",!0),(0,r._)("div",d,[(0,r.Wm)(b,{onOrderData:u.getOrder,isSearch:!1},null,8,["onOrderData"])]),l.getOrderComplete?((0,r.wg)(),(0,r.iD)("div",c)):(0,r.kq)("",!0)])])}var l=s(1030),u=s(6955),p=s(272),m={data(){return{orderProducts:{},getOrderComplete:!1}},inject:["emitter"],components:{Orderlist:l.Z,OrderCard:u.Z,OrderStatus:p.Z},methods:{getOrder(t){this.orderProducts=t,this.getOrderComplete=!0}},created(){this.emitter.emit("updateCart")}},b=s(89);const g=(0,b.Z)(m,[["render",n]]);var _=g}}]);
//# sourceMappingURL=974.8a87c0c3.js.map