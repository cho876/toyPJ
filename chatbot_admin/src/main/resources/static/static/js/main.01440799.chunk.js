(this.webpackJsonpfrontjs=this.webpackJsonpfrontjs||[]).push([[0],{421:function(e,a,t){e.exports=t.p+"static/media/maple.9cfd598e.jpg"},468:function(e,a,t){e.exports=t(559)},477:function(e,a,t){},559:function(e,a,t){"use strict";t.r(a);var n,r,c=t(0),o=t.n(c),l=t(23),i=t.n(l),u=t(85),s=t(9),d=t(34),m=t(636),f="BOARD/CHANGE_PAGE",p="BOARD/CLICK_ROW",g="BOARD/CLOSE_MODAL",b="BOARD/MODIFY_DATA",O="BOARD/CLICK_WRITE_BUTTON",h="BOARD/CHANGE_SHOWING_ALL_CONTENTS",E="BOARD/KEYWORD_SEARCH",j="BOARD/SEARCH_TYPE_SELECTOR_CHANGE",y="BOARD/API_REQUEST_ERROR",v=[{value:"ALL",print:"\uc81c\ubaa9+\ub0b4\uc6a9"},{value:"CONTENTS",print:"\ub0b4\uc6a9"},{value:"TITLE",print:"\uc81c\ubaa9"},{value:"WRITER",print:"\uc791\uc131\uc790"}],S={pageNumber:0,pageSize:5,selectedData:[],isModalOpen:!1,modalData:{},isWriteModal:!1,isSearch:!1,keyword:"",boardId:0,searchType:"",isRequestFail:!1,errorCode:"",errorMessage:""},w=Object(m.a)((n={},Object(s.a)(n,f,(function(e,a){return Object(d.a)(Object(d.a)({},e),{},{pageNumber:a.payload.pageNumber,pageSize:a.payload.pageSize,selectedData:a.payload.selectedData,isRequestFail:!1})})),Object(s.a)(n,p,(function(e,a){return Object(d.a)(Object(d.a)({},e),{},{isModalOpen:!0,modalData:a.payload})})),Object(s.a)(n,g,(function(e,a){return Object(d.a)(Object(d.a)({},e),{},{isModalOpen:!1,isWriteModal:!1,modalData:{}})})),Object(s.a)(n,b,(function(e,a){return Object(d.a)(Object(d.a)({},e),{},{selectedData:a.payload,isRequestFail:!1})})),Object(s.a)(n,O,(function(e,a){return Object(d.a)(Object(d.a)({},e),{},{isModalOpen:!0,isWriteModal:!0})})),Object(s.a)(n,h,(function(e,a){return Object(d.a)(Object(d.a)({},e),{},{isSearch:!1,keyword:"",boardId:0===e.boardId?1:0,pageNumber:a.payload.pageNumber,pageSize:a.payload.pageSize,selectedData:a.payload.selectedData,isRequestFail:!1})})),Object(s.a)(n,E,(function(e,a){return Object(d.a)(Object(d.a)({},e),{},{isSearch:!0,keyword:a.payload.keyword,boardId:0===e.boardId?1:0,pageNumber:a.payload.pageNumber,pageSize:a.payload.pageSize,selectedData:a.payload.selectedData,isRequestFail:!1})})),Object(s.a)(n,j,(function(e,a){return Object(d.a)(Object(d.a)({},e),{},{searchType:a.payload})})),Object(s.a)(n,y,(function(e,a){return Object(d.a)(Object(d.a)({},e),{},{isRequestFail:!0,errorCode:a.payload.code,errorMessage:a.payload.message})})),n),S),C="MAIN/LOGIN_SUCCESS",R="MAIN/LOGIN_FAIL",k="MAIN/PAGE_CHANGE",D="MAIN/JOIN_FAIL",N=Object(m.a)((r={},Object(s.a)(r,C,(function(e,a){return Object(d.a)(Object(d.a)({},e),{},{accountId:a.payload.accountId,role:a.payload.role,isLogged:!0})})),Object(s.a)(r,R,(function(e,a){return Object(d.a)(Object(d.a)({},e),{},{isLogged:!1,errorMessage:a.payload})})),Object(s.a)(r,k,(function(e,a){return Object(d.a)(Object(d.a)({},e),{},{errorMessage:null,isLoginPage:!e.isLoginPage})})),Object(s.a)(r,D,(function(e,a){return Object(d.a)(Object(d.a)({},e),{},{errorMessage:a.payload})})),r),{accountId:null,isLogged:!1,errorMessage:null,isLoginPage:!0,role:null}),I=Object(u.c)({main:N,board:w}),A=t(442),M=t(440),x=t(97),L=(t(477),t(177)),P=t(40),T=t(76),z=t.n(T),B=t(119),W=t(24),_=t(644),F=t(645),q=t(622),G=t(640),H=t(648),V=t(649),J=t(643),K=t(423),U=t.n(K),Y=t(650),Q=t(372),X=t(421),Z=t.n(X),$=Object(Q.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function ee(e){var a=e.handleClick,t=e.isLoginPage,n=$(),r=Object(c.useState)(""),l=Object(W.a)(r,2),i=l[0],u=l[1],s=Object(c.useState)(""),d=Object(W.a)(s,2),m=d[0],f=d[1];return Object(c.useEffect)((function(){u(""),f("")}),[t]),o.a.createElement(J.a,{container:!0,component:"main",sx:{height:"100vh"}},o.a.createElement(q.a,null),o.a.createElement(J.a,{item:!0,xs:!1,sm:4,md:7,sx:{backgroundImage:"url("+Z.a+")",backgroundRepeat:"no-repeat",backgroundColor:function(e){return"light"===e.palette.mode?e.palette.grey[50]:e.palette.grey[900]},backgroundSize:"cover",backgroundPosition:"center"}}),o.a.createElement(J.a,{item:!0,xs:12,sm:8,md:5,component:H.a,elevation:6,square:!0},o.a.createElement(V.a,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center"}},o.a.createElement(_.a,{className:n.paper},o.a.createElement(U.a,null)),o.a.createElement(Y.a,{component:"h1",variant:"h5"},"Admin Page"),o.a.createElement("form",{className:n.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),a(i,m)}},o.a.createElement(G.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"\uc544\uc774\ub514\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",name:"email",autoComplete:"email",autoFocus:!0,value:i,onChange:function(e){return u(e.target.value)}}),o.a.createElement(G.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",type:"password",id:"password",autoComplete:"current-password",value:m,onChange:function(e){return f(e.target.value)}}),o.a.createElement(F.a,{type:"submit",fullWidth:!0,variant:"contained",className:n.submit},"Sign In")))))}var ae=t(98),te=t.n(ae),ne="http://localhost:8071/admin";function re(e,a){return ce.apply(this,arguments)}function ce(){return(ce=Object(B.a)(z.a.mark((function e(a,t){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te.a.post(ne+"/onLogin",{user_id:a,user_pw:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function oe(){return le.apply(this,arguments)}function le(){return(le=Object(B.a)(z.a.mark((function e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,te.a.get(ne+"/logout");case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}var ie=t(647),ue=Object(ie.a)(C,(function(e,a){return{accountId:e,role:a}})),se=Object(ie.a)(R,(function(e){return e})),de=(Object(ie.a)(k),Object(ie.a)(D,(function(e){return e})),Object(x.b)((function(e){return{errorMessage:e.main.errorMessage,isLoginPage:e.main.isLoginPage}}),(function(e){return{loginSuccess:function(a){return e(ue(a))},loginFail:function(a){return e(se(a))}}}))((function(e){var a=e.isLoginPage,t=e.loginSuccess,n=e.loginFail,r=Object(P.f)(),c=function(){var e=Object(B.a)(z.a.mark((function e(a,c){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re(a,c);case 2:1===e.sent.data?(t(a),alert("\ub85c\uadf8\uc778\uc5d0 \uc131\uacf5\ud558\uc168\uc2b5\ub2c8\ub2e4. \uac8c\uc2dc\ud310\uc73c\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4."),r.push("/board")):(n("\ub85c\uadf8\uc778 \uc2e4\ud328"),alert("\ub85c\uadf8\uc778\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4."));case 4:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}();return o.a.createElement(ee,{handleClick:c,isLoginPage:a})}))),me="http://localhost:8071/admin";function fe(e,a){return te.a.get(me+"/getAllBoardList?page="+e+"&size="+a)}function pe(e,a,t,n){return te.a.get(me+"/api/boards?page="+e+"&size="+a+"&type="+t+"&keyword="+n)}var ge=function(e,a,t){var n=Oe(a*e),r=he(a),c=be(t.data);return je(e)?0===c.length?new Array:1===t.data.totalPages?c:c.concat(r):ye(e,t)?n.concat(c):n.concat(c).concat(r)},be=function(e){return e},Oe=function(e){return Array.apply(null,new Array(e)).map(Object.prototype.valueOf,new Object).map((function(e,a){return Ee(a)}))},he=function(e){return Array.apply(null,new Array(e)).map(Object.prototype.valueOf,new Object).map((function(e,a){return Ee(a)}))},Ee=function(e){var a=new Object;return a.tableData={id:e},a},je=function(e){return 0==e},ye=function(e,a){return e==a.data.totalPages-1},ve=function(e,a,t){return function(n){return function(e,a){return te.a.put(me+"/api/boards/"+e,a)}(e,a).then((function(r){t.forEach((function(t){if(t.id!=e);else for(var n in a)t[n]=a[n]})),n({type:b,payload:t})})).catch((function(e){n(Se(e.response.status,e.message))}))}},Se=function(e,a){return{type:y,payload:{code:e,message:a}}},we=t(292),Ce=t.n(we),Re=t(631),ke=t(400),De=t(397),Ne=t(427),Ie=t.n(Ne),Ae=t(436),Me=t.n(Ae),xe=t(428),Le=t.n(xe),Pe=t(435),Te=t.n(Pe),ze=t(304),Be=t.n(ze),We=t(303),_e=t.n(We),Fe=t(429),qe=t.n(Fe),Ge=t(430),He=t.n(Ge),Ve=t(432),Je=t.n(Ve),Ke=t(433),Ue=t.n(Ke),Ye=t(434),Qe=t.n(Ye),Xe=t(437),Ze=t.n(Xe),$e=t(431),ea=t.n($e),aa=t(249),ta=t.n(aa),na=t(438),ra=t.n(na),ca=t(297),oa=t(386),la=Object(Q.a)((function(e){return{selectEmpty:{marginTop:e.spacing(2)}}}));function ia(e){var a=e.dataList,t=e.selectedValue,n=e.handleChangeSelect,r=la();return o.a.createElement(ca.a,{value:""===t?a[0].value:t,onChange:function(e){return n(e.target.value)},displayEmpty:!0,className:r.selectEmpty,inputProps:{"aria-label":"Without label"}},a.map((function(e){return o.a.createElement(oa.a,{key:e.value,value:e.value,selected:!0},e.print)})))}var ua={Add:Object(c.forwardRef)((function(e,a){return o.a.createElement(Ie.a,Object.assign({},e,{ref:a}))})),Check:Object(c.forwardRef)((function(e,a){return o.a.createElement(Le.a,Object.assign({},e,{ref:a}))})),Clear:Object(c.forwardRef)((function(e,a){return o.a.createElement(_e.a,Object.assign({},e,{ref:a}))})),Delete:Object(c.forwardRef)((function(e,a){return o.a.createElement(qe.a,Object.assign({},e,{ref:a}))})),DetailPanel:Object(c.forwardRef)((function(e,a){return o.a.createElement(Be.a,Object.assign({},e,{ref:a}))})),Edit:Object(c.forwardRef)((function(e,a){return o.a.createElement(He.a,Object.assign({},e,{ref:a}))})),Export:Object(c.forwardRef)((function(e,a){return o.a.createElement(ea.a,Object.assign({},e,{ref:a}))})),Filter:Object(c.forwardRef)((function(e,a){return o.a.createElement(Je.a,Object.assign({},e,{ref:a}))})),FirstPage:Object(c.forwardRef)((function(e,a){return o.a.createElement(Ue.a,Object.assign({},e,{ref:a}))})),LastPage:Object(c.forwardRef)((function(e,a){return o.a.createElement(Qe.a,Object.assign({},e,{ref:a}))})),NextPage:Object(c.forwardRef)((function(e,a){return o.a.createElement(Be.a,Object.assign({},e,{ref:a}))})),PreviousPage:Object(c.forwardRef)((function(e,a){return o.a.createElement(Te.a,Object.assign({},e,{ref:a}))})),ResetSearch:Object(c.forwardRef)((function(e,a){return o.a.createElement(_e.a,Object.assign({},e,{ref:a}))})),Search:Object(c.forwardRef)((function(e,a){return o.a.createElement(ta.a,Object.assign({},e,{ref:a}))})),SortArrow:Object(c.forwardRef)((function(e,a){return o.a.createElement(Me.a,Object.assign({},e,{ref:a}))})),ThirdStateCheck:Object(c.forwardRef)((function(e,a){return o.a.createElement(Ze.a,Object.assign({},e,{ref:a}))})),ViewColumn:Object(c.forwardRef)((function(e,a){return o.a.createElement(ra.a,Object.assign({},e,{ref:a}))}))},sa=Object(Q.a)((function(e){return{margin:{margin:e.spacing(2)},root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},selectEmpty:{marginTop:e.spacing(2)}}}));function da(e){var a=e.keywordInStore,t=e.pageNumber,n=e.pageSize,r=e.columns,l=e.selectedData,i=e.searchType,u=e.isRequestFail,s=e.errorCode,d=e.errorMessage,m=e.handleChangePageNumber,f=e.handleChangePageSize,p=e.handleRowClick,g=e.handleWriteButtonClick,b=e.handleSearch,O=e.handleShowAllContentsButton,h=e.handleChangeSearchTypeSelect,E=sa(),j="";return Object(c.useEffect)((function(){!0===u&&alert(s+" : "+d)}),[u,s,d]),o.a.createElement(Ce.a,{onChangePage:m,onChangeRowsPerPage:f,icons:ua,columns:r,page:t,data:l,pagenationType:"stepped",options:{search:!1,paginationType:"stepped",pageSize:5},onRowClick:function(e,a){p(a)},components:{Toolbar:function(e){return o.a.createElement(Re.a,{container:!0},o.a.createElement(Re.a,{item:!0,xs:6},o.a.createElement(Re.a,{className:E.margin},o.a.createElement(ke.a,{color:"primary",size:"medium",variant:"outlined",onClick:function(){return g()}},"\uae00\uc4f0\uae30"))),o.a.createElement(Re.a,{item:!0,xs:6},o.a.createElement(Re.a,{container:!0,alignItems:"center",justify:"flex-end",direction:"row"},o.a.createElement(Re.a,{className:E.margin},o.a.createElement(Re.a,{container:!0,spacing:1,alignItems:"flex-end"},o.a.createElement(Re.a,{item:!0},o.a.createElement(ta.a,null)),o.a.createElement(Re.a,{item:!0},o.a.createElement(ia,{dataList:v,selectedValue:i,handleChangeSelect:h})),o.a.createElement(Re.a,{item:!0},o.a.createElement(De.a,{id:"input-with-icon-grid",placeholder:""!=a?"\uac80\uc0c9\uc5b4: "+a:"\uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud558\uc138\uc694.",onChange:function(e){return a=e.target.value,void(j=a);var a}})),o.a.createElement(Re.a,null,o.a.createElement(ke.a,{color:"primary",size:"medium",onClick:function(){return b(n,i,j)}},"Search")),o.a.createElement(Re.a,null,o.a.createElement(ke.a,{color:"secondary",size:"medium",onClick:function(){return O(n)}},"\uc804\uccb4\uae00 \ubcf4\uae30")))))))}}})}var ma=t(252),fa=t(120),pa=t(641),ga=t(638),ba=t(651),Oa=t(635);function ha(){return Math.round(20*Math.random())-10}function Ea(){var e=50+ha(),a=50+ha();return{top:"".concat(e,"%"),left:"".concat(a,"%"),transform:"translate(-".concat(e,"%, -").concat(a,"%)")}}var ja=Object(Q.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function ya(e){var a=e.isModalOpen,t=e.modalData,n=(e.userLoggedIn,e.userRoleLoggedIn,e.isWriteModal),r=e.handleClose,l=e.handleSave,i=e.handleDelete,u=ja(),s=o.a.useState(Ea),d=Object(W.a)(s,1)[0],m=Object(c.useState)(!1),f=Object(W.a)(m,2),p=f[0],g=f[1],b=Object(c.useState)(),O=Object(W.a)(b,2),h=O[0],E=O[1],j=Object(c.useState)(t.status),y=Object(W.a)(j,2),v=y[0],S=y[1];return o.a.createElement("div",null,o.a.createElement(ma.a,{open:a,onClose:r,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},o.a.createElement("div",{style:d,className:u.paper},o.a.createElement("form",{className:u.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),l({email:t.email,status:v})}},o.a.createElement("div",null,o.a.createElement(De.a,{id:"outlined-full-width",label:"\ubc84\uadf8 \ub0b4\uc5ed",fullWidth:!0,InputLabelProps:{shrink:!0},variant:"outlined",defaultValue:t.message,margin:"normal",required:!0,disabled:!0}),o.a.createElement(De.a,{id:"outlined-multiline-static",label:"\ucc98\ub9ac\uc0c1\ud669",placeholder:"\ucc98\ub9ac\uc0c1\ud669\uc744 \uc785\ub825\ud558\uc138\uc694.",fullWidth:!0,multiline:!0,rows:4,defaultValue:h,variant:"outlined",margin:"normal",onChange:function(e){return E(e.target.value)},required:!0}),o.a.createElement(ba.a,{fullWidth:!0},o.a.createElement(pa.a,{id:"demo-simple-select-label"},"\uc0c1\ud0dc: ",t.status),o.a.createElement(Oa.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:v,label:"\ucc98\ub9ac\uc0c1\ud0dc",onChange:function(e){return S(e.target.value)}},o.a.createElement(ga.a,{value:"001"},"\uc811\uc218"),o.a.createElement(ga.a,{value:"002"},"\ucc98\ub9ac\uc9c4\ud589\uc911"),o.a.createElement(ga.a,{value:"003"},"\ucc98\ub9ac\uc644\ub8cc")))),o.a.createElement("hr",null),n?o.a.createElement("div",null,o.a.createElement(fa.a,{variant:"body2",gutterBottom:!0},"\uc791\uc131\uc790 : ",t.email),o.a.createElement(Re.a,{container:!0},o.a.createElement(ke.a,{type:"submit",color:"primary",className:u.submit},"Save"),o.a.createElement(ke.a,{onClick:function(){g(!1),r()}},"Close"))):o.a.createElement("div",null,o.a.createElement(Sa,{writer:t.email}),o.a.createElement(fa.a,{variant:"body2",gutterBottom:!0},"\uc791\uc131\uc77c : ",t.regdt),o.a.createElement(Re.a,{container:!0},p?o.a.createElement(Re.a,null,o.a.createElement(ke.a,{type:"submit",color:"primary",className:u.submit},"Save"),o.a.createElement(ke.a,{onClick:function(){return g(!1)}},"Back")):o.a.createElement(va,{setIsModify:g,handleDelete:i}),o.a.createElement(ke.a,{onClick:function(){g(!1),r()}},"Close")))))))}function va(e){var a=e.setIsModify,t=e.handleDelete;return o.a.createElement("span",null,o.a.createElement(Re.a,null,o.a.createElement(ke.a,{color:"primary",onClick:function(){return a(!0)}},"Modify"),o.a.createElement(ke.a,{color:"secondary",onClick:function(){return t()}},"Delete")))}function Sa(e){var a=e.writer;return"object"==typeof a&&(a=a.accountId),o.a.createElement(fa.a,{variant:"body2",gutterBottom:!0},"\uc791\uc131\uc790 : ",a)}var wa=t(634),Ca=t(387),Ra=t(293),ka=t(439),Da=t.n(ka),Na=Object(Q.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function Ia(e){var a=e.title,t=e.accountId,n=Na(),r=Object(P.f)();return o.a.createElement("div",{className:n.root},o.a.createElement(wa.a,{position:"static"},o.a.createElement(Ca.a,null,o.a.createElement(Ra.a,{edge:"start",className:n.menuButton,color:"inherit","aria-label":"menu"},o.a.createElement(Da.a,null)),o.a.createElement(fa.a,{variant:"h6",className:n.title},a),"undefined"!=typeof t&&null!=t?o.a.createElement(ke.a,{onClick:Object(B.a)(z.a.mark((function e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe();case 2:r.push("/");case 3:case"end":return e.stop()}}),e)}))),variant:"contained",size:"medium",color:"primary"},"\ub85c\uadf8\uc544\uc6c3"):o.a.createElement(ke.a,{variant:"contained",size:"medium",color:"primary",onClick:function(){return r.push("/")}},"\ub85c\uadf8\uc778"))))}var Aa=Object(x.b)((function(e){return{pageNumber:e.board.pageNumber,pageSize:e.board.pageSize,selectedData:e.board.selectedData,isModalOpen:e.board.isModalOpen,modalData:e.board.modalData,isWriteModal:e.board.isWriteModal,isSearch:e.board.isSearch,keyword:e.board.keyword,boardId:e.board.boardId,searchType:e.board.searchType,isRequestFail:e.board.isRequestFail,errorCode:e.board.errorCode,errorMessage:e.board.errorMessage}}),(function(e){return{changePage:function(a,t,n,r,c){return e(function(e,a,t,n,r){return function(c){return(r&&""!=n.trim()?pe(e+1,a,t,n):fe(e+1,a)).then((function(t){console.log(JSON.stringify(t));var n=ge(e,a,t);c({type:f,payload:{pageNumber:e,pageSize:a,selectedData:n}})})).catch((function(e){c(Se(e.response.status,e.message))}))}}(a,t,n,r,c))},clickRow:function(a){return e(function(e){return{type:p,payload:e}}(a))},closeModal:function(){return e({type:g})},clickWriteButton:function(){return e({type:O})},modifyData:function(a,t,n){return e(ve(a,t,n))},changeShowAllContents:function(a){return e(function(e){return function(a){return fe(1,e).then((function(t){var n=ge(0,e,t);a({type:h,payload:{pageNumber:0,pageSize:e,selectedData:n}})})).catch((function(e){a(Se(e.response.status,e.message))}))}}(a))},keywordSearch:function(a,t,n){return e(function(e,a,t){return function(n){return pe(1,e,a,t).then((function(a){var r=ge(0,e,a);n({type:E,payload:{keyword:t,pageNumber:0,pageSize:e,selectedData:r}})})).catch((function(e){n(Se(e.response.status,e.message))}))}}(a,t,n))},searchTypeSelectorChange:function(a){return e(function(e){return{type:j,payload:e}}(a))}}}))((function(e){var a=e.pageNumber,t=e.pageSize,n=e.selectedData,r=e.isModalOpen,l=e.modalData,i=e.isWriteModal,u=e.isSearch,s=e.keyword,d=e.boardId,m=e.searchType,f=e.isRequestFail,p=e.errorCode,g=e.errorMessage,b=e.changePage,O=e.clickRow,h=e.closeModal,E=e.clickWriteButton,j=e.modifyData,y=e.keywordSearch,v=e.changeShowAllContents,S=e.searchTypeSelectorChange;Object(P.f)();Object(c.useEffect)((function(){b(a,t)}),[]);return o.a.createElement("div",null,o.a.createElement(Ia,{title:"\uac8c\uc2dc\ud310"}),o.a.createElement(da,{key:d,pageNumber:a,pageSize:t,searchType:m,handleChangeSearchTypeSelect:S,keywordInStore:s,handleChangePageNumber:function(e){b(e,t,m,s,u)},handleChangePageSize:function(e){b(a,e,m,s,u)},handleWriteButtonClick:E,handleRowClick:O,handleSearch:y,handleShowAllContentsButton:v,columns:[{title:"\ubb38\uc758\uc0ac\ud56d",field:"message"},{title:"\uc791\uc131\uc790",field:"email"},{title:"\ubc84\uadf8\uacbd\ub85c",field:"location"},{title:"\ucc98\ub9ac\uc0c1\ud0dc",field:"status"},{title:"\ub4f1\ub85d\uc77c\uc790",field:"regdt"}],selectedData:n,isRequestFail:f,errorCode:p,errorMessage:g}),r?o.a.createElement(ya,{isModalOpen:r,modalData:l,isSearch:u,keyword:s,handleClose:h,handleDelete:function(){var e;(e=l.id,te.a.delete(me+"/api/boards/"+e)).then((function(e){b(a,t),h()}))},handleSave:i?function(e){(function(e){return te.a.post(me+"/api/boards",e)})(e).then((function(e){b(0,t),h()}))}:function(e){j(l.id,e,n.slice(0)),h()},isWriteModal:i}):null)})),Ma=function(){return o.a.createElement(L.a,null,o.a.createElement(P.c,null,o.a.createElement(P.a,{path:"/",exact:!0,component:de}),o.a.createElement(P.a,{path:"/board",component:Aa})))},xa=Object(A.a)(),La=Object(u.e)(I,Object(u.a)(xa,M.a));console.log(La.getState()),i.a.render(o.a.createElement(x.a,{store:La},o.a.createElement(Ma,null)),document.getElementById("root"))}},[[468,1,2]]]);
//# sourceMappingURL=main.01440799.chunk.js.map