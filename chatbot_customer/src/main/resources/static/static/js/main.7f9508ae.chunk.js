(this.webpackJsonpfrontjs=this.webpackJsonpfrontjs||[]).push([[0],{44:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),c=n(21),i=n.n(c),r=(n(64),n(65),n(54)),o=n(7),l=n(18),d=n(19),j=n(24),u=n(23),h=n(114),b=n(2),p=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(d.a)(n,[{key:"movePage",value:function(){this.props.history.push("/")}},{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{children:Object(b.jsx)(h.a,{name:"btn1",variant:"contained",onClick:function(){return e.movePage()},children:"\uba54\uc778\uc73c\ub85c \uac00\uae30"})})}}]),n}(a.a.Component);var O=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(h.a,{variant:"contained",children:"Menu 2-1"}),Object(b.jsx)(h.a,{variant:"contained",children:"Menu 2-2"}),Object(b.jsx)(h.a,{variant:"contained",children:"Menu 2-3"})]})};var m=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(h.a,{variant:"contained",children:"Menu 3-1"}),Object(b.jsx)(h.a,{variant:"contained",children:"Menu 3-2"}),Object(b.jsx)(h.a,{variant:"contained",children:"Menu 3-3"})]})},f=(n(44),function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this)).changeMenu=function(e){s.setState({menu:e}),0==e?s.props.history.push("/menu1"):1===e?s.props.history.push("/menu2"):s.props.history.push("/menu3")},s.state={Menu:0},s}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"wrap",children:[Object(b.jsx)("div",{className:"menuBar",children:Object(b.jsxs)("ul",{className:"tabs",children:[Object(b.jsx)("li",{className:"".concat(0===this.state.menu?"active":""),onClick:function(){return e.changeMenu(0)},children:"Menu 1"}),Object(b.jsx)("li",{className:"".concat(1===this.state.menu?"active":""),onClick:function(){return e.changeMenu(1)},children:"Menu 2"}),Object(b.jsx)("li",{className:"".concat(2===this.state.menu?"active":""),onClick:function(){return e.changeMenu(2)},children:"Menu 3"})]})}),Object(b.jsx)("div",{className:"contentArea",children:v[this.state.menu]})]})})}}]),n}(a.a.Component)),v={0:Object(b.jsx)(p,{}),1:Object(b.jsx)(O,{}),2:Object(b.jsx)(m,{})},x=f,g={marginTop:"20px"},y=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(r.a,{children:Object(b.jsx)("div",{style:g,children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/",component:x}),Object(b.jsx)(o.a,{path:"/menu1",component:p}),Object(b.jsx)(o.a,{path:"/menu2",component:O}),Object(b.jsx)(o.a,{path:"/menu3",component:m})]})})})})},C=n(112),M=n(29),P=n(113),k=function(e){var t=e.children,n=document.getElementById("popupDom");return i.a.createPortal(t,n)},N=n(6),I=n(14),S=n(41),w=n.n(S),D="http://localhost:8070/chatbot",B=new(function(){function e(){Object(l.a)(this,e)}return Object(d.a)(e,[{key:"sendMsg",value:function(e){return w.a.post(D+"/sendMsg",e)}},{key:"onLogin",value:function(e){return w.a.post(D+"/onLogin",e)}}]),e}()),F=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).textRef=a.a.createRef(),s.handleKeyPress=function(e){if(13===e.charCode){s.sendMessage(s.state.message);var t={flag:s.state.flag,senderId:s.state.senderId,message:s.state.message,location:window.location.href};s.receiveMessage(t)}},s.sendMessage=function(e){var t={senderId:"customer",message:e};s.addChatDetail(t,"right")},s.addChatDetail=function(e,t){s.setState({replies:[].concat(Object(I.a)(s.state.replies),[{uuid:s.state.replies.length+1,className:t,senderId:e.senderId,message:e.message}])})},s.receiveMessage=function(e){B.sendMsg(e).then((function(e){if(console.log(JSON.stringify(e.data)),s.addChatDetail(e.data,"left"),s.clearMessage(),"complete"==e.data.flag){s.addChatDetail({senderId:"admin",message:"\ub610 \ubb34\uc5c7\uc744 \ub3c4\uc640\ub4dc\ub9b4\uae4c\uc694?"},"left"),s.setState({flag:"normal"})}else s.setState({flag:e.data.flag})}))},s.clearMessage=function(){s.textRef.current.value="",s.state.message=""},s.onChange=function(e){s.setState(Object(N.a)({},e.target.name,e.target.value))},s.state={senderId:"customer",message:null,location:null,replies:[{className:"left",senderId:"admin",message:"\uc548\ub155\ud558\uc138\uc694.\n\ubb34\uc5c7\uc744 \ub3c4\uc640\ub4dc\ub9b4\uae4c\uc694?"}],flag:"normal"},s}return Object(d.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"dimmed_layer_wrapper",children:Object(b.jsx)("div",{className:"full_layer",children:Object(b.jsxs)("div",{className:"common_alert",children:[Object(b.jsx)("div",{children:Object(b.jsx)("button",{type:"button",onClick:this.props.onClose,children:"close"})}),Object(b.jsx)("div",{children:Object(b.jsx)("div",{class:"header",children:"CHAT"})}),Object(b.jsx)("div",{class:"chat",children:Object(b.jsx)("ul",{children:this.state.replies.map((function(e){return Object(b.jsxs)("li",{class:e.className,children:[Object(b.jsx)("div",{class:"sender",children:Object(b.jsx)("span",{children:e.senderId})}),Object(b.jsx)("div",{class:"message",children:Object(b.jsx)("span",{children:e.message})})]})}))})}),Object(b.jsx)("div",{class:"input-div",children:Object(b.jsx)("textarea",{placeholder:"Press Enter for send message.",name:"message",ref:this.textRef,onChange:this.onChange,onKeyPress:this.handleKeyPress})}),Object(b.jsx)("div",{class:"chat format",children:Object(b.jsx)("ul",{children:this.state.replies.map((function(e){return Object(b.jsxs)("li",{class:e.className,children:[Object(b.jsx)("div",{class:"sender",children:Object(b.jsx)("span",{children:e.senderId})}),Object(b.jsx)("div",{class:"message",children:Object(b.jsx)("span",{children:e.message})})]})}))})})]})})})}}]),n}(s.Component),L=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).state={isOpenPopup:!1},s.openPopup=s.openPopup.bind(Object(M.a)(s)),s.closePopup=s.closePopup.bind(Object(M.a)(s)),s}return Object(d.a)(n,[{key:"openPopup",value:function(){this.setState({isOpenPopup:!0})}},{key:"closePopup",value:function(){console.log("closePopup"),this.setState({isOpenPopup:!1})}},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(P.a,{id:"popupDom",style:R,variant:"contained",onClick:this.openPopup,children:"\ubb38\uc758\ud558\uae30"}),this.state.isOpenPopup&&Object(b.jsx)(k,{children:Object(b.jsx)(F,{onClose:this.closePopup})})]})}}]),n}(s.Component),R={position:"absolute",bottom:16,right:16},T=L;var _=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(C.a,{children:Object(b.jsx)(y,{})}),Object(b.jsx)(T,{})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,116)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),c(e),i(e)}))};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(_,{})}),document.getElementById("root")),E()}},[[90,1,2]]]);
//# sourceMappingURL=main.7f9508ae.chunk.js.map