(this.webpackJsonpfrontjs=this.webpackJsonpfrontjs||[]).push([[0],{120:function(e,t,a){e.exports=a(155)},129:function(e,t,a){},151:function(e,t,a){},152:function(e,t,a){},153:function(e,t,a){},155:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),o=a(10),l=a.n(o),i=a(64),s=a(9),u=a(38),m=a(216),p="MAIN/LOGIN_SUCCESS",f="MAIN/LOGIN_FAIL",g="MAIN/PAGE_CHANGE",d="MAIN/JOIN_FAIL",h=Object(m.a)((n={},Object(s.a)(n,p,(function(e,t){return Object(u.a)(Object(u.a)({},e),{},{accountId:t.payload.accountId,role:t.payload.role,isLogged:!0})})),Object(s.a)(n,f,(function(e,t){return Object(u.a)(Object(u.a)({},e),{},{isLogged:!1,errorMessage:t.payload})})),Object(s.a)(n,g,(function(e,t){return Object(u.a)(Object(u.a)({},e),{},{errorMessage:null,isLoginPage:!e.isLoginPage})})),Object(s.a)(n,d,(function(e,t){return Object(u.a)(Object(u.a)({},e),{},{errorMessage:t.payload})})),n),{accountId:null,isLogged:!1,errorMessage:null,isLoginPage:!0,role:null}),b=Object(i.b)({main:h}),v=a(103),E=a(102),O=a(74),j=(a(129),a(59)),C=a(13),y=a(31),w=a.n(y),k=a(39),N=a(30),M=a(218),P=a(203),S=a(202),I=a(214),x=a(199),L=a(204),A=a(215),D=a(99),F=a.n(D),B=a(100),G=a.n(B),z=a(157),_=a(200),R=a(201);function W(){return c.a.createElement(z.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",c.a.createElement(x.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var J=Object(_.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function T(e){var t=e.handleClick,a=e.message,n=e.isLoginPage,o=e.pageChange,l=J(),i=Object(r.useState)(""),s=Object(N.a)(i,2),u=s[0],m=s[1],p=Object(r.useState)(""),f=Object(N.a)(p,2),g=f[0],d=f[1];return Object(r.useEffect)((function(){m(""),d("")}),[n]),c.a.createElement(R.a,{component:"main",maxWidth:"xs"},c.a.createElement(S.a,null),c.a.createElement("div",{className:l.paper},c.a.createElement(M.a,{className:l.avatar},n?c.a.createElement(F.a,null):c.a.createElement(G.a,null)),c.a.createElement(z.a,{component:"h1",variant:"h5"},n?"Sign in":"Sign up"),c.a.createElement(z.a,{variant:"subtitle1",gutterBottom:!0},a),c.a.createElement("form",{className:l.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),t(u,g)}},c.a.createElement(I.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:u,onChange:function(e){return m(e.target.value)}}),c.a.createElement(I.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:g,onChange:function(e){return d(e.target.value)}}),c.a.createElement(P.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:l.submit},n?"Sign In":"Sing Up"),c.a.createElement(L.a,{container:!0},c.a.createElement(L.a,{item:!0,xs:!0},c.a.createElement(x.a,{href:"#",variant:"body2"},"Forgot password?")),c.a.createElement(L.a,{item:!0},c.a.createElement(x.a,{href:"#",variant:"body2",onClick:function(){return o()}},n?"Don't have an account? Sign Up":"Already have an account? Sign In"))))),c.a.createElement(A.a,{mt:8},c.a.createElement(W,null)))}var U=a(62),q=a.n(U),Y="http://localhost:8070/chatbot";function H(e,t){return K.apply(this,arguments)}function K(){return(K=Object(k.a)(w.a.mark((function e(t,a){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.a.post(Y+"/onLogin",{user_id:t,user_pw:a});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var V=a(217),Q=Object(V.a)(p,(function(e,t){return{accountId:e,role:t}})),X=Object(V.a)(f,(function(e){return e})),Z=Object(V.a)(g),$=Object(V.a)(d,(function(e){return e})),ee=Object(O.b)((function(e){return{errorMessage:e.main.errorMessage,isLoginPage:e.main.isLoginPage}}),(function(e){return{loginSuccess:function(t,a){return e(Q(t,a))},loginFail:function(t){return e(X(t))},pageChange:function(){return e(Z())},joinFail:function(t){return e($(t))}}}))((function(e){var t=e.isLoginPage,a=e.errorMessage,n=e.loginSuccess,r=e.loginFail,o=e.pageChange,l=(e.joinFail,Object(C.f)()),i=function(){var e=Object(k.a)(w.a.mark((function e(t,a){var c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H(t,a);case 2:c=e.sent,console.log(c.data),1===c.data?(console.log("\uac78\ub9bc"),n("kwonee","admin"),alert("\ub85c\uadf8\uc778\uc5d0 \uc131\uacf5\ud558\uc168\uc2b5\ub2c8\ub2e4. \uac8c\uc2dc\ud310\uc73c\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4."),l.push("/mainComp")):(console.log("\u3134"),r("\ub85c\uadf8\uc778 \uc2e4\ud328"),alert("\ub85c\uadf8\uc778\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4."));case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return c.a.createElement(T,{handleClick:i,message:a,isLoginPage:t,pageChange:o})})),te=a(21),ae=a(22),ne=a(28),re=a(27),ce=a(205),oe=a(206),le=a(207),ie=a(73),se=a.n(ie),ue=Object(_.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function me(e){var t=e.title,a=ue(),n=Object(C.f)();return c.a.createElement("div",{className:a.root},c.a.createElement(ce.a,{position:"static"},c.a.createElement(oe.a,null,c.a.createElement(le.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"menu"},c.a.createElement(se.a,null)),c.a.createElement(z.a,{variant:"h6",className:a.title},t),c.a.createElement(P.a,{onClick:Object(k.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.push("/");case 1:case"end":return e.stop()}}),e)}))),variant:"contained",size:"medium",color:"primary"},"\ub85c\uadf8\uc544\uc6c3"))))}var pe=function(e){Object(ne.a)(a,e);var t=Object(re.a)(a);function a(e){return Object(te.a)(this,a),t.call(this,e)}return Object(ae.a)(a,[{key:"movePage",value:function(){this.props.history.push("/mainComp")}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(me,{title:"Sub Menu 1"}),c.a.createElement(P.a,{name:"btn1",variant:"contained",onClick:function(){return e.movePage()}},"\uba54\uc778\uc73c\ub85c \uac00\uae30"))}}]),a}(c.a.Component),fe=Object(_.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function ge(e){var t=e.title,a=fe(),n=Object(C.f)();return c.a.createElement("div",{className:a.root},c.a.createElement(ce.a,{position:"static"},c.a.createElement(oe.a,null,c.a.createElement(le.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"menu"},c.a.createElement(se.a,null)),c.a.createElement(z.a,{variant:"h6",className:a.title},t),c.a.createElement(P.a,{onClick:Object(k.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.push("/");case 1:case"end":return e.stop()}}),e)}))),variant:"contained",size:"medium",color:"primary"},"\ub85c\uadf8\uc544\uc6c3"))))}var de=function(e){Object(ne.a)(a,e);var t=Object(re.a)(a);function a(e){return Object(te.a)(this,a),t.call(this,e)}return Object(ae.a)(a,[{key:"movePage",value:function(){this.props.history.push("/mainComp")}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(ge,{title:"Sub Menu 2"}),c.a.createElement(P.a,{name:"btn1",variant:"contained",onClick:function(){return e.movePage()}},"\uba54\uc778\uc73c\ub85c \uac00\uae30"))}}]),a}(c.a.Component),he=function(e){Object(ne.a)(a,e);var t=Object(re.a)(a);function a(e){return Object(te.a)(this,a),t.call(this,e)}return Object(ae.a)(a,[{key:"movePage",value:function(){this.props.history.push("/mainComp")}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(me,{title:"Sub Menu 1"}),c.a.createElement(P.a,{name:"btn1",variant:"contained",onClick:function(){return e.movePage()}},"\uba54\uc778\uc73c\ub85c \uac00\uae30"))}}]),a}(c.a.Component),be=(a(151),function(e){Object(ne.a)(a,e);var t=Object(re.a)(a);function a(e){var n;return Object(te.a)(this,a),(n=t.call(this)).changeMenu=function(e){n.setState({menu:e}),0==e?n.props.history.push("/menu1"):1===e?n.props.history.push("/menu2"):n.props.history.push("/menu3")},n.state={Menu:0},n}return Object(ae.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(ge,{title:"\uba54\uc778 \uba54\ub274"}),c.a.createElement("div",{className:"wrap"},c.a.createElement("div",{className:"menuBar"},c.a.createElement("ul",{className:"tabs"},c.a.createElement("li",{className:"".concat(0===this.state.menu?"active":""),onClick:function(){return e.changeMenu(0)}},"Sub Menu 1"),c.a.createElement("li",{className:"".concat(1===this.state.menu?"active":""),onClick:function(){return e.changeMenu(1)}},"Sub Menu 2"),c.a.createElement("li",{className:"".concat(2===this.state.menu?"active":""),onClick:function(){return e.changeMenu(2)}},"Sub Menu 3"))),c.a.createElement("div",{className:"contentArea"},ve[this.state.menu])))}}]),a}(c.a.Component)),ve={0:c.a.createElement(pe,null),1:c.a.createElement(de,null),2:c.a.createElement(he,null)},Ee=be,Oe=a(63),je=a(213),Ce=function(e){var t=e.children,a=document.getElementById("popupDom");return l.a.createPortal(t,a)},ye=a(18),we=new(function(){function e(){Object(te.a)(this,e)}return Object(ae.a)(e,[{key:"sendMsg",value:function(e){return q.a.post("http://localhost:8070/chatbot/sendMsg",e)}},{key:"onLogin",value:function(e){return q.a.post("http://localhost:8070/chatbot/onLogin",e)}}]),e}()),ke=a(208),Ne=(a(152),function(e){var t=e.whisperClose;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"chatName"},c.a.createElement("span",null,"\ubb38\uc758\ud558\uae30"),c.a.createElement(ke.a,{className:"exitBtn",color:"secondary",size:"sm",onClick:t},c.a.createElement("span",null,"\ub098\uac00\uae30"))))}),Me=a(209),Pe=a(210),Se=a(211),Ie=a(212),xe=(a(153),function(e){Object(ne.a)(a,e);var t=Object(re.a)(a);function a(e){var n;return Object(te.a)(this,a),(n=t.call(this,e)).textRef=c.a.createRef(),n.handleKeyPress=function(e){if(13===e.charCode){n.sendMessage(n.state.message);var t={flag:n.state.flag,senderId:n.state.senderId,message:n.state.message,location:window.location.href,email:n.state.email};n.receiveMessage(t)}},n.sendMessage=function(e){var t={senderId:"customer",message:e};n.addChatDetail(t,"right")},n.addChatDetail=function(e,t){n.setState({replies:[].concat(Object(ye.a)(n.state.replies),[{uuid:n.state.replies.length+1,className:t,senderId:e.senderId,message:e.message}])})},n.receiveMessage=function(e){we.sendMsg(e).then((function(e){if(console.log(JSON.stringify(e.data)),n.addChatDetail(e.data,"left"),n.clearMessage(),"complete"==e.data.flag){n.addChatDetail({senderId:"admin",message:"\ub610 \ubb34\uc5c7\uc744 \ub3c4\uc640\ub4dc\ub9b4\uae4c\uc694?"},"left"),n.setState({flag:"normal"})}else n.setState({flag:e.data.flag})}))},n.clearMessage=function(){n.textRef.current.value="",n.state.message=""},n.onChange=function(e){n.setState(Object(s.a)({},e.target.name,e.target.value))},n.whisperClose=function(){console.log("whsperClose")},n.state={senderId:"customer",email:window.localStorage.getItem("userEmail"),message:null,location:null,replies:[{className:"left",senderId:"admin",message:"\uc548\ub155\ud558\uc138\uc694.\n\ubb34\uc5c7\uc744 \ub3c4\uc640\ub4dc\ub9b4\uae4c\uc694?"}],flag:"normal"},n}return Object(ae.a)(a,[{key:"render",value:function(){return c.a.createElement(Me.a,null,c.a.createElement(Pe.a,{xs:{size:12},sm:{size:10,offset:1},md:{size:6,offset:3}},c.a.createElement(Se.a,{className:"chat"},c.a.createElement(Ie.a,{className:"chatTitle"},c.a.createElement(Ne,{whisperClose:this.whisperClose})))))}}]),a}(r.Component)),Le=function(e){Object(ne.a)(a,e);var t=Object(re.a)(a);function a(e){var n;return Object(te.a)(this,a),(n=t.call(this,e)).state={isOpenPopup:!1},n.openPopup=n.openPopup.bind(Object(Oe.a)(n)),n.closePopup=n.closePopup.bind(Object(Oe.a)(n)),n}return Object(ae.a)(a,[{key:"openPopup",value:function(){this.setState({isOpenPopup:!0})}},{key:"closePopup",value:function(){console.log("closePopup"),this.setState({isOpenPopup:!1})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(je.a,{id:"popupDom",style:Ae,variant:"contained",onClick:this.openPopup},"\ubb38\uc758\ud558\uae30"),this.state.isOpenPopup&&c.a.createElement(Ce,null,c.a.createElement(xe,{onClose:this.closePopup})))}}]),a}(r.Component),Ae={position:"absolute",bottom:16,right:16},De=Le,Fe=function(){return c.a.createElement(j.a,null,c.a.createElement(C.c,null,c.a.createElement(C.a,{path:"/",exact:!0,component:ee}),c.a.createElement(C.a,{path:"/mainComp",component:Ee}),c.a.createElement(C.a,{path:"/menu1",component:pe}),c.a.createElement(C.a,{path:"/menu2",component:de}),c.a.createElement(C.a,{path:"/menu3",component:he})),c.a.createElement(De,null))},Be=Object(v.a)(),Ge=Object(i.c)(b,Object(i.a)(Be,E.a));console.log(Ge.getState()),l.a.render(c.a.createElement(O.a,{store:Ge},c.a.createElement(Fe,null)),document.getElementById("root"))}},[[120,1,2]]]);
//# sourceMappingURL=main.99562e64.chunk.js.map