(this.webpackJsonpfrontjs=this.webpackJsonpfrontjs||[]).push([[0],{50:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n.n(s),a=n(21),i=n.n(a),r=(n(64),n(65),n(54)),l=n(7),o=n(18),d=n(19),j=n(24),u=n(23),h=n(29),b=n(113),O=function(e){var t=e.children,n=document.getElementById("popupDom");return i.a.createPortal(t,n)},p=n(6),m=n(14),v=n(53),x=n.n(v),g=new(function(){function e(){Object(o.a)(this,e)}return Object(d.a)(e,[{key:"sendMsg",value:function(e){return x.a.post("http://localhost:8070/chatbot/sendMsg",e)}}]),e}()),f=(n(50),n(2)),M=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).textRef=c.a.createRef(),s.handleKeyPress=function(e){if(13===e.charCode){s.sendMessage(s.state.message);var t={senderId:s.state.senderId,message:s.state.message};s.receiveMessage(t)}},s.sendMessage=function(e){var t={senderId:"customer",message:e};s.addChatDetail(t,"right")},s.addChatDetail=function(e,t){console.log("addChatDetail: "+JSON.stringify(e)),console.log("lr: "+t),s.setState({replies:[].concat(Object(m.a)(s.state.replies),[{uuid:s.state.replies.length+1,className:t,senderId:e.senderId,message:e.message}])}),s.clearMessage()},s.receiveMessage=function(e){g.sendMsg(e).then((function(e){console.log("receiveMessage: "+JSON.stringify(e.data)),s.addChatDetail(e.data,"left")}))},s.clearMessage=function(){s.textRef.current.value="",s.state.message=""},s.onChange=function(e){s.setState(Object(p.a)({},e.target.name,e.target.value))},s.state={senderId:"customer",message:null,location:null,replies:[{className:"left",senderId:"admin",message:"\uc548\ub155\ud558\uc138\uc694.\n\ubb34\uc5c7\uc744 \ub3c4\uc640\ub4dc\ub9b4\uae4c\uc694?"}]},s}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"dimmed_layer_wrapper",children:Object(f.jsx)("div",{className:"full_layer",children:Object(f.jsxs)("div",{className:"common_alert",children:[Object(f.jsx)("div",{children:Object(f.jsx)("button",{type:"button",onClick:this.props.onClose,children:"close"})}),Object(f.jsx)("div",{children:Object(f.jsx)("div",{class:"header",children:"CHAT"})}),Object(f.jsx)("div",{class:"chat",children:Object(f.jsx)("ul",{children:this.state.replies.map((function(e){return Object(f.jsxs)("li",{class:e.className,children:[Object(f.jsx)("div",{class:"sender",children:Object(f.jsx)("span",{children:e.senderId})}),Object(f.jsx)("div",{class:"message",children:Object(f.jsx)("span",{children:e.message})})]})}))})}),Object(f.jsx)("div",{class:"input-div",children:Object(f.jsx)("textarea",{placeholder:"Press Enter for send message.",name:"message",ref:this.textRef,onChange:this.onChange,onKeyPress:this.handleKeyPress})}),Object(f.jsx)("div",{class:"chat format",children:Object(f.jsx)("ul",{children:this.state.replies.map((function(e){return Object(f.jsxs)("li",{class:e.className,children:[Object(f.jsx)("div",{class:"sender",children:Object(f.jsx)("span",{children:e.senderId})}),Object(f.jsx)("div",{class:"message",children:Object(f.jsx)("span",{children:e.message})})]})}))})})]})})})}}]),n}(s.Component),C=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).state={isOpenPopup:!1},s.openPopup=s.openPopup.bind(Object(h.a)(s)),s.closePopup=s.closePopup.bind(Object(h.a)(s)),s}return Object(d.a)(n,[{key:"openPopup",value:function(){this.setState({isOpenPopup:!0})}},{key:"closePopup",value:function(){console.log("closePopup"),this.setState({isOpenPopup:!1})}},{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(b.a,{id:"popupDom",style:P,variant:"contained",onClick:this.openPopup,children:"\ubb38\uc758\ud558\uae30"}),this.state.isOpenPopup&&Object(f.jsx)(O,{children:Object(f.jsx)(M,{onClose:this.closePopup})})]})}}]),n}(s.Component),P={position:"absolute",bottom:16,right:16},y=C,k=n(114),N=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"movePage",value:function(e){"btn1"===e.target.name?console.log("btn1 push"):"btn2"===e.target.name?console.log("btn2 push"):console.log("btn3 push")}},{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(k.a,{name:"btn1",variant:"contained",onClick:this.movePage,children:"Menu 1-1"}),Object(f.jsx)(k.a,{name:"btn2",variant:"contained",onClick:this.movePage,children:"Menu 1-2"}),Object(f.jsx)(k.a,{name:"btn3",variant:"contained",onClick:this.movePage,children:"Menu 1-3"})]})}}]),n}(c.a.Component),I=N;var S=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(k.a,{variant:"contained",children:"Menu 2-1"}),Object(f.jsx)(k.a,{variant:"contained",children:"Menu 2-2"}),Object(f.jsx)(k.a,{variant:"contained",children:"Menu 2-3"})]})};var w=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(k.a,{variant:"contained",children:"Menu 3-1"}),Object(f.jsx)(k.a,{variant:"contained",children:"Menu 3-2"}),Object(f.jsx)(k.a,{variant:"contained",children:"Menu 3-3"})]})},D=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this)).changeMenu=function(e){s.setState({menu:e})},s.state={Menu:0},s}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{className:"wrap",children:[Object(f.jsx)("div",{className:"menuBar",children:Object(f.jsxs)("ul",{className:"tabs",children:[Object(f.jsx)("li",{className:"".concat(0===this.state.menu?"active":""),onClick:function(){return e.changeMenu(0)},children:"Menu 1"}),Object(f.jsx)("li",{className:"".concat(1===this.state.menu?"active":""),onClick:function(){return e.changeMenu(1)},children:"Menu 2"}),Object(f.jsx)("li",{className:"".concat(2===this.state.menu?"active":""),onClick:function(){return e.changeMenu(2)},children:"Menu 3"})]})}),Object(f.jsx)("div",{className:"contentArea",children:B[this.state.menu]})]}),Object(f.jsx)(y,{})]})}}]),n}(c.a.Component),B={0:Object(f.jsx)(I,{}),1:Object(f.jsx)(S,{}),2:Object(f.jsx)(w,{})},F=D,J=function(){return Object(f.jsx)("div",{children:"hww"})},R={marginTop:"20px"},T=function(){return Object(f.jsx)("div",{children:Object(f.jsx)(r.a,{children:Object(f.jsx)("div",{style:R,children:Object(f.jsxs)(l.c,{children:[Object(f.jsx)(l.a,{exact:!0,path:"/",component:F}),Object(f.jsx)(l.a,{path:"/dummy",component:J})]})})})})},_=n(112);var E=function(){return Object(f.jsx)("div",{children:Object(f.jsx)(_.a,{children:Object(f.jsx)(T,{})})})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,116)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),s(e),c(e),a(e),i(e)}))};i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(E,{})}),document.getElementById("root")),K()}},[[90,1,2]]]);
//# sourceMappingURL=main.d0f702bb.chunk.js.map