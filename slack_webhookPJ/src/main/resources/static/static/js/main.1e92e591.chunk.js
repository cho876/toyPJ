(this.webpackJsonpfrontjs=this.webpackJsonpfrontjs||[]).push([[0],{58:function(e,t,n){},59:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(9),i=n.n(l),c=(n(58),n(59),n(44)),o=n(11),s=n(30),u=n(31),j=n(32),h=n(38),d=n(37),b=n(101),p=n(100),m=n(95),f=n(6),x=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).onChange=function(e){a.setState(Object(s.a)({},e.target.name,e.target.value))},a.submitUrl=function(){window.localStorage.setItem("webhookUrl",a.state.input_url),a.props.history.push("/sendComp")},a.state={input_url:null},a}return Object(j.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(m.a,{variant:"h4",style:g,children:"Slack webhook \uc785\ub825 \ud398\uc774"}),Object(f.jsxs)("form",{style:O,children:[Object(f.jsx)(p.a,{type:"text",placeholder:"slack\uc758 webhook url\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694...",name:"input_url",fullWidth:!0,margin:"normal",variant:"outlined",value:this.state.input_url,onChange:this.onChange}),Object(f.jsx)(b.a,{variant:"contained",color:"primary",onClick:this.submitUrl,children:"\ud655\uc778"})]})]})}}]),n}(r.a.Component),O={display:"flex",flexFlow:"row wrap"},g={display:"flex",justifyContents:"center"},v=x,y=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).loadUser=function(){console.log(window.localStorage.getItem("webhookUrl"))},a.onChange=function(e){a.setState(Object(s.a)({},e.target.name,e.target.value))},a.state={input_url:null,username:"",department:"",request:""},a}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.loadUser()}},{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(m.a,{variant:"h4",style:w,children:"Add User"}),Object(f.jsxs)("form",{style:C,children:[Object(f.jsx)(p.a,{type:"text",placeholder:"\ub2f4\ub2f9\uc790 \uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694...",name:"username",fullWidth:!0,margin:"normal",value:this.state.username,onChange:this.onChange}),Object(f.jsx)(p.a,{type:"text",placeholder:"\ub2f4\ub2f9 \ubd80\uc11c\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694...",name:"department",fullWidth:!0,margin:"normal",value:this.state.department,onChange:this.onChange}),Object(f.jsx)(p.a,{label:"\ub0b4\uc6a9",multiline:!0,rows:3,fullWidth:!0,margin:"normal",placeholder:"\uc694\uccad \ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694..."}),Object(f.jsx)(b.a,{variant:"contained",color:"primary",onClick:this.saveUser,children:"Save"})]})]})}}]),n}(r.a.Component),C={display:"flex",flexFlow:"row wrap"},w={display:"flex",justifyContent:"center"},k=y,S={marginTop:"20px"},U=function(){return Object(f.jsx)("div",{children:Object(f.jsx)(c.a,{children:Object(f.jsx)("div",{style:S,children:Object(f.jsxs)(o.c,{children:[Object(f.jsx)(o.a,{exact:!0,path:"/",component:v}),Object(f.jsx)(o.a,{path:"/sendComp",component:k})]})})})})},F=n(99);var _=function(){return Object(f.jsx)("div",{children:Object(f.jsx)(F.a,{children:Object(f.jsx)(U,{})})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,103)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,l=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),l(e),i(e)}))};i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(_,{})}),document.getElementById("root")),I()}},[[66,1,2]]]);
//# sourceMappingURL=main.1e92e591.chunk.js.map