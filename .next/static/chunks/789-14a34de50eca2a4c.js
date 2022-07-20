"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[789],{5789:function(g,b,a){a.d(b,{Z:function(){return S}});var h=a(7568),c=a(4051),i=a.n(c),j=a(5893),k=a(7294),d=a(9008),l=a.n(d),e=a(1664),m=a.n(e),n=a(3559),o=a(3457),p=a(5834),q=a(5258),r=a(8358),s=a(253),t=a(7812),u=a(9659),v=a(2318),w=a(3003),x=a(2822),y=a(998),z=a(5517),A=a(5757),B=a(5575),C=a(9570),D=a(9009),E=a(282),F=a(5681),G=a(5639),H=a(3832),I=a(8884),J=a(8995),K=a(7298),L=a(9629),M=a(8766),N=a(1955),O=a(1163),P=a(6935),f=a(9669),Q=a.n(f),R=a(1419);function S(b){var $,_=b.children,e=b.title,f=b.description,g=(0,k.useContext)(M.y),c=g.state,ae=g.dispatch,af=(0,O.useRouter)(),S=c.darkMode,T=c.cart,d=c.userInfo,aa=(0,n.Z)({typography:{h1:{fontSize:"1.6rem",fontWeight:400,margin:"1rem 0"},h2:{fontSize:"1.4rem",fontWeight:400,margin:"1rem 0"}},palette:{type:S?"dark":"light",primary:{main:"#f0c000"},secondary:{main:"#208080"}}}),a=(0,L.Z)(),U=(0,k.useState)(!1),ab=U[0],ag=U[1],V=function(){ag(!1)},W=(0,k.useState)([]),ac=W[0],ah=W[1],ai=(0,P.Ds)().enqueueSnackbar,aj=($=(0,h.Z)(i().mark(function a(){var b;return i().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Q().get("/api/products/categories");case 3:ah(b=a.sent.data),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),ai((0,R.b)(a.t0),{variant:"error"});case 10:case"end":return a.stop()}},a,null,[[0,7]])})),function(){return $.apply(this,arguments)}),X=(0,k.useState)(""),ak=X[0],al=X[1];(0,k.useEffect)(function(){aj()},[]);var Y=(0,k.useState)(null),Z=Y[0],am=Y[1],ad=function(b,a){am(null),a&&af.push(a)};return(0,j.jsxs)("div",{children:[(0,j.jsxs)(l(),{children:[(0,j.jsx)("title",{children:e?"".concat(e," - Next Yangog"):"Next Yangog"}),f&&(0,j.jsx)("meta",{name:"description",content:f})]}),(0,j.jsxs)(o.Z,{theme:aa,children:[(0,j.jsx)(p.ZP,{}),(0,j.jsx)(q.Z,{position:"static",className:a.navbar,children:(0,j.jsxs)(r.Z,{className:a.toolbar,children:[(0,j.jsxs)(s.Z,{display:"flex",alignItems:"center",children:[(0,j.jsx)(t.Z,{edge:"start","aria-label":"open drawer",onClick:function(){ag(!0)},className:a.menuButton,children:(0,j.jsx)(I.Z,{className:a.navbarButton})}),(0,j.jsx)(m(),{href:"/",passHref:!0,children:(0,j.jsx)(u.Z,{children:(0,j.jsx)(v.Z,{className:a.brand,children:"amazona"})})})]}),(0,j.jsx)(w.ZP,{anchor:"left",open:ab,onClose:V,children:(0,j.jsxs)(x.Z,{children:[(0,j.jsx)(y.Z,{children:(0,j.jsxs)(s.Z,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[(0,j.jsx)(v.Z,{children:"Shopping by category"}),(0,j.jsx)(t.Z,{"aria-label":"close",onClick:V,children:(0,j.jsx)(K.Z,{})})]})}),(0,j.jsx)(z.Z,{light:!0}),ac.map(function(a){return(0,j.jsx)(m(),{href:"/search?category=".concat(a),passHref:!0,children:(0,j.jsx)(y.Z,{button:!0,component:"a",onClick:V,children:(0,j.jsx)(A.Z,{primary:a})})},a)})]})}),(0,j.jsx)("div",{className:a.grow,children:" "}),(0,j.jsx)("div",{className:a.searchSection,children:(0,j.jsxs)("form",{onSubmit:function(a){a.preventDefault(),af.push("/search?query=".concat(ak))},className:a.searchForm,children:[(0,j.jsx)(B.Z,{name:"query",className:a.searchInput,placeholder:"Search products",onChange:function(a){al(a.target.value)}}),(0,j.jsx)(t.Z,{type:"submit",className:a.iconButton,"aria-label":"search",children:(0,j.jsx)(J.Z,{})})]})}),(0,j.jsxs)("div",{children:[(0,j.jsx)(C.Z,{checked:S,onChange:function(){ae({type:S?"DARK_MODE_OFF":"DARK_MODE_ON"}),N.Z.set("darkMode",S?"OFF":"ON")}}),(0,j.jsx)(m(),{href:"/cart",passHref:!0,children:(0,j.jsx)(u.Z,{children:(0,j.jsx)(v.Z,{component:"span",children:T.cartItems.length>0?(0,j.jsx)(D.Z,{color:"secondary",badgeContent:T.cartItems.length,children:"Cart"}):"Cart"})})}),d?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(E.Z,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(a){am(a.currentTarget)},className:a.navbarButton,children:d.name}),(0,j.jsxs)(F.Z,{id:"simple-menu",anchorEl:Z,keepMounted:!0,open:Boolean(Z),onClose:ad,children:[(0,j.jsx)(G.Z,{onClick:function(a){return ad(a,"/profile")},children:"Profile"}),(0,j.jsx)(G.Z,{onClick:function(a){return ad(a,"/order-history")},children:"Order History"}),d.isAdmin&&(0,j.jsx)(G.Z,{onClick:function(a){return ad(a,"/admin/dashboard")},children:"Admin Dashboard"}),(0,j.jsx)(G.Z,{onClick:function(){am(null),ae({type:"USER_LOGOUT"}),N.Z.remove("userInfo"),N.Z.remove("cartItems"),N.Z.remove("shippinhAddress"),N.Z.remove("paymentMethod"),af.push("/")},children:"Logout"})]})]}):(0,j.jsx)(m(),{href:"/login",passHref:!0,children:(0,j.jsx)(u.Z,{children:(0,j.jsx)(v.Z,{component:"span",children:"Login"})})})]})]})}),(0,j.jsx)(H.Z,{className:a.main,children:_}),(0,j.jsx)("footer",{className:a.footer,children:(0,j.jsx)(v.Z,{children:"All rights reserverd. Next Yangog"})})]})]})}},1419:function(g,b,a){a.d(b,{b:function(){return o}});var c=a(7568),d=a(4051),e=a.n(d),f=a(6785),h=a.n(f),i=a(3454),j={};function k(){return(k=(0,c.Z)(e().mark(function a(){var b;return e().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!j.isConnected){a.next=3;break}return console.log("already connected"),a.abrupt("return");case 3:if(!(h().connections.length>0)){a.next=10;break}if(j.isConnected=h().connections[0].readyState,1!==j.isConnected){a.next=8;break}return console.log("use previous connection"),a.abrupt("return");case 8:return a.next=10,h().disconnect();case 10:return a.next=12,h().connect(i.env.MONGODB_URI,{useNewUrlParser:!0,useUnifiedTopology:!0});case 12:b=a.sent,console.log("new connection"),j.isConnected=b.connections[0].readyState;case 15:case"end":return a.stop()}},a)}))).apply(this,arguments)}function l(){return(l=(0,c.Z)(e().mark(function a(){return e().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!j.isConnected){a.next=8;break}return a.next=4,h().disconnect();case 4:j.isConnected=!1,a.next=8;break;case 7:console.log("not disconnected");case 8:case"end":return a.stop()}},a)}))).apply(this,arguments)}var m,n={connect:function(){return k.apply(this,arguments)},disconnect:function(){return l.apply(this,arguments)},convertDocToObj:function(a){return a._id=a._id.toString(),a.createdAt=a.createdAt.toString(),a.updatedAt=a.updatedAt.toString(),a}},o=function(a){return a.response&&a.response.data&&a.response.data.message?a.response.data.message:a.message};(0,c.Z)(e().mark(function a(b,c,d,f){return e().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.disconnect();case 2:d.status(500).send({message:b.toString()});case 3:case"end":return a.stop()}},a)}))},9629:function(d,b,a){var e=a(4924),c=(0,a(1120).Z)(function(a){return{navbar:{backgroundColor:"#203040","& a":{color:"#ffffff",marginLeft:10}},brand:{fontWeight:"bold",fontSize:"1.5rem"},main:{minHeight:"80vh"},grow:{flexGrow:1},footer:{textAlign:"center",marginTop:10},section:{marginTop:10,marginBottom:10},form:{width:"100%",maxWidth:800,margin:"0 auto"},navbarButton:{color:"#ffffff",textTransform:"initial"},transperantBackground:{backgroundColor:"transparent"},error:{color:"#f04040"},fullWidth:{width:"100%"},reviewForm:{maxWidth:800,width:"100%"},reviewItem:{marginRight:"1rem",borderRight:"1px #808080 solid",paddingRight:"1rem"},toolbar:{justifyContent:"space-between"},menuButton:{padding:0},mt1:{marginTop:"1rem"},searchSection:(0,e.Z)({display:"none"},a.breakpoints.up("md"),{display:"flex"}),searchForm:{border:"1px solid #ffffff",backgroundColor:"#ffffff",borderRadius:5},searchInput:{paddingLeft:5,color:"#000000","& ::placeholder":{color:"#606060"}},iconButton:{backgroundColor:"#f8c040",padding:5,borderRadius:"0 5px 5px 0","& span":{color:"#000000"}},sort:{marginRight:5},fullContainer:{height:"100vh"},mapInputBox:{position:"absolute",display:"flex",left:0,right:0,margin:"10px auto",width:300,height:40,"& input":{width:250}}}});b.Z=c}}])