(this.webpackJsonpfrontjs=this.webpackJsonpfrontjs||[]).push([[0],{52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},74:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n.n(s),a=n(26),i=n.n(a),o=(n(52),n(53),n(44)),r=n(5),l=(n(54),n(2)),d=function(e){e.active;var t=e.children;e.to;return Object(l.jsx)("div",{className:"menu-item",children:t})},j=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"logo",children:"\ud0c0\uc774\ud2c0"}),Object(l.jsxs)("div",{className:"menu",children:[Object(l.jsx)(d,{children:"\ud648"}),Object(l.jsx)(d,{children:"\uc18c\uac1c"}),Object(l.jsx)(d,{children:"\ud3ec\uc2a4\ud2b8"})]})]})},u=n(17),h=n(18),p=n(20),b=n(29),O=n(28),f=n(101),m=function(e){var t=e.children,n=document.getElementById("popupDom");return i.a.createPortal(t,n)},g=n(4),x=n(13),v=n(43),y=n.n(v),P=new(function(){function e(){Object(u.a)(this,e)}return Object(h.a)(e,[{key:"sendMsg",value:function(e){return y.a.post("http://localhost:8070/chatbot/sendMsg",e)}}]),e}()),C=(n(74),function(e){Object(b.a)(n,e);var t=Object(O.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e)).chatRef=c.a.createRef(),s.handleKeyPress=function(e){if(13===e.charCode){var t={senderId:"blue",message:s.state.message};P.sendMsg(t).then((function(e){console.log(e),s.addChatDetail(t)}))}},s.sendMessage=function(e){console.log("msg: "+e)},s.addChatDetail=function(e){s.setState({replies:[].concat(Object(x.a)(s.state.replies),[{uuid:s.state.replies.length+1,className:"Left",senderId:"blue",message:e.message}])}),console.log(JSON.stringify(s.state.replies))},s.onChange=function(e){s.setState(Object(g.a)({},e.target.name,e.target.value))},s.state={senderId:"bluc",message:null,replies:[{className:"Left",senderId:"blue",message:"hello"}]},s}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.sendMessage("hello")}},{key:"resive",value:function(e,t){console.log("resive arr:  "+JSON.stringify(t)),console.log("msg: "+JSON.stringify(this.state.replies))}},{key:"appendMessageTag",value:function(e,t,n){console.log("appendMessageTag")}},{key:"render",value:function(){return Object(l.jsx)("div",{className:"dimmed_layer_wrapper",children:Object(l.jsx)("div",{className:"full_layer",children:Object(l.jsxs)("div",{className:"common_alert",children:[Object(l.jsx)("div",{class:"header",children:"CHAT"}),Object(l.jsx)("div",{class:"chat",children:Object(l.jsx)("ul",{ref:this.chatRef})}),Object(l.jsx)("div",{class:"input-div",children:Object(l.jsx)("textarea",{placeholder:"Press Enter for send message.",name:"message",onChange:this.onChange,onKeyPress:this.handleKeyPress})}),Object(l.jsx)("div",{class:"chat format",children:Object(l.jsx)("ul",{children:this.state.replies.map((function(e){return Object(l.jsxs)("li",{class:e.className,children:[Object(l.jsx)("div",{class:"sender",children:Object(l.jsx)("span",{children:e.senderId})}),Object(l.jsx)("div",{class:"message",children:Object(l.jsx)("span",{children:e.message})})]})}))})})]})})})}}]),n}(s.Component)),N=function(e){Object(b.a)(n,e);var t=Object(O.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e)).state={isOpenPopup:!1},s.openPopup=s.openPopup.bind(Object(p.a)(s)),s.closePopup=s.closePopup.bind(Object(p.a)(s)),s}return Object(h.a)(n,[{key:"openPopup",value:function(){this.setState({isOpenPopup:!0})}},{key:"closePopup",value:function(){this.setState({isOpenPopup:!1})}},{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(f.a,{id:"popupDom",style:k,variant:"contained",onClick:this.openPopup,children:"\ubb38\uc758\ud558\uae30"}),this.state.isOpenPopup&&Object(l.jsx)(m,{children:Object(l.jsx)(C,{onClose:this.closePopup})})]})}}]),n}(s.Component),k={position:"absolute",bottom:16,right:16},M=N,S=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(j,{}),Object(l.jsx)("div",{className:"Home"}),Object(l.jsx)(M,{})]})},I={marginTop:"20px"},D=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(o.a,{children:Object(l.jsx)("div",{style:I,children:Object(l.jsxs)(r.c,{children:[Object(l.jsx)(r.a,{exact:!0,path:"/",component:S}),Object(l.jsx)(r.a,{path:"/chatComp",component:C})]})})})})},T=n(102);var J=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(T.a,{children:Object(l.jsx)(D,{})})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,103)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),s(e),c(e),a(e),i(e)}))};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(J,{})}),document.getElementById("root")),w()}},[[80,1,2]]]);
//# sourceMappingURL=main.c90f3020.chunk.js.map