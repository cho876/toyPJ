(this.webpackJsonpfrontjs=this.webpackJsonpfrontjs||[]).push([[0],{56:function(t,e,n){},57:function(t,e,n){},64:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(9),o=n.n(r),i=(n(56),n(57),n(44)),l=n(11),s=n(30),u=n(31),j=n(32),h=n(38),d=n(37),b=n(101),p=n(100),f=n(95),O=n(8),x=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).onChange=function(t){a.setState(Object(s.a)({},t.target.name,t.target.value))},a.submitUrl=function(){window.localStorage.setItem("webhookUrl",a.state.input_url),a.props.history.push("/sendComp")},a.state={input_url:null},a}return Object(j.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(f.a,{variant:"h4",style:v,children:"Slack webhook \uc785\ub825 \ud398\uc774"}),Object(O.jsxs)("form",{style:m,children:[Object(O.jsx)(p.a,{type:"text",placeholder:"slack\uc758 webhook url\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694...",name:"input_url",fullWidth:!0,margin:"normal",variant:"outlined",value:this.state.input_url,onChange:this.onChange}),Object(O.jsx)(b.a,{variant:"contained",color:"primary",onClick:this.submitUrl,children:"\ud655\uc778"})]})]})}}]),n}(c.a.Component),m={display:"flex",flexFlow:"row wrap"},v={display:"flex",justifyContents:"center"},g=x,w=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).loadUser=function(){console.log(window.localStorage.getItem("webhookUrl"))},a.onChange=function(t){a.setState(Object(s.a)({},t.target.name,t.target.value))},a.state={input_url:null},a}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.loadUser()}},{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)(p.a,{label:"\ub0b4\uc6a9",multiline:!0,rows:4,fullwidth:!0,defaultValue:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."})})}}]),n}(c.a.Component),y={marginTop:"20px"},C=function(){return Object(O.jsx)("div",{children:Object(O.jsx)(i.a,{children:Object(O.jsx)("div",{style:y,children:Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{exact:!0,path:"/",component:g}),Object(O.jsx)(l.a,{path:"/sendComp",component:w})]})})})})},k=n(99);var S=function(){return Object(O.jsx)("div",{children:Object(O.jsx)(k.a,{children:Object(O.jsx)(C,{})})})},U=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,103)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),r(t),o(t)}))};o.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(S,{})}),document.getElementById("root")),U()}},[[64,1,2]]]);
//# sourceMappingURL=main.f6112779.chunk.js.map