(this.webpackJsonpfrontjs=this.webpackJsonpfrontjs||[]).push([[0],{227:function(e,t,a){},228:function(e,t,a){},265:function(e,t,a){e.exports=a.p+"static/media/maple.9cfd598e.jpg"},319:function(e,t,a){e.exports=a(485)},328:function(e,t,a){},485:function(e,t,a){"use strict";a.r(t);var n,r=a(0),l=a.n(r),c=a(35),o=a.n(c),i=a(137),s=a(8),m=a(94),u=a(560),p="MAIN/LOGIN_SUCCESS",d="MAIN/LOGIN_FAIL",g=Object(u.a)((n={},Object(s.a)(n,p,(function(e,t){return Object(m.a)(Object(m.a)({},e),{},{accountId:t.payload.accountId,isLogged:!0})})),Object(s.a)(n,d,(function(e,t){return Object(m.a)(Object(m.a)({},e),{},{isLogged:!1,errorMessage:t.payload})})),n),{accountId:"NOT LOGIN",isLogged:!1,errorMessage:null,isLoginPage:!0}),E=Object(i.b)({main:g}),f=a(290),h=a(287),b=a(107),v=(a(328),a(52)),y=a(33),x=a(47),O=a.n(x),j=a(77),N=a(15),k=a(565),C=a(561),M=a(547),P=a(559),I=a(566),S=a(567),B=a(564),w=a(267),L=a.n(w),T=a(568),D=a(288),W=a(542),A=a(265),G=a.n(A),R=(Object(D.a)(),Object(W.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})));function F(e){var t=e.handleClick,a=(e.message,e.isLoginPage),n=R(),c=Object(r.useState)(""),o=Object(N.a)(c,2),i=o[0],s=o[1],m=Object(r.useState)(""),u=Object(N.a)(m,2),p=u[0],d=u[1];return Object(r.useEffect)((function(){s(""),d("")}),[a]),l.a.createElement(B.a,{container:!0,component:"main",sx:{height:"100vh"}},l.a.createElement(M.a,null),l.a.createElement(B.a,{item:!0,xs:!1,sm:4,md:7,sx:{backgroundImage:"url("+G.a+")",backgroundRepeat:"no-repeat",backgroundColor:function(e){return"light"===e.palette.mode?e.palette.grey[50]:e.palette.grey[900]},backgroundSize:"cover",backgroundPosition:"center"}}),l.a.createElement(B.a,{item:!0,xs:12,sm:8,md:5,component:I.a,elevation:6,square:!0},l.a.createElement(S.a,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center"}},l.a.createElement(k.a,{className:n.paper},l.a.createElement(L.a,null)),l.a.createElement(T.a,{component:"h1",variant:"h5"},"Sign in"),l.a.createElement("form",{className:n.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),t(i,p)}},l.a.createElement(P.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"\uc774\uba54\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",name:"email",autoComplete:"email",autoFocus:!0,value:i,onChange:function(e){return s(e.target.value)}}),l.a.createElement(P.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",type:"password",id:"password",autoComplete:"current-password",value:p,onChange:function(e){return d(e.target.value)}}),l.a.createElement(C.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2}},"Sign In")))))}var V=a(128),z=a.n(V),_="http://localhost:8070/chatbot";function H(e,t){return K.apply(this,arguments)}function K(){return(K=Object(j.a)(O.a.mark((function e(t,a){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.a.post(_+"/onLogin",{user_id:t,user_pw:a});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var J=a(569),q=Object(J.a)(p,(function(e){return{accountId:e}})),$=Object(J.a)(d,(function(e){return e})),U=Object(b.b)((function(e){return{errorMessage:e.main.errorMessage,isLoginPage:e.main.isLoginPage}}),(function(e){return{loginSuccess:function(t){return e(q(t))},loginFail:function(t){return e($(t))}}}))((function(e){var t=e.isLoginPage,a=e.errorMessage,n=e.loginSuccess,r=e.loginFail,c=Object(y.f)(),o=function(){var e=Object(j.a)(O.a.mark((function e(t,a){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H(t,a);case 2:1===e.sent.data?(n(t),alert("\ub85c\uadf8\uc778\uc5d0 \uc131\uacf5\ud558\uc168\uc2b5\ub2c8\ub2e4. \uac8c\uc2dc\ud310\uc73c\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4."),c.push("/mainComp")):(r("\ub85c\uadf8\uc778 \uc2e4\ud328"),alert("\ub85c\uadf8\uc778\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4."));case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return l.a.createElement(F,{handleClick:o,message:a,isLoginPage:t})})),X=a(43),Y=a(44),Q=a(129),Z=a(54),ee=a(55),te=function(e){var t=e.children,a=document.getElementById("popupDom");return o.a.createPortal(t,a)},ae=a(24),ne=new(function(){function e(){Object(X.a)(this,e)}return Object(Y.a)(e,[{key:"sendBug",value:function(e){return z.a.post("http://localhost:8070/chatbot/sendBug",e)}},{key:"getBtn",value:function(e){return z.a.get("http://localhost:8070/chatbot/getBtn?btnno="+e)}}]),e}()),re=a(577),le=(a(227),function(e){Object(Z.a)(a,e);var t=Object(ee.a)(a);function a(e){var n;return Object(X.a)(this,a),(n=t.call(this,e)).textRef=l.a.createRef(),n.handleKeyPress=function(e){if(13===e.charCode){n.addMessage("right","\uc0ac\uc6a9\uc790",n.state.message,[],!1);var t={senderId:n.state.senderId,message:n.state.message,location:window.location.href,email:n.state.email};n.receiveMessage(t)}},n.receiveMessage=function(e){ne.sendBug(e).then((function(e){n.addMessage("left","\uc54c\ub9bc\ubd07",e.data.message,[],!1),n.addMessage("left","\uc54c\ub9bc\ubd07",n.state.replies[1].message,n.state.replies[1].btnList,!0),n.clearMessage()}))},n.clearMessage=function(){n.textRef.current.value="",n.state.message="",n.state.enableWrite=!1},n.onChange=function(e){n.setState(Object(s.a)({},e.target.name,e.target.value))},n.addMessage=function(e,t,a,r,l){n.setState({replies:[].concat(Object(ae.a)(n.state.replies),[{uuid:n.state.replies.length+1,className:e,senderId:t,message:a,btnList:r,isButton:l}])});var c=n.box.scrollHeight;n.box.scrollTop=c},n.clickEvent=function(e){"1001"===e?(n.state.enableWrite=!0,n.addMessage("left","\uc54c\ub9bc\ubd07","\ubc84\uadf8 \uc0c1\uc138 \ub0b4\uc6a9\uc744 \uae30\uc785\ud574\uc8fc\uc138\uc694.\n\ube44\ud68c\uc6d0\uc740 \ud53c\ub4dc\ubc31\uc744 \ubc1b\uc73c\uc2e4 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",[],!1)):(console.log("code: "+e),ne.getBtn(e).then((function(e){var t,a=e.data.flag;if(console.log("json: "+JSON.stringify(e.data)),console.log("flag: "+a),"btn"===a){console.log("btn pushed"),e.data.nextBtn.map((function(e){t=e.parentNm,n.setState({btnList:[].concat(Object(ae.a)(n.state.btnList),[{btnno:e.childNo,btnmsg:e.childNm}])})})),n.addMessage("right","\uc0ac\uc6a9\uc790",t,[],!0);var r=n.state.btnList;n.addMessage("left","\uc54c\ub9bc\ubd07","\ubb38\uc758\ud560 \ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",r,!0),n.setState({btnList:[]})}else"str"===a&&(console.log("str pushed"),n.addMessage("right","\uc0ac\uc6a9\uc790",e.data.msg,[],!1),n.addMessage("left","\uc54c\ub9bc\ubd07",e.data.ans,[],!1),n.addMessage("left","\uc54c\ub9bc\ubd07",n.state.replies[1].message,n.state.replies[1].btnList,!0))})))},n.state={senderId:"\uc0ac\uc6a9\uc790",email:n.props.accountId,message:null,location:null,btnList:[],enableWrite:!1,replies:[{className:"left",senderId:"\uc54c\ub9bc\ubd07",message:"\uc548\ub155\ud558\uc138\uc694.\n\ubb34\uc5c7\uc744 \ub3c4\uc640\ub4dc\ub9b4\uae4c\uc694?",isButton:!1,btnList:[]},{className:"left",senderId:"\uc54c\ub9bc\ubd07",message:"\ubb38\uc758\ud560 \ub0b4\uc6a9\uc5d0 \ub300\ud574 \uc785\ub825\ud574\uc8fc\uc138\uc694.",isButton:!0,btnList:[{btnno:"1001",btnmsg:"\ubc84\uadf8\uc2e0\uace0"},{btnno:"1000",btnmsg:"\uc5c5\ubb34\ubb38\uc758"}]}],flag:"normal"},n}return Object(Y.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"dimmed_layer_wrapper"},l.a.createElement("div",{className:"full_layer"},l.a.createElement("div",{className:"common_alert"},l.a.createElement("div",{className:"chatName"},l.a.createElement("span",null,"\ubb38\uc758\ud558\uae30"),l.a.createElement(re.a,{className:"exitBtn",color:"secondary",size:"sm",onClick:this.props.onClose},l.a.createElement("span",null,"\ub098\uac00\uae30"))),l.a.createElement("div",{class:"chat",ref:function(t){e.box=t}},l.a.createElement("ul",null,this.state.replies.map((function(t){return l.a.createElement("li",{class:t.className},l.a.createElement("div",{class:"sender"},l.a.createElement("span",null,t.senderId)),l.a.createElement("div",{class:"message"},l.a.createElement("span",null,t.message)),l.a.createElement("div",{class:"btn"},t.isButton?t.btnList.map((function(t){return l.a.createElement(re.a,{onClick:function(){return e.clickEvent(t.btnno)}},t.btnmsg)})):null))})))),l.a.createElement("div",{class:"input-div"},l.a.createElement("textarea",{placeholder:"\ubb38\uc758\uc0ac\ud56d\uc744 \uae30\uc7ac\ud574\uc8fc\uc138\uc694.",name:"message",ref:this.textRef,onChange:this.onChange,rows:3,onKeyPress:this.handleKeyPress,disabled:!this.state.enableWrite})),l.a.createElement("div",{class:"chat format"},l.a.createElement("ul",null,this.state.replies.map((function(e){return l.a.createElement("li",{class:e.className},l.a.createElement("div",{class:"sender"},l.a.createElement("span",null,e.senderId)),l.a.createElement("div",{class:"message"},l.a.createElement("span",null,e.message)))})))))))}}]),a}(r.Component)),ce=Object(b.b)((function(e){return{accountId:e.main.accountId}}),(function(e){return{}}))(le),oe=function(e){Object(Z.a)(a,e);var t=Object(ee.a)(a);function a(e){var n;return Object(X.a)(this,a),(n=t.call(this,e)).state={isOpenPopup:!1},n.openPopup=n.openPopup.bind(Object(Q.a)(n)),n.closePopup=n.closePopup.bind(Object(Q.a)(n)),n}return Object(Y.a)(a,[{key:"openPopup",value:function(){this.setState({isOpenPopup:!0})}},{key:"closePopup",value:function(){console.log("closePopup"),this.setState({isOpenPopup:!1})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(C.a,{id:"popupDom",style:ie,variant:"contained",onClick:this.openPopup},"\ubb38\uc758\ud558\uae30"),this.state.isOpenPopup&&l.a.createElement(te,null,l.a.createElement(ce,{onClose:this.closePopup})))}}]),a}(r.Component),ie={position:"fixed",bottom:50,right:50},se=oe,me=a(571),ue=a(574),pe=a(573),de=a(572),ge=a(271),Ee=a.n(ge),fe=a(575),he=a(570),be=a(578),ve=a(549),ye=a(551),xe=a(552),Oe=a(550),je=a(158),Ne=a.n(je),ke=(a(228),Object(W.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})));function Ce(e){var t=e.title,a=ke(),n=Object(y.f)();return l.a.createElement("div",{className:a.root},l.a.createElement(be.a,{position:"static"},l.a.createElement(ve.a,null,l.a.createElement(Oe.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"menu"},l.a.createElement(Ne.a,null)),l.a.createElement(ye.a,{variant:"h6",className:a.title},t),l.a.createElement("div",{className:"tabs"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(v.b,{to:"/mainComp"},l.a.createElement("span",{className:"tabsText"},"Main"))),l.a.createElement("li",null,l.a.createElement(v.b,{to:"/dashboard"},l.a.createElement("span",{className:"tabsText"},"Dashboard"))),l.a.createElement("li",null,l.a.createElement(v.b,{to:"/notice"},l.a.createElement("span",{className:"tabsText"},"Notice"))),l.a.createElement("li",null,l.a.createElement(v.b,{to:"/intro"},l.a.createElement("span",{className:"tabsText"},"Introduce"))))),l.a.createElement(xe.a,{onClick:Object(j.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.push("/");case 1:case"end":return e.stop()}}),e)}))),variant:"contained",size:"medium",color:"primary"},"\ub85c\uadf8\uc544\uc6c3"))))}var Me=function(e){Object(Z.a)(a,e);var t=Object(ee.a)(a);function a(){return Object(X.a)(this,a),t.apply(this,arguments)}return Object(Y.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(Ce,{title:"\uba54\uc778 \uba54\ub274"}),l.a.createElement("div",{className:"wrap"},l.a.createElement("div",null,l.a.createElement(he.a,{disableGutters:!0,maxWidth:"sm",component:"main",sx:{pt:8,pb:6}},l.a.createElement(T.a,{component:"h1",variant:"h2",align:"center",color:"text.primary",gutterBottom:!0},"Main Page"),l.a.createElement(T.a,{variant:"h5",align:"center",color:"text.secondary",component:"p"},"introduce my page")),l.a.createElement(he.a,{maxWidth:"md",component:"main"},l.a.createElement(B.a,{container:!0,spacing:5,alignItems:"flex-end"},Pe.map((function(e){return l.a.createElement(B.a,{item:!0,key:e.title,xs:12,sm:"Enterprise"===e.title?12:6,md:4},l.a.createElement(me.a,null,l.a.createElement(de.a,{title:e.title,subheader:e.subheader,titleTypographyProps:{align:"center"},action:"Pro"===e.title?l.a.createElement(Ee.a,null):null,subheaderTypographyProps:{align:"center"},sx:{backgroundColor:function(e){return"light"===e.palette.mode?e.palette.grey[200]:e.palette.grey[700]}}}),l.a.createElement(pe.a,null,l.a.createElement(S.a,{sx:{display:"flex",justifyContent:"center",alignItems:"baseline",mb:2}},l.a.createElement(T.a,{component:"h2",variant:"h3",color:"text.primary"},"$",e.price),l.a.createElement(T.a,{variant:"h6",color:"text.secondary"},"/mo")),l.a.createElement("ul",null,e.description.map((function(e){return l.a.createElement(T.a,{component:"li",variant:"subtitle1",align:"center",key:e},e)})))),l.a.createElement(ue.a,null,l.a.createElement(C.a,{fullWidth:!0,variant:e.buttonVariant},e.buttonText))))})))),l.a.createElement(he.a,{maxWidth:"md",component:"footer",sx:{borderTop:function(e){return"1px solid ".concat(e.palette.divider)},mt:8,py:[3,6]}},l.a.createElement(B.a,{container:!0,spacing:4,justifyContent:"space-evenly"},Ie.map((function(e){return l.a.createElement(B.a,{item:!0,xs:6,sm:3,key:e.title},l.a.createElement(T.a,{variant:"h6",color:"text.primary",gutterBottom:!0},e.title),l.a.createElement("ul",null,e.description.map((function(e){return l.a.createElement("li",{key:e},l.a.createElement(fe.a,{href:"#",variant:"subtitle1",color:"text.secondary"},e))}))))})))))))}}]),a}(l.a.Component),Pe=[{title:"Free",price:"0",description:["10 users included","2 GB of storage","Help center access","Email support"],buttonText:"Sign up for free",buttonVariant:"outlined"},{title:"Pro",subheader:"Most popular",price:"15",description:["20 users included","10 GB of storage","Help center access","Priority email support"],buttonText:"Get started",buttonVariant:"contained"},{title:"Enterprise",price:"30",description:["50 users included","30 GB of storage","Help center access","Phone & email support"],buttonText:"Contact us",buttonVariant:"outlined"}],Ie=[{title:"Company",description:["Team","History","Contact us","Locations"]},{title:"Features",description:["Cool stuff","Random feature","Team feature","Developer stuff","Another one"]},{title:"Resources",description:["Resource","Resource name","Another resource","Final resource"]},{title:"Legal",description:["Privacy policy","Terms of use"]}],Se=Me,Be=Object(W.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function we(e){var t=e.title,a=Be(),n=Object(y.f)();return l.a.createElement("div",{className:a.root},l.a.createElement(be.a,{position:"static"},l.a.createElement(ve.a,null,l.a.createElement(Oe.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"menu"},l.a.createElement(Ne.a,null)),l.a.createElement(ye.a,{variant:"h6",className:a.title},t),l.a.createElement("div",{className:"tabs"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(v.b,{to:"/mainComp"},l.a.createElement("span",{className:"tabsText"},"Main"))),l.a.createElement("li",null,l.a.createElement(v.b,{to:"/dashboard"},l.a.createElement("span",{className:"tabsText"},"Dashboard"))),l.a.createElement("li",null,l.a.createElement(v.b,{to:"/notice"},l.a.createElement("span",{className:"tabsText"},"Notice"))),l.a.createElement("li",null,l.a.createElement(v.b,{to:"/intro"},l.a.createElement("span",{className:"tabsText"},"Introduce"))))),l.a.createElement(xe.a,{onClick:Object(j.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.push("/");case 1:case"end":return e.stop()}}),e)}))),variant:"contained",size:"medium",color:"primary"},"\ub85c\uadf8\uc544\uc6c3"))))}var Le=a(87),Te=a(553),De=a(554),We=a(285),Ae=a(286),Ge=a(57),Re=a(291);var Fe=function(e){return r.createElement(T.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},e.children)};function Ve(e,t){return{time:e,amount:t}}var ze=[Ve("00:00",0),Ve("03:00",300),Ve("06:00",600),Ve("09:00",800),Ve("12:00",1500),Ve("15:00",2e3),Ve("18:00",2400),Ve("21:00",2400),Ve("24:00",void 0)];function _e(){var e=Object(Le.a)();return r.createElement(r.Fragment,null,r.createElement(Fe,null,"Today"),r.createElement(Te.a,null,r.createElement(De.a,{data:ze,margin:{top:16,right:16,bottom:0,left:24}},r.createElement(We.a,{dataKey:"time",stroke:e.palette.text.secondary,style:e.typography.body2}),r.createElement(Ae.a,{stroke:e.palette.text.secondary,style:e.typography.body2},r.createElement(Ge.a,{angle:270,position:"left",style:Object(m.a)({textAnchor:"middle",fill:e.palette.text.primary},e.typography.body1)},"Sales ($)")),r.createElement(Re.a,{isAnimationActive:!1,type:"monotone",dataKey:"amount",stroke:e.palette.primary.main,dot:!1}))))}function He(e){e.preventDefault()}function Ke(){return r.createElement(r.Fragment,null,r.createElement(Fe,null,"Recent Nexon Deposits"),r.createElement(T.a,{component:"p",variant:"h4"},"$3,024.00"),r.createElement(T.a,{color:"text.secondary",sx:{flex:1}},"on 15 March, 2019"),r.createElement("div",null,r.createElement(fe.a,{color:"primary",href:"#",onClick:He},"View balance")))}var Je=a(579),qe=a(583),$e=a(582),Ue=a(580),Xe=a(581);function Ye(e,t,a,n,r,l){return{id:e,date:t,name:a,shipTo:n,paymentMethod:r,amount:l}}var Qe=[Ye(0,"16 Mar, 2019","Elvis Presley","Tupelo, MS","VISA \u2800\u2022\u2022\u2022\u2022 3719",312.44),Ye(1,"16 Mar, 2019","Paul McCartney","London, UK","VISA \u2800\u2022\u2022\u2022\u2022 2574",866.99),Ye(2,"16 Mar, 2019","Tom Scholz","Boston, MA","MC \u2800\u2022\u2022\u2022\u2022 1253",100.81),Ye(3,"16 Mar, 2019","Michael Jackson","Gary, IN","AMEX \u2800\u2022\u2022\u2022\u2022 2000",654.39),Ye(4,"15 Mar, 2019","Bruce Springsteen","Long Branch, NJ","VISA \u2800\u2022\u2022\u2022\u2022 5919",212.79)];function Ze(e){e.preventDefault()}function et(){return r.createElement(r.Fragment,null,r.createElement(Fe,null,"Recent Orders"),r.createElement(Je.a,{size:"small"},r.createElement(Ue.a,null,r.createElement(Xe.a,null,r.createElement($e.a,null,"Date"),r.createElement($e.a,null,"Name"),r.createElement($e.a,null,"Ship To"),r.createElement($e.a,null,"Payment Method"),r.createElement($e.a,{align:"right"},"Sale Amount"))),r.createElement(qe.a,null,Qe.map((function(e){return r.createElement(Xe.a,{key:e.id},r.createElement($e.a,null,e.date),r.createElement($e.a,null,e.name),r.createElement($e.a,null,e.shipTo),r.createElement($e.a,null,e.paymentMethod),r.createElement($e.a,{align:"right"},"$".concat(e.amount)))})))),r.createElement(fe.a,{color:"primary",href:"#",onClick:Ze,sx:{mt:3}},"See more orders"))}var tt=function(e){Object(Z.a)(a,e);var t=Object(ee.a)(a);function a(e){return Object(X.a)(this,a),t.call(this,e)}return Object(Y.a)(a,[{key:"movePage",value:function(){this.props.history.push("/mainComp")}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(we,{title:"Nexon Dashboard"}),l.a.createElement("div",null,l.a.createElement(he.a,{maxWidth:"lg",sx:{mt:4,mb:4}},l.a.createElement(B.a,{container:!0,spacing:3},l.a.createElement(B.a,{item:!0,xs:12,md:8,lg:9},l.a.createElement(I.a,{sx:{p:2,display:"flex",flexDirection:"column",height:240}},l.a.createElement(_e,null))),l.a.createElement(B.a,{item:!0,xs:12,md:4,lg:3},l.a.createElement(I.a,{sx:{p:2,display:"flex",flexDirection:"column",height:240}},l.a.createElement(Ke,null))),l.a.createElement(B.a,{item:!0,xs:12},l.a.createElement(I.a,{sx:{p:2,display:"flex",flexDirection:"column"}},l.a.createElement(et,null)))))))}}]),a}(l.a.Component),at=a(576),nt=a(558),rt=[1,2,3,4,5,6,7,8,9],lt=function(e){Object(Z.a)(a,e);var t=Object(ee.a)(a);function a(e){return Object(X.a)(this,a),t.call(this,e)}return Object(Y.a)(a,[{key:"movePage",value:function(){this.props.history.push("/mainComp")}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(Ce,{title:"Nexon Notice"}),l.a.createElement("div",null,l.a.createElement("main",null,l.a.createElement(S.a,{sx:{bgcolor:"background.paper",pt:8,pb:6}},l.a.createElement(he.a,{maxWidth:"sm"},l.a.createElement(T.a,{component:"h1",variant:"h2",align:"center",color:"text.primary",gutterBottom:!0},"Album layout"),l.a.createElement(T.a,{variant:"h5",align:"center",color:"text.secondary",paragraph:!0},"Something short and leading about the Nexon Notice contents."),l.a.createElement(nt.a,{sx:{pt:4},direction:"row",spacing:2,justifyContent:"center"},l.a.createElement(C.a,{variant:"contained"},"Main call to action"),l.a.createElement(C.a,{variant:"outlined"},"Secondary action")))),l.a.createElement(he.a,{sx:{py:8},maxWidth:"md"},l.a.createElement(B.a,{container:!0,spacing:4},rt.map((function(e){return l.a.createElement(B.a,{item:!0,key:e,xs:12,sm:6,md:4},l.a.createElement(me.a,{sx:{height:"100%",display:"flex",flexDirection:"column"}},l.a.createElement(at.a,{component:"img",sx:{pt:"56.25%"},image:"https://source.unsplash.com/random",alt:"random"}),l.a.createElement(pe.a,{sx:{flexGrow:1}},l.a.createElement(T.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Heading"),l.a.createElement(T.a,null,"This is a media card. You can use this section to describe the content.")),l.a.createElement(ue.a,null,l.a.createElement(C.a,{size:"small"},"View"),l.a.createElement(C.a,{size:"small"},"Edit"))))})))))))}}]),a}(l.a.Component),ct=function(e){Object(Z.a)(a,e);var t=Object(ee.a)(a);function a(e){return Object(X.a)(this,a),t.call(this,e)}return Object(Y.a)(a,[{key:"movePage",value:function(){this.props.history.push("/mainComp")}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(we,{title:"Nexon Introduce"}),l.a.createElement("div",null,l.a.createElement(S.a,{sx:{display:"flex",flexDirection:"column",minHeight:"100vh"}},l.a.createElement(M.a,null),l.a.createElement(he.a,{component:"main",sx:{mt:8,mb:2},maxWidth:"sm"},l.a.createElement(T.a,{variant:"h2",component:"h1",gutterBottom:!0},"Introduce Nexon"),l.a.createElement(T.a,{variant:"h5",component:"h2",gutterBottom:!0},"NEXON is driven by onging quests to provide the best gaming experience for global users"),l.a.createElement(T.a,{variant:"body1"},"Nexon Introduce page")),l.a.createElement(S.a,{component:"footer",sx:{py:3,px:2,mt:"auto",backgroundColor:function(e){return"light"===e.palette.mode?e.palette.grey[200]:e.palette.grey[800]}}},l.a.createElement(he.a,{maxWidth:"sm"},l.a.createElement(T.a,{variant:"body1"},"location: 7, Pangyo-ro 256beon-gil, Bundang-gu, Seongnam-si, Gyeonggi-do, Korea"))))))}}]),a}(l.a.Component),ot=function(){return l.a.createElement(v.a,null,l.a.createElement(y.c,null,l.a.createElement(y.a,{path:"/",exact:!0,component:U}),l.a.createElement(y.a,{path:"/mainComp",component:Se}),l.a.createElement(y.a,{path:"/dashboard",component:tt}),l.a.createElement(y.a,{path:"/notice",component:lt}),l.a.createElement(y.a,{path:"/intro",component:ct})),l.a.createElement(se,null))},it=Object(f.a)(),st=Object(i.c)(E,Object(i.a)(it,h.a));console.log(st.getState()),o.a.render(l.a.createElement(b.a,{store:st},l.a.createElement(ot,null)),document.getElementById("root"))}},[[319,1,2]]]);
//# sourceMappingURL=main.b1288568.chunk.js.map