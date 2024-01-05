"use strict";(self["webpackChunkproject_macaron"]=self["webpackChunkproject_macaron"]||[]).push([[745],{1582:function(t,e,r){r.d(e,{Z:function(){return j}});var s=r(3396),o=r(7139),i=r(9242);const a={class:"fw-bolder mb-3 ms-2"},c={class:"px-2"},d={class:"mb-1"},l={class:"d-flex justify-content-between"},n=(0,s._)("p",{class:"mb-1"},"小計",-1),u={class:"mb-1"},p=(0,s._)("div",{class:"d-flex justify-content-between"},[(0,s._)("p",{class:"mb-1"},"運費"),(0,s._)("p",{class:"mb-1"},"活動免運")],-1),m={key:0,class:"input-group mb-2 pt-1"},g={key:1,class:"d-flex justify-content-between flex-wrap"},h={class:"w-100 mb-1"},b={class:"mb-1"},f={class:"mb-1 flex-fill text-end"},_={key:2,class:"d-flex justify-content-between"},w=(0,s._)("p",{class:"mb-1"},"優惠券折扣",-1),y=(0,s._)("p",{class:"mb-1 flex-fill text-end"},"-0 元",-1),k=[w,y],v=(0,s._)("p",{class:"mb-1 fs-5 fw-bolder"},"總計",-1),x={class:"mb-1 fs-5 fw-bolder"};function C(t,e,r,w,y,C){const D=(0,s.up)("WebLoading");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(D,{"is-loading":y.isLoading},null,8,["is-loading"]),(0,s._)("div",{class:(0,o.C_)(["card border-secondary mb-3 text-secondary",{"border-0":!r.isEdit}])},[(0,s._)("div",{class:(0,o.C_)(["card-body p-3 bg-light",{rounded:r.isEdit}])},[(0,s._)("h5",a,[(0,s.WI)(t.$slots,"title",{},(()=>[(0,s.Uk)("訂單確認")]))]),(0,s._)("div",c,[(0,s._)("p",d," 商品共 "+(0,o.zw)(r.cartInfo.carts.reduce(((t,e)=>t+e.qty),0))+" 件 ",1),(0,s._)("div",l,[n,(0,s._)("p",u,(0,o.zw)(t.$filters.currency(r.cartInfo.total))+" 元",1)]),p]),(0,s._)("div",{class:(0,o.C_)(["px-2 py-1",{"bg-secondary-subtle":r.isEdit,"border-top border-secondary-subtle":!r.isEdit}])},[r.isEdit?((0,s.wg)(),(0,s.iD)("div",m,[(0,s.wy)((0,s._)("input",{type:"text",class:"form-control border-secondary border-end-0",placeholder:"輸入優惠碼","onUpdate:modelValue":e[0]||(e[0]=t=>y.couponCode=t)},null,512),[[i.nr,y.couponCode]]),(0,s._)("button",{type:"button",class:"btn btn-dark",onClick:e[1]||(e[1]=(...t)=>C.useCoupon&&C.useCoupon(...t))}," 套用 ")])):(0,s.kq)("",!0),r.cartInfo.carts[0].coupon?((0,s.wg)(),(0,s.iD)("div",g,[(0,s._)("p",h,[(0,s.WI)(t.$slots,"coupon",{},(()=>[(0,s.Uk)("已套用的優惠券：")]))]),(0,s._)("p",b,(0,o.zw)(`${r.cartInfo.carts[0].coupon.code} ${r.cartInfo.carts[0].coupon.title}`),1),(0,s._)("p",f,(0,o.zw)(-t.$filters.currency(r.cartInfo.total-r.cartInfo.final_total))+" 元 ",1)])):((0,s.wg)(),(0,s.iD)("div",_,k))],2),(0,s._)("div",{class:(0,o.C_)(["d-flex justify-content-between border-top border-secondary pt-1 px-2",{"border-secondary-subtle":!r.isEdit,"mt-2":r.isEdit}])},[v,(0,s._)("p",x," NT$ "+(0,o.zw)(t.$filters.currency(r.cartInfo.final_total))+" 元 ",1)],2),(0,s.WI)(t.$slots,"button")],2)],2)],64)}var D={data(){return{couponCode:"",isLoading:!1}},props:["cartInfo","isEdit"],inject:["emitter"],methods:{useCoupon(){const t="https://vue3-course-api.hexschool.io/api/nn_macaron/coupon";this.isLoading=!0,this.axios.post(t,{data:{code:this.couponCode}}).then((t=>{this.isLoading=!1,t.data.success?(this.emitter.emit("sendMsg",{message:"已套用優惠",status:"success"}),this.emitter.emit("updateCart")):this.couponError(t.data.message)})).catch((t=>{this.isLoading=!1,this.couponError(t)}))},couponError(t){this.emitter.emit("sendMsg",{message:t,status:"error"})}}},$=r(89);const z=(0,$.Z)(D,[["render",C]]);var j=z},2514:function(t,e,r){r.d(e,{Z:function(){return T}});var s=r(3396),o=r(7139);const i={key:0},a={key:0,class:"alert alert-danger rounded-0 border-0 d-flex"},c=(0,s._)("i",{class:"bi bi-exclamation-triangle-fill me-2"},null,-1),d=(0,s._)("p",{class:"mb-0"},"訂單尚未完成，請完成付款手續",-1),l=[c,d],n={key:1,class:"alert alert-success rounded-0 border-0 d-flex"},u=(0,s._)("i",{class:"bi bi-check-circle me-2"},null,-1),p={class:"mb-0"},m={class:"row g-2 g-sm-3"},g={key:0,class:"col-12 border-secondary border-bottom pb-3"},h=(0,s._)("h5",{class:"fw-bolder"},"選擇付款方式",-1),b={class:"input-group"},f={class:"form-select"},_=(0,s._)("option",{value:"線上刷卡"},"線上刷卡",-1),w=(0,s._)("option",{value:"ATM轉帳"},"ATM轉帳",-1),y={value:"門市付款"},k=(0,s._)("div",{class:"col-sm-4"},[(0,s._)("h5",{class:"fw-bolder mb-0 mt-2 mt-sm-0"},"訂單狀態")],-1),v={class:"col-sm-8"},x={class:"mb-0"},C=(0,s._)("div",{class:"col-sm-4"},[(0,s._)("h5",{class:"fw-bolder mt-2 mt-sm-0 mb-0"},"訂購人資料")],-1),D={class:"col-sm-8"},$={class:"mb-1"},z={class:"mb-1"},j={class:"mb-1"},I={key:0,class:"mb-0",style:{"text-align":"justify"}};function E(t,e,r,c,d,E){const O=(0,s.up)("WebLoading");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(O,{"is-loading":d.isLoading},null,8,["is-loading"]),d.order.user?((0,s.wg)(),(0,s.iD)("div",i,[d.order.is_paid?((0,s.wg)(),(0,s.iD)("div",n,[u,(0,s._)("p",p," 訂單已成立！"+(0,o.zw)(d.order.user.address.indexOf("門市取貨")>-1?"商品將於七個工作天內完成，我們將與您聯繫確認取貨日期。":"商品將於七個工作天內送達。"),1)])):((0,s.wg)(),(0,s.iD)("div",a,l)),(0,s._)("div",{class:(0,o.C_)(["container p-4 bg-light text-secondary",{"mb-3":!d.order.is_paid,rounded:!d.order.is_paid,"bg-secondary-subtle":!d.order.is_paid,"border-secondary":!d.order.is_paid,border:!d.order.is_paid}])},[(0,s._)("div",m,[d.order.is_paid?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",g,[h,(0,s._)("div",b,[(0,s._)("select",f,[_,w,(0,s._)("option",y,(0,o.zw)(d.order.user.address.indexOf("門市取貨")>-1?"門市取貨付款":"門市付款"),1)]),(0,s._)("button",{type:"button",class:"btn btn-secondary",onClick:e[0]||(e[0]=(...t)=>E.payment&&E.payment(...t))}," 付款 ")])])),k,(0,s._)("div",v,[(0,s._)("p",x,(0,o.zw)(d.order.is_paid?"訂單已成立":"尚未付款"),1)]),C,(0,s._)("div",D,[(0,s._)("p",$,(0,o.zw)(d.order.user.name),1),(0,s._)("p",z,(0,o.zw)(d.order.user.tel),1),(0,s._)("p",j,(0,o.zw)(d.order.user.email),1),(0,s._)("p",{class:(0,o.C_)(["mb-0",{"mb-1":d.order.message}])},(0,o.zw)(d.order.user.address),3),d.order.message?((0,s.wg)(),(0,s.iD)("p",I,' 訂單備註："'+(0,o.zw)(d.order.message)+'" ',1)):(0,s.kq)("",!0)])])],2)])):(0,s.kq)("",!0)],64)}r(560);var O={data(){return{order:{},orderProducts:{},orderId:"",isLoading:!1}},inject:["emitter"],emits:["orderData","getError"],props:["isSearch"],methods:{getOrder(t){const e=`https://vue3-course-api.hexschool.io/api/nn_macaron/order/${t}`;this.isLoading=!0,this.axios.get(e).then((e=>{this.isLoading=!1,e.data.success?(e.data.order.is_paid&&"complete"!==this.$route.name?this.$router.push(`/order/complete/${t}`):e.data.order.is_paid||"payment"===this.$route.name||this.$router.push(`/order/payment/${t}`),this.order=e.data.order,this.orderProducts.carts=Object.values(e.data.order.products),this.orderProducts.final_total=e.data.order.total,this.orderProducts.total=this.orderProducts.carts.reduce(((t,e)=>(t+=e.total,t)),0),this.$emit("orderData",this.orderProducts)):this.getOrderFail()})).catch((()=>{this.isLoading=!1,this.getOrderFail()}))},getOrderFail(){this.isSearch?this.$emit("getError"):(this.emitter.emit("sendMsg",{message:"無此訂單",status:"error"}),this.$router.replace("/cart"))},payment(){const t=`https://vue3-course-api.hexschool.io/api/nn_macaron/pay/${this.$route.params.id}`;this.isLoading=!0,this.axios.post(t).then((t=>{this.isLoading=!1,t.data.success?this.$router.push(`/order/complete/${this.$route.params.id}`):this.emitter.emit("sendMsg",{message:"付款失敗，請聯繫店家",status:"error"})})).catch((t=>{this.isLoading=!1,alert(t)}))}},created(){this.isSearch||this.getOrder(this.$route.params.id)}},q=r(89);const L=(0,q.Z)(O,[["render",E]]);var T=L},7498:function(t,e,r){r.d(e,{Z:function(){return T}});var s=r(3396),o=r(7139),i=r(9242);const a={class:"py-2 px-3 d-flex align-items-baseline justify-content-between"},c={class:"text-secondary mb-0 fw-bolder"},d={class:"list-group rounded-0"},l={class:"d-flex flex-column flex-sm-row"},n={style:{"max-width":"100px"},class:"d-flex align-items-center mb-2 mb-sm-0"},u=["src","alt"],p={class:"px-0 px-sm-3 w-auto align-self-sm-center"},m={key:0,class:"mt-2 mb-0"},g={key:1,class:"mt-2 mb-0"},h={class:"text-danger"},b={class:"badge rounded-pill bg-secondary ms-1",style:{"vertical-align":"baseline"}},f={class:"my-2"},_={key:2,class:"input-group input-group-sm w-auto mb-2"},w=["onClick"],y=(0,s._)("i",{class:"bi bi-dash-lg"},null,-1),k=[y],v={class:"input-group-text bg-white border-start-0 border-end-0 border-secondary"},x=["onClick"],C=(0,s._)("i",{class:"bi bi-plus-lg"},null,-1),D=[C],$={key:3,class:"mb-2"},z={class:"mb-0"},j=["onClick"],I={class:"text-end"};function E(t,e,r,y,C,E){const O=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",a,[(0,s._)("h5",c,[(0,s.WI)(t.$slots,"title",{},(()=>[(0,s.Uk)("購物清單")])),(0,s.Uk)(" ("+(0,o.zw)(r.cartInfo.carts.reduce(((t,e)=>t+e.qty),0))+") ",1)]),r.isEdit?((0,s.wg)(),(0,s.iD)("a",{key:0,href:"#",class:"link-gray link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover",onClick:e[0]||(e[0]=(0,i.iM)((t=>this.emitter.emit("cartReset")),["prevent"]))},"清空購物車")):(0,s.kq)("",!0)]),(0,s._)("ul",d,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.cartInfo.carts,((e,i)=>((0,s.wg)(),(0,s.iD)("li",{class:"list-group-item d-flex flex-column-reverse flex-sm-row border-secondary-subtle border-start-0 border-end-0",key:"cart"+i},[(0,s._)("div",l,[(0,s._)("div",n,[(0,s._)("img",{src:e.product.imageUrl,alt:e.product.title,class:"img-fluid"},null,8,u)]),(0,s._)("div",p,[(0,s.Wm)(O,{to:`/product/${e.product.id}`,class:"fw-bolder link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover",target:"_blank"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,o.zw)(e.product.title),1)])),_:2},1032,["to"]),e.product.origin_price===e.product.price?((0,s.wg)(),(0,s.iD)("p",m," 單價 NT$"+(0,o.zw)(t.$filters.currency(e.product.origin_price))+"元 ",1)):((0,s.wg)(),(0,s.iD)("p",g,[(0,s.Uk)(" 單件優惠價 "),(0,s._)("span",h,"NT$"+(0,o.zw)(t.$filters.currency(e.product.price))+"元",1),(0,s._)("span",b,(0,o.zw)(Math.floor(e.product.price/e.product.origin_price*10))+"折",1)])),(0,s._)("p",f,"規格："+(0,o.zw)(e.product.unit),1),r.isEdit?((0,s.wg)(),(0,s.iD)("div",_,[(0,s._)("button",{type:"button",class:(0,o.C_)(["btn btn-outline-secondary",{disabled:1===e.qty}]),onClick:t=>E.cartAdjustNum({product_id:e.product.id,qty:e.qty-1},e.id)},k,10,w),(0,s._)("span",v,(0,o.zw)(e.qty),1),(0,s._)("button",{type:"button",class:(0,o.C_)(["btn btn-outline-secondary",{disabled:10===e.qty}]),onClick:t=>E.cartAdjustNum({product_id:e.product.id,qty:e.qty+1},e.id)},D,10,x)])):((0,s.wg)(),(0,s.iD)("p",$,"數量："+(0,o.zw)(e.qty),1)),(0,s._)("p",z,"小計："+(0,o.zw)(e.total)+" 元",1)])]),r.isEdit?((0,s.wg)(),(0,s.iD)("button",{key:0,type:"button",class:"btn-close ms-auto",onClick:t=>E.emitter.emit("cartDeleteItem",e.id),title:"移除品項"},null,8,j)):(0,s.kq)("",!0)])))),128))]),(0,s._)("div",I,[(0,s._)("a",{href:"#",class:(0,o.C_)(["btn btn-outline-secondary mt-2",{"d-none":!C.scolltopShow||!r.isEdit}]),onClick:e[1]||(e[1]=(0,i.iM)(((...t)=>E.scrolltop&&E.scrolltop(...t)),["prevent"]))},"TOP",2)])],64)}var O={data(){return{scolltopShow:!1}},props:["cartInfo","isEdit"],inject:["emitter"],methods:{cartAdjustNum(t,e){this.emitter.emit("cartAdjustNum",{data:t,cartId:e})},scrolltop(){window.scrollTo({top:0,behavior:"smooth"})}},created(){window.addEventListener("scroll",(()=>{this.scolltopShow=!0}))}},q=r(89);const L=(0,q.Z)(O,[["render",E]]);var T=L},2132:function(t,e,r){r.d(e,{Z:function(){return y}});var s=r(3396),o=r(7139);const i={class:"card border-0"},a=["src","alt"],c={class:"position-absolute bottom-0"},d={key:0,class:"fs-6 ms-3 badge rounded-pill text-bg-primary"},l={key:1,class:"fs-6 ms-3 badge rounded-pill text-bg-secondary"},n={class:"card-img-overlay p-0"},u={class:"d-flex justify-content-center align-items-center rounded py-3 d-lg-none",style:{background:"linear-gradient(\r\n              rgba(41, 41, 43, 0.5) 20%,\r\n              transparent\r\n            )"}},p={class:"fw-bolder text-white px-2 fs-5 text-center"},m={class:"h-100 d-none d-lg-flex flex-column justify-content-center align-items-center rounded productTitle",style:{"background-color":"rgba(41, 41, 43, 0.5)"}},g={class:"fw-bolder text-white px-3 fs-5 text-center mb-5"},h=(0,s._)("p",{class:"fw-bolder text-white fs-5 linkIcon"},[(0,s._)("i",{class:"bi bi-search"})],-1);function b(t,e,r,b,f,_){const w=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",i,[(0,s._)("img",{src:r.product.imageUrl,class:"card-img productImg",alt:r.product.title,style:(0,o.j5)([{"object-fit":"cover"},{height:r.height}])},null,12,a),(0,s._)("div",c,["期間限定"===r.product.category?((0,s.wg)(),(0,s.iD)("p",d," 期間限定 ")):r.product.origin_price!==r.product.price?((0,s.wg)(),(0,s.iD)("p",l," 特價 "+(0,o.zw)(Math.floor(r.product.price/r.product.origin_price*10))+" 折 ",1)):(0,s.kq)("",!0)]),(0,s._)("div",n,[(0,s._)("div",u,[(0,s._)("p",p,(0,o.zw)(r.product.title),1)]),(0,s.Wm)(w,{to:`/product/${r.product.id}`,class:"stretched-link productLink"},null,8,["to"]),(0,s._)("div",m,[(0,s._)("p",g,(0,o.zw)(r.product.title),1),h])])])}var f={props:["product","height"]},_=r(89);const w=(0,_.Z)(f,[["render",b]]);var y=w},2826:function(t,e,r){r.d(e,{Z:function(){return $}});var s=r(3396),o=r(7139),i=r(9242);const a={class:"card h-100"},c={class:"zIndex position-absolute end-0 text-end p-2 icon-bg",style:{height:"5rem",width:"5rem"}},d=(0,s._)("i",{class:"bi bi-suit-heart"},null,-1),l=[d],n={key:0,class:"zIndex position-absolute mt-3 p-2 text-white smallTag bg-secondary"},u={key:1,class:"zIndex position-absolute mt-3 p-2 text-white smallTag"},p=["src","alt"],m={class:"card-body position-relative"},g={class:"d-flex flex-column justify-content-between h-100"},h={class:"card-title fw-bolder"},b={class:"mb-2"},f={key:0,class:"mb-2"},_={key:1,class:"mb-2"},w={class:"text-gray me-2"},y={class:"text-danger"},k=(0,s._)("i",{class:"bi bi-cart-plus me-2"},null,-1);function v(t,e,r,d,v,x){const C=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",a,[(0,s._)("div",c,[(0,s._)("a",{href:"#",class:(0,o.C_)(["link-dark fs-4",{collected:x.isCollected}]),onClick:e[0]||(e[0]=(0,i.iM)((t=>x.setCollect(r.product.id)),["prevent"]))},l,2)]),"期間限定"===r.product.category?((0,s.wg)(),(0,s.iD)("p",n," 期間限定 ")):r.product.origin_price!==r.product.price?((0,s.wg)(),(0,s.iD)("p",u," 特價 "+(0,o.zw)(Math.floor(r.product.price/r.product.origin_price*10))+" 折 ",1)):(0,s.kq)("",!0),(0,s.Wm)(C,{to:`/product/${r.product.id}`,class:"overflow-hidden rounded-top",onClick:x.scrollTop},{default:(0,s.w5)((()=>[(0,s._)("img",{src:r.product.imageUrl,class:"card-img-top productImg",alt:r.product.title,style:{height:"300px","object-fit":"cover"}},null,8,p)])),_:1},8,["to","onClick"]),(0,s._)("div",m,[(0,s.Wm)(C,{to:`/product/${r.product.id}`,class:"stretched-link",onClick:x.scrollTop},null,8,["to","onClick"]),(0,s._)("div",g,[(0,s._)("h5",h,(0,o.zw)(r.product.title),1),(0,s._)("div",null,[(0,s._)("p",b,(0,o.zw)(r.product.unit),1),r.product.origin_price===r.product.price?((0,s.wg)(),(0,s.iD)("p",f," NT$"+(0,o.zw)(t.$filters.currency(r.product.origin_price))+"元 ",1)):((0,s.wg)(),(0,s.iD)("p",_,[(0,s._)("del",w,"NT$"+(0,o.zw)(t.$filters.currency(r.product.origin_price))+"元",1),(0,s._)("span",y,"NT$"+(0,o.zw)(t.$filters.currency(r.product.price))+"元",1)])),(0,s._)("a",{href:"#",class:"zIndex position-relative btn btn-outline-secondary w-100",onClick:e[1]||(e[1]=(0,i.iM)((t=>this.emitter.emit("addCart",{product_id:r.product.id,qty:1})),["prevent"]))},[k,(0,s.Uk)("加到購物車")])])])])])}var x={data(){return{collect:""}},computed:{isCollected(){return this.collect.findIndex((t=>t===this.product.id))>-1}},props:["product"],inject:["emitter"],methods:{setCollect(t){this.emitter.emit("setCollect",t)},scrollTop(){window.scrollTo({top:0,behavior:"smooth"})}},created(){this.emitter.on("collectInfo",(t=>{this.collect=t})),this.emitter.emit("getCollectInfo")}},C=r(89);const D=(0,C.Z)(x,[["render",v]]);var $=D},7357:function(t,e,r){r.d(e,{Z:function(){return b}});var s=r(3396),o=r(7139);const i={class:"container py-5"},a={class:"d-flex flex-wrap justify-content-between align-items-center mb-3"},c={class:"fw-bolder text-primary-emphasis mb-0"},d=(0,s._)("i",{class:"bi bi-caret-right-fill"},null,-1),l={class:"row row-cols-md-3 row-cols-lg-5 g-4"};function n(t,e,r,n,u,p){const m=(0,s.up)("router-link"),g=(0,s.up)("ProductCardClassic"),h=(0,s.up)("ProductCard");return u.showData.length>0?((0,s.wg)(),(0,s.iD)("div",{key:0,class:(0,o.C_)({"bg-primary-subtle":r.bgColor})},[(0,s._)("div",i,[(0,s._)("div",a,[(0,s._)("h5",c,[(0,s.WI)(t.$slots,"title",{},(()=>[(0,s.Uk)("推薦給您 ...")]))]),(0,s.Wm)(m,{to:"/products",class:"link-secondary text-decoration-none",onClick:e[0]||(e[0]=t=>p.emitter.emit("setFilterStore",""))},{default:(0,s.w5)((()=>[(0,s.Uk)("看更多產品"),d])),_:1})]),(0,s._)("div",l,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(u.showData,((t,e)=>((0,s.wg)(),(0,s.iD)("div",{class:"col-12 flex-fill",key:"showData"+e},[r.classicType?((0,s.wg)(),(0,s.j4)(g,{key:0,product:t,height:"300px"},null,8,["product"])):((0,s.wg)(),(0,s.j4)(h,{key:1,product:t,onAddCart:p.addCart},null,8,["product","onAddCart"]))])))),128))])])],2)):(0,s.kq)("",!0)}var u=r(2826),p=r(2132),m={data(){return{allData:[],showData:[],index:0,isLoading:!1}},inject:["emitter"],props:["num","bgColor","isRandom","classicType"],emits:["addCart"],components:{ProductCard:u.Z,ProductCardClassic:p.Z},methods:{getData(){const t="https://vue3-course-api.hexschool.io/api/nn_macaron/products/all";this.isLoading=!0,this.axios.get(t).then((t=>{this.isLoading=!1,t.data.success?(this.allData=t.data.products,this.setShowData()):this.getDataError(`(${t.data.message})`)})).catch((t=>{this.isLoading=!1,this.getDataError(`(${t})`)}))},getDataError(t=""){this.emitter.emit("sendMsg",{message:`產品無法載入 ${t}`,status:"error"})},setShowData(){let t=0;if(this.isRandom){t=this.index;while(t===this.index)t=Math.floor(Math.random()*(this.allData.length-this.num))}this.index=t,this.showData=this.allData.slice(this.index,this.index+this.num)},addCart(t){this.$emit("addCart",t)}},created(){this.getData()}},g=r(89);const h=(0,g.Z)(m,[["render",n]]);var b=h},8745:function(t,e,r){r.r(e),r.d(e,{default:function(){return b}});var s=r(3396);const o={class:"container pb-5"},i={class:"row justify-content-lg-between"},a={class:"col-lg-8"},c={class:"col-lg-4"};function d(t,e,r,d,l,n){const u=(0,s.up)("OrderStatus"),p=(0,s.up)("OrderCard"),m=(0,s.up)("Orderlist"),g=(0,s.up)("WebRecommand");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",o,[(0,s._)("div",i,[(0,s._)("div",a,[(0,s.Wm)(u,{onOrderData:n.getOrder,isSearch:!1},null,8,["onOrderData"]),l.getOrderComplete?((0,s.wg)(),(0,s.j4)(p,{key:0,"cart-info":l.orderProducts,isEdit:!1},{title:(0,s.w5)((()=>[(0,s.Uk)("訂單資料")])),coupon:(0,s.w5)((()=>[(0,s.Uk)("優惠券折扣：")])),_:1},8,["cart-info"])):(0,s.kq)("",!0)]),(0,s._)("div",c,[l.getOrderComplete?((0,s.wg)(),(0,s.j4)(m,{key:0,"cart-info":l.orderProducts,isEdit:!1},{title:(0,s.w5)((()=>[(0,s.Uk)("訂單明細")])),_:1},8,["cart-info"])):(0,s.kq)("",!0)])])]),(0,s.Wm)(g,{num:5,bgColor:!0,isRandom:!0,classicType:!0})],64)}var l=r(7498),n=r(1582),u=r(2514),p=r(7357),m={data(){return{orderProducts:{},getOrderComplete:!1}},props:["cartInfo"],components:{Orderlist:l.Z,OrderCard:n.Z,OrderStatus:u.Z,WebRecommand:p.Z},methods:{getOrder(t){this.orderProducts=t,this.getOrderComplete=!0}}},g=r(89);const h=(0,g.Z)(m,[["render",d]]);var b=h}}]);
//# sourceMappingURL=745.3ed0445b.js.map