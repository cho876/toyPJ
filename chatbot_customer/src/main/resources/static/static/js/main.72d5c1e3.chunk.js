(this.webpackJsonpfrontjs=this.webpackJsonpfrontjs||[]).push([[0],{44:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),c=n(23),i=n.n(c),r=(n(64),n(65),n(54)),o=n(7),l=n(14),u=n(15),j=n(21),d=n(20),h=n(114),p=n(2),b=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(u.a)(n,[{key:"movePage",value:function(){this.props.history.push("/")}},{key:"render",value:function(){var e=this;return Object(p.jsx)("div",{children:Object(p.jsx)(h.a,{name:"btn1",variant:"contained",onClick:function(){return e.movePage()},children:"\uba54\uc778\uc73c\ub85c \uac00\uae30"})})}}]),n}(a.a.Component);var O=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(h.a,{variant:"contained",children:"Menu 2-1"}),Object(p.jsx)(h.a,{variant:"contained",children:"Menu 2-2"}),Object(p.jsx)(h.a,{variant:"contained",children:"Menu 2-3"})]})};var m=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(h.a,{variant:"contained",children:"Menu 3-1"}),Object(p.jsx)(h.a,{variant:"contained",children:"Menu 3-2"}),Object(p.jsx)(h.a,{variant:"contained",children:"Menu 3-3"})]})},v=(n(44),function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this)).changeMenu=function(e){s.setState({menu:e}),0==e?s.props.history.push("/menu1"):1===e?s.props.history.push("/menu2"):s.props.history.push("/menu3")},s.state={Menu:0},s}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"wrap",children:[Object(p.jsx)("div",{className:"menuBar",children:Object(p.jsxs)("ul",{className:"tabs",children:[Object(p.jsx)("li",{className:"".concat(0===this.state.menu?"active":""),onClick:function(){return e.changeMenu(0)},children:"Menu 1"}),Object(p.jsx)("li",{className:"".concat(1===this.state.menu?"active":""),onClick:function(){return e.changeMenu(1)},children:"Menu 2"}),Object(p.jsx)("li",{className:"".concat(2===this.state.menu?"active":""),onClick:function(){return e.changeMenu(2)},children:"Menu 3"})]})}),Object(p.jsx)("div",{className:"contentArea",children:x[this.state.menu]})]})})}}]),n}(a.a.Component)),x={0:Object(p.jsx)(b,{}),1:Object(p.jsx)(O,{}),2:Object(p.jsx)(m,{})},g=v,f=n(6),C=n(40),y=n.n(C),M="http://localhost:8070/chatbot",P=new(function(){function e(){Object(l.a)(this,e)}return Object(u.a)(e,[{key:"sendMsg",value:function(e){return y.a.post(M+"/sendMsg",e)}},{key:"onLogin",value:function(e){return y.a.post(M+"/onLogin",e)}}]),e}()),k=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).onClickLogin=function(){var e={userId:s.state.input_id,userPw:s.state.input_pw};P.onLogin(e).then((function(e){console.log(e)}))},s.onChange=function(e){console.log("name: "+e.target.name),console.log("value: "+e.target.value),console.log("value: "+s.state.input_id),s.setState(Object(f.a)({},e.target.name,e.target.value))},s.state={input_id:null,input_pw:null},s}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"Login"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{htmlFor:"input_id",children:"ID : "}),Object(p.jsx)("input",{type:"text",name:"input_id",onChange:this.onChange})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{htmlFor:"input_pw",children:"PW : "}),Object(p.jsx)("input",{type:"password",name:"input_pw",onChange:this.onChange})]}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{type:"button",onClick:this.onClickLogin,children:"Login"})})]})}}]),n}(a.a.Component),I={marginTop:"20px"},N=function(){return Object(p.jsx)("div",{children:Object(p.jsx)(r.a,{children:Object(p.jsx)("div",{style:I,children:Object(p.jsxs)(o.c,{children:[Object(p.jsx)(o.a,{exact:!0,path:"/",component:k}),Object(p.jsx)(o.a,{path:"/mainComp",component:g}),Object(p.jsx)(o.a,{path:"/menu1",component:b}),Object(p.jsx)(o.a,{path:"/menu2",component:O}),Object(p.jsx)(o.a,{path:"/menu3",component:m})]})})})})},w=n(112),_=n(29),S=n(113),L=function(e){var t=e.children,n=document.getElementById("popupDom");return i.a.createPortal(t,n)},D=n(16),F=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).textRef=a.a.createRef(),s.handleKeyPress=function(e){if(13===e.charCode){s.sendMessage(s.state.message);var t={flag:s.state.flag,senderId:s.state.senderId,message:s.state.message,location:window.location.href};s.receiveMessage(t)}},s.sendMessage=function(e){var t={senderId:"customer",message:e};s.addChatDetail(t,"right")},s.addChatDetail=function(e,t){s.setState({replies:[].concat(Object(D.a)(s.state.replies),[{uuid:s.state.replies.length+1,className:t,senderId:e.senderId,message:e.message}])})},s.receiveMessage=function(e){P.sendMsg(e).then((function(e){if(console.log(JSON.stringify(e.data)),s.addChatDetail(e.data,"left"),s.clearMessage(),"complete"==e.data.flag){s.addChatDetail({senderId:"admin",message:"\ub610 \ubb34\uc5c7\uc744 \ub3c4\uc640\ub4dc\ub9b4\uae4c\uc694?"},"left"),s.setState({flag:"normal"})}else s.setState({flag:e.data.flag})}))},s.clearMessage=function(){s.textRef.current.value="",s.state.message=""},s.onChange=function(e){s.setState(Object(f.a)({},e.target.name,e.target.value))},s.state={senderId:"customer",message:null,location:null,replies:[{className:"left",senderId:"admin",message:"\uc548\ub155\ud558\uc138\uc694.\n\ubb34\uc5c7\uc744 \ub3c4\uc640\ub4dc\ub9b4\uae4c\uc694?"}],flag:"normal"},s}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"dimmed_layer_wrapper",children:Object(p.jsx)("div",{className:"full_layer",children:Object(p.jsxs)("div",{className:"common_alert",children:[Object(p.jsx)("div",{children:Object(p.jsx)("button",{type:"button",onClick:this.props.onClose,children:"close"})}),Object(p.jsx)("div",{children:Object(p.jsx)("div",{class:"header",children:"CHAT"})}),Object(p.jsx)("div",{class:"chat",children:Object(p.jsx)("ul",{children:this.state.replies.map((function(e){return Object(p.jsxs)("li",{class:e.className,children:[Object(p.jsx)("div",{class:"sender",children:Object(p.jsx)("span",{children:e.senderId})}),Object(p.jsx)("div",{class:"message",children:Object(p.jsx)("span",{children:e.message})})]})}))})}),Object(p.jsx)("div",{class:"input-div",children:Object(p.jsx)("textarea",{placeholder:"Press Enter for send message.",name:"message",ref:this.textRef,onChange:this.onChange,onKeyPress:this.handleKeyPress})}),Object(p.jsx)("div",{class:"chat format",children:Object(p.jsx)("ul",{children:this.state.replies.map((function(e){return Object(p.jsxs)("li",{class:e.className,children:[Object(p.jsx)("div",{class:"sender",children:Object(p.jsx)("span",{children:e.senderId})}),Object(p.jsx)("div",{class:"message",children:Object(p.jsx)("span",{children:e.message})})]})}))})})]})})})}}]),n}(s.Component),B=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).state={isOpenPopup:!1},s.openPopup=s.openPopup.bind(Object(_.a)(s)),s.closePopup=s.closePopup.bind(Object(_.a)(s)),s}return Object(u.a)(n,[{key:"openPopup",value:function(){this.setState({isOpenPopup:!0})}},{key:"closePopup",value:function(){console.log("closePopup"),this.setState({isOpenPopup:!1})}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(S.a,{id:"popupDom",style:R,variant:"contained",onClick:this.openPopup,children:"\ubb38\uc758\ud558\uae30"}),this.state.isOpenPopup&&Object(p.jsx)(L,{children:Object(p.jsx)(F,{onClose:this.closePopup})})]})}}]),n}(s.Component),R={position:"absolute",bottom:16,right:16},T=B;var E=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(w.a,{children:Object(p.jsx)(N,{})}),Object(p.jsx)(T,{})]})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,116)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),c(e),i(e)}))};i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(E,{})}),document.getElementById("root")),J()}},[[90,1,2]]]);
//# sourceMappingURL=main.72d5c1e3.chunk.js.map