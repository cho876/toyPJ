(this.webpackJsonpfrontjs=this.webpackJsonpfrontjs||[]).push([[0],{104:function(e,t,a){},131:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),s=(a(104),a(65)),i=a(12),o=a(44),u=a.n(o),m=a(57),p=a(89),d=a(23),g=a(188),f=a(186),h=a(181),v=a(184),E=a(178),b=a(182),O=a(185),C=a(85),j=a.n(C),y=a(86),M=a.n(y),P=a(133),I=a(179),N=a(180);function S(){return r.a.createElement(P.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(E.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var k=Object(I.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function w(e){var t=e.handleClick,a=e.message,c=e.isLoginPage,l=e.pageChange,s=k(),i=Object(n.useState)(""),o=Object(d.a)(i,2),u=o[0],m=o[1],p=Object(n.useState)(""),C=Object(d.a)(p,2),y=C[0],I=C[1];return Object(n.useEffect)((function(){m(""),I("")}),[c]),r.a.createElement(N.a,{component:"main",maxWidth:"xs"},r.a.createElement(h.a,null),r.a.createElement("div",{className:s.paper},r.a.createElement(g.a,{className:s.avatar},c?r.a.createElement(j.a,null):r.a.createElement(M.a,null)),r.a.createElement(P.a,{component:"h1",variant:"h5"},c?"Sign in":"Sign up"),r.a.createElement(P.a,{variant:"subtitle1",gutterBottom:!0},a),r.a.createElement("form",{className:s.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),t(u,y)}},r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:u,onChange:function(e){return m(e.target.value)}}),r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:y,onChange:function(e){return I(e.target.value)}}),r.a.createElement(f.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:s.submit},c?"Sign In":"Sing Up"),r.a.createElement(b.a,{container:!0},r.a.createElement(b.a,{item:!0,xs:!0},r.a.createElement(E.a,{href:"#",variant:"body2"},"Forgot password?")),r.a.createElement(b.a,{item:!0},r.a.createElement(E.a,{href:"#",variant:"body2",onClick:function(){return l()}},c?"Don't have an account? Sign Up":"Already have an account? Sign In"))))),r.a.createElement(O.a,{mt:8},r.a.createElement(S,null)))}var x=a(53),L=a.n(x),F="http://localhost:8070/chatbot";function A(e,t){return D.apply(this,arguments)}function D(){return(D=Object(m.a)(u.a.mark((function e(t,a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.post(F+"/onLogin",{user_id:t,user_pw:a});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _=a(187),B="MAIN/LOGIN_SUCCESS",T="MAIN/LOGIN_FAIL",W="MAIN/PAGE_CHANGE",G="MAIN/JOIN_FAIL",J=Object(_.a)(B,(function(e,t){return{accountId:e,role:t}})),R=Object(_.a)(T,(function(e){return e})),K=Object(_.a)(W),U=Object(_.a)(G,(function(e){return e})),q=Object(p.a)((function(e){return{errorMessage:e.main.errorMessage,isLoginPage:e.main.isLoginPage}}),(function(e){return{loginSuccess:function(t,a){return e(J(t,a))},loginFail:function(t){return e(R(t))},pageChange:function(){return e(K())},joinFail:function(t){return e(U(t))}}}))((function(e){var t=e.isLoginPage,a=e.errorMessage,n=e.loginSuccess,c=e.loginFail,l=e.pageChange,s=(e.joinFail,Object(i.f)()),o=function(){var e=Object(m.a)(u.a.mark((function e(t,a){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(t,a);case 2:r=e.sent,console.log(r.data),1===r.data?(console.log("\uac78\ub9bc"),n("kwonee","admin"),alert("\ub85c\uadf8\uc778\uc5d0 \uc131\uacf5\ud558\uc168\uc2b5\ub2c8\ub2e4. \uac8c\uc2dc\ud310\uc73c\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4."),s.push("/mainComp")):(console.log("\u3134"),c("\ub85c\uadf8\uc778 \uc2e4\ud328"),alert("\ub85c\uadf8\uc778\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4."));case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return r.a.createElement(w,{handleClick:o,message:a,isLoginPage:t,pageChange:l})})),H=a(27),Y=a(28),V=a(35),z=a(34),Q=function(e){Object(V.a)(a,e);var t=Object(z.a)(a);function a(e){return Object(H.a)(this,a),t.call(this,e)}return Object(Y.a)(a,[{key:"movePage",value:function(){this.props.history.push("/mainComp")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(f.a,{name:"btn1",variant:"contained",onClick:function(){return e.movePage()}},"\uba54\uc778\uc73c\ub85c \uac00\uae30"))}}]),a}(r.a.Component);var X=function(){return r.a.createElement("div",null,r.a.createElement(f.a,{variant:"contained"},"Menu 2-1"),r.a.createElement(f.a,{variant:"contained"},"Menu 2-2"),r.a.createElement(f.a,{variant:"contained"},"Menu 2-3"))};var Z=function(){return r.a.createElement("div",null,r.a.createElement(f.a,{variant:"contained"},"Menu 3-1"),r.a.createElement(f.a,{variant:"contained"},"Menu 3-2"),r.a.createElement(f.a,{variant:"contained"},"Menu 3-3"))},$=(a(82),function(e){Object(V.a)(a,e);var t=Object(z.a)(a);function a(e){var n;return Object(H.a)(this,a),(n=t.call(this)).changeMenu=function(e){n.setState({menu:e}),0==e?n.props.history.push("/menu1"):1===e?n.props.history.push("/menu2"):n.props.history.push("/menu3")},n.state={Menu:0},n}return Object(Y.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"wrap"},r.a.createElement("div",{className:"menuBar"},r.a.createElement("ul",{className:"tabs"},r.a.createElement("li",{className:"".concat(0===this.state.menu?"active":""),onClick:function(){return e.changeMenu(0)}},"Menu 1"),r.a.createElement("li",{className:"".concat(1===this.state.menu?"active":""),onClick:function(){return e.changeMenu(1)}},"Menu 2"),r.a.createElement("li",{className:"".concat(2===this.state.menu?"active":""),onClick:function(){return e.changeMenu(2)}},"Menu 3"))),r.a.createElement("div",{className:"contentArea"},ee[this.state.menu])))}}]),a}(r.a.Component)),ee={0:r.a.createElement(Q,null),1:r.a.createElement(X,null),2:r.a.createElement(Z,null)},te=$,ae=a(54),ne=a(183),re=function(e){var t=e.children,a=document.getElementById("popupDom");return l.a.createPortal(t,a)},ce=a(11),le=a(24),se=new(function(){function e(){Object(H.a)(this,e)}return Object(Y.a)(e,[{key:"sendMsg",value:function(e){return L.a.post("http://localhost:8070/chatbot/sendMsg",e)}},{key:"onLogin",value:function(e){return L.a.post("http://localhost:8070/chatbot/onLogin",e)}}]),e}()),ie=function(e){Object(V.a)(a,e);var t=Object(z.a)(a);function a(e){var n;return Object(H.a)(this,a),(n=t.call(this,e)).textRef=r.a.createRef(),n.handleKeyPress=function(e){if(13===e.charCode){n.sendMessage(n.state.message);var t={flag:n.state.flag,senderId:n.state.senderId,message:n.state.message,location:window.location.href,email:n.state.email};n.receiveMessage(t)}},n.sendMessage=function(e){var t={senderId:"customer",message:e};n.addChatDetail(t,"right")},n.addChatDetail=function(e,t){n.setState({replies:[].concat(Object(le.a)(n.state.replies),[{uuid:n.state.replies.length+1,className:t,senderId:e.senderId,message:e.message}])})},n.receiveMessage=function(e){se.sendMsg(e).then((function(e){if(console.log(JSON.stringify(e.data)),n.addChatDetail(e.data,"left"),n.clearMessage(),"complete"==e.data.flag){n.addChatDetail({senderId:"admin",message:"\ub610 \ubb34\uc5c7\uc744 \ub3c4\uc640\ub4dc\ub9b4\uae4c\uc694?"},"left"),n.setState({flag:"normal"})}else n.setState({flag:e.data.flag})}))},n.clearMessage=function(){n.textRef.current.value="",n.state.message=""},n.onChange=function(e){n.setState(Object(ce.a)({},e.target.name,e.target.value))},n.state={senderId:"customer",email:window.localStorage.getItem("userEmail"),message:null,location:null,replies:[{className:"left",senderId:"admin",message:"\uc548\ub155\ud558\uc138\uc694.\n\ubb34\uc5c7\uc744 \ub3c4\uc640\ub4dc\ub9b4\uae4c\uc694?"}],flag:"normal"},n}return Object(Y.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"dimmed_layer_wrapper"},r.a.createElement("div",{className:"full_layer"},r.a.createElement("div",{className:"common_alert"},r.a.createElement("div",null,r.a.createElement("button",{type:"button",onClick:this.props.onClose},"close")),r.a.createElement("div",null,r.a.createElement("div",{class:"header"},"CHAT")),r.a.createElement("div",{class:"chat"},r.a.createElement("ul",null,this.state.replies.map((function(e){return r.a.createElement("li",{class:e.className},r.a.createElement("div",{class:"sender"},r.a.createElement("span",null,e.senderId)),r.a.createElement("div",{class:"message"},r.a.createElement("span",null,e.message)))})))),r.a.createElement("div",{class:"input-div"},r.a.createElement("textarea",{placeholder:"Press Enter for send message.",name:"message",ref:this.textRef,onChange:this.onChange,onKeyPress:this.handleKeyPress})),r.a.createElement("div",{class:"chat format"},r.a.createElement("ul",null,this.state.replies.map((function(e){return r.a.createElement("li",{class:e.className},r.a.createElement("div",{class:"sender"},r.a.createElement("span",null,e.senderId)),r.a.createElement("div",{class:"message"},r.a.createElement("span",null,e.message)))})))))))}}]),a}(n.Component),oe=function(e){Object(V.a)(a,e);var t=Object(z.a)(a);function a(e){var n;return Object(H.a)(this,a),(n=t.call(this,e)).state={isOpenPopup:!1},n.openPopup=n.openPopup.bind(Object(ae.a)(n)),n.closePopup=n.closePopup.bind(Object(ae.a)(n)),n}return Object(Y.a)(a,[{key:"openPopup",value:function(){this.setState({isOpenPopup:!0})}},{key:"closePopup",value:function(){console.log("closePopup"),this.setState({isOpenPopup:!1})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ne.a,{id:"popupDom",style:ue,variant:"contained",onClick:this.openPopup},"\ubb38\uc758\ud558\uae30"),this.state.isOpenPopup&&r.a.createElement(re,null,r.a.createElement(ie,{onClose:this.closePopup})))}}]),a}(n.Component),ue={position:"absolute",bottom:16,right:16},me=oe,pe=function(){return r.a.createElement(s.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0,component:q}),r.a.createElement(i.a,{path:"/mainComp",component:te})),r.a.createElement(me,null))},de=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,192)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),n(e),r(e),c(e),l(e)}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(pe,null)),document.getElementById("root")),de()},82:function(e,t,a){},99:function(e,t,a){e.exports=a(131)}},[[99,1,2]]]);
//# sourceMappingURL=main.6383e7eb.chunk.js.map