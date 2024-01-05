"use strict";(self["webpackChunkproject_macaron"]=self["webpackChunkproject_macaron"]||[]).push([[590],{1122:function(t,e,r){r.d(e,{Z:function(){return a}});var s=r(3396);const o={class:"d-none"};function i(t,e,r,i,c,l){return(0,s.wg)(),(0,s.iD)("p",o,"購物車資訊")}var c={inject:["emitter"],methods:{getCartInfo(){this.emitter.emit("getCartInfo")}},created(){this.emitter.on("cartInfo",(t=>{this.$emit("updateInfo",t)})),this.getCartInfo()}},l=r(89);const n=(0,l.Z)(c,[["render",i]]);var a=n},7498:function(t,e,r){r.d(e,{Z:function(){return U}});var s=r(3396),o=r(7139),i=r(9242);const c={class:"py-2 px-3 d-flex align-items-baseline justify-content-between"},l={class:"text-secondary mb-0 fw-bolder"},n={class:"list-group rounded-0"},a={class:"d-flex flex-column flex-sm-row"},d={style:{"max-width":"100px"},class:"d-flex align-items-center mb-2 mb-sm-0"},u=["src","alt"],p={class:"px-0 px-sm-3 w-auto align-self-sm-center"},m={key:0,class:"mt-2 mb-0"},b={key:1,class:"mt-2 mb-0"},g={class:"text-danger"},f={class:"badge rounded-pill bg-secondary ms-1",style:{"vertical-align":"baseline"}},h={class:"my-2"},w={key:2,class:"input-group input-group-sm w-auto mb-2"},y=["onClick"],_=(0,s._)("i",{class:"bi bi-dash-lg"},null,-1),k=[_],v={class:"input-group-text bg-white border-start-0 border-end-0 border-secondary"},x=["onClick"],C=(0,s._)("i",{class:"bi bi-plus-lg"},null,-1),D=[C],I={key:3,class:"mb-2"},j={class:"mb-0"},z=["onClick"],$={class:"text-end"};function T(t,e,r,_,C,T){const q=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",c,[(0,s._)("h5",l,[(0,s.WI)(t.$slots,"title",{},(()=>[(0,s.Uk)("購物清單")])),(0,s.Uk)(" ("+(0,o.zw)(r.cartInfo.carts.reduce(((t,e)=>t+e.qty),0))+") ",1)]),r.isEdit?((0,s.wg)(),(0,s.iD)("a",{key:0,href:"#",class:"link-gray link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover",onClick:e[0]||(e[0]=(0,i.iM)((t=>this.emitter.emit("cartReset")),["prevent"]))},"清空購物車")):(0,s.kq)("",!0)]),(0,s._)("ul",n,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.cartInfo.carts,((e,i)=>((0,s.wg)(),(0,s.iD)("li",{class:"list-group-item d-flex flex-column-reverse flex-sm-row border-secondary-subtle border-start-0 border-end-0",key:"cart"+i},[(0,s._)("div",a,[(0,s._)("div",d,[(0,s._)("img",{src:e.product.imageUrl,alt:e.product.title,class:"img-fluid"},null,8,u)]),(0,s._)("div",p,[(0,s.Wm)(q,{to:`/product/${e.product.id}`,class:"fw-bolder link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover",target:"_blank"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,o.zw)(e.product.title),1)])),_:2},1032,["to"]),e.product.origin_price===e.product.price?((0,s.wg)(),(0,s.iD)("p",m," 單價 NT$"+(0,o.zw)(t.$filters.currency(e.product.origin_price))+"元 ",1)):((0,s.wg)(),(0,s.iD)("p",b,[(0,s.Uk)(" 單件優惠價 "),(0,s._)("span",g,"NT$"+(0,o.zw)(t.$filters.currency(e.product.price))+"元",1),(0,s._)("span",f,(0,o.zw)(Math.floor(e.product.price/e.product.origin_price*10))+"折",1)])),(0,s._)("p",h,"規格："+(0,o.zw)(e.product.unit),1),r.isEdit?((0,s.wg)(),(0,s.iD)("div",w,[(0,s._)("button",{type:"button",class:(0,o.C_)(["btn btn-outline-secondary",{disabled:1===e.qty}]),onClick:t=>T.cartAdjustNum({product_id:e.product.id,qty:e.qty-1},e.id)},k,10,y),(0,s._)("span",v,(0,o.zw)(e.qty),1),(0,s._)("button",{type:"button",class:(0,o.C_)(["btn btn-outline-secondary",{disabled:10===e.qty}]),onClick:t=>T.cartAdjustNum({product_id:e.product.id,qty:e.qty+1},e.id)},D,10,x)])):((0,s.wg)(),(0,s.iD)("p",I,"數量："+(0,o.zw)(e.qty),1)),(0,s._)("p",j,"小計："+(0,o.zw)(e.total)+" 元",1)])]),r.isEdit?((0,s.wg)(),(0,s.iD)("button",{key:0,type:"button",class:"btn-close ms-auto",onClick:t=>T.emitter.emit("cartDeleteItem",e.id),title:"移除品項"},null,8,z)):(0,s.kq)("",!0)])))),128))]),(0,s._)("div",$,[(0,s._)("a",{href:"#",class:(0,o.C_)(["btn btn-outline-secondary mt-2",{"d-none":!C.scolltopShow||!r.isEdit}]),onClick:e[1]||(e[1]=(0,i.iM)(((...t)=>T.scrolltop&&T.scrolltop(...t)),["prevent"]))},"TOP",2)])],64)}var q={data(){return{scolltopShow:!1}},props:["cartInfo","isEdit"],inject:["emitter"],methods:{cartAdjustNum(t,e){this.emitter.emit("cartAdjustNum",{data:t,cartId:e})},scrolltop(){window.scrollTo({top:0,behavior:"smooth"})}},created(){window.addEventListener("scroll",(()=>{this.scolltopShow=!0}))}},W=r(89);const Z=(0,W.Z)(q,[["render",T]]);var U=Z},2132:function(t,e,r){r.d(e,{Z:function(){return _}});var s=r(3396),o=r(7139);const i={class:"card border-0"},c=["src","alt"],l={class:"position-absolute bottom-0"},n={key:0,class:"fs-6 ms-3 badge rounded-pill text-bg-primary"},a={key:1,class:"fs-6 ms-3 badge rounded-pill text-bg-secondary"},d={class:"card-img-overlay p-0"},u={class:"d-flex justify-content-center align-items-center rounded py-3 d-lg-none",style:{background:"linear-gradient(\r\n              rgba(41, 41, 43, 0.5) 20%,\r\n              transparent\r\n            )"}},p={class:"fw-bolder text-white px-2 fs-5 text-center"},m={class:"h-100 d-none d-lg-flex flex-column justify-content-center align-items-center rounded productTitle",style:{"background-color":"rgba(41, 41, 43, 0.5)"}},b={class:"fw-bolder text-white px-3 fs-5 text-center mb-5"},g=(0,s._)("p",{class:"fw-bolder text-white fs-5 linkIcon"},[(0,s._)("i",{class:"bi bi-search"})],-1);function f(t,e,r,f,h,w){const y=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",i,[(0,s._)("img",{src:r.product.imageUrl,class:"card-img productImg",alt:r.product.title,style:(0,o.j5)([{"object-fit":"cover"},{height:r.height}])},null,12,c),(0,s._)("div",l,["期間限定"===r.product.category?((0,s.wg)(),(0,s.iD)("p",n," 期間限定 ")):r.product.origin_price!==r.product.price?((0,s.wg)(),(0,s.iD)("p",a," 特價 "+(0,o.zw)(Math.floor(r.product.price/r.product.origin_price*10))+" 折 ",1)):(0,s.kq)("",!0)]),(0,s._)("div",d,[(0,s._)("div",u,[(0,s._)("p",p,(0,o.zw)(r.product.title),1)]),(0,s.Wm)(y,{to:`/product/${r.product.id}`,class:"stretched-link productLink"},null,8,["to"]),(0,s._)("div",m,[(0,s._)("p",b,(0,o.zw)(r.product.title),1),g])])])}var h={props:["product","height"]},w=r(89);const y=(0,w.Z)(h,[["render",f]]);var _=y},2826:function(t,e,r){r.d(e,{Z:function(){return I}});var s=r(3396),o=r(7139),i=r(9242);const c={class:"card h-100"},l={class:"zIndex position-absolute end-0 text-end p-2 icon-bg",style:{height:"5rem",width:"5rem"}},n=(0,s._)("i",{class:"bi bi-suit-heart"},null,-1),a=[n],d={key:0,class:"zIndex position-absolute mt-3 p-2 text-white smallTag bg-secondary"},u={key:1,class:"zIndex position-absolute mt-3 p-2 text-white smallTag"},p=["src","alt"],m={class:"card-body position-relative"},b={class:"d-flex flex-column justify-content-between h-100"},g={class:"card-title fw-bolder"},f={class:"mb-2"},h={key:0,class:"mb-2"},w={key:1,class:"mb-2"},y={class:"text-gray me-2"},_={class:"text-danger"},k=(0,s._)("i",{class:"bi bi-cart-plus me-2"},null,-1);function v(t,e,r,n,v,x){const C=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",c,[(0,s._)("div",l,[(0,s._)("a",{href:"#",class:(0,o.C_)(["link-dark fs-4",{collected:x.isCollected}]),onClick:e[0]||(e[0]=(0,i.iM)((t=>x.setCollect(r.product.id)),["prevent"]))},a,2)]),"期間限定"===r.product.category?((0,s.wg)(),(0,s.iD)("p",d," 期間限定 ")):r.product.origin_price!==r.product.price?((0,s.wg)(),(0,s.iD)("p",u," 特價 "+(0,o.zw)(Math.floor(r.product.price/r.product.origin_price*10))+" 折 ",1)):(0,s.kq)("",!0),(0,s.Wm)(C,{to:`/product/${r.product.id}`,class:"overflow-hidden rounded-top",onClick:x.scrollTop},{default:(0,s.w5)((()=>[(0,s._)("img",{src:r.product.imageUrl,class:"card-img-top productImg",alt:r.product.title,style:{height:"300px","object-fit":"cover"}},null,8,p)])),_:1},8,["to","onClick"]),(0,s._)("div",m,[(0,s.Wm)(C,{to:`/product/${r.product.id}`,class:"stretched-link",onClick:x.scrollTop},null,8,["to","onClick"]),(0,s._)("div",b,[(0,s._)("h5",g,(0,o.zw)(r.product.title),1),(0,s._)("div",null,[(0,s._)("p",f,(0,o.zw)(r.product.unit),1),r.product.origin_price===r.product.price?((0,s.wg)(),(0,s.iD)("p",h," NT$"+(0,o.zw)(t.$filters.currency(r.product.origin_price))+"元 ",1)):((0,s.wg)(),(0,s.iD)("p",w,[(0,s._)("del",y,"NT$"+(0,o.zw)(t.$filters.currency(r.product.origin_price))+"元",1),(0,s._)("span",_,"NT$"+(0,o.zw)(t.$filters.currency(r.product.price))+"元",1)])),(0,s._)("a",{href:"#",class:"zIndex position-relative btn btn-outline-secondary w-100",onClick:e[1]||(e[1]=(0,i.iM)((t=>this.emitter.emit("addCart",{product_id:r.product.id,qty:1})),["prevent"]))},[k,(0,s.Uk)("加到購物車")])])])])])}var x={data(){return{collect:""}},computed:{isCollected(){return this.collect.findIndex((t=>t===this.product.id))>-1}},props:["product"],inject:["emitter"],methods:{setCollect(t){this.emitter.emit("setCollect",t)},scrollTop(){window.scrollTo({top:0,behavior:"smooth"})}},created(){this.emitter.on("collectInfo",(t=>{this.collect=t})),this.emitter.emit("getCollectInfo")}},C=r(89);const D=(0,C.Z)(x,[["render",v]]);var I=D},7357:function(t,e,r){r.d(e,{Z:function(){return f}});var s=r(3396),o=r(7139);const i={class:"container py-5"},c={class:"d-flex flex-wrap justify-content-between align-items-center mb-3"},l={class:"fw-bolder text-primary-emphasis mb-0"},n=(0,s._)("i",{class:"bi bi-caret-right-fill"},null,-1),a={class:"row row-cols-md-3 row-cols-lg-5 g-4"};function d(t,e,r,d,u,p){const m=(0,s.up)("router-link"),b=(0,s.up)("ProductCardClassic"),g=(0,s.up)("ProductCard");return u.showData.length>0?((0,s.wg)(),(0,s.iD)("div",{key:0,class:(0,o.C_)({"bg-primary-subtle":r.bgColor})},[(0,s._)("div",i,[(0,s._)("div",c,[(0,s._)("h5",l,[(0,s.WI)(t.$slots,"title",{},(()=>[(0,s.Uk)("推薦給您 ...")]))]),(0,s.Wm)(m,{to:"/products",class:"link-secondary text-decoration-none",onClick:e[0]||(e[0]=t=>p.emitter.emit("setFilterStore",""))},{default:(0,s.w5)((()=>[(0,s.Uk)("看更多產品"),n])),_:1})]),(0,s._)("div",a,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(u.showData,((t,e)=>((0,s.wg)(),(0,s.iD)("div",{class:"col-12 flex-fill",key:"showData"+e},[r.classicType?((0,s.wg)(),(0,s.j4)(b,{key:0,product:t,height:"300px"},null,8,["product"])):((0,s.wg)(),(0,s.j4)(g,{key:1,product:t,onAddCart:p.addCart},null,8,["product","onAddCart"]))])))),128))])])],2)):(0,s.kq)("",!0)}var u=r(2826),p=r(2132),m={data(){return{allData:[],showData:[],index:0,isLoading:!1}},inject:["emitter"],props:["num","bgColor","isRandom","classicType"],emits:["addCart"],components:{ProductCard:u.Z,ProductCardClassic:p.Z},methods:{getData(){const t="https://vue3-course-api.hexschool.io/api/nn_macaron/products/all";this.isLoading=!0,this.axios.get(t).then((t=>{this.isLoading=!1,t.data.success?(this.allData=t.data.products,this.setShowData()):this.getDataError(`(${t.data.message})`)})).catch((t=>{this.isLoading=!1,this.getDataError(`(${t})`)}))},getDataError(t=""){this.emitter.emit("sendMsg",{message:`產品無法載入 ${t}`,status:"error"})},setShowData(){let t=0;if(this.isRandom){t=this.index;while(t===this.index)t=Math.floor(Math.random()*(this.allData.length-this.num))}this.index=t,this.showData=this.allData.slice(this.index,this.index+this.num)},addCart(t){this.$emit("addCart",t)}},created(){this.getData()}},b=r(89);const g=(0,b.Z)(m,[["render",d]]);var f=g},5590:function(t,e,r){r.r(e),r.d(e,{default:function(){return E}});var s=r(3396),o=r(7139);const i={class:"container py-5"},c={key:0},l={key:0,class:"row flex-column-reverse flex-lg-row justify-content-lg-evenly"},n={class:"col-lg-6"},a={class:"col-lg-4"},d={class:"card border-secondary-subtle border-0 mb-5 text-secondary"},u={class:"card-body p-3 bg-secondary-subtle rounded"},p=(0,s._)("h5",{class:"fw-bolder mb-3"},"購物車總計",-1),m={class:"border-bottom border-secondary mb-1 pb-1"},b={class:"d-flex justify-content-between"},g=(0,s._)("p",{class:"mb-1"},"小計",-1),f={class:"mb-1"},h=(0,s._)("div",{class:"d-flex justify-content-between"},[(0,s._)("p",{class:"mb-1"},"運費"),(0,s._)("p",{class:"mb-1"},"活動免運")],-1),w={class:"d-flex justify-content-between border-top border-secondary pt-1 mb-3"},y=(0,s._)("p",{class:"mb-1"},"總金額",-1),_={class:"mb-1 fw-bolder"},k=(0,s._)("div",null,null,-1),v={key:1},x={class:"row justify-content-center"},C={class:"col-lg-6"},D={class:"py-3 px-4 bg-light text-center"},I=(0,s._)("h5",{class:"text-secondary py-2 border-bottom border-secondary-subtle"}," 購物車 (0) ",-1),j={class:"py-5"},z=(0,s._)("p",{class:"text-secondary d-sm-inline-block me-sm-2"}," 購物車尚無資料... ",-1),$=(0,s._)("i",{class:"bi bi-arrow-up-right"},null,-1);function T(t,e,r,T,q,W){const Z=(0,s.up)("WebLoading"),U=(0,s.up)("CartInfo"),L=(0,s.up)("Orderlist"),N=(0,s.up)("router-link"),E=(0,s.up)("WebRecommand");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(Z,{"is-loading":q.isLoading},null,8,["is-loading"]),(0,s.Wm)(U,{onUpdateInfo:W.updateInfo},null,8,["onUpdateInfo"]),(0,s._)("div",i,[q.cartInfo.carts.length>0?((0,s.wg)(),(0,s.iD)("div",c,[q.cartInfo.carts[0].product?((0,s.wg)(),(0,s.iD)("div",l,[(0,s._)("div",n,[(0,s.Wm)(L,{"cart-info":q.cartInfo,isEdit:!0},null,8,["cart-info"])]),(0,s._)("div",a,[(0,s._)("div",d,[(0,s._)("div",u,[p,(0,s._)("p",m," 商品共 "+(0,o.zw)(q.cartInfo.carts.reduce(((t,e)=>t+e.qty),0))+" 件 ",1),(0,s._)("div",b,[g,(0,s._)("p",f," NT$ "+(0,o.zw)(t.$filters.currency(q.cartInfo.total))+" 元 ",1)]),h,(0,s._)("div",w,[y,(0,s._)("p",_," NT$ "+(0,o.zw)(t.$filters.currency(q.cartInfo.total))+" 元 ",1)]),(0,s.Wm)(N,{to:"/order/check",class:"btn btn-secondary w-100"},{default:(0,s.w5)((()=>[(0,s.Uk)("去結帳")])),_:1})])])])])):(0,s.kq)("",!0),k])):((0,s.wg)(),(0,s.iD)("div",v,[(0,s._)("div",x,[(0,s._)("div",C,[(0,s._)("div",D,[I,(0,s._)("div",j,[z,(0,s.Wm)(N,{to:"/products",class:"link-secondary fw-bolder text-decoration-none border-bottom border-secondary d-sm-inline-block"},{default:(0,s.w5)((()=>[(0,s.Uk)("查看商品"),$])),_:1})])])])])]))]),(0,s.Wm)(E,{num:5,bgColor:!0,isRandom:!0,classicType:!0})],64)}var q=r(7498),W=r(1122),Z=r(7357),U={data(){return{cartInfo:{carts:[]},isLoading:!1}},components:{CartInfo:W.Z,Orderlist:q.Z,WebRecommand:Z.Z},methods:{updateInfo(t){this.cartInfo=t,this.isLoading=!1}},created(){this.isLoading=!0}},L=r(89);const N=(0,L.Z)(U,[["render",T]]);var E=N}}]);
//# sourceMappingURL=590.5b062cee.js.map