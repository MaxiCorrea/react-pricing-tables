(this["webpackJsonpreact-pricing-tables"]=this["webpackJsonpreact-pricing-tables"]||[]).push([[0],{69:function(e,t,r){"use strict";r.r(t);var n,a=r(1),i=r(0),o=r.n(i),c=r(14),s=r.n(c),l=r(9),d=r(28),b=r(3),u=Object(b.a)({root:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}),p=function(){var e=u();return Object(a.jsx)("div",{className:e.root,children:Object(a.jsx)(d.MagicSpinner,{size:100,color:"#000",loading:!0})})},x=Object(b.a)({header:{textAlign:"center",padding:"25px"},title:{fontFamily:"Rubik",fontSize:"40px",letterSpacing:"2px"},subtitle:{fontFamily:"Rubik",fontSize:"20px",letterSpacing:"2px",textAlign:"center"}}),j=function(e){var t=x();return Object(a.jsxs)("header",{className:t.header,children:[Object(a.jsx)("h1",{className:t.title,children:e.title}),Object(a.jsx)("p",{className:t.subtitle,children:e.subtitle})]})},f=Object(b.a)({root:{textAlign:"center",margin:"20px",boxShadow:"1px 0 10px 15px rgba(0,0,0,.1)",transition:"transform 1.6s","&:hover":{transform:"scale(1.1)"},"@media screen and (max-width: 657px)":{flex:"100%",maxWidth:"100%",marginBottom:"15px"}}}),h=function(e){var t=f();return Object(a.jsx)("div",{className:t.root,children:e.children})},O=Object(b.a)({basic:{fontFamily:"Rubik",textDecoration:"none",display:"block",margin:"0 auto",marginBottom:"10px",width:"80%",padding:"15px",borderRadius:"8px",backgroundColor:"#6ab04c",color:"#fff","&:hover":{backgroundColor:"#78b25f"}},enterprise:{fontFamily:"Rubik",textDecoration:"none",display:"block",margin:"0 auto",marginBottom:"10px",width:"80%",padding:"15px",borderRadius:"8px",backgroundColor:"#641E16",color:"#fff","&:hover":{backgroundColor:"#712c25"}},standard:{fontFamily:"Rubik",textDecoration:"none",display:"block",margin:"0 auto",marginBottom:"10px",width:"80%",padding:"15px",borderRadius:"8px",backgroundColor:"#4A235A",color:"#fff","&:hover":{backgroundColor:"#6b3880"}}}),g=function(e){var t=O();return Object(a.jsx)("a",{href:e.href,className:"basic"===e.color?t.basic:"enterprise"===e.color?t.enterprise:t.standard,children:e.caption})},m=Object(b.a)({basic:{fontFamily:"Rubik",fontSize:"30px",padding:"20px",borderTopLeftRadius:"4px",borderTopRightRadius:"4px",backgroundColor:"#eb4d4b"},enterprise:{fontFamily:"Rubik",fontSize:"30px",padding:"20px",borderTopLeftRadius:"4px",borderTopRightRadius:"4px",backgroundColor:"#f0932b"},standard:{fontFamily:"Rubik",fontSize:"30px",padding:"20px",borderTopLeftRadius:"4px",borderTopRightRadius:"4px",backgroundColor:"#26b69a"}}),R=function(e){var t=m();return Object(a.jsx)("div",{className:"basic"===e.color?t.basic:"enterprise"===e.color?t.enterprise:t.standard,children:e.title})},S=Object(b.a)({root:{fontFamily:"Rubik",padding:"20px 15px",fontSize:"20px"}}),v=function(e){var t=S();return Object(a.jsx)("li",{className:t.root,children:e.text})},y=Object(b.a)({root:{listStyleType:"none",padding:"25px",margin:0}}),k=function(e){var t=y();return Object(a.jsx)("ul",{className:t.root,children:e.children})},w=Object(b.a)({priceSimbol:{fontFamily:"Rubik",fontSize:"26px"},priceValue:{fontFamily:"Rubik",fontSize:"46px"}}),E=function(e){var t=w();return Object(a.jsxs)("h4",{className:t.priceValue,children:[Object(a.jsx)("small",{className:t.priceSimbol,children:"$"}),e.price]})},C=Object(b.a)({root:{margin:"30px"}}),N=function(e){var t=C();return Object(a.jsx)("section",{className:t.root,children:e.children})},F=Object(b.a)({root:{display:"flex",justifyContent:"center",flexWrap:"wrap"}}),T=function(e){var t=F();return Object(a.jsx)("div",{className:t.root,children:e.children})},L=function(){var e=Object(l.c)((function(e){return e.tables}));return Object(a.jsx)(a.Fragment,{children:0!==e.rows.length?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(j,{title:"Pricing Tables",subtitle:"My services"}),Object(a.jsx)(N,{children:Object(a.jsx)(T,{children:e.rows.map((function(e,t){return Object(a.jsxs)(h,{children:[Object(a.jsx)(R,{title:e.title,color:e.color}),Object(a.jsx)(k,{children:e.items.map((function(e,t){return Object(a.jsx)(v,{text:e.text},t)}))}),Object(a.jsx)(E,{price:e.price}),Object(a.jsx)(g,{href:e.url,caption:"Purcharse",color:e.color})]},t)}))})})]}):Object(a.jsx)(a.Fragment,{})})},A=r(12),D=r.n(A),_=r(15),z=r(31),B=r(32),I=r(33),U=r.n(I),G=function(){function e(){Object(z.a)(this,e)}return Object(B.a)(e,null,[{key:"getTables",value:function(){var e=Object(_.a)(D.a.mark((function e(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",U.a.get("https://java-pricing-tables-api.onrender.com/tables").then((function(e){return e.data})).catch((function(e){throw e})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}();!function(e){e.LOADING="TABLES/LOADING",e.SUCCESS="TABLES/SUCCESS",e.ERROR="TABLES/ERROR"}(n||(n={}));var P=function(){var e=Object(l.c)((function(e){return e.tables})),t=Object(l.b)();return i.useEffect((function(){t(function(){var e=Object(_.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:n.LOADING}),G.getTables().then((function(e){e.length>0?t({type:n.SUCCESS,payload:e}):t({type:n.ERROR})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[t]),e.loading?Object(a.jsx)(p,{}):e.error?Object(a.jsx)(a.Fragment,{children:"Error"}):Object(a.jsx)(L,{})},V=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,70)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;r(e),n(e),a(e),i(e),o(e)}))},X=r(34),M={rows:[],loading:!1,error:!1},J=r(7),W=Object(J.c)({tables:function(){var e=arguments.length>1?arguments[1]:void 0;switch(e.type){case n.LOADING:return{rows:[],loading:!0,error:!1};case n.SUCCESS:return{rows:e.payload,loading:!1,error:!1};case n.ERROR:return{rows:[],loading:!1,error:!0};default:return M}}});var $=Object(J.e)(W,void 0,Object(J.d)(Object(J.a)(X.a),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():J.d));s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(l.a,{store:$,children:Object(a.jsx)(P,{})})}),document.getElementById("root")),V()}},[[69,1,2]]]);
//# sourceMappingURL=main.30c3b192.chunk.js.map