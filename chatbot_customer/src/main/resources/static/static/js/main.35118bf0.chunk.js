(this.webpackJsonpfrontjs=this.webpackJsonpfrontjs||[]).push([[0],{48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},70:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),i=n(23),o=n.n(i),a=(n(48),n(49),n(40)),r=n(4),j=(n(50),n(2)),l=function(e){e.active;var t=e.children;e.to;return Object(j.jsx)("div",{className:"menu-item",children:t})},d=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"logo",children:"\ud0c0\uc774\ud2c0"}),Object(j.jsxs)("div",{className:"menu",children:[Object(j.jsx)(l,{children:"\ud648"}),Object(j.jsx)(l,{children:"\uc18c\uac1c"}),Object(j.jsx)(l,{children:"\ud3ec\uc2a4\ud2b8"})]})]})},u=n(15),h=n(16),b=n(18),p=n(25),O=n(24),x=n(97),v=function(e){var t=e.children,n=document.getElementById("popupDom");return o.a.createPortal(t,n)},m=n(39),f=n.n(m),g=new(function(){function e(){Object(u.a)(this,e)}return Object(h.a)(e,[{key:"sendMsg",value:function(e){return f.a.post("http://localhost:8070/chatbot//sendMsg",e)}}]),e}()),P=(n(70),function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(e){var c;return Object(u.a)(this,n),(c=t.call(this,e)).handleKeyPress=function(e){if(13===e.charCode){var t={senderId:"blue",message:e.target.value};g.sendMsg(t).then((function(e){console.log(e)}))}},c.sendMessage=function(e){console.log(e)},c.state={senderId:"bluc",message:null},c}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.sendMessage("hello")}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"dimmed_layer_wrapper",children:Object(j.jsx)("div",{className:"full_layer",children:Object(j.jsxs)("div",{className:"common_alert",children:[Object(j.jsx)("div",{class:"header",children:"CHAT"}),Object(j.jsx)("div",{class:"chat",children:Object(j.jsx)("ul",{})}),Object(j.jsx)("div",{class:"input-div",children:Object(j.jsx)("textarea",{placeholder:"Press Enter for send message.",name:"message",onKeyPress:this.handleKeyPress})}),Object(j.jsx)("div",{class:"chat format",children:Object(j.jsx)("ul",{children:Object(j.jsxs)("li",{children:[Object(j.jsx)("div",{class:"sender",children:Object(j.jsx)("span",{})}),Object(j.jsx)("div",{class:"message",children:Object(j.jsx)("span",{})})]})})})]})})})}}]),n}(c.Component)),y=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(e){var c;return Object(u.a)(this,n),(c=t.call(this,e)).state={isOpenPopup:!1},c.openPopup=c.openPopup.bind(Object(b.a)(c)),c.closePopup=c.closePopup.bind(Object(b.a)(c)),c}return Object(h.a)(n,[{key:"openPopup",value:function(){this.setState({isOpenPopup:!0})}},{key:"closePopup",value:function(){this.setState({isOpenPopup:!1})}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(x.a,{id:"popupDom",style:C,variant:"contained",onClick:this.openPopup,children:"\ubb38\uc758\ud558\uae30"}),this.state.isOpenPopup&&Object(j.jsx)(v,{children:Object(j.jsx)(P,{onClose:this.closePopup})})]})}}]),n}(c.Component),C={position:"absolute",bottom:16,right:16},k=y,M=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(d,{}),Object(j.jsx)("div",{className:"Home"}),Object(j.jsx)(k,{})]})},N={marginTop:"20px"},I=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(a.a,{children:Object(j.jsx)("div",{style:N,children:Object(j.jsxs)(r.c,{children:[Object(j.jsx)(r.a,{exact:!0,path:"/",component:M}),Object(j.jsx)(r.a,{path:"/chatComp",component:P})]})})})})},w=n(98);var D=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(w.a,{children:Object(j.jsx)(I,{})})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,99)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),s(e),i(e),o(e)}))};o.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(D,{})}),document.getElementById("root")),F()}},[[76,1,2]]]);
//# sourceMappingURL=main.35118bf0.chunk.js.map