(this.webpackJsonpfrontjs=this.webpackJsonpfrontjs||[]).push([[0],{119:function(e,t,a){e.exports=a(151)},128:function(e,t,a){},151:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),l=a(10),o=a.n(l),s=a(62),i=a(9),u=a(36),m=a(208),p="MAIN/LOGIN_SUCCESS",d="MAIN/LOGIN_FAIL",g="MAIN/PAGE_CHANGE",f="MAIN/JOIN_FAIL",h=Object(m.a)((n={},Object(i.a)(n,p,(function(e,t){return Object(u.a)(Object(u.a)({},e),{},{accountId:t.payload.accountId,role:t.payload.role,isLogged:!0})})),Object(i.a)(n,d,(function(e,t){return Object(u.a)(Object(u.a)({},e),{},{isLogged:!1,errorMessage:t.payload})})),Object(i.a)(n,g,(function(e,t){return Object(u.a)(Object(u.a)({},e),{},{errorMessage:null,isLoginPage:!e.isLoginPage})})),Object(i.a)(n,f,(function(e,t){return Object(u.a)(Object(u.a)({},e),{},{errorMessage:t.payload})})),n),{accountId:null,isLogged:!1,errorMessage:null,isLoginPage:!0,role:null}),v=Object(s.b)({main:h}),E=a(103),b=a(102),O=a(72),j=(a(128),a(57)),y=a(13),C=a(30),N=a.n(C),k=a(37),P=a(29),w=a(210),I=a(200),M=a(199),S=a(206),x=a(196),L=a(201),A=a(207),B=a(98),D=a.n(B),_=a(99),F=a.n(_),G=a(153),R=a(197),z=a(198);function W(){return c.a.createElement(G.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",c.a.createElement(x.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var J=Object(R.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function K(e){var t=e.handleClick,a=e.message,n=e.isLoginPage,l=e.pageChange,o=J(),s=Object(r.useState)(""),i=Object(P.a)(s,2),u=i[0],m=i[1],p=Object(r.useState)(""),d=Object(P.a)(p,2),g=d[0],f=d[1];return Object(r.useEffect)((function(){m(""),f("")}),[n]),c.a.createElement(z.a,{component:"main",maxWidth:"xs"},c.a.createElement(M.a,null),c.a.createElement("div",{className:o.paper},c.a.createElement(w.a,{className:o.avatar},n?c.a.createElement(D.a,null):c.a.createElement(F.a,null)),c.a.createElement(G.a,{component:"h1",variant:"h5"},n?"Sign in":"Sign up"),c.a.createElement(G.a,{variant:"subtitle1",gutterBottom:!0},a),c.a.createElement("form",{className:o.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),t(u,g)}},c.a.createElement(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:u,onChange:function(e){return m(e.target.value)}}),c.a.createElement(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:g,onChange:function(e){return f(e.target.value)}}),c.a.createElement(I.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:o.submit},n?"Sign In":"Sing Up"),c.a.createElement(L.a,{container:!0},c.a.createElement(L.a,{item:!0,xs:!0},c.a.createElement(x.a,{href:"#",variant:"body2"},"Forgot password?")),c.a.createElement(L.a,{item:!0},c.a.createElement(x.a,{href:"#",variant:"body2",onClick:function(){return l()}},n?"Don't have an account? Sign Up":"Already have an account? Sign In"))))),c.a.createElement(A.a,{mt:8},c.a.createElement(W,null)))}var U=a(60),q=a.n(U),T="http://localhost:8070/chatbot";function Y(e,t){return H.apply(this,arguments)}function H(){return(H=Object(k.a)(N.a.mark((function e(t,a){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.a.post(T+"/onLogin",{user_id:t,user_pw:a});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var V=a(209),Q=Object(V.a)(p,(function(e,t){return{accountId:e,role:t}})),X=Object(V.a)(d,(function(e){return e})),Z=Object(V.a)(g),$=Object(V.a)(f,(function(e){return e})),ee=Object(O.b)((function(e){return{errorMessage:e.main.errorMessage,isLoginPage:e.main.isLoginPage}}),(function(e){return{loginSuccess:function(t,a){return e(Q(t,a))},loginFail:function(t){return e(X(t))},pageChange:function(){return e(Z())},joinFail:function(t){return e($(t))}}}))((function(e){var t=e.isLoginPage,a=e.errorMessage,n=e.loginSuccess,r=e.loginFail,l=e.pageChange,o=(e.joinFail,Object(y.f)()),s=function(){var e=Object(k.a)(N.a.mark((function e(t,a){var c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y(t,a);case 2:c=e.sent,console.log(c.data),1===c.data?(console.log("\uac78\ub9bc"),n("kwonee","admin"),alert("\ub85c\uadf8\uc778\uc5d0 \uc131\uacf5\ud558\uc168\uc2b5\ub2c8\ub2e4. \uac8c\uc2dc\ud310\uc73c\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4."),o.push("/mainComp")):(console.log("\u3134"),r("\ub85c\uadf8\uc778 \uc2e4\ud328"),alert("\ub85c\uadf8\uc778\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4."));case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return c.a.createElement(K,{handleClick:s,message:a,isLoginPage:t,pageChange:l})})),te=a(20),ae=a(21),ne=a(27),re=a(26),ce=a(202),le=a(203),oe=a(204),se=a(71),ie=a.n(se),ue=Object(R.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function me(e){var t=e.title,a=ue(),n=Object(y.f)();return c.a.createElement("div",{className:a.root},c.a.createElement(ce.a,{position:"static"},c.a.createElement(le.a,null,c.a.createElement(oe.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"menu"},c.a.createElement(ie.a,null)),c.a.createElement(G.a,{variant:"h6",className:a.title},t),c.a.createElement(I.a,{onClick:Object(k.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.push("/");case 1:case"end":return e.stop()}}),e)}))),variant:"contained",size:"medium",color:"primary"},"\ub85c\uadf8\uc544\uc6c3"))))}var pe=function(e){Object(ne.a)(a,e);var t=Object(re.a)(a);function a(e){return Object(te.a)(this,a),t.call(this,e)}return Object(ae.a)(a,[{key:"movePage",value:function(){this.props.history.push("/mainComp")}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(me,{title:"Sub Menu 1"}),c.a.createElement(I.a,{name:"btn1",variant:"contained",onClick:function(){return e.movePage()}},"\uba54\uc778\uc73c\ub85c \uac00\uae30"))}}]),a}(c.a.Component),de=Object(R.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function ge(e){var t=e.title,a=de(),n=Object(y.f)();return c.a.createElement("div",{className:a.root},c.a.createElement(ce.a,{position:"static"},c.a.createElement(le.a,null,c.a.createElement(oe.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"menu"},c.a.createElement(ie.a,null)),c.a.createElement(G.a,{variant:"h6",className:a.title},t),c.a.createElement(I.a,{onClick:Object(k.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.push("/");case 1:case"end":return e.stop()}}),e)}))),variant:"contained",size:"medium",color:"primary"},"\ub85c\uadf8\uc544\uc6c3"))))}var fe=function(e){Object(ne.a)(a,e);var t=Object(re.a)(a);function a(e){return Object(te.a)(this,a),t.call(this,e)}return Object(ae.a)(a,[{key:"movePage",value:function(){this.props.history.push("/mainComp")}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(ge,{title:"Sub Menu 2"}),c.a.createElement(I.a,{name:"btn1",variant:"contained",onClick:function(){return e.movePage()}},"\uba54\uc778\uc73c\ub85c \uac00\uae30"))}}]),a}(c.a.Component),he=function(e){Object(ne.a)(a,e);var t=Object(re.a)(a);function a(e){return Object(te.a)(this,a),t.call(this,e)}return Object(ae.a)(a,[{key:"movePage",value:function(){this.props.history.push("/mainComp")}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(me,{title:"Sub Menu 1"}),c.a.createElement(I.a,{name:"btn1",variant:"contained",onClick:function(){return e.movePage()}},"\uba54\uc778\uc73c\ub85c \uac00\uae30"))}}]),a}(c.a.Component),ve=(a(94),function(e){Object(ne.a)(a,e);var t=Object(re.a)(a);function a(e){var n;return Object(te.a)(this,a),(n=t.call(this)).changeMenu=function(e){n.setState({menu:e}),0==e?n.props.history.push("/menu1"):1===e?n.props.history.push("/menu2"):n.props.history.push("/menu3")},n.state={Menu:0},n}return Object(ae.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(ge,{title:"\uba54\uc778 \uba54\ub274"}),c.a.createElement("div",{className:"wrap"},c.a.createElement("div",{className:"menuBar"},c.a.createElement("ul",{className:"tabs"},c.a.createElement("li",{className:"".concat(0===this.state.menu?"active":""),onClick:function(){return e.changeMenu(0)}},"Sub Menu 1"),c.a.createElement("li",{className:"".concat(1===this.state.menu?"active":""),onClick:function(){return e.changeMenu(1)}},"Sub Menu 2"),c.a.createElement("li",{className:"".concat(2===this.state.menu?"active":""),onClick:function(){return e.changeMenu(2)}},"Sub Menu 3"))),c.a.createElement("div",{className:"contentArea"},Ee[this.state.menu])))}}]),a}(c.a.Component)),Ee={0:c.a.createElement(pe,null),1:c.a.createElement(fe,null),2:c.a.createElement(he,null)},be=ve,Oe=a(61),je=a(205),ye=function(e){var t=e.children,a=document.getElementById("popupDom");return o.a.createPortal(t,a)},Ce=a(17),Ne=new(function(){function e(){Object(te.a)(this,e)}return Object(ae.a)(e,[{key:"sendMsg",value:function(e){return q.a.post("http://localhost:8070/chatbot/sendMsg",e)}},{key:"onLogin",value:function(e){return q.a.post("http://localhost:8070/chatbot/onLogin",e)}}]),e}()),ke=a(211),Pe=function(e){Object(ne.a)(a,e);var t=Object(re.a)(a);function a(e){var n;return Object(te.a)(this,a),(n=t.call(this,e)).textRef=c.a.createRef(),n.handleKeyPress=function(e){if(13===e.charCode){n.sendMessage(n.state.message);var t={flag:n.state.flag,senderId:n.state.senderId,message:n.state.message,location:window.location.href,email:n.state.email};n.receiveMessage(t)}},n.sendMessage=function(e){var t={senderId:"customer",message:e};n.addChatDetail(t,"right")},n.addChatDetail=function(e,t){n.setState({replies:[].concat(Object(Ce.a)(n.state.replies),[{uuid:n.state.replies.length+1,className:t,senderId:e.senderId,message:e.message}])})},n.receiveMessage=function(e){Ne.sendMsg(e).then((function(e){if(console.log(JSON.stringify(e.data)),n.addChatDetail(e.data,"left"),n.clearMessage(),"complete"==e.data.flag){n.addChatDetail({senderId:"admin",message:"\ub610 \ubb34\uc5c7\uc744 \ub3c4\uc640\ub4dc\ub9b4\uae4c\uc694?"},"left"),n.setState({flag:"normal"})}else n.setState({flag:e.data.flag})}))},n.clearMessage=function(){n.textRef.current.value="",n.state.message=""},n.onChange=function(e){n.setState(Object(i.a)({},e.target.name,e.target.value))},n.state={isInit:!0,senderId:"customer",email:window.localStorage.getItem("userEmail"),message:null,location:null,replies:[{className:"left",senderId:"admin",message:"\uc548\ub155\ud558\uc138\uc694.\n\ubb34\uc5c7\uc744 \ub3c4\uc640\ub4dc\ub9b4\uae4c\uc694?"}],flag:"normal"},n}return Object(ae.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"dimmed_layer_wrapper"},c.a.createElement("div",{className:"full_layer"},c.a.createElement("div",{className:"common_alert"},c.a.createElement("div",{className:"chatName"},c.a.createElement("span",null,"\ubb38\uc758\ud558\uae30"),c.a.createElement(ke.a,{className:"exitBtn",color:"secondary",size:"sm",onClick:this.props.onClose},c.a.createElement("span",null,"\ub098\uac00\uae30"))),c.a.createElement("div",{class:"chat"},c.a.createElement("ul",null,this.state.replies.map((function(e){return c.a.createElement("li",{class:e.className},c.a.createElement("div",{class:"sender"},c.a.createElement("span",null,e.senderId)),c.a.createElement("div",{class:"message"},c.a.createElement("span",null,e.message)))}))),this.state.isInit?we():c.a.createElement("div",null)),c.a.createElement("div",{class:"input-div"},c.a.createElement("textarea",{placeholder:"\ubb38\uc758\uc0ac\ud56d\uc744 \uae30\uc7ac\ud574\uc8fc\uc138\uc694.",name:"message",ref:this.textRef,onChange:this.onChange,rows:3,onKeyPress:this.handleKeyPress})),c.a.createElement("div",{class:"chat format"},c.a.createElement("ul",null,this.state.replies.map((function(e){return c.a.createElement("li",{class:e.className},c.a.createElement("div",{class:"sender"},c.a.createElement("span",null,e.senderId)),c.a.createElement("div",{class:"message"},c.a.createElement("span",null,e.message)))})))))))}}]),a}(r.Component),we=function(){return c.a.createElement("div",null,c.a.createElement(ke.a,{className:"butBtn",color:"secondary",size:"sm"},c.a.createElement("span",null,"\ubc84\uadf8\uc2e0\uace0")),c.a.createElement(ke.a,{className:"votBtn",color:"secondary",size:"sm"},c.a.createElement("span",null,"\uc0c1\ub2f4\uc694\uccad")))},Ie=Pe,Me=function(e){Object(ne.a)(a,e);var t=Object(re.a)(a);function a(e){var n;return Object(te.a)(this,a),(n=t.call(this,e)).state={isOpenPopup:!1},n.openPopup=n.openPopup.bind(Object(Oe.a)(n)),n.closePopup=n.closePopup.bind(Object(Oe.a)(n)),n}return Object(ae.a)(a,[{key:"openPopup",value:function(){this.setState({isOpenPopup:!0})}},{key:"closePopup",value:function(){console.log("closePopup"),this.setState({isOpenPopup:!1})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(je.a,{id:"popupDom",style:Se,variant:"contained",onClick:this.openPopup},"\ubb38\uc758\ud558\uae30"),this.state.isOpenPopup&&c.a.createElement(ye,null,c.a.createElement(Ie,{onClose:this.closePopup})))}}]),a}(r.Component),Se={position:"absolute",bottom:16,right:16},xe=Me,Le=function(){return c.a.createElement(j.a,null,c.a.createElement(y.c,null,c.a.createElement(y.a,{path:"/",exact:!0,component:ee}),c.a.createElement(y.a,{path:"/mainComp",component:be}),c.a.createElement(y.a,{path:"/menu1",component:pe}),c.a.createElement(y.a,{path:"/menu2",component:fe}),c.a.createElement(y.a,{path:"/menu3",component:he})),c.a.createElement(xe,null))},Ae=Object(E.a)(),Be=Object(s.c)(v,Object(s.a)(Ae,b.a));console.log(Be.getState()),o.a.render(c.a.createElement(O.a,{store:Be},c.a.createElement(Le,null)),document.getElementById("root"))},94:function(e,t,a){}},[[119,1,2]]]);
//# sourceMappingURL=main.a1835b8a.chunk.js.map