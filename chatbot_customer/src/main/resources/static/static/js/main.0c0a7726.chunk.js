(this.webpackJsonpfrontjs=this.webpackJsonpfrontjs||[]).push([[0],{113:function(e,t,a){e.exports=a(145)},122:function(e,t,a){},145:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),s=a(10),l=a.n(s),o=a(60),i=a(9),u=a(33),m=a(203),p="MAIN/LOGIN_SUCCESS",d="MAIN/LOGIN_FAIL",g="MAIN/PAGE_CHANGE",f="MAIN/JOIN_FAIL",b=Object(m.a)((n={},Object(i.a)(n,p,(function(e,t){return Object(u.a)(Object(u.a)({},e),{},{accountId:t.payload.accountId,role:t.payload.role,isLogged:!0})})),Object(i.a)(n,d,(function(e,t){return Object(u.a)(Object(u.a)({},e),{},{isLogged:!1,errorMessage:t.payload})})),Object(i.a)(n,g,(function(e,t){return Object(u.a)(Object(u.a)({},e),{},{errorMessage:null,isLoginPage:!e.isLoginPage})})),Object(i.a)(n,f,(function(e,t){return Object(u.a)(Object(u.a)({},e),{},{errorMessage:t.payload})})),n),{accountId:null,isLogged:!1,errorMessage:null,isLoginPage:!0,role:null}),h=Object(o.b)({main:b}),v=a(100),E=a(99),O=a(70),j=(a(122),a(55)),y=a(13),C=a(29),N=a.n(C),k=a(35),M=a(28),P=a(205),w=a(197),L=a(196),x=a(202),I=(a(193),a(95)),S=a.n(I),B=a(96),_=a.n(B),A=a(147),G=a(194),W=a(195);var F=Object(G.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function R(e){var t=e.handleClick,a=e.message,n=e.isLoginPage,s=(e.pageChange,F()),l=Object(r.useState)(""),o=Object(M.a)(l,2),i=o[0],u=o[1],m=Object(r.useState)(""),p=Object(M.a)(m,2),d=p[0],g=p[1];return Object(r.useEffect)((function(){u(""),g("")}),[n]),c.a.createElement(W.a,{component:"main",maxWidth:"xs"},c.a.createElement(L.a,null),c.a.createElement("div",{className:s.paper},c.a.createElement(P.a,{className:s.avatar},n?c.a.createElement(S.a,null):c.a.createElement(_.a,null)),c.a.createElement(A.a,{component:"h1",variant:"h5"},"Sign in"),c.a.createElement(A.a,{variant:"subtitle1",gutterBottom:!0},a),c.a.createElement("form",{className:s.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),t(i,d)}},c.a.createElement(x.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"\uc774\uba54\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",name:"email",autoComplete:"email",autoFocus:!0,value:i,onChange:function(e){return u(e.target.value)}}),c.a.createElement(x.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",type:"password",id:"password",autoComplete:"current-password",value:d,onChange:function(e){return g(e.target.value)}}),c.a.createElement(w.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:s.submit},"\ub85c\uadf8\uc778"))))}var T=a(58),D=a.n(T),z="http://localhost:8070/chatbot";function H(e,t){return J.apply(this,arguments)}function J(){return(J=Object(k.a)(N.a.mark((function e(t,a){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.post(z+"/onLogin",{user_id:t,user_pw:a});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var K=a(204),q=Object(K.a)(p,(function(e,t){return{accountId:e,role:t}})),U=Object(K.a)(d,(function(e){return e})),V=Object(K.a)(g),Q=Object(K.a)(f,(function(e){return e})),X=Object(O.b)((function(e){return{errorMessage:e.main.errorMessage,isLoginPage:e.main.isLoginPage}}),(function(e){return{loginSuccess:function(t,a){return e(q(t,a))},loginFail:function(t){return e(U(t))},pageChange:function(){return e(V())},joinFail:function(t){return e(Q(t))}}}))((function(e){var t=e.isLoginPage,a=e.errorMessage,n=e.loginSuccess,r=e.loginFail,s=e.pageChange,l=Object(y.f)(),o=function(){var e=Object(k.a)(N.a.mark((function e(t,a){var c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H(t,a);case 2:c=e.sent,console.log(c.data),1===c.data?(n("kwonee","admin"),window.localStorage.setItem("email",t),alert("\ub85c\uadf8\uc778\uc5d0 \uc131\uacf5\ud558\uc168\uc2b5\ub2c8\ub2e4. \uac8c\uc2dc\ud310\uc73c\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4."),l.push("/mainComp")):(r("\ub85c\uadf8\uc778 \uc2e4\ud328"),alert("\ub85c\uadf8\uc778\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4."));case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return c.a.createElement(R,{handleClick:o,message:a,isLoginPage:t,pageChange:s})})),Y=a(20),Z=a(21),$=a(59),ee=a(26),te=a(25),ae=a(201),ne=function(e){var t=e.children,a=document.getElementById("popupDom");return l.a.createPortal(t,a)},re=a(16),ce=new(function(){function e(){Object(Y.a)(this,e)}return Object(Z.a)(e,[{key:"sendBug",value:function(e){return D.a.post("http://localhost:8070/chatbot/sendBug",e)}},{key:"getBtn",value:function(e){return D.a.get("http://localhost:8070/chatbot/getBtn?btnno="+e)}}]),e}()),se=a(206),le=(a(91),function(e){Object(ee.a)(a,e);var t=Object(te.a)(a);function a(e){var n;return Object(Y.a)(this,a),(n=t.call(this,e)).textRef=c.a.createRef(),n.handleKeyPress=function(e){if(13===e.charCode){n.addMessage("right","\uc0ac\uc6a9\uc790",n.state.message,[],!1);var t={senderId:n.state.senderId,message:n.state.message,location:window.location.href,email:n.state.email};n.receiveMessage(t)}},n.receiveMessage=function(e){ce.sendBug(e).then((function(e){n.addMessage("left","\uc54c\ub9bc\ubd07",e.data.message,[],!1),n.addMessage("left","\uc54c\ub9bc\ubd07",n.state.replies[1].message,n.state.replies[1].btnList,!0),n.clearMessage()}))},n.clearMessage=function(){n.textRef.current.value="",n.state.message="",n.state.enableWrite=!1},n.onChange=function(e){n.setState(Object(i.a)({},e.target.name,e.target.value))},n.addMessage=function(e,t,a,r,c){n.setState({replies:[].concat(Object(re.a)(n.state.replies),[{uuid:n.state.replies.length+1,className:e,senderId:t,message:a,btnList:r,isButton:c}])});var s=n.box.scrollHeight;console.log("scrollHeight: "+s),console.log("scrollTop: "+n.box.scrollTop),n.box.scrollTop=s},n.clickEvent=function(e){"1001"===e?(n.state.enableWrite=!0,n.addMessage("left","\uc54c\ub9bc\ubd07","\ubc84\uadf8 \uc0c1\uc138 \ub0b4\uc6a9\uc744 \uae30\uc785\ud574\uc8fc\uc138\uc694.",[],!1)):ce.getBtn(e).then((function(e){var t,a=e.data.flag;if("btn"===a){e.data.nextBtn.map((function(e){t=e.parentNm,n.setState({btnList:[].concat(Object(re.a)(n.state.btnList),[{btnno:e.childNo,btnmsg:e.childNm}])})})),n.addMessage("right","\uc0ac\uc6a9\uc790",t,[],!0);var r=n.state.btnList;n.addMessage("left","\uc54c\ub9bc\ubd07","\ubb38\uc758\ud560 \ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",r,!0),n.setState({btnList:[]})}else"str"===a&&(n.addMessage("right","\uc0ac\uc6a9\uc790",e.data.msg,[],!1),n.addMessage("left","\uc54c\ub9bc\ubd07",e.data.ans,[],!1),n.addMessage("left","\uc54c\ub9bc\ubd07",n.state.replies[1].message,n.state.replies[1].btnList,!0))}))},n.state={senderId:"\uc0ac\uc6a9\uc790",email:window.localStorage.getItem("email"),message:null,location:null,btnList:[],enableWrite:!1,replies:[{className:"left",senderId:"\uc54c\ub9bc\ubd07",message:"\uc548\ub155\ud558\uc138\uc694.\n\ubb34\uc5c7\uc744 \ub3c4\uc640\ub4dc\ub9b4\uae4c\uc694?",isButton:!1,btnList:[]},{className:"left",senderId:"\uc54c\ub9bc\ubd07",message:"\ubb38\uc758\ud560 \ub0b4\uc6a9\uc5d0 \ub300\ud574 \uc785\ub825\ud574\uc8fc\uc138\uc694.",isButton:!0,btnList:[{btnno:"1001",btnmsg:"\ubc84\uadf8\uc2e0\uace0"},{btnno:"1000",btnmsg:"\uc5c5\ubb34\ubb38\uc758"}]}],flag:"normal"},n}return Object(Z.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"dimmed_layer_wrapper"},c.a.createElement("div",{className:"full_layer"},c.a.createElement("div",{className:"common_alert"},c.a.createElement("div",{className:"chatName"},c.a.createElement("span",null,"\ubb38\uc758\ud558\uae30"),c.a.createElement(se.a,{className:"exitBtn",color:"secondary",size:"sm",onClick:this.props.onClose},c.a.createElement("span",null,"\ub098\uac00\uae30"))),c.a.createElement("div",{class:"chat",ref:function(t){e.box=t}},c.a.createElement("ul",null,this.state.replies.map((function(t){return c.a.createElement("li",{class:t.className},c.a.createElement("div",{class:"sender"},c.a.createElement("span",null,t.senderId)),c.a.createElement("div",{class:"message"},c.a.createElement("span",null,t.message)),c.a.createElement("div",{class:"btn"},t.isButton?t.btnList.map((function(t){return c.a.createElement(se.a,{onClick:function(){return e.clickEvent(t.btnno)}},t.btnmsg)})):null))})))),c.a.createElement("div",{class:"input-div"},c.a.createElement("textarea",{placeholder:"\ubb38\uc758\uc0ac\ud56d\uc744 \uae30\uc7ac\ud574\uc8fc\uc138\uc694.",name:"message",ref:this.textRef,onChange:this.onChange,rows:3,onKeyPress:this.handleKeyPress,disabled:!this.state.enableWrite})),c.a.createElement("div",{class:"chat format"},c.a.createElement("ul",null,this.state.replies.map((function(e){return c.a.createElement("li",{class:e.className},c.a.createElement("div",{class:"sender"},c.a.createElement("span",null,e.senderId)),c.a.createElement("div",{class:"message"},c.a.createElement("span",null,e.message)))})))))))}}]),a}(r.Component)),oe=function(e){Object(ee.a)(a,e);var t=Object(te.a)(a);function a(e){var n;return Object(Y.a)(this,a),(n=t.call(this,e)).state={isOpenPopup:!1},n.openPopup=n.openPopup.bind(Object($.a)(n)),n.closePopup=n.closePopup.bind(Object($.a)(n)),n}return Object(Z.a)(a,[{key:"openPopup",value:function(){this.setState({isOpenPopup:!0})}},{key:"closePopup",value:function(){console.log("closePopup"),this.setState({isOpenPopup:!1})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(ae.a,{id:"popupDom",style:ie,variant:"contained",onClick:this.openPopup},"\ubb38\uc758\ud558\uae30"),this.state.isOpenPopup&&c.a.createElement(ne,null,c.a.createElement(le,{onClose:this.closePopup})))}}]),a}(r.Component),ie={position:"absolute",bottom:16,right:16},ue=oe,me=a(198),pe=a(199),de=a(200),ge=a(69),fe=a.n(ge),be=Object(G.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function he(e){var t=e.title,a=be(),n=Object(y.f)();return c.a.createElement("div",{className:a.root},c.a.createElement(me.a,{position:"static"},c.a.createElement(pe.a,null,c.a.createElement(de.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"menu"},c.a.createElement(fe.a,null)),c.a.createElement(A.a,{variant:"h6",className:a.title},t),c.a.createElement(w.a,{onClick:Object(k.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.push("/");case 1:case"end":return e.stop()}}),e)}))),variant:"contained",size:"medium",color:"primary"},"\ub85c\uadf8\uc544\uc6c3"))))}var ve=function(e){Object(ee.a)(a,e);var t=Object(te.a)(a);function a(e){return Object(Y.a)(this,a),t.call(this,e)}return Object(Z.a)(a,[{key:"movePage",value:function(){this.props.history.push("/mainComp")}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(he,{title:"Sub Menu 1"}),c.a.createElement(w.a,{name:"btn1",variant:"contained",onClick:function(){return e.movePage()}},"\uba54\uc778\uc73c\ub85c \uac00\uae30"))}}]),a}(c.a.Component),Ee=Object(G.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function Oe(e){var t=e.title,a=Ee(),n=Object(y.f)();return c.a.createElement("div",{className:a.root},c.a.createElement(me.a,{position:"static"},c.a.createElement(pe.a,null,c.a.createElement(de.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"menu"},c.a.createElement(fe.a,null)),c.a.createElement(A.a,{variant:"h6",className:a.title},t),c.a.createElement(w.a,{onClick:Object(k.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.push("/");case 1:case"end":return e.stop()}}),e)}))),variant:"contained",size:"medium",color:"primary"},"\ub85c\uadf8\uc544\uc6c3"))))}var je=function(e){Object(ee.a)(a,e);var t=Object(te.a)(a);function a(e){return Object(Y.a)(this,a),t.call(this,e)}return Object(Z.a)(a,[{key:"movePage",value:function(){this.props.history.push("/mainComp")}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(Oe,{title:"Sub Menu 2"}),c.a.createElement(w.a,{name:"btn1",variant:"contained",onClick:function(){return e.movePage()}},"\uba54\uc778\uc73c\ub85c \uac00\uae30"))}}]),a}(c.a.Component),ye=function(e){Object(ee.a)(a,e);var t=Object(te.a)(a);function a(e){return Object(Y.a)(this,a),t.call(this,e)}return Object(Z.a)(a,[{key:"movePage",value:function(){this.props.history.push("/mainComp")}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(he,{title:"Sub Menu 1"}),c.a.createElement(w.a,{name:"btn1",variant:"contained",onClick:function(){return e.movePage()}},"\uba54\uc778\uc73c\ub85c \uac00\uae30"))}}]),a}(c.a.Component),Ce=function(e){Object(ee.a)(a,e);var t=Object(te.a)(a);function a(e){var n;return Object(Y.a)(this,a),(n=t.call(this)).changeMenu=function(e){n.setState({menu:e}),0==e?n.props.history.push("/menu1"):1===e?n.props.history.push("/menu2"):n.props.history.push("/menu3")},n.state={Menu:0},n}return Object(Z.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(Oe,{title:"\uba54\uc778 \uba54\ub274"}),c.a.createElement("div",{className:"wrap"},c.a.createElement("div",{className:"menuBar"},c.a.createElement("ul",{className:"tabs"},c.a.createElement("li",{className:"".concat(0===this.state.menu?"active":""),onClick:function(){return e.changeMenu(0)}},"Sub Menu 1"),c.a.createElement("li",{className:"".concat(1===this.state.menu?"active":""),onClick:function(){return e.changeMenu(1)}},"Sub Menu 2"),c.a.createElement("li",{className:"".concat(2===this.state.menu?"active":""),onClick:function(){return e.changeMenu(2)}},"Sub Menu 3"))),c.a.createElement("div",{className:"contentArea"},Ne[this.state.menu])))}}]),a}(c.a.Component),Ne={0:c.a.createElement(ve,null),1:c.a.createElement(je,null),2:c.a.createElement(ye,null)},ke=Ce,Me=function(){return c.a.createElement(j.a,null,c.a.createElement(y.c,null,c.a.createElement(y.a,{path:"/",exact:!0,component:X}),c.a.createElement(y.a,{path:"/mainComp",component:ke}),c.a.createElement(y.a,{path:"/menu1",component:ve}),c.a.createElement(y.a,{path:"/menu2",component:je}),c.a.createElement(y.a,{path:"/menu3",component:ye})),c.a.createElement(ue,null))},Pe=Object(v.a)(),we=Object(o.c)(h,Object(o.a)(Pe,E.a));console.log(we.getState()),l.a.render(c.a.createElement(O.a,{store:we},c.a.createElement(Me,null)),document.getElementById("root"))},91:function(e,t,a){}},[[113,1,2]]]);
//# sourceMappingURL=main.0c0a7726.chunk.js.map