(this["webpackJsonpcmi-react-calendar"]=this["webpackJsonpcmi-react-calendar"]||[]).push([[0],{31:function(t,n,e){"use strict";e.r(n);var r,c,a,o,i,j,s,u,b,O=e(0),l=e.n(O),d=e(8),h=e.n(d),m=e(5),f=e(10),x=e(2),p="CALENDAR/INCREMENT_YEAR",y="CALENDAR/DECREMENT_YEAR",g="CALENDAR/INCREMENT_MONTH",E="CALENDAR/DECREMENT_MONTH",v=new Date,D={year:v.getFullYear(),month:v.getMonth(),date:v.getDate()},w=Object(f.a)({date:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case p:return Object(x.a)(Object(x.a)({},t),{},{year:t.year+1});case y:return Object(x.a)(Object(x.a)({},t),{},{year:0===t.year?0:t.year-1});case g:return 11===t.month?Object(x.a)(Object(x.a)({},t),{},{month:0,year:t.year+1}):Object(x.a)(Object(x.a)({},t),{},{month:t.month+1});case E:return 0===t.month?Object(x.a)(Object(x.a)({},t),{},{month:11,year:0===t.year?0:t.year-1}):Object(x.a)(Object(x.a)({},t),{},{month:t.month-1});default:return t}}}),N=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),_=Object(f.b)(w,N),C=e(4),R=e(3),S=e(14),T='"Roboto", sans-serif',A='"Dancing Script", cursive',L="#0f111b",M="white",k="#09cefc",z="#ee3b50",F="grey",I=Object(R.a)(r||(r=Object(C.a)(["\n  ","\n\n  #root {\n    font-family: ",";\n    font-size: 25px;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: ",";\n    color: ",";\n  }\n\n  li:nth-child(7n + 1) {\n    color: ",";\n  }\n"])),S.a,T,L,M,z),Y=R.c.div(c||(c=Object(C.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-bottom: ","px;\n"])),(function(t){return t.marginBottom})),B=R.c.h2(a||(a=Object(C.a)(["\n  font-size: ","px;\n"])),(function(t){return t.fontSize})),X=R.c.button(o||(o=Object(C.a)(["\n  border: none;\n  border-radius: 10px;\n  background-color: transparent;\n  font-size: 30px;\n  color: ",";\n"])),k),H=e(7),G=e(1),J=function(){var t=Object(m.c)((function(t){return t.date})),n=Object(m.b)(),e=0,r=50,c=20,a=40;return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(Y,{marginBottom:e,children:[Object(G.jsx)(X,{onClick:function(){n({type:y})},children:Object(G.jsx)(H.a,{})}),Object(G.jsx)(B,{fontSize:r,children:t.year}),Object(G.jsx)(X,{onClick:function(){n({type:p})},children:Object(G.jsx)(H.b,{})})]}),Object(G.jsxs)(Y,{marginBottom:c,children:[Object(G.jsx)(X,{onClick:function(){n({type:E})},children:Object(G.jsx)(H.a,{})}),Object(G.jsx)(B,{fontSize:a,children:t.month+1}),Object(G.jsx)(X,{onClick:function(){n({type:g})},children:Object(G.jsx)(H.b,{})})]})]})},U=R.c.ul(i||(i=Object(C.a)(["\n  margin-bottom: 30px;\n  color: ",";\n  display: grid;\n  grid-template-columns: repeat(7, minmax(90px, auto));\n  text-align: center;\n"])),k),V=function(){return Object(G.jsx)(U,{children:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((function(t){return Object(G.jsx)("li",{children:t},t)}))})},W=function(t){var n=t.year,e=t.month,r=t.date;return new Date(n,e,r).getDay()},q=function(t){var n=t.year,e=t.month;return new Date(n,e+1,0).getDate()},K=function(t){var n,e=t.month,r=0===e?11:e-1,c=Object(x.a)(Object(x.a)({},t),{},{month:r}),a=q(c);n=[];for(var o=Object(x.a)(Object(x.a)({},t),{},{date:1}),i=0;i<W(o);i++)n.unshift(a-i);return n},P=function(t){var n=q(t);t=Object(x.a)(Object(x.a)({},t),{},{date:n});var e,r=W(t);e=[];for(var c=1;c<=6-r;c++)e.push(c);return e},Q=function(t){var n;n=[];for(var e=1;e<=q(t);e++)n.push(e);return n},Z=function(t){var n=new Date,e=-1;return t.year===n.getFullYear()&&t.month===n.getMonth()&&(e=t.date),{today:e,dateLists:[K(t),Q(t),P(t)]}},$=R.c.li(j||(j=Object(C.a)(["\n  color: "," !important;\n  color: "," !important;\n"])),(function(t){return t.today}),(function(t){return t.isgray})),tt=function(t){var n=t.dateList,e=t.today,r=t.isGray;return Object(G.jsx)(G.Fragment,{children:n.map((function(t,n){return Object(G.jsx)($,{today:t===e?k:"",isgray:r?F:"",children:t},n)}))})},nt=R.c.ul(s||(s=Object(C.a)(["\n  display: grid;\n  grid-template-columns: repeat(7, minmax(90px, auto));\n  grid-template-rows: repeat(6, minmax(60px, auto));\n  text-align: center;\n"]))),et=function(){var t=Object(m.c)((function(t){return t.date})),n=Z(t),e=n.today,r=n.dateLists;return Object(G.jsx)(nt,{children:r.map((function(t,n){return Object(G.jsx)(tt,{dateList:t,today:e,isGray:1!==n},n)}))})},rt=R.c.header(u||(u=Object(C.a)(["\n  font-family: ",";\n  font-size: 70px;\n  margin-bottom: 40px;\n"])),A),ct=function(){return Object(G.jsx)(rt,{children:"Simple Calendar"})},at=R.c.footer(b||(b=Object(C.a)(["\n  font-size: 14px;\n"]))),ot=function(){var t="".concat("Hyuno Choi"," \u24d2 ").concat((new Date).getFullYear());return Object(G.jsx)(at,{children:t})},it=function(){return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(ct,{}),Object(G.jsx)(J,{}),Object(G.jsx)(V,{}),Object(G.jsx)(et,{}),Object(G.jsx)(ot,{})]})};h.a.render(Object(G.jsxs)(l.a.StrictMode,{children:[Object(G.jsx)(I,{}),Object(G.jsx)(m.a,{store:_,children:Object(G.jsx)(it,{})})]}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.e2bf7eff.chunk.js.map