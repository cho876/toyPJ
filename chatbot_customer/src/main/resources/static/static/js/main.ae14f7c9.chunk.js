(this.webpackJsonpfrontjs=this.webpackJsonpfrontjs||[]).push([[0],{43:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n.n(s),a=n(21),i=n.n(a),r=(n(64),n(65),n(53)),o=n(7),l=n(18),j=n(19),u=n(24),d=n(23),h=n(114),p=n(2),b=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(j.a)(n,[{key:"movePage",value:function(){this.props.history.push("/")}},{key:"render",value:function(){var e=this;return Object(p.jsx)("div",{children:Object(p.jsx)(h.a,{name:"btn1",variant:"contained",onClick:function(){return e.movePage()},children:"\uba54\uc778\uc73c\ub85c \uac00\uae30"})})}}]),n}(c.a.Component);var O=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(h.a,{variant:"contained",children:"Menu 2-1"}),Object(p.jsx)(h.a,{variant:"contained",children:"Menu 2-2"}),Object(p.jsx)(h.a,{variant:"contained",children:"Menu 2-3"})]})};var m=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(h.a,{variant:"contained",children:"Menu 3-1"}),Object(p.jsx)(h.a,{variant:"contained",children:"Menu 3-2"}),Object(p.jsx)(h.a,{variant:"contained",children:"Menu 3-3"})]})},v=(n(43),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this)).changeMenu=function(e){s.setState({menu:e}),0==e?s.props.history.push("/menu1"):1===e?s.props.history.push("/menu2"):s.props.history.push("/menu3")},s.state={Menu:0},s}return Object(j.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"wrap",children:[Object(p.jsx)("div",{className:"menuBar",children:Object(p.jsxs)("ul",{className:"tabs",children:[Object(p.jsx)("li",{className:"".concat(0===this.state.menu?"active":""),onClick:function(){return e.changeMenu(0)},children:"Menu 1"}),Object(p.jsx)("li",{className:"".concat(1===this.state.menu?"active":""),onClick:function(){return e.changeMenu(1)},children:"Menu 2"}),Object(p.jsx)("li",{className:"".concat(2===this.state.menu?"active":""),onClick:function(){return e.changeMenu(2)},children:"Menu 3"})]})}),Object(p.jsx)("div",{className:"contentArea",children:x[this.state.menu]})]})})}}]),n}(c.a.Component)),x={0:Object(p.jsx)(b,{}),1:Object(p.jsx)(O,{}),2:Object(p.jsx)(m,{})},f=v,g={marginTop:"20px"},M=function(){return Object(p.jsx)("div",{children:Object(p.jsx)(r.a,{children:Object(p.jsx)("div",{style:g,children:Object(p.jsxs)(o.c,{children:[Object(p.jsx)(o.a,{exact:!0,path:"/",component:f}),Object(p.jsx)(o.a,{path:"/menu1",component:b}),Object(p.jsx)(o.a,{path:"/menu2",component:O}),Object(p.jsx)(o.a,{path:"/menu3",component:m})]})})})})},y=n(112),C=n(29),P=n(113),k=function(e){var t=e.children,n=document.getElementById("popupDom");return i.a.createPortal(t,n)},N=n(6),I=n(14),S=n(55),D=n.n(S),w=new(function(){function e(){Object(l.a)(this,e)}return Object(j.a)(e,[{key:"sendMsg",value:function(e){return D.a.post("http://localhost:8070/chatbot/sendMsg",e)}}]),e}()),B=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).textRef=c.a.createRef(),s.handleKeyPress=function(e){if(13===e.charCode){s.sendMessage(s.state.message);var t={senderId:s.state.senderId,message:s.state.message};s.receiveMessage(t)}},s.sendMessage=function(e){var t={senderId:"customer",message:e};s.addChatDetail(t,"right")},s.addChatDetail=function(e,t){console.log("addChatDetail: "+JSON.stringify(e)),console.log("lr: "+t),s.setState({replies:[].concat(Object(I.a)(s.state.replies),[{uuid:s.state.replies.length+1,className:t,senderId:e.senderId,message:e.message}])}),s.clearMessage()},s.receiveMessage=function(e){w.sendMsg(e).then((function(e){console.log("receiveMessage: "+JSON.stringify(e.data)),s.addChatDetail(e.data,"left")}))},s.clearMessage=function(){s.textRef.current.value="",s.state.message=""},s.onChange=function(e){s.setState(Object(N.a)({},e.target.name,e.target.value))},console.log(s.props.location.pathname),s.state={senderId:"customer",message:null,location:null,replies:[{className:"left",senderId:"admin",message:"\uc548\ub155\ud558\uc138\uc694.\n\ubb34\uc5c7\uc744 \ub3c4\uc640\ub4dc\ub9b4\uae4c\uc694?"}]},s}return Object(j.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"dimmed_layer_wrapper",children:Object(p.jsx)("div",{className:"full_layer",children:Object(p.jsxs)("div",{className:"common_alert",children:[Object(p.jsx)("div",{children:Object(p.jsx)("button",{type:"button",onClick:this.props.onClose,children:"close"})}),Object(p.jsx)("div",{children:Object(p.jsx)("div",{class:"header",children:"CHAT"})}),Object(p.jsx)("div",{class:"chat",children:Object(p.jsx)("ul",{children:this.state.replies.map((function(e){return Object(p.jsxs)("li",{class:e.className,children:[Object(p.jsx)("div",{class:"sender",children:Object(p.jsx)("span",{children:e.senderId})}),Object(p.jsx)("div",{class:"message",children:Object(p.jsx)("span",{children:e.message})})]})}))})}),Object(p.jsx)("div",{class:"input-div",children:Object(p.jsx)("textarea",{placeholder:"Press Enter for send message.",name:"message",ref:this.textRef,onChange:this.onChange,onKeyPress:this.handleKeyPress})}),Object(p.jsx)("div",{class:"chat format",children:Object(p.jsx)("ul",{children:this.state.replies.map((function(e){return Object(p.jsxs)("li",{class:e.className,children:[Object(p.jsx)("div",{class:"sender",children:Object(p.jsx)("span",{children:e.senderId})}),Object(p.jsx)("div",{class:"message",children:Object(p.jsx)("span",{children:e.message})})]})}))})})]})})})}}]),n}(s.Component),F=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).state={isOpenPopup:!1},s.openPopup=s.openPopup.bind(Object(C.a)(s)),s.closePopup=s.closePopup.bind(Object(C.a)(s)),s}return Object(j.a)(n,[{key:"openPopup",value:function(){this.setState({isOpenPopup:!0})}},{key:"closePopup",value:function(){console.log("closePopup"),this.setState({isOpenPopup:!1})}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(P.a,{id:"popupDom",style:J,variant:"contained",onClick:this.openPopup,children:"\ubb38\uc758\ud558\uae30"}),this.state.isOpenPopup&&Object(p.jsx)(k,{children:Object(p.jsx)(B,{onClose:this.closePopup})})]})}}]),n}(s.Component),J={position:"absolute",bottom:16,right:16},R=F;var T=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(y.a,{children:Object(p.jsx)(M,{})}),Object(p.jsx)(R,{})]})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,116)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),s(e),c(e),a(e),i(e)}))};i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(T,{})}),document.getElementById("root")),_()}},[[90,1,2]]]);
//# sourceMappingURL=main.ae14f7c9.chunk.js.map