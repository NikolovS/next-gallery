(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[744],{5477:function(f,b,a){"use strict";var g=a(7462),h=a(5987),c=a(7294),i=a(6010),d=a(1591),j=a(3871),e=c.forwardRef(function(b,w){var a=b.classes,x=b.className,k=b.color,l=void 0===k?"primary":k,m=b.disableShrink,n=b.size,o=void 0===n?40:n,y=b.style,p=b.thickness,e=void 0===p?3.6:p,q=b.value,r=void 0===q?0:q,s=b.variant,d=void 0===s?"indeterminate":s,z=(0,h.Z)(b,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),f={},t={},u={};if("determinate"===d||"static"===d){var v=2*Math.PI*((44-e)/2);f.strokeDasharray=v.toFixed(3),u["aria-valuenow"]=Math.round(r),f.strokeDashoffset="".concat(((100-r)/100*v).toFixed(3),"px"),t.transform="rotate(-90deg)"}return c.createElement("div",(0,g.Z)({className:(0,i.Z)(a.root,x,"inherit"!==l&&a["color".concat((0,j.Z)(l))],{determinate:a.determinate,indeterminate:a.indeterminate,static:a.static}[d]),style:(0,g.Z)({width:o,height:o},t,y),ref:w,role:"progressbar"},u,z),c.createElement("svg",{className:a.svg,viewBox:"".concat(22," ").concat(22," ").concat(44," ").concat(44)},c.createElement("circle",{className:(0,i.Z)(a.circle,void 0!==m&&m&&a.circleDisableShrink,{determinate:a.circleDeterminate,indeterminate:a.circleIndeterminate,static:a.circleStatic}[d]),style:f,cx:44,cy:44,r:(44-e)/2,fill:"none",strokeWidth:e})))});b.Z=(0,d.Z)(function(a){return{root:{display:"inline-block"},static:{transition:a.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},determinate:{transition:a.transitions.create("transform")},colorPrimary:{color:a.palette.primary.main},colorSecondary:{color:a.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:a.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},circleDeterminate:{transition:a.transitions.create("stroke-dashoffset")},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}},{name:"MuiCircularProgress",flip:!1})(e)},8714:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/order-history",function(){return c(2471)}])},2471:function(h,b,a){"use strict";a.r(b);var i=a(7568),j=a(6042),k=a(9396),c=a(4051),l=a.n(c),m=a(5893),n=a(1749),o=a(8463),p=a(2822),q=a(998),r=a(5757),s=a(2318),t=a(5477),u=a(6847),v=a(2302),w=a(3750),x=a(7394),y=a(8222),z=a(9613),A=a(282),d=a(9669),B=a.n(d),e=a(5152),f=a.n(e),g=a(1664),C=a.n(g),D=a(1163),E=a(7294),F=a(5789),G=a(1419),H=a(8766),I=a(9629);function J(a,b){switch(b.type){case"FETCH_REQUEST":return(0,k.Z)((0,j.Z)({},a),{loading:!0,error:""});case"FETCH_SUCCESS":return(0,k.Z)((0,j.Z)({},a),{loading:!1,orders:b.payload,error:""});case"FETCH_FAILED":return(0,k.Z)((0,j.Z)({},a),{loading:!1,error:b.payload})}}function K(){var h=(0,D.useRouter)(),e=(0,E.useContext)(H.y).state,a=(0,I.Z)(),c=(0,E.useReducer)(J,{loading:!0,orders:[],error:""}),b=c[0],f=b.loading,d=b.error,g=b.orders,j=c[1],k=e.userInfo;return(0,E.useEffect)(function(){var a;k||h.push("/login"),(a=(0,i.Z)(l().mark(function a(){var b;return l().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,j({type:"FETCH_REQUEST"}),a.next=4,B().get("/api/orders/history",{headers:{authorization:"Bearer ".concat(k.token)}});case 4:j({type:"FETCH_SUCCESS",payload:b=a.sent.data}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),j({type:"FETCH_FAIL",paylod:(0,G.b)(a.t0)});case 11:case"end":return a.stop()}},a,null,[[0,8]])})),function(){return a.apply(this,arguments)})()},[]),(0,m.jsx)(F.Z,{title:"Order History",children:(0,m.jsxs)(n.Z,{container:!0,spacing:1,children:[(0,m.jsx)(n.Z,{item:!0,md:3,xs:12,children:(0,m.jsx)(o.Z,{className:a.section,children:(0,m.jsxs)(p.Z,{children:[(0,m.jsx)(C(),{href:"/profile",passHref:!0,children:(0,m.jsx)(q.Z,{button:!0,component:"a",children:(0,m.jsx)(r.Z,{primary:"User Profile"})})}),(0,m.jsx)(C(),{href:"/order-history",passHref:!0,children:(0,m.jsx)(q.Z,{selected:!0,button:!0,component:"a",children:(0,m.jsx)(r.Z,{primary:"Order History"})})})]})})}),(0,m.jsx)(n.Z,{item:!0,md:9,xs:12,children:(0,m.jsx)(o.Z,{className:a.section,children:(0,m.jsxs)(p.Z,{children:[(0,m.jsx)(q.Z,{children:(0,m.jsx)(s.Z,{component:"h1",variant:"h1",children:"Order History"})}),(0,m.jsx)(q.Z,{children:f?(0,m.jsx)(t.Z,{}):d?(0,m.jsx)(s.Z,{className:a.error,children:d}):(0,m.jsx)(u.Z,{children:(0,m.jsxs)(v.Z,{children:[(0,m.jsx)(w.Z,{children:(0,m.jsxs)(x.Z,{children:[(0,m.jsx)(y.Z,{children:"ID"}),(0,m.jsx)(y.Z,{children:"DATE"}),(0,m.jsx)(y.Z,{children:"TOTAL"}),(0,m.jsx)(y.Z,{children:"PAID"}),(0,m.jsx)(y.Z,{children:"DELIVERED"}),(0,m.jsx)(y.Z,{children:"ACTION"})]})}),(0,m.jsx)(z.Z,{children:g.map(function(a){return(0,m.jsxs)(x.Z,{children:[(0,m.jsx)(y.Z,{children:a._id.substring(20,24)}),(0,m.jsx)(y.Z,{children:a.createdAt}),(0,m.jsxs)(y.Z,{children:["$",a.totalPrice]}),(0,m.jsx)(y.Z,{children:a.isPaid?"paid at ".concat(a.paidAt):"not paid"}),(0,m.jsx)(y.Z,{children:a.isDelivered?"delivered at ".concat(a.deliveredAt):"not delivered"}),(0,m.jsx)(y.Z,{children:(0,m.jsx)(C(),{href:"/order/".concat(a._id),passHref:!0,children:(0,m.jsx)(A.Z,{variant:"contained",children:"Details"})})})]},a._id)})})]})})})]})})})]})})}b.default=f()(function(){return Promise.resolve(K)},{ssr:!1})}},function(a){a.O(0,[961,48,170,349,789,774,888,179],function(){var b;return a(a.s=8714)}),_N_E=a.O()}])