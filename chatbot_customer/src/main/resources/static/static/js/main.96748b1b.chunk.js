(this.webpackJsonpfrontjs=this.webpackJsonpfrontjs||[]).push([[0],{52:function(e,t,s){},53:function(e,t,s){},54:function(e,t,s){},74:function(e,t,s){},80:function(e,t,s){"use strict";s.r(t);var n=s(0),c=s.n(n),a=s(26),i=s.n(a),r=(s(52),s(53),s(44)),l=s(5),o=(s(54),s(2)),d=function(e){e.active;var t=e.children;e.to;return Object(o.jsx)("div",{className:"menu-item",children:t})},j=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"logo",children:"\ud0c0\uc774\ud2c0"}),Object(o.jsxs)("div",{className:"menu",children:[Object(o.jsx)(d,{children:"\ud648"}),Object(o.jsx)(d,{children:"\uc18c\uac1c"}),Object(o.jsx)(d,{children:"\ud3ec\uc2a4\ud2b8"})]})]})},u=s(17),h=s(18),p=s(20),b=s(29),O=s(28),m=s(101),x=function(e){var t=e.children,s=document.getElementById("popupDom");return i.a.createPortal(t,s)},f=s(4),g=s(13),v=s(43),P=s.n(v),y=new(function(){function e(){Object(u.a)(this,e)}return Object(h.a)(e,[{key:"sendMsg",value:function(e){return P.a.post("http://localhost:8070/chatbot/sendMsg",e)}}]),e}()),C=(s(74),function(e){Object(b.a)(s,e);var t=Object(O.a)(s);function s(e){var n;return Object(u.a)(this,s),(n=t.call(this,e)).chatRef=c.a.createRef(),n.handleKeyPress=function(e){if(13===e.charCode){n.sendMessage(n.state.message);var t={senderId:n.state.senderId,message:n.state.message};n.receiveMessage(t)}},n.sendMessage=function(e){var t={senderId:"customer",message:e};n.addChatDetail(t,"right")},n.addChatDetail=function(e,t){console.log("addChatDetail: "+JSON.stringify(e)),console.log("lr: "+t),n.setState({replies:[].concat(Object(g.a)(n.state.replies),[{uuid:n.state.replies.length+1,className:t,senderId:e.senderId,message:e.message}])})},n.receiveMessage=function(e){y.sendMsg(e).then((function(e){console.log("receiveMessage: "+JSON.stringify(e.data)),n.addChatDetail(e.data,"left")}))},n.onChange=function(e){n.setState(Object(f.a)({},e.target.name,e.target.value))},n.state={senderId:"customer",message:null,replies:[{className:null,senderId:null,message:null}]},n}return Object(h.a)(s,[{key:"componentDidMount",value:function(){this.sendMessage("\uc548\ub155\ud558\uc138\uc694.\n\ubb34\uc5c7\uc744 \ub3c4\uc640\ub4dc\ub9b4\uae4c\uc694?")}},{key:"render",value:function(){return Object(o.jsx)("div",{className:"dimmed_layer_wrapper",children:Object(o.jsx)("div",{className:"full_layer",children:Object(o.jsxs)("div",{className:"common_alert",children:[Object(o.jsx)("div",{class:"header",children:"CHAT"}),Object(o.jsx)("div",{class:"chat",ref:this.chatRef,children:Object(o.jsx)("ul",{children:this.state.replies.map((function(e){return Object(o.jsxs)("li",{class:e.className,children:[Object(o.jsx)("div",{class:"sender",children:Object(o.jsx)("span",{children:e.senderId})}),Object(o.jsx)("div",{class:"message",children:Object(o.jsx)("span",{children:e.message})})]})}))})}),Object(o.jsx)("div",{class:"input-div",children:Object(o.jsx)("textarea",{placeholder:"Press Enter for send message.",name:"message",onChange:this.onChange,onKeyPress:this.handleKeyPress})}),Object(o.jsx)("div",{class:"chat format",children:Object(o.jsx)("ul",{children:this.state.replies.map((function(e){return Object(o.jsxs)("li",{class:e.className,children:[Object(o.jsx)("div",{class:"sender",children:Object(o.jsx)("span",{children:e.senderId})}),Object(o.jsx)("div",{class:"message",children:Object(o.jsx)("span",{children:e.message})})]})}))})})]})})})}}]),s}(n.Component)),N=function(e){Object(b.a)(s,e);var t=Object(O.a)(s);function s(e){var n;return Object(u.a)(this,s),(n=t.call(this,e)).state={isOpenPopup:!1},n.openPopup=n.openPopup.bind(Object(p.a)(n)),n.closePopup=n.closePopup.bind(Object(p.a)(n)),n}return Object(h.a)(s,[{key:"openPopup",value:function(){this.setState({isOpenPopup:!0})}},{key:"closePopup",value:function(){this.setState({isOpenPopup:!1})}},{key:"render",value:function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(m.a,{id:"popupDom",style:I,variant:"contained",onClick:this.openPopup,children:"\ubb38\uc758\ud558\uae30"}),this.state.isOpenPopup&&Object(o.jsx)(x,{children:Object(o.jsx)(C,{onClose:this.closePopup})})]})}}]),s}(n.Component),I={position:"absolute",bottom:16,right:16},M=N,k=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(j,{}),Object(o.jsx)("div",{className:"Home"}),Object(o.jsx)(M,{})]})},D={marginTop:"20px"},S=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(r.a,{children:Object(o.jsx)("div",{style:D,children:Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{exact:!0,path:"/",component:k}),Object(o.jsx)(l.a,{path:"/chatComp",component:C})]})})})})},w=s(102);var F=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(w.a,{children:Object(o.jsx)(S,{})})})},J=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,103)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),n(e),c(e),a(e),i(e)}))};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(F,{})}),document.getElementById("root")),J()}},[[80,1,2]]]);
//# sourceMappingURL=main.96748b1b.chunk.js.map