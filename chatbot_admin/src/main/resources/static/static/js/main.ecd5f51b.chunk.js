(this.webpackJsonpfrontjs=this.webpackJsonpfrontjs||[]).push([[0],{398:function(e,a,t){e.exports=t(485)},407:function(e,a,t){},485:function(e,a,t){"use strict";t.r(a);var n,r,c=t(0),o=t.n(c),i=t(15),l=t.n(i),u=t(69),s=t(40),d=t(23),m=t(520),p="BOARD/CHANGE_PAGE",f="BOARD/CLICK_ROW",g="BOARD/CLOSE_MODAL",b="BOARD/MODIFY_DATA",h="BOARD/CLICK_WRITE_BUTTON",O="BOARD/CHANGE_SHOWING_ALL_CONTENTS",E="BOARD/KEYWORD_SEARCH",y="BOARD/SEARCH_TYPE_SELECTOR_CHANGE",j="BOARD/API_REQUEST_ERROR",v="/freeboard01",w=[{value:"ALL",print:"\uc81c\ubaa9+\ub0b4\uc6a9"},{value:"CONTENTS",print:"\ub0b4\uc6a9"},{value:"TITLE",print:"\uc81c\ubaa9"},{value:"WRITER",print:"\uc791\uc131\uc790"}],S={pageNumber:0,pageSize:5,selectedData:[],isModalOpen:!1,modalData:{},isWriteModal:!1,isSearch:!1,keyword:"",boardId:0,searchType:"",isRequestFail:!1,errorCode:"",errorMessage:""},C=Object(m.a)((n={},Object(s.a)(n,p,(function(e,a){return Object(d.a)(Object(d.a)({},e),{},{pageNumber:a.payload.pageNumber,pageSize:a.payload.pageSize,selectedData:a.payload.selectedData,isRequestFail:!1})})),Object(s.a)(n,f,(function(e,a){return Object(d.a)(Object(d.a)({},e),{},{isModalOpen:!0,modalData:a.payload})})),Object(s.a)(n,g,(function(e,a){return Object(d.a)(Object(d.a)({},e),{},{isModalOpen:!1,isWriteModal:!1,modalData:{}})})),Object(s.a)(n,b,(function(e,a){return Object(d.a)(Object(d.a)({},e),{},{selectedData:a.payload,isRequestFail:!1})})),Object(s.a)(n,h,(function(e,a){return Object(d.a)(Object(d.a)({},e),{},{isModalOpen:!0,isWriteModal:!0})})),Object(s.a)(n,O,(function(e,a){return Object(d.a)(Object(d.a)({},e),{},{isSearch:!1,keyword:"",boardId:0===e.boardId?1:0,pageNumber:a.payload.pageNumber,pageSize:a.payload.pageSize,selectedData:a.payload.selectedData,isRequestFail:!1})})),Object(s.a)(n,E,(function(e,a){return Object(d.a)(Object(d.a)({},e),{},{isSearch:!0,keyword:a.payload.keyword,boardId:0===e.boardId?1:0,pageNumber:a.payload.pageNumber,pageSize:a.payload.pageSize,selectedData:a.payload.selectedData,isRequestFail:!1})})),Object(s.a)(n,y,(function(e,a){return Object(d.a)(Object(d.a)({},e),{},{searchType:a.payload})})),Object(s.a)(n,j,(function(e,a){return Object(d.a)(Object(d.a)({},e),{},{isRequestFail:!0,errorCode:a.payload.code,errorMessage:a.payload.message})})),n),S),I="MAIN/LOGIN_SUCCESS",R="MAIN/LOGIN_FAIL",k="MAIN/PAGE_CHANGE",D="MAIN/JOIN_FAIL",A=Object(m.a)((r={},Object(s.a)(r,I,(function(e,a){return Object(d.a)(Object(d.a)({},e),{},{accountId:a.payload.accountId,role:a.payload.role,isLogged:!0})})),Object(s.a)(r,R,(function(e,a){return Object(d.a)(Object(d.a)({},e),{},{isLogged:!1,errorMessage:a.payload})})),Object(s.a)(r,k,(function(e,a){return Object(d.a)(Object(d.a)({},e),{},{errorMessage:null,isLoginPage:!e.isLoginPage})})),Object(s.a)(r,D,(function(e,a){return Object(d.a)(Object(d.a)({},e),{},{errorMessage:a.payload})})),r),{accountId:null,isLogged:!1,errorMessage:null,isLoginPage:!0,role:null}),N=Object(u.c)({main:A,board:C}),M=t(385),L=t(384),x=t(77),T=(t(407),t(155)),P=t(29),z=t(55),W=t.n(z),B=t(90),F=t(97),_=t(523),q=t(324),G=t(509),H=t(323),V=t(507),U=t(511),Y=t(248),J=t(366),K=t.n(J),Q=t(367),X=t.n(Q),Z=t(91),$=t(322),ee=t(508);function ae(){return o.a.createElement(Z.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",o.a.createElement(V.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var te=Object($.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function ne(e){var a=e.handleClick,t=e.message,n=e.isLoginPage,r=e.pageChange,i=te(),l=Object(c.useState)(""),u=Object(F.a)(l,2),s=u[0],d=u[1],m=Object(c.useState)(""),p=Object(F.a)(m,2),f=p[0],g=p[1];return Object(c.useEffect)((function(){d(""),g("")}),[n]),o.a.createElement(ee.a,{component:"main",maxWidth:"xs"},o.a.createElement(G.a,null),o.a.createElement("div",{className:i.paper},o.a.createElement(_.a,{className:i.avatar},n?o.a.createElement(K.a,null):o.a.createElement(X.a,null)),o.a.createElement(Z.a,{component:"h1",variant:"h5"},n?"Sign in":"Sign up"),o.a.createElement(Z.a,{variant:"subtitle1",gutterBottom:!0},t),o.a.createElement("form",{className:i.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),a(s,f)}},o.a.createElement(H.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:s,onChange:function(e){return d(e.target.value)}}),o.a.createElement(H.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:f,onChange:function(e){return g(e.target.value)}}),o.a.createElement(q.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:i.submit},n?"Sign In":"Sing Up"),o.a.createElement(U.a,{container:!0},o.a.createElement(U.a,{item:!0,xs:!0},o.a.createElement(V.a,{href:"#",variant:"body2"},"Forgot password?")),o.a.createElement(U.a,{item:!0},o.a.createElement(V.a,{href:"#",variant:"body2",onClick:function(){return r()}},n?"Don't have an account? Sign Up":"Already have an account? Sign In"))))),o.a.createElement(Y.a,{mt:8},o.a.createElement(ae,null)))}var re=t(78),ce=t.n(re);function oe(e,a){return ie.apply(this,arguments)}function ie(){return(ie=Object(B.a)(W.a.mark((function e(a,t){var n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ce.a.post(v+"/api/users?type=LOGIN",{accountId:a,password:t});case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),n={data:{code:e.t0.response.status,message:e.t0.message}},e.abrupt("return",n);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function le(e,a){return ue.apply(this,arguments)}function ue(){return(ue=Object(B.a)(W.a.mark((function e(a,t){var n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ce.a.post(v+"/api/users",{accountId:a,password:t});case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),n={data:{code:e.t0.response.status,message:e.t0.message}},e.abrupt("return",n);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function se(){return de.apply(this,arguments)}function de(){return(de=Object(B.a)(W.a.mark((function e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ce.a.get(v+"/logout");case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}var me=t(522),pe=Object(me.a)(I,(function(e,a){return{accountId:e,role:a}})),fe=Object(me.a)(R,(function(e){return e})),ge=Object(me.a)(k),be=Object(me.a)(D,(function(e){return e})),he=Object(x.b)((function(e){return{errorMessage:e.main.errorMessage,isLoginPage:e.main.isLoginPage}}),(function(e){return{loginSuccess:function(a,t){return e(pe(a,t))},loginFail:function(a){return e(fe(a))},pageChange:function(){return e(ge())},joinFail:function(a){return e(be(a))}}}))((function(e){var a=e.isLoginPage,t=e.errorMessage,n=e.loginSuccess,r=e.loginFail,c=e.pageChange,i=e.joinFail,l=Object(P.f)(),u=function(){var e=Object(B.a)(W.a.mark((function e(a,t){var c;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe(a,t);case 2:"undefined"!=typeof(c=e.sent).data.code?r(c.data.message):(n(c.data.accountId,c.data.role),alert("\ub85c\uadf8\uc778\uc5d0 \uc131\uacf5\ud558\uc168\uc2b5\ub2c8\ub2e4. \uac8c\uc2dc\ud310\uc73c\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4."),l.push("/board"));case 4:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),s=function(){var e=Object(B.a)(W.a.mark((function e(a,t){var n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le(a,t);case 2:"undefined"!=typeof(n=e.sent).data.code?i(n.data.message):(alert("\ud68c\uc6d0 \uac00\uc785\uc5d0 \uc131\uacf5\ud558\uc168\uc2b5\ub2c8\ub2e4. \ub85c\uadf8\uc778 \ud398\uc774\uc9c0\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4."),c());case 4:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}();return o.a.createElement(ne,{handleClick:a?u:s,message:t,isLoginPage:a,pageChange:c})}));function Oe(e,a){return ce.a.get(v+"/api/boards?page="+e+"&size="+a)}function Ee(e,a,t,n){return ce.a.get(v+"/api/boards?page="+e+"&size="+a+"&type="+t+"&keyword="+n)}var ye=function(e,a,t){var n=ve(a*e),r=we(a),c=je(t.data.contents);return Ce(e)?0===c.length?new Array:1===t.data.totalPages?c:c.concat(r):Ie(e,t)?n.concat(c):n.concat(c).concat(r)},je=function(e){return e.forEach((function(e,a,t){var n=e.createdAt.month,r=e.createdAt.dayOfMonth,c=e.createdAt.hour,o=e.createdAt.minute;t[a].createdAt=n+"-"+r+", "+c+":"+o})),e},ve=function(e){return Array.apply(null,new Array(e)).map(Object.prototype.valueOf,new Object).map((function(e,a){return Se(a)}))},we=function(e){return Array.apply(null,new Array(e)).map(Object.prototype.valueOf,new Object).map((function(e,a){return Se(a)}))},Se=function(e){var a=new Object;return a.tableData={id:e},a},Ce=function(e){return 0==e},Ie=function(e,a){return e==a.data.totalPages-1},Re=function(e,a,t){return function(n){return function(e,a){return ce.a.put(v+"/api/boards/"+e,a)}(e,a).then((function(r){"undefined"!=typeof r.data.code?n(ke("",r.data.message)):t.forEach((function(t){if(t.id!=e);else for(var n in a)t[n]=a[n]})),n({type:b,payload:t})})).catch((function(e){n(ke(e.response.status,e.message))}))}},ke=function(e,a){return{type:j,payload:{code:e,message:a}}},De=t(257),Ae=t.n(De),Ne=t(371),Me=t.n(Ne),Le=t(380),xe=t.n(Le),Te=t(372),Pe=t.n(Te),ze=t(379),We=t.n(ze),Be=t(262),Fe=t.n(Be),_e=t(261),qe=t.n(_e),Ge=t(373),He=t.n(Ge),Ve=t(374),Ue=t.n(Ve),Ye=t(376),Je=t.n(Ye),Ke=t(377),Qe=t.n(Ke),Xe=t(378),Ze=t.n(Xe),$e=t(381),ea=t.n($e),aa=t(375),ta=t.n(aa),na=t(210),ra=t.n(na),ca=t(382),oa=t.n(ca),ia=t(259),la=t(336),ua=Object($.a)((function(e){return{selectEmpty:{marginTop:e.spacing(2)}}}));function sa(e){var a=e.dataList,t=e.selectedValue,n=e.handleChangeSelect,r=ua();return o.a.createElement(ia.a,{value:""===t?a[0].value:t,onChange:function(e){return n(e.target.value)},displayEmpty:!0,className:r.selectEmpty,inputProps:{"aria-label":"Without label"}},a.map((function(e){return o.a.createElement(la.a,{key:e.value,value:e.value,selected:!0},e.print)})))}var da={Add:Object(c.forwardRef)((function(e,a){return o.a.createElement(Me.a,Object.assign({},e,{ref:a}))})),Check:Object(c.forwardRef)((function(e,a){return o.a.createElement(Pe.a,Object.assign({},e,{ref:a}))})),Clear:Object(c.forwardRef)((function(e,a){return o.a.createElement(qe.a,Object.assign({},e,{ref:a}))})),Delete:Object(c.forwardRef)((function(e,a){return o.a.createElement(He.a,Object.assign({},e,{ref:a}))})),DetailPanel:Object(c.forwardRef)((function(e,a){return o.a.createElement(Fe.a,Object.assign({},e,{ref:a}))})),Edit:Object(c.forwardRef)((function(e,a){return o.a.createElement(Ue.a,Object.assign({},e,{ref:a}))})),Export:Object(c.forwardRef)((function(e,a){return o.a.createElement(ta.a,Object.assign({},e,{ref:a}))})),Filter:Object(c.forwardRef)((function(e,a){return o.a.createElement(Je.a,Object.assign({},e,{ref:a}))})),FirstPage:Object(c.forwardRef)((function(e,a){return o.a.createElement(Qe.a,Object.assign({},e,{ref:a}))})),LastPage:Object(c.forwardRef)((function(e,a){return o.a.createElement(Ze.a,Object.assign({},e,{ref:a}))})),NextPage:Object(c.forwardRef)((function(e,a){return o.a.createElement(Fe.a,Object.assign({},e,{ref:a}))})),PreviousPage:Object(c.forwardRef)((function(e,a){return o.a.createElement(We.a,Object.assign({},e,{ref:a}))})),ResetSearch:Object(c.forwardRef)((function(e,a){return o.a.createElement(qe.a,Object.assign({},e,{ref:a}))})),Search:Object(c.forwardRef)((function(e,a){return o.a.createElement(ra.a,Object.assign({},e,{ref:a}))})),SortArrow:Object(c.forwardRef)((function(e,a){return o.a.createElement(xe.a,Object.assign({},e,{ref:a}))})),ThirdStateCheck:Object(c.forwardRef)((function(e,a){return o.a.createElement(ea.a,Object.assign({},e,{ref:a}))})),ViewColumn:Object(c.forwardRef)((function(e,a){return o.a.createElement(oa.a,Object.assign({},e,{ref:a}))}))},ma=Object($.a)((function(e){return{margin:{margin:e.spacing(2)},root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},selectEmpty:{marginTop:e.spacing(2)}}}));function pa(e){var a=e.keywordInStore,t=e.pageNumber,n=e.pageSize,r=e.columns,i=e.selectedData,l=e.accountId,u=e.searchType,s=e.isRequestFail,d=e.errorCode,m=e.errorMessage,p=e.handleChangePageNumber,f=e.handleChangePageSize,g=e.handleRowClick,b=e.handleWriteButtonClick,h=e.handleSearch,O=e.handleShowAllContentsButton,E=e.handleChangeSearchTypeSelect,y=ma(),j="";return Object(c.useEffect)((function(){!0===s&&alert(d+" : "+m)}),[s,d,m]),o.a.createElement(Ae.a,{onChangePage:p,onChangeRowsPerPage:f,icons:da,columns:r,page:t,data:i,pagenationType:"stepped",options:{search:!1,paginationType:"stepped",pageSize:5},onRowClick:function(e,a){g(a)},components:{Toolbar:function(e){return o.a.createElement(U.a,{container:!0},o.a.createElement(U.a,{item:!0,xs:6},"undefined"!=typeof l&&null!=l?o.a.createElement(U.a,{className:y.margin},o.a.createElement(q.a,{color:"primary",size:"medium",variant:"outlined",onClick:function(){return b()}},"\uae00\uc4f0\uae30")):null),o.a.createElement(U.a,{item:!0,xs:6},o.a.createElement(U.a,{container:!0,alignItems:"center",justify:"flex-end",direction:"row"},o.a.createElement(U.a,{className:y.margin},o.a.createElement(U.a,{container:!0,spacing:1,alignItems:"flex-end"},o.a.createElement(U.a,{item:!0},o.a.createElement(ra.a,null)),o.a.createElement(U.a,{item:!0},o.a.createElement(sa,{dataList:w,selectedValue:u,handleChangeSelect:E})),o.a.createElement(U.a,{item:!0},o.a.createElement(H.a,{id:"input-with-icon-grid",placeholder:""!=a?"\uac80\uc0c9\uc5b4: "+a:"\uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud558\uc138\uc694.",onChange:function(e){return a=e.target.value,void(j=a);var a}})),o.a.createElement(U.a,null,o.a.createElement(q.a,{color:"primary",size:"medium",onClick:function(){return h(n,u,j)}},"Search")),o.a.createElement(U.a,null,o.a.createElement(q.a,{color:"secondary",size:"medium",onClick:function(){return O(n)}},"\uc804\uccb4\uae00 \ubcf4\uae30")))))))}}})}var fa=t(212);function ga(){return Math.round(20*Math.random())-10}function ba(){var e=50+ga(),a=50+ga();return{top:"".concat(e,"%"),left:"".concat(a,"%"),transform:"translate(-".concat(e,"%, -").concat(a,"%)")}}var ha=Object($.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function Oa(e){var a=e.isModalOpen,t=e.modalData,n=e.userLoggedIn,r=e.userRoleLoggedIn,i=e.isWriteModal,l=e.handleClose,u=e.handleSave,s=e.handleDelete,d=ha(),m=o.a.useState(ba),p=Object(F.a)(m,1)[0],f=Object(c.useState)(!1),g=Object(F.a)(f,2),b=g[0],h=g[1],O=Object(c.useState)(t.title),E=Object(F.a)(O,2),y=E[0],j=E[1],v=Object(c.useState)(t.contents),w=Object(F.a)(v,2),S=w[0],C=w[1];return o.a.createElement("div",null,o.a.createElement(fa.a,{open:a,onClose:l,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},o.a.createElement("div",{style:p,className:d.paper},o.a.createElement("form",{className:d.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),u({title:y,contents:S})}},i||b?o.a.createElement("div",null,o.a.createElement(H.a,{id:"outlined-full-width",label:"\uc81c\ubaa9",placeholder:"\uc81c\ubaa9\uc744 \uc785\ub825\ud558\uc138\uc694.",fullWidth:!0,InputLabelProps:{shrink:!0},variant:"outlined",defaultValue:t.title,margin:"normal",onChange:function(e){return j(e.target.value)},required:!0}),o.a.createElement(H.a,{id:"outlined-multiline-static",label:"\ub0b4\uc6a9",placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud558\uc138\uc694.",fullWidth:!0,multiline:!0,rows:4,defaultValue:t.contents,variant:"outlined",margin:"normal",onChange:function(e){return C(e.target.value)},required:!0})):o.a.createElement("div",null,o.a.createElement("h2",{id:"simple-modal-title"},t.title),o.a.createElement(Z.a,{variant:"body1",gutterBottom:!0},t.contents)),o.a.createElement("hr",null),i?o.a.createElement("div",null,o.a.createElement(ya,{writer:n}),o.a.createElement(U.a,{container:!0},o.a.createElement(q.a,{type:"submit",color:"primary",className:d.submit},"Save"),o.a.createElement(q.a,{onClick:function(){h(!1),l()}},"Close"))):o.a.createElement("div",null,o.a.createElement(ya,{writer:t.writer}),o.a.createElement(Z.a,{variant:"body2",gutterBottom:!0},"\uc791\uc131\uc77c : ",t.createdAt),o.a.createElement(U.a,{container:!0},b?o.a.createElement(U.a,null,o.a.createElement(q.a,{type:"submit",color:"primary",className:d.submit},"Save"),o.a.createElement(q.a,{onClick:function(){return h(!1)}},"Back")):o.a.createElement(Ea,{setIsModify:h,handleDelete:s,writer:t.writer,userLoggedIn:n,userRoleLoggedIn:r}),o.a.createElement(q.a,{onClick:function(){h(!1),l()}},"Close")))))))}function Ea(e){var a=e.writer,t=e.userLoggedIn,n=e.setIsModify,r=e.handleDelete,c=e.userRoleLoggedIn;return o.a.createElement("span",null,o.a.createElement(U.a,null,a.accountId==t?o.a.createElement(q.a,{color:"primary",onClick:function(){return n(!0)}},"Modify"):null,"ADMIN"===c||a.accountId==t?o.a.createElement(q.a,{color:"secondary",onClick:function(){return r()}},"Delete"):null))}function ya(e){var a=e.writer;return"object"==typeof a&&(a=a.accountId),o.a.createElement(Z.a,{variant:"body2",gutterBottom:!0},"\uc791\uc131\uc790 : ",a)}var ja=t(519),va=t(337),wa=t(258),Sa=t(383),Ca=t.n(Sa),Ia=Object($.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function Ra(e){var a=e.title,t=e.accountId,n=Ia(),r=Object(P.f)();return o.a.createElement("div",{className:n.root},o.a.createElement(ja.a,{position:"static"},o.a.createElement(va.a,null,o.a.createElement(wa.a,{edge:"start",className:n.menuButton,color:"inherit","aria-label":"menu"},o.a.createElement(Ca.a,null)),o.a.createElement(Z.a,{variant:"h6",className:n.title},a),"undefined"!=typeof t&&null!=t?o.a.createElement(q.a,{onClick:Object(B.a)(W.a.mark((function e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,se();case 2:r.push("/");case 3:case"end":return e.stop()}}),e)}))),variant:"contained",size:"medium",color:"primary"},"\ub85c\uadf8\uc544\uc6c3"):o.a.createElement(q.a,{variant:"contained",size:"medium",color:"primary",onClick:function(){return r.push("/")}},"\ub85c\uadf8\uc778"))))}var ka=Object(x.b)((function(e){return{pageNumber:e.board.pageNumber,pageSize:e.board.pageSize,selectedData:e.board.selectedData,isModalOpen:e.board.isModalOpen,modalData:e.board.modalData,accountId:e.main.accountId,role:e.main.role,isWriteModal:e.board.isWriteModal,isSearch:e.board.isSearch,keyword:e.board.keyword,boardId:e.board.boardId,searchType:e.board.searchType,isRequestFail:e.board.isRequestFail,errorCode:e.board.errorCode,errorMessage:e.board.errorMessage}}),(function(e){return{changePage:function(a,t,n,r,c){return e(function(e,a,t,n,r){return function(c){return(r&&""!=n.trim()?Ee(e+1,a,t,n):Oe(e+1,a)).then((function(t){if("undefined"!=typeof t.data.code)c(ke("",t.data.message));else{var n=ye(e,a,t);c({type:p,payload:{pageNumber:e,pageSize:a,selectedData:n}})}})).catch((function(e){c(ke(e.response.status,e.message))}))}}(a,t,n,r,c))},clickRow:function(a){return e(function(e){return{type:f,payload:e}}(a))},closeModal:function(){return e({type:g})},clickWriteButton:function(){return e({type:h})},modifyData:function(a,t,n){return e(Re(a,t,n))},changeShowAllContents:function(a){return e(function(e){return function(a){return Oe(1,e).then((function(t){if("undefined"!=typeof t.data.code)a(ke("",t.data.message));else{var n=ye(0,e,t);a({type:O,payload:{pageNumber:0,pageSize:e,selectedData:n}})}})).catch((function(e){a(ke(e.response.status,e.message))}))}}(a))},keywordSearch:function(a,t,n){return e(function(e,a,t){return function(n){return Ee(1,e,a,t).then((function(a){if("undefined"!=typeof a.data.code)n(ke("",a.data.message));else{var r=ye(0,e,a);n({type:E,payload:{keyword:t,pageNumber:0,pageSize:e,selectedData:r}})}})).catch((function(e){n(ke(e.response.status,e.message))}))}}(a,t,n))},searchTypeSelectorChange:function(a){return e(function(e){return{type:y,payload:e}}(a))}}}))((function(e){var a=e.pageNumber,t=e.pageSize,n=e.selectedData,r=e.isModalOpen,i=e.modalData,l=e.accountId,u=e.role,s=e.isWriteModal,d=e.isSearch,m=e.keyword,p=e.boardId,f=e.searchType,g=e.isRequestFail,b=e.errorCode,h=e.errorMessage,O=e.changePage,E=e.clickRow,y=e.closeModal,j=e.clickWriteButton,w=e.modifyData,S=e.keywordSearch,C=e.changeShowAllContents,I=e.searchTypeSelectorChange,R=Object(P.f)();Object(c.useEffect)((function(){null==l&&R.push("/"),O(a,t)}),[]);return o.a.createElement("div",null,o.a.createElement(Ra,{title:"\uac8c\uc2dc\ud310",accountId:l}),o.a.createElement(pa,{key:p,pageNumber:a,pageSize:t,searchType:f,handleChangeSearchTypeSelect:I,keywordInStore:m,handleChangePageNumber:function(e){O(e,t,f,m,d)},handleChangePageSize:function(e){O(a,e,f,m,d)},handleWriteButtonClick:j,handleRowClick:E,handleSearch:S,handleShowAllContentsButton:C,columns:[{title:"\uc81c\ubaa9",field:"title"},{title:"\uc791\uc131\uc790",field:"writer.accountId"},{title:"\uc791\uc131\uc77c\uc2dc",field:"createdAt"}],selectedData:n,accountId:l,isRequestFail:g,errorCode:b,errorMessage:h}),r?o.a.createElement(Oa,{userLoggedIn:l,userRoleLoggedIn:u,isModalOpen:r,modalData:i,isSearch:d,keyword:m,handleClose:y,handleDelete:function(){var e;(e=i.id,ce.a.delete(v+"/api/boards/"+e)).then((function(e){O(a,t),y()}))},handleSave:s?function(e){(function(e){return ce.a.post(v+"/api/boards",e)})(e).then((function(e){O(0,t),y()}))}:function(e){w(i.id,e,n.slice(0)),y()},isWriteModal:s}):null)})),Da=function(){return o.a.createElement(T.a,null,o.a.createElement(P.c,null,o.a.createElement(P.a,{path:"/",exact:!0,component:he}),o.a.createElement(P.a,{path:"/board",component:ka})))},Aa=Object(M.a)(),Na=Object(u.e)(N,Object(u.a)(Aa,L.a));console.log(Na.getState()),l.a.render(o.a.createElement(x.a,{store:Na},o.a.createElement(Da,null)),document.getElementById("root"))}},[[398,1,2]]]);
//# sourceMappingURL=main.ecd5f51b.chunk.js.map