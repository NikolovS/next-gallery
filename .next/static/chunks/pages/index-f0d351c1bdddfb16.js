(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(3678)}])},934:function(d,b,a){"use strict";a.d(b,{Z:function(){return o}});var e=a(5893);a(7294);var f=a(8463),g=a(9738),h=a(951),i=a(9912),j=a(2318),k=a(1907),l=a(282),c=a(1664),m=a.n(c),n=a(7926);function o(b){var a=b.product,c=b.addToCartHandler;return(0,e.jsxs)(f.Z,{children:[(0,e.jsx)(m(),{href:"/product/".concat(a.slug),passHref:!0,children:(0,e.jsxs)(g.Z,{children:[(0,e.jsx)(h.Z,{component:"img",image:a.image,title:a.name}),(0,e.jsxs)(i.Z,{children:[(0,e.jsx)(j.Z,{children:a.name}),(0,e.jsx)(n.Z,{value:a.rating,readOnly:!0})]})]})}),(0,e.jsxs)(k.Z,{children:[(0,e.jsxs)(j.Z,{children:["$",a.price]}),(0,e.jsx)(l.Z,{size:"small",color:"primary",onClick:function(){return c(a)},children:"Add to cart"})]})]})}},3678:function(g,b,a){"use strict";a.r(b),a.d(b,{"__N_SSP":function(){return y},default:function(){return z}});var h=a(7568),i=a(6042),j=a(9396),c=a(4051),k=a.n(c),l=a(5893),d=a(1664),m=a.n(d),n=a(9659),o=a(2318),p=a(1749),q=a(5789),e=a(9669),r=a.n(e),s=a(1163),t=a(8766),u=a(7294),v=a(934),f=a(3056),w=a.n(f),x=a(9629),y=!0;function z(a){var c,d=a.topRatedProducts,e=a.featuredProducts,b=(0,u.useContext)(t.y),g=b.state,y=b.dispatch,z=(0,s.useRouter)(),f=(0,x.Z)(),A=(c=(0,h.Z)(k().mark(function a(b){var c,d,e;return k().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=(c=g.cart.cartItems.find(function(a){return a._id===b._id}))?c.quantity+1:1,a.next=4,r().get("/api/products/".concat(b._id));case 4:if(!((e=a.sent.data).countInStock<d)){a.next=8;break}return window.alert("Sorry, Product is out of stock."),a.abrupt("return");case 8:y({type:"CART_ADD_ITEM",payload:(0,j.Z)((0,i.Z)({},b),{quantity:d})}),z.push("/cart");case 10:case"end":return a.stop()}},a)})),function(a){return c.apply(this,arguments)});return(0,l.jsxs)(q.Z,{children:[(0,l.jsx)(w(),{className:f.mt1,animation:"slide",children:e.map(function(a){return(0,l.jsx)(m(),{href:"/product/".concat(a.slug),passHref:!0,children:(0,l.jsx)(n.Z,{children:(0,l.jsx)("img",{src:a.featuredImage,alt:a.name,className:f.featuredImage})})},a._id)})}),(0,l.jsx)(o.Z,{variant:"h2",children:"Popular Products"}),(0,l.jsx)(p.Z,{container:!0,spacing:3,children:d.map(function(a){return(0,l.jsx)(p.Z,{item:!0,md:4,children:(0,l.jsx)(v.Z,{product:a,addToCartHandler:A})},a.name)})})]})}}},function(a){a.O(0,[961,319,48,170,971,448,789,774,888,179],function(){var b;return a(a.s=5557)}),_N_E=a.O()}])