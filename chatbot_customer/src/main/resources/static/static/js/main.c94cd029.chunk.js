(this.webpackJsonpfrontjs=this.webpackJsonpfrontjs||[]).push([[0],{36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),i=n(18),o=n.n(i),r=(n(36),n(37),n(28)),a=n(4),j=(n(38),n(2)),l=function(e){e.active;var t=e.children;e.to;return Object(j.jsx)("div",{className:"menu-item",children:t})},d=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"logo",children:"\ud0c0\uc774\ud2c0"}),Object(j.jsxs)("div",{className:"menu",children:[Object(j.jsx)(l,{children:"\ud648"}),Object(j.jsx)(l,{children:"\uc18c\uac1c"}),Object(j.jsx)(l,{children:"\ud3ec\uc2a4\ud2b8"})]})]})},u=n(19),p=n(20),h=n(15),b=n(22),O=n(21),x=n(67),v=function(e){var t=e.children,n=document.getElementById("popupDom");return o.a.createPortal(t,n)},m=(n(40),function(e){Object(b.a)(n,e);var t=Object(O.a)(n);function n(e){var c;return Object(u.a)(this,n),(c=t.call(this,e)).handleKeyPress=function(e){13===e.charCode&&console.log("pushed")},c.sendMessage=function(e){console.log(e)},c}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.sendMessage("hello")}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"dimmed_layer_wrapper",children:Object(j.jsx)("div",{className:"full_layer",children:Object(j.jsxs)("div",{className:"common_alert",children:[Object(j.jsx)("div",{class:"header",children:"CHAT"}),Object(j.jsx)("div",{class:"chat",children:Object(j.jsx)("ul",{})}),Object(j.jsx)("div",{class:"input-div",children:Object(j.jsx)("textarea",{placeholder:"Press Enter for send message.",name:"message",onKeyPress:this.handleKeyPress})}),Object(j.jsx)("div",{class:"chat format",children:Object(j.jsx)("ul",{children:Object(j.jsxs)("li",{children:[Object(j.jsx)("div",{class:"sender",children:Object(j.jsx)("span",{})}),Object(j.jsx)("div",{class:"message",children:Object(j.jsx)("span",{})})]})})})]})})})}}]),n}(c.Component)),f=function(e){Object(b.a)(n,e);var t=Object(O.a)(n);function n(e){var c;return Object(u.a)(this,n),(c=t.call(this,e)).state={isOpenPopup:!1},c.openPopup=c.openPopup.bind(Object(h.a)(c)),c.closePopup=c.closePopup.bind(Object(h.a)(c)),c}return Object(p.a)(n,[{key:"openPopup",value:function(){this.setState({isOpenPopup:!0})}},{key:"closePopup",value:function(){this.setState({isOpenPopup:!1})}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(x.a,{id:"popupDom",style:P,variant:"contained",onClick:this.openPopup,children:"\ubb38\uc758\ud558\uae30"}),this.state.isOpenPopup&&Object(j.jsx)(v,{children:Object(j.jsx)(m,{onClose:this.closePopup})})]})}}]),n}(c.Component),P={position:"absolute",bottom:16,right:16},g=f,y=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(d,{}),Object(j.jsx)("div",{className:"Home"}),Object(j.jsx)(g,{})]})},C={marginTop:"20px"},k=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(r.a,{children:Object(j.jsx)("div",{style:C,children:Object(j.jsxs)(a.c,{children:[Object(j.jsx)(a.a,{exact:!0,path:"/",component:y}),Object(j.jsx)(a.a,{path:"/chatComp",component:m})]})})})})},N=n(68);var D=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(N.a,{children:Object(j.jsx)(k,{})})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),s(e),i(e),o(e)}))};o.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(D,{})}),document.getElementById("root")),F()}},[[46,1,2]]]);
//# sourceMappingURL=main.c94cd029.chunk.js.map