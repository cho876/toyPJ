(this.webpackJsonpfrontjs=this.webpackJsonpfrontjs||[]).push([[0],{150:function(e,t,a){e.exports=a(185)},159:function(e,t,a){},181:function(e,t,a){},185:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),l=a(18),o=a.n(l),i=a(78),s=a(9),u=a(79),m=a(259),p="MAIN/LOGIN_SUCCESS",d="MAIN/LOGIN_FAIL",f=Object(m.a)((n={},Object(s.a)(n,p,(function(e,t){return Object(u.a)(Object(u.a)({},e),{},{accountId:t.payload.accountId,isLogged:!0})})),Object(s.a)(n,d,(function(e,t){return Object(u.a)(Object(u.a)({},e),{},{isLogged:!1,errorMessage:t.payload})})),n),{accountId:"NOT LOGIN",isLogged:!1,errorMessage:null,isLoginPage:!0}),g=Object(i.b)({main:f}),b=a(132),h=a(130),E=a(62),v=(a(159),a(71)),y=a(21),O=a(35),x=a.n(O),j=a(46),C=a(23),k=a(274),P=a(248),w=a(246),N=a(258),M=a(123),I=a.n(M),L=a(124),B=a.n(L),S=a(247),T=a(241),W=a(244),G=Object(T.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function F(e){var t=e.handleClick,a=e.message,n=e.isLoginPage,l=G(),o=Object(r.useState)(""),i=Object(C.a)(o,2),s=i[0],u=i[1],m=Object(r.useState)(""),p=Object(C.a)(m,2),d=p[0],f=p[1];return Object(r.useEffect)((function(){u(""),f("")}),[n]),c.a.createElement(W.a,{component:"main",maxWidth:"xs"},c.a.createElement(w.a,null),c.a.createElement("div",{className:l.paper},c.a.createElement(k.a,{className:l.avatar},n?c.a.createElement(I.a,null):c.a.createElement(B.a,null)),c.a.createElement(S.a,{component:"h1",variant:"h5"},"Toy PJ"),c.a.createElement(S.a,{variant:"subtitle1",gutterBottom:!0},a),c.a.createElement("form",{className:l.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),t(s,d)}},c.a.createElement(N.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"\uc774\uba54\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",name:"email",autoComplete:"email",autoFocus:!0,value:s,onChange:function(e){return u(e.target.value)}}),c.a.createElement(N.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",type:"password",id:"password",autoComplete:"current-password",value:d,onChange:function(e){return f(e.target.value)}}),c.a.createElement(P.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:l.submit},"\ub85c\uadf8\uc778"))))}var R=a(76),_=a.n(R),A="http://localhost:8070/chatbot";function D(e,t){return H.apply(this,arguments)}function H(){return(H=Object(j.a)(x.a.mark((function e(t,a){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.post(A+"/onLogin",{user_id:t,user_pw:a});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var V=a(263),z=Object(V.a)(p,(function(e){return{accountId:e}})),J=Object(V.a)(d,(function(e){return e})),K=Object(E.b)((function(e){return{errorMessage:e.main.errorMessage,isLoginPage:e.main.isLoginPage}}),(function(e){return{loginSuccess:function(t){return e(z(t))},loginFail:function(t){return e(J(t))}}}))((function(e){var t=e.isLoginPage,a=e.errorMessage,n=e.loginSuccess,r=e.loginFail,l=Object(y.f)(),o=function(){var e=Object(j.a)(x.a.mark((function e(t,a){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(t,a);case 2:1===e.sent.data?(n(t),alert("\ub85c\uadf8\uc778\uc5d0 \uc131\uacf5\ud558\uc168\uc2b5\ub2c8\ub2e4. \uac8c\uc2dc\ud310\uc73c\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4."),l.push("/mainComp")):(r("\ub85c\uadf8\uc778 \uc2e4\ud328"),alert("\ub85c\uadf8\uc778\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4."));case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return c.a.createElement(F,{handleClick:o,message:a,isLoginPage:t})})),q=a(32),U=a(33),Q=a(77),$=a(41),X=a(40),Y=a(260),Z=function(e){var t=e.children,a=document.getElementById("popupDom");return o.a.createPortal(t,a)},ee=a(17),te=new(function(){function e(){Object(q.a)(this,e)}return Object(U.a)(e,[{key:"sendBug",value:function(e){return _.a.post("http://localhost:8070/chatbot/sendBug",e)}},{key:"getBtn",value:function(e){return _.a.get("http://localhost:8070/chatbot/getBtn?btnno="+e)}}]),e}()),ae=a(275),ne=(a(181),function(e){Object($.a)(a,e);var t=Object(X.a)(a);function a(e){var n;return Object(q.a)(this,a),(n=t.call(this,e)).textRef=c.a.createRef(),n.handleKeyPress=function(e){if(13===e.charCode){n.addMessage("right","\uc0ac\uc6a9\uc790",n.state.message,[],!1);var t={senderId:n.state.senderId,message:n.state.message,location:window.location.href,email:n.state.email};n.receiveMessage(t)}},n.receiveMessage=function(e){te.sendBug(e).then((function(e){n.addMessage("left","\uc54c\ub9bc\ubd07",e.data.message,[],!1),n.addMessage("left","\uc54c\ub9bc\ubd07",n.state.replies[1].message,n.state.replies[1].btnList,!0),n.clearMessage()}))},n.clearMessage=function(){n.textRef.current.value="",n.state.message="",n.state.enableWrite=!1},n.onChange=function(e){n.setState(Object(s.a)({},e.target.name,e.target.value))},n.addMessage=function(e,t,a,r,c){n.setState({replies:[].concat(Object(ee.a)(n.state.replies),[{uuid:n.state.replies.length+1,className:e,senderId:t,message:a,btnList:r,isButton:c}])});var l=n.box.scrollHeight;n.box.scrollTop=l},n.clickEvent=function(e){"1001"===e?(n.state.enableWrite=!0,n.addMessage("left","\uc54c\ub9bc\ubd07","\ubc84\uadf8 \uc0c1\uc138 \ub0b4\uc6a9\uc744 \uae30\uc785\ud574\uc8fc\uc138\uc694.\n\ube44\ud68c\uc6d0\uc740 \ud53c\ub4dc\ubc31\uc744 \ubc1b\uc73c\uc2e4 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",[],!1)):(console.log("code: "+e),te.getBtn(e).then((function(e){var t,a=e.data.flag;if("btn"===a){e.data.nextBtn.map((function(e){t=e.parentNm,n.setState({btnList:[].concat(Object(ee.a)(n.state.btnList),[{btnno:e.childNo,btnmsg:e.childNm}])})})),n.addMessage("right","\uc0ac\uc6a9\uc790",t,[],!0);var r=n.state.btnList;n.addMessage("left","\uc54c\ub9bc\ubd07","\ubb38\uc758\ud560 \ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",r,!0),n.setState({btnList:[]})}else"str"===a&&(n.addMessage("right","\uc0ac\uc6a9\uc790",e.data.msg,[],!1),n.addMessage("left","\uc54c\ub9bc\ubd07",e.data.ans,[],!1),n.addMessage("left","\uc54c\ub9bc\ubd07",n.state.replies[1].message,n.state.replies[1].btnList,!0))})))},n.state={senderId:"\uc0ac\uc6a9\uc790",email:n.props.accountId,message:null,location:null,btnList:[],enableWrite:!1,replies:[{className:"left",senderId:"\uc54c\ub9bc\ubd07",message:"\uc548\ub155\ud558\uc138\uc694.\n\ubb34\uc5c7\uc744 \ub3c4\uc640\ub4dc\ub9b4\uae4c\uc694?",isButton:!1,btnList:[]},{className:"left",senderId:"\uc54c\ub9bc\ubd07",message:"\ubb38\uc758\ud560 \ub0b4\uc6a9\uc5d0 \ub300\ud574 \uc785\ub825\ud574\uc8fc\uc138\uc694.",isButton:!0,btnList:[{btnno:"1001",btnmsg:"\ubc84\uadf8\uc2e0\uace0"},{btnno:"1000",btnmsg:"\uc5c5\ubb34\ubb38\uc758"}]}],flag:"normal"},n}return Object(U.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"dimmed_layer_wrapper"},c.a.createElement("div",{className:"full_layer"},c.a.createElement("div",{className:"common_alert"},c.a.createElement("div",{className:"chatName"},c.a.createElement("span",null,"\ubb38\uc758\ud558\uae30"),c.a.createElement(ae.a,{className:"exitBtn",color:"secondary",size:"sm",onClick:this.props.onClose},c.a.createElement("span",null,"\ub098\uac00\uae30"))),c.a.createElement("div",{class:"chat",ref:function(t){e.box=t}},c.a.createElement("ul",null,this.state.replies.map((function(t){return c.a.createElement("li",{class:t.className},c.a.createElement("div",{class:"sender"},c.a.createElement("span",null,t.senderId)),c.a.createElement("div",{class:"message"},c.a.createElement("span",null,t.message)),c.a.createElement("div",{class:"btn"},t.isButton?t.btnList.map((function(t){return c.a.createElement(ae.a,{onClick:function(){return e.clickEvent(t.btnno)}},t.btnmsg)})):null))})))),c.a.createElement("div",{class:"input-div"},c.a.createElement("textarea",{placeholder:"\ubb38\uc758\uc0ac\ud56d\uc744 \uae30\uc7ac\ud574\uc8fc\uc138\uc694.",name:"message",ref:this.textRef,onChange:this.onChange,rows:3,onKeyPress:this.handleKeyPress,disabled:!this.state.enableWrite})),c.a.createElement("div",{class:"chat format"},c.a.createElement("ul",null,this.state.replies.map((function(e){return c.a.createElement("li",{class:e.className},c.a.createElement("div",{class:"sender"},c.a.createElement("span",null,e.senderId)),c.a.createElement("div",{class:"message"},c.a.createElement("span",null,e.message)))})))))))}}]),a}(r.Component)),re=Object(E.b)((function(e){return{accountId:e.main.accountId}}),(function(e){return{}}))(ne),ce=function(e){Object($.a)(a,e);var t=Object(X.a)(a);function a(e){var n;return Object(q.a)(this,a),(n=t.call(this,e)).state={isOpenPopup:!1},n.openPopup=n.openPopup.bind(Object(Q.a)(n)),n.closePopup=n.closePopup.bind(Object(Q.a)(n)),n}return Object(U.a)(a,[{key:"openPopup",value:function(){this.setState({isOpenPopup:!0})}},{key:"closePopup",value:function(){console.log("closePopup"),this.setState({isOpenPopup:!1})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(Y.a,{id:"popupDom",style:le,variant:"contained",onClick:this.openPopup},"\ubb38\uc758\ud558\uae30"),this.state.isOpenPopup&&c.a.createElement(Z,null,c.a.createElement(re,{onClose:this.closePopup})))}}]),a}(r.Component),le={position:"absolute",bottom:16,right:16},oe=ce,ie=a(264),se=a(272),ue=a(269),me=a(273),pe=a(271),de=a(270),fe=a(253),ge=a(262),be=a(129),he=a.n(be),Ee=a(265),ve=a(266),ye=a(267),Oe=a(189),xe=a(268),je=[{title:"Free",price:"0",description:["10 users included","2 GB of storage","Help center access","Email support"],buttonText:"Sign up for free",buttonVariant:"outlined"},{title:"Pro",subheader:"Most popular",price:"15",description:["20 users included","10 GB of storage","Help center access","Priority email support"],buttonText:"Get started",buttonVariant:"contained"},{title:"Enterprise",price:"30",description:["50 users included","30 GB of storage","Help center access","Phone & email support"],buttonText:"Contact us",buttonVariant:"outlined"}],Ce=[{title:"Company",description:["Team","History","Contact us","Locations"]},{title:"Features",description:["Cool stuff","Random feature","Team feature","Developer stuff","Another one"]},{title:"Resources",description:["Resource","Resource name","Another resource","Final resource"]},{title:"Legal",description:["Privacy policy","Terms of use"]}];function ke(){console.log("testFunc")}function Pe(){return r.createElement(r.Fragment,null,r.createElement(Oe.a,{styles:{ul:{margin:0,padding:0,listStyle:"none"}}}),r.createElement(fe.a,null),r.createElement(ie.a,{position:"static",color:"default",elevation:0,sx:{borderBottom:function(e){return"1px solid ".concat(e.palette.divider)}}},r.createElement(Ee.a,{sx:{flexWrap:"wrap"}},r.createElement(ve.a,{variant:"h6",color:"inherit",noWrap:!0,sx:{flexGrow:1}},"Company name"),r.createElement("nav",null,r.createElement(ye.a,{variant:"button",color:"text.primary",href:"#",onclick:ke,sx:{my:1,mx:1.5}},"Features"),r.createElement(ye.a,{variant:"button",color:"text.primary",href:"#",sx:{my:1,mx:1.5}},"Enterprise"),r.createElement(ye.a,{variant:"button",color:"text.primary",href:"#",sx:{my:1,mx:1.5}},"Support")),r.createElement(Y.a,{href:"#",variant:"outlined",sx:{my:1,mx:1.5}},"Login"))),r.createElement(xe.a,{disableGutters:!0,maxWidth:"sm",component:"main",sx:{pt:8,pb:6}},r.createElement(ve.a,{component:"h1",variant:"h2",align:"center",color:"text.primary",gutterBottom:!0},"Pricing"),r.createElement(ve.a,{variant:"h5",align:"center",color:"text.secondary",component:"p"},"Quickly build an effective pricing table for your potential customers with this layout. It's built with default MUI components with little customization.")),r.createElement(xe.a,{maxWidth:"md",component:"main"},r.createElement(ge.a,{container:!0,spacing:5,alignItems:"flex-end"},je.map((function(e){return r.createElement(ge.a,{item:!0,key:e.title,xs:12,sm:"Enterprise"===e.title?12:6,md:4},r.createElement(ue.a,null,r.createElement(de.a,{title:e.title,subheader:e.subheader,titleTypographyProps:{align:"center"},action:"Pro"===e.title?r.createElement(he.a,null):null,subheaderTypographyProps:{align:"center"},sx:{backgroundColor:function(e){return"light"===e.palette.mode?e.palette.grey[200]:e.palette.grey[700]}}}),r.createElement(pe.a,null,r.createElement(se.a,{sx:{display:"flex",justifyContent:"center",alignItems:"baseline",mb:2}},r.createElement(ve.a,{component:"h2",variant:"h3",color:"text.primary"},"$",e.price),r.createElement(ve.a,{variant:"h6",color:"text.secondary"},"/mo")),r.createElement("ul",null,e.description.map((function(e){return r.createElement(ve.a,{component:"li",variant:"subtitle1",align:"center",key:e},e)})))),r.createElement(me.a,null,r.createElement(Y.a,{fullWidth:!0,variant:e.buttonVariant},e.buttonText))))})))),r.createElement(xe.a,{maxWidth:"md",component:"footer",sx:{borderTop:function(e){return"1px solid ".concat(e.palette.divider)},mt:8,py:[3,6]}},r.createElement(ge.a,{container:!0,spacing:4,justifyContent:"space-evenly"},Ce.map((function(e){return r.createElement(ge.a,{item:!0,xs:6,sm:3,key:e.title},r.createElement(ve.a,{variant:"h6",color:"text.primary",gutterBottom:!0},e.title),r.createElement("ul",null,e.description.map((function(e){return r.createElement("li",{key:e},r.createElement(ye.a,{href:"#",variant:"subtitle1",color:"text.secondary"},e))}))))})))))}function we(){return r.createElement(Pe,null)}var Ne=a(255),Me=a(256),Ie=a(257),Le=a(89),Be=a.n(Le),Se=Object(T.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function Te(e){var t=e.title,a=Se(),n=Object(y.f)();return c.a.createElement("div",{className:a.root},c.a.createElement(Ne.a,{position:"static"},c.a.createElement(Me.a,null,c.a.createElement(Ie.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"menu"},c.a.createElement(Be.a,null)),c.a.createElement(S.a,{variant:"h6",className:a.title},t),c.a.createElement(P.a,{onClick:Object(j.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.push("/");case 1:case"end":return e.stop()}}),e)}))),variant:"contained",size:"medium",color:"primary"},"\ub85c\uadf8\uc544\uc6c3"))))}var We=function(e){Object($.a)(a,e);var t=Object(X.a)(a);function a(e){return Object(q.a)(this,a),t.call(this,e)}return Object(U.a)(a,[{key:"movePage",value:function(){this.props.history.push("/mainComp")}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(Te,{title:"Sub Menu 1"}),c.a.createElement("div",null,"Sub Menu 1",c.a.createElement(P.a,{name:"btn1",variant:"contained",onClick:function(){return e.movePage()}},"\uba54\uc778\uc73c\ub85c \uac00\uae30")))}}]),a}(c.a.Component),Ge=Object(T.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function Fe(e){var t=e.title,a=Ge(),n=Object(y.f)();return c.a.createElement("div",{className:a.root},c.a.createElement(Ne.a,{position:"static"},c.a.createElement(Me.a,null,c.a.createElement(Ie.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"menu"},c.a.createElement(Be.a,null)),c.a.createElement(S.a,{variant:"h6",className:a.title},t),c.a.createElement(P.a,{onClick:Object(j.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.push("/");case 1:case"end":return e.stop()}}),e)}))),variant:"contained",size:"medium",color:"primary"},"\ub85c\uadf8\uc544\uc6c3"))))}var Re=function(e){Object($.a)(a,e);var t=Object(X.a)(a);function a(e){return Object(q.a)(this,a),t.call(this,e)}return Object(U.a)(a,[{key:"movePage",value:function(){this.props.history.push("/mainComp")}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(Fe,{title:"Sub Menu 2"}),c.a.createElement("div",null,"Sub Menu 2",c.a.createElement(P.a,{name:"btn1",variant:"contained",onClick:function(){return e.movePage()}},"\uba54\uc778\uc73c\ub85c \uac00\uae30")))}}]),a}(c.a.Component),_e=function(e){Object($.a)(a,e);var t=Object(X.a)(a);function a(e){return Object(q.a)(this,a),t.call(this,e)}return Object(U.a)(a,[{key:"movePage",value:function(){this.props.history.push("/mainComp")}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(Te,{title:"Sub Menu 3"}),c.a.createElement("div",null,"Sub Menu 3",c.a.createElement(P.a,{name:"btn1",variant:"contained",onClick:function(){return e.movePage()}},"\uba54\uc778\uc73c\ub85c \uac00\uae30")))}}]),a}(c.a.Component),Ae=function(){return c.a.createElement(v.a,null,c.a.createElement(y.c,null,c.a.createElement(y.a,{path:"/",exact:!0,component:K}),c.a.createElement(y.a,{path:"/mainComp",component:we}),c.a.createElement(y.a,{path:"/menu1",component:We}),c.a.createElement(y.a,{path:"/menu2",component:Re}),c.a.createElement(y.a,{path:"/menu3",component:_e})),c.a.createElement(oe,null))},De=Object(b.a)(),He=Object(i.c)(g,Object(i.a)(De,h.a));console.log(He.getState()),o.a.render(c.a.createElement(E.a,{store:He},c.a.createElement(Ae,null)),document.getElementById("root"))}},[[150,1,2]]]);
//# sourceMappingURL=main.e4e5231b.chunk.js.map