(this.webpackJsonpfrontjs=this.webpackJsonpfrontjs||[]).push([[0],{110:function(e,t,a){},132:function(e,t,a){e.exports=a(164)},141:function(e,t,a){},164:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),s=a(12),l=a.n(s),i=a(73),o=a(9),u=a(74),m=a(226),p="MAIN/LOGIN_SUCCESS",d="MAIN/LOGIN_FAIL",g=Object(m.a)((n={},Object(o.a)(n,p,(function(e,t){return Object(u.a)(Object(u.a)({},e),{},{accountId:t.payload.accountId,isLogged:!0})})),Object(o.a)(n,d,(function(e,t){return Object(u.a)(Object(u.a)({},e),{},{isLogged:!1,errorMessage:t.payload})})),n),{accountId:"NOT LOGIN",isLogged:!1,errorMessage:null,isLoginPage:!0}),f=Object(i.b)({main:g}),b=a(118),h=a(117),v=a(56),E=(a(141),a(66)),O=a(15),j=a(33),y=a.n(j),k=a(44),C=a(32),N=a(231),M=a(220),P=a(217),x=a(224),w=a(113),S=a.n(w),I=a(114),L=a.n(I),B=a(219),_=a(211),G=a(227),R=a(230),W=Object(_.a)((function(e){return{paper:{my:e.spacing(8),mx:e.spacing(4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function z(e){var t=e.handleClick,a=e.message,n=e.isLoginPage,s=W(),l=Object(r.useState)(""),i=Object(C.a)(l,2),o=i[0],u=i[1],m=Object(r.useState)(""),p=Object(C.a)(m,2),d=p[0],g=p[1];return Object(r.useEffect)((function(){u(""),g("")}),[n]),c.a.createElement(G.a,{conatiner:!0,componet:"main",sx:{height:"100vh"}},c.a.createElement(P.a,null),c.a.createElement(G.a,{item:!0,xs:!1,sm:4,md:7,sx:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundColor:function(e){return"light"===e.palette.mode?e.palette.grey[50]:e.palette.grey[900]},backgroundSize:"cover",backgroundPosition:"center"}}),c.a.createElement(G.a,{item:!0,xs:12,sm:8,md:5,component:R.a,elevation:6,square:!0},c.a.createElement("div",{className:s.paper},c.a.createElement(N.a,{className:s.avatar},n?c.a.createElement(S.a,null):c.a.createElement(L.a,null)),c.a.createElement(B.a,{component:"h1",variant:"h5"},"Toy PJ"),c.a.createElement(B.a,{variant:"subtitle1",gutterBottom:!0},a),c.a.createElement("form",{className:s.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),t(o,d)}},c.a.createElement(x.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"\uc774\uba54\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",name:"email",autoComplete:"email",autoFocus:!0,value:o,onChange:function(e){return u(e.target.value)}}),c.a.createElement(x.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",type:"password",id:"password",autoComplete:"current-password",value:d,onChange:function(e){return g(e.target.value)}}),c.a.createElement(M.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:s.submit},"\ub85c\uadf8\uc778")))))}var A=a(71),D=a.n(A),F="http://localhost:8070/chatbot";function T(e,t){return q.apply(this,arguments)}function q(){return(q=Object(k.a)(y.a.mark((function e(t,a){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.post(F+"/onLogin",{user_id:t,user_pw:a});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var J=a(229),K=Object(J.a)(p,(function(e){return{accountId:e}})),H=Object(J.a)(d,(function(e){return e})),U=Object(v.b)((function(e){return{errorMessage:e.main.errorMessage,isLoginPage:e.main.isLoginPage}}),(function(e){return{loginSuccess:function(t){return e(K(t))},loginFail:function(t){return e(H(t))}}}))((function(e){var t=e.isLoginPage,a=e.errorMessage,n=e.loginSuccess,r=e.loginFail,s=Object(O.f)(),l=function(){var e=Object(k.a)(y.a.mark((function e(t,a){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(t,a);case 2:1===e.sent.data?(n(t),alert("\ub85c\uadf8\uc778\uc5d0 \uc131\uacf5\ud558\uc168\uc2b5\ub2c8\ub2e4. \uac8c\uc2dc\ud310\uc73c\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4."),s.push("/mainComp")):(r("\ub85c\uadf8\uc778 \uc2e4\ud328"),alert("\ub85c\uadf8\uc778\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4."));case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return c.a.createElement(z,{handleClick:l,message:a,isLoginPage:t})})),V=a(23),Q=a(24),X=a(72),Y=a(30),Z=a(29),$=a(225),ee=function(e){var t=e.children,a=document.getElementById("popupDom");return l.a.createPortal(t,a)},te=a(11),ae=new(function(){function e(){Object(V.a)(this,e)}return Object(Q.a)(e,[{key:"sendBug",value:function(e){return D.a.post("http://localhost:8070/chatbot/sendBug",e)}},{key:"getBtn",value:function(e){return D.a.get("http://localhost:8070/chatbot/getBtn?btnno="+e)}}]),e}()),ne=a(232),re=(a(110),function(e){Object(Y.a)(a,e);var t=Object(Z.a)(a);function a(e){var n;return Object(V.a)(this,a),(n=t.call(this,e)).textRef=c.a.createRef(),n.handleKeyPress=function(e){if(13===e.charCode){n.addMessage("right","\uc0ac\uc6a9\uc790",n.state.message,[],!1);var t={senderId:n.state.senderId,message:n.state.message,location:window.location.href,email:n.state.email};n.receiveMessage(t)}},n.receiveMessage=function(e){ae.sendBug(e).then((function(e){n.addMessage("left","\uc54c\ub9bc\ubd07",e.data.message,[],!1),n.addMessage("left","\uc54c\ub9bc\ubd07",n.state.replies[1].message,n.state.replies[1].btnList,!0),n.clearMessage()}))},n.clearMessage=function(){n.textRef.current.value="",n.state.message="",n.state.enableWrite=!1},n.onChange=function(e){n.setState(Object(o.a)({},e.target.name,e.target.value))},n.addMessage=function(e,t,a,r,c){n.setState({replies:[].concat(Object(te.a)(n.state.replies),[{uuid:n.state.replies.length+1,className:e,senderId:t,message:a,btnList:r,isButton:c}])});var s=n.box.scrollHeight;n.box.scrollTop=s},n.clickEvent=function(e){"1001"===e?(n.state.enableWrite=!0,n.addMessage("left","\uc54c\ub9bc\ubd07","\ubc84\uadf8 \uc0c1\uc138 \ub0b4\uc6a9\uc744 \uae30\uc785\ud574\uc8fc\uc138\uc694.\n\ube44\ud68c\uc6d0\uc740 \ud53c\ub4dc\ubc31\uc744 \ubc1b\uc73c\uc2e4 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",[],!1)):(console.log("code: "+e),ae.getBtn(e).then((function(e){var t,a=e.data.flag;if("btn"===a){e.data.nextBtn.map((function(e){t=e.parentNm,n.setState({btnList:[].concat(Object(te.a)(n.state.btnList),[{btnno:e.childNo,btnmsg:e.childNm}])})})),n.addMessage("right","\uc0ac\uc6a9\uc790",t,[],!0);var r=n.state.btnList;n.addMessage("left","\uc54c\ub9bc\ubd07","\ubb38\uc758\ud560 \ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",r,!0),n.setState({btnList:[]})}else"str"===a&&(n.addMessage("right","\uc0ac\uc6a9\uc790",e.data.msg,[],!1),n.addMessage("left","\uc54c\ub9bc\ubd07",e.data.ans,[],!1),n.addMessage("left","\uc54c\ub9bc\ubd07",n.state.replies[1].message,n.state.replies[1].btnList,!0))})))},n.state={senderId:"\uc0ac\uc6a9\uc790",email:n.props.accountId,message:null,location:null,btnList:[],enableWrite:!1,replies:[{className:"left",senderId:"\uc54c\ub9bc\ubd07",message:"\uc548\ub155\ud558\uc138\uc694.\n\ubb34\uc5c7\uc744 \ub3c4\uc640\ub4dc\ub9b4\uae4c\uc694?",isButton:!1,btnList:[]},{className:"left",senderId:"\uc54c\ub9bc\ubd07",message:"\ubb38\uc758\ud560 \ub0b4\uc6a9\uc5d0 \ub300\ud574 \uc785\ub825\ud574\uc8fc\uc138\uc694.",isButton:!0,btnList:[{btnno:"1001",btnmsg:"\ubc84\uadf8\uc2e0\uace0"},{btnno:"1000",btnmsg:"\uc5c5\ubb34\ubb38\uc758"}]}],flag:"normal"},n}return Object(Q.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"dimmed_layer_wrapper"},c.a.createElement("div",{className:"full_layer"},c.a.createElement("div",{className:"common_alert"},c.a.createElement("div",{className:"chatName"},c.a.createElement("span",null,"\ubb38\uc758\ud558\uae30"),c.a.createElement(ne.a,{className:"exitBtn",color:"secondary",size:"sm",onClick:this.props.onClose},c.a.createElement("span",null,"\ub098\uac00\uae30"))),c.a.createElement("div",{class:"chat",ref:function(t){e.box=t}},c.a.createElement("ul",null,this.state.replies.map((function(t){return c.a.createElement("li",{class:t.className},c.a.createElement("div",{class:"sender"},c.a.createElement("span",null,t.senderId)),c.a.createElement("div",{class:"message"},c.a.createElement("span",null,t.message)),c.a.createElement("div",{class:"btn"},t.isButton?t.btnList.map((function(t){return c.a.createElement(ne.a,{onClick:function(){return e.clickEvent(t.btnno)}},t.btnmsg)})):null))})))),c.a.createElement("div",{class:"input-div"},c.a.createElement("textarea",{placeholder:"\ubb38\uc758\uc0ac\ud56d\uc744 \uae30\uc7ac\ud574\uc8fc\uc138\uc694.",name:"message",ref:this.textRef,onChange:this.onChange,rows:3,onKeyPress:this.handleKeyPress,disabled:!this.state.enableWrite})),c.a.createElement("div",{class:"chat format"},c.a.createElement("ul",null,this.state.replies.map((function(e){return c.a.createElement("li",{class:e.className},c.a.createElement("div",{class:"sender"},c.a.createElement("span",null,e.senderId)),c.a.createElement("div",{class:"message"},c.a.createElement("span",null,e.message)))})))))))}}]),a}(r.Component)),ce=Object(v.b)((function(e){return{accountId:e.main.accountId}}),(function(e){return{}}))(re),se=function(e){Object(Y.a)(a,e);var t=Object(Z.a)(a);function a(e){var n;return Object(V.a)(this,a),(n=t.call(this,e)).state={isOpenPopup:!1},n.openPopup=n.openPopup.bind(Object(X.a)(n)),n.closePopup=n.closePopup.bind(Object(X.a)(n)),n}return Object(Q.a)(a,[{key:"openPopup",value:function(){this.setState({isOpenPopup:!0})}},{key:"closePopup",value:function(){console.log("closePopup"),this.setState({isOpenPopup:!1})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement($.a,{id:"popupDom",style:le,variant:"contained",onClick:this.openPopup},"\ubb38\uc758\ud558\uae30"),this.state.isOpenPopup&&c.a.createElement(ee,null,c.a.createElement(ce,{onClose:this.closePopup})))}}]),a}(r.Component),le={position:"absolute",bottom:16,right:16},ie=se,oe=a(221),ue=a(222),me=a(223),pe=a(84),de=a.n(pe),ge=Object(_.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function fe(e){var t=e.title,a=ge(),n=Object(O.f)();return c.a.createElement("div",{className:a.root},c.a.createElement(oe.a,{position:"static"},c.a.createElement(ue.a,null,c.a.createElement(me.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"menu"},c.a.createElement(de.a,null)),c.a.createElement(B.a,{variant:"h6",className:a.title},t),c.a.createElement(M.a,{onClick:Object(k.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.push("/");case 1:case"end":return e.stop()}}),e)}))),variant:"contained",size:"medium",color:"primary"},"\ub85c\uadf8\uc544\uc6c3"))))}var be=function(e){Object(Y.a)(a,e);var t=Object(Z.a)(a);function a(e){return Object(V.a)(this,a),t.call(this,e)}return Object(Q.a)(a,[{key:"movePage",value:function(){this.props.history.push("/mainComp")}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(fe,{title:"Sub Menu 1"}),c.a.createElement("div",null,"Sub Menu 1",c.a.createElement(M.a,{name:"btn1",variant:"contained",onClick:function(){return e.movePage()}},"\uba54\uc778\uc73c\ub85c \uac00\uae30")))}}]),a}(c.a.Component),he=Object(_.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function ve(e){var t=e.title,a=he(),n=Object(O.f)();return c.a.createElement("div",{className:a.root},c.a.createElement(oe.a,{position:"static"},c.a.createElement(ue.a,null,c.a.createElement(me.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"menu"},c.a.createElement(de.a,null)),c.a.createElement(B.a,{variant:"h6",className:a.title},t),c.a.createElement(M.a,{onClick:Object(k.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.push("/");case 1:case"end":return e.stop()}}),e)}))),variant:"contained",size:"medium",color:"primary"},"\ub85c\uadf8\uc544\uc6c3"))))}var Ee=function(e){Object(Y.a)(a,e);var t=Object(Z.a)(a);function a(e){return Object(V.a)(this,a),t.call(this,e)}return Object(Q.a)(a,[{key:"movePage",value:function(){this.props.history.push("/mainComp")}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(ve,{title:"Sub Menu 2"}),c.a.createElement("div",null,"Sub Menu 2",c.a.createElement(M.a,{name:"btn1",variant:"contained",onClick:function(){return e.movePage()}},"\uba54\uc778\uc73c\ub85c \uac00\uae30")))}}]),a}(c.a.Component),Oe=function(e){Object(Y.a)(a,e);var t=Object(Z.a)(a);function a(e){return Object(V.a)(this,a),t.call(this,e)}return Object(Q.a)(a,[{key:"movePage",value:function(){this.props.history.push("/mainComp")}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(fe,{title:"Sub Menu 3"}),c.a.createElement("div",null,"Sub Menu 3",c.a.createElement(M.a,{name:"btn1",variant:"contained",onClick:function(){return e.movePage()}},"\uba54\uc778\uc73c\ub85c \uac00\uae30")))}}]),a}(c.a.Component),je=function(e){Object(Y.a)(a,e);var t=Object(Z.a)(a);function a(e){var n;return Object(V.a)(this,a),(n=t.call(this)).changeMenu=function(e){n.setState({menu:e}),0==e?n.props.history.push("/menu1"):1===e?n.props.history.push("/menu2"):n.props.history.push("/menu3")},n.state={Menu:0},n}return Object(Q.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(ve,{title:"\uba54\uc778 \uba54\ub274"}),c.a.createElement("div",{className:"wrap"},c.a.createElement("div",{className:"menuBar"},c.a.createElement("ul",{className:"tabs"},c.a.createElement("li",{className:"".concat(0===this.state.menu?"active":""),onClick:function(){return e.changeMenu(0)}},"Sub Menu 1"),c.a.createElement("li",{className:"".concat(1===this.state.menu?"active":""),onClick:function(){return e.changeMenu(1)}},"Sub Menu 2"),c.a.createElement("li",{className:"".concat(2===this.state.menu?"active":""),onClick:function(){return e.changeMenu(2)}},"Sub Menu 3"))),c.a.createElement("div",null,"Main Component"),c.a.createElement("div",{className:"contentArea"},ye[this.state.menu])))}}]),a}(c.a.Component),ye={0:c.a.createElement(be,null),1:c.a.createElement(Ee,null),2:c.a.createElement(Oe,null)},ke=je,Ce=function(){return c.a.createElement(E.a,null,c.a.createElement(O.c,null,c.a.createElement(O.a,{path:"/",exact:!0,component:U}),c.a.createElement(O.a,{path:"/mainComp",component:ke}),c.a.createElement(O.a,{path:"/menu1",component:be}),c.a.createElement(O.a,{path:"/menu2",component:Ee}),c.a.createElement(O.a,{path:"/menu3",component:Oe})),c.a.createElement(ie,null))},Ne=Object(b.a)(),Me=Object(i.c)(f,Object(i.a)(Ne,h.a));console.log(Me.getState()),l.a.render(c.a.createElement(v.a,{store:Me},c.a.createElement(Ce,null)),document.getElementById("root"))}},[[132,1,2]]]);
//# sourceMappingURL=main.293b8469.chunk.js.map