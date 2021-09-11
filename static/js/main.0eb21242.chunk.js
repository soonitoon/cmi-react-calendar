(this["webpackJsonpcmi-react-calendar"]=this["webpackJsonpcmi-react-calendar"]||[]).push([[0],{24:function(t,n,e){"use strict";e.r(n);var a,r,o,c,i,u,s,l,b,j=e(0),d=e.n(j),m=e(9),h=e.n(m),f=e(14),O=e(4),y=new Date,x={year:y.getFullYear(),month:y.getMonth(),date:y.getDate()},p=d.a.createContext(),g=e(2),v=function(t,n){var e,a=n.dateState,r=t.target.classList;r.contains("down-year-btn")&&(e=Object(g.a)(Object(g.a)({},a),{},{year:0===a.year?0:a.year-1})),r.contains("up-year-btn")&&(e=Object(g.a)(Object(g.a)({},a),{},{year:a.year+1})),r.contains("down-month-btn")&&(e=0===a.month?Object(g.a)(Object(g.a)({},a),{},{month:11,year:0===a.year?0:a.year-1}):Object(g.a)(Object(g.a)({},a),{},{month:a.month-1})),r.contains("up-month-btn")&&(e=11===a.month?Object(g.a)(Object(g.a)({},a),{},{month:0,year:a.year+1}):Object(g.a)(Object(g.a)({},a),{},{month:a.month+1})),n.setDateState(e)},w=e(3),S=e(1),k=w.c.button(a||(a=Object(O.a)(["\n  border: none;\n  border-radius: 10px;\n  background-color: transparent;\n  font-size: 30px;\n  color: var(--point-skyblue-color);\n"]))),D=function(t){var n=t.what,e=t.where,a=Object(j.useContext)(p);return Object(S.jsx)(k,{className:"".concat(e,"-").concat(n,"-btn"),onClick:function(t){v(t,a)},children:"down"===e?"<":">"})},z=w.c.div(r||(r=Object(O.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-bottom: ","px;\n"])),(function(t){return t.marginBottom})),C=w.c.h2(o||(o=Object(O.a)(["\n  font-size: ","px;\n"])),(function(t){return t.fontSize})),F=function(t){var n=t.what,e=Object(j.useContext)(p).dateState,a="year"===n?50:40,r="year"===n?e.year:e.month+1,o="year"===n?0:20;return Object(S.jsxs)(z,{marginBottom:o,children:[Object(S.jsx)(D,{what:n,where:"down"}),Object(S.jsx)(C,{fontSize:a,children:r}),Object(S.jsx)(D,{what:n,where:"up"})]})},M=function(){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(F,{what:"year"}),Object(S.jsx)(F,{what:"month"})]})},B=w.c.ul(c||(c=Object(O.a)(["\n  margin-bottom: 30px;\n  color: var(--point-skyblue-color);\n  display: grid;\n  grid-template-columns: repeat(7, minmax(90px, auto));\n  text-align: center;\n"]))),L=function(){return Object(S.jsx)(B,{children:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((function(t,n){return Object(S.jsx)("li",{children:t},n)}))})},Y=function(t){for(var n=t.month,e=0===n?11:n-1,a=Object(g.a)(Object(g.a)({},t),{},{month:e}),r=E(a),o=[],c=Object(g.a)(Object(g.a)({},t),{},{date:1}),i=0;i<J(c);i++)o.unshift(r-i);return o},G=function(t){var n=E(t);t=Object(g.a)(Object(g.a)({},t),{},{date:n});for(var e=J(t),a=[],r=1;r<=6-e;r++)a.push(r);return a},J=function(t){var n=t.year,e=t.month,a=t.date;return new Date(n,e,a).getDay()},T=function(t){for(var n=[],e=1;e<=E(t);e++)n.push(e);return n},E=function(t){var n=t.year,e=t.month;return new Date(n,e+1,0).getDate()},H=function(t){var n=new Date,e=null;return t.year===n.getFullYear()&&t.month===n.getMonth()&&(e=t.date),{today:e,dateList:[Y(t),T(t),G(t)]}},I=w.c.li(i||(i=Object(O.a)(["\n  color: "," !important;\n  color: "," !important;\n"])),(function(t){return t.today}),(function(t){return t.isgray})),N=function(t){var n=t.date,e=t.today,a=t.isGray;return n.map((function(t,n){return Object(S.jsx)(I,{today:t===e?"var(--point-skyblue-color)":"",isgray:a&&"gray",children:t},n)}))},P=w.c.ul(u||(u=Object(O.a)(["\n  display: grid;\n  grid-template-columns: repeat(7, minmax(90px, auto));\n  grid-template-rows: repeat(6, minmax(60px, auto));\n  text-align: center;\n"]))),R=function(){var t=Object(j.useContext)(p),n=H(t.dateState),e=n.today,a=n.dateList;return Object(S.jsx)(P,{children:a.map((function(t,n){return Object(S.jsx)(N,{date:t,today:e,isGray:1!==n},n)}))})},W=e(13),q=Object(w.a)(s||(s=Object(O.a)(["\n  ",'\n  :root {\n    --main-font-family: "Roboto", sans-serif;\n    --title-font-family: "Dancing Script", cursive;\n    --main-background-color: #0f111b;\n    --main-font-color: white;\n    --point-skyblue-color: #09cefc;\n    --sunday-red-color: #ee3b50;\n    --not-current-date-color: grey;\n  }\n\n  #root {\n    font-family: var(--main-font-family);\n    font-size: 25px;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--main-background-color);\n    color: var(--main-font-color);\n  }\n\n  li:nth-child(7n + 1) {\n    color: var(--sunday-red-color);\n  }\n'])),W.a),A=w.c.header(l||(l=Object(O.a)(["\n  font-family: var(--title-font-family);\n  font-size: 70px;\n  margin-bottom: 40px;\n"]))),K=w.c.footer(b||(b=Object(O.a)(["\n  font-size: 14px;\n"]))),Q=function(){var t=Object(j.useState)(x),n=Object(f.a)(t,2),e=n[0],a=n[1];return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(q,{}),Object(S.jsx)(A,{children:"Simple Calendar"}),Object(S.jsxs)(p.Provider,{value:{dateState:e,setDateState:a},children:[Object(S.jsx)(M,{}),Object(S.jsx)(L,{}),Object(S.jsx)(R,{})]}),Object(S.jsxs)(K,{children:["Hyuno Choi \u24d2 ",(new Date).getFullYear()]})]})};h.a.render(Object(S.jsx)(d.a.StrictMode,{children:Object(S.jsx)(Q,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.0eb21242.chunk.js.map