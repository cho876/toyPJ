(this.webpackJsonpfrontjs=this.webpackJsonpfrontjs||[]).push([[0],{50:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n.n(s),a=n(21),i=n.n(a),r=(n(64),n(65),n(54)),o=n(7),l=n(18),j=n(19),u=n(24),d=n(23),h=n(29),b=n(113),p=function(e){var t=e.children,n=document.getElementById("popupDom");return i.a.createPortal(t,n)},O=n(6),m=n(14),x=n(53),v=n.n(x),f=new(function(){function e(){Object(l.a)(this,e)}return Object(j.a)(e,[{key:"sendMsg",value:function(e){return v.a.post("http://localhost:8070/chatbot/sendMsg",e)}}]),e}()),g=(n(50),n(2)),y=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).textRef=c.a.createRef(),s.handleKeyPress=function(e){if(13===e.charCode){s.sendMessage(s.state.message);var t={senderId:s.state.senderId,message:s.state.message};s.receiveMessage(t)}},s.sendMessage=function(e){var t={senderId:"customer",message:e};s.addChatDetail(t,"right")},s.addChatDetail=function(e,t){console.log("addChatDetail: "+JSON.stringify(e)),console.log("lr: "+t),s.setState({replies:[].concat(Object(m.a)(s.state.replies),[{uuid:s.state.replies.length+1,className:t,senderId:e.senderId,message:e.message}])}),s.clearMessage()},s.receiveMessage=function(e){f.sendMsg(e).then((function(e){console.log("receiveMessage: "+JSON.stringify(e.data)),s.addChatDetail(e.data,"left")}))},s.clearMessage=function(){s.textRef.current.value="",s.state.message=""},s.onChange=function(e){s.setState(Object(O.a)({},e.target.name,e.target.value))},s.state={senderId:"customer",message:null,location:null,replies:[{className:"left",senderId:"admin",message:"\uc548\ub155\ud558\uc138\uc694.\n\ubb34\uc5c7\uc744 \ub3c4\uc640\ub4dc\ub9b4\uae4c\uc694?"}]},s}return Object(j.a)(n,[{key:"render",value:function(){return Object(g.jsx)("div",{className:"dimmed_layer_wrapper",children:Object(g.jsx)("div",{className:"full_layer",children:Object(g.jsxs)("div",{className:"common_alert",children:[Object(g.jsx)("div",{children:Object(g.jsx)("button",{type:"button",onClick:this.props.onClose,children:"close"})}),Object(g.jsx)("div",{children:Object(g.jsx)("div",{class:"header",children:"CHAT"})}),Object(g.jsx)("div",{class:"chat",children:Object(g.jsx)("ul",{children:this.state.replies.map((function(e){return Object(g.jsxs)("li",{class:e.className,children:[Object(g.jsx)("div",{class:"sender",children:Object(g.jsx)("span",{children:e.senderId})}),Object(g.jsx)("div",{class:"message",children:Object(g.jsx)("span",{children:e.message})})]})}))})}),Object(g.jsx)("div",{class:"input-div",children:Object(g.jsx)("textarea",{placeholder:"Press Enter for send message.",name:"message",ref:this.textRef,onChange:this.onChange,onKeyPress:this.handleKeyPress})}),Object(g.jsx)("div",{class:"chat format",children:Object(g.jsx)("ul",{children:this.state.replies.map((function(e){return Object(g.jsxs)("li",{class:e.className,children:[Object(g.jsx)("div",{class:"sender",children:Object(g.jsx)("span",{children:e.senderId})}),Object(g.jsx)("div",{class:"message",children:Object(g.jsx)("span",{children:e.message})})]})}))})})]})})})}}]),n}(s.Component),M=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).state={isOpenPopup:!1},s.openPopup=s.openPopup.bind(Object(h.a)(s)),s.closePopup=s.closePopup.bind(Object(h.a)(s)),s}return Object(j.a)(n,[{key:"openPopup",value:function(){this.setState({isOpenPopup:!0})}},{key:"closePopup",value:function(){console.log("closePopup"),this.setState({isOpenPopup:!1})}},{key:"render",value:function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)(b.a,{id:"popupDom",style:C,variant:"contained",onClick:this.openPopup,children:"\ubb38\uc758\ud558\uae30"}),this.state.isOpenPopup&&Object(g.jsx)(p,{children:Object(g.jsx)(y,{onClose:this.closePopup})})]})}}]),n}(s.Component),C={position:"absolute",bottom:16,right:16},P=M,k=n(114),N=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"movePage",value:function(){this.props.history.push("/")}},{key:"render",value:function(){var e=this;return Object(g.jsx)("div",{children:Object(g.jsx)(k.a,{name:"btn1",variant:"contained",onClick:function(){return e.movePage()},children:"\uba54\uc778\uc73c\ub85c \uac00\uae30"})})}}]),n}(c.a.Component),I=N;var S=function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)(k.a,{variant:"contained",children:"Menu 2-1"}),Object(g.jsx)(k.a,{variant:"contained",children:"Menu 2-2"}),Object(g.jsx)(k.a,{variant:"contained",children:"Menu 2-3"})]})};var D=function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)(k.a,{variant:"contained",children:"Menu 3-1"}),Object(g.jsx)(k.a,{variant:"contained",children:"Menu 3-2"}),Object(g.jsx)(k.a,{variant:"contained",children:"Menu 3-3"})]})},w=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this)).changeMenu=function(e){s.setState({menu:e}),0==e?s.props.history.push("/menu1"):1===e?s.props.history.push("/menu2"):s.props.history.push("/menu3")},s.state={Menu:0},s}return Object(j.a)(n,[{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"wrap",children:[Object(g.jsx)("div",{className:"menuBar",children:Object(g.jsxs)("ul",{className:"tabs",children:[Object(g.jsx)("li",{className:"".concat(0===this.state.menu?"active":""),onClick:function(){return e.changeMenu(0)},children:"Menu 1"}),Object(g.jsx)("li",{className:"".concat(1===this.state.menu?"active":""),onClick:function(){return e.changeMenu(1)},children:"Menu 2"}),Object(g.jsx)("li",{className:"".concat(2===this.state.menu?"active":""),onClick:function(){return e.changeMenu(2)},children:"Menu 3"})]})}),Object(g.jsx)("div",{className:"contentArea",children:B[this.state.menu]})]}),Object(g.jsx)(P,{})]})}}]),n}(c.a.Component),B={0:Object(g.jsx)(I,{}),1:Object(g.jsx)(S,{}),2:Object(g.jsx)(D,{})},F=w,J={marginTop:"20px"},R=function(){return Object(g.jsx)("div",{children:Object(g.jsx)(r.a,{children:Object(g.jsx)("div",{style:J,children:Object(g.jsxs)(o.c,{children:[Object(g.jsx)(o.a,{exact:!0,path:"/",component:F}),Object(g.jsx)(o.a,{path:"/menu1",component:I}),Object(g.jsx)(o.a,{path:"/menu2",component:S}),Object(g.jsx)(o.a,{path:"/menu3",component:D})]})})})})},T=n(112);var _=function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)(T.a,{children:Object(g.jsx)(R,{})}),Object(g.jsx)(P,{})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,116)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),s(e),c(e),a(e),i(e)}))};i.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(_,{})}),document.getElementById("root")),E()}},[[90,1,2]]]);
//# sourceMappingURL=main.9b12c261.chunk.js.map