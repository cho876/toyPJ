(this.webpackJsonpfrontjs=this.webpackJsonpfrontjs||[]).push([[0],{421:function(e,a,t){e.exports=t.p+"static/media/maple.9cfd598e.jpg"},468:function(e,a,t){e.exports=t(559)},477:function(e,a,t){},559:function(e,a,t){"use strict";t.r(a);var n,r,c=t(0),o=t.n(c),l=t(23),i=t.n(l),u=t(84),s=t(9),d=t(34),m=t(636),p="BOARD/CHANGE_PAGE",f="BOARD/CLICK_ROW",g="BOARD/CLOSE_MODAL",b="BOARD/MODIFY_DATA",O="BOARD/CLICK_WRITE_BUTTON",h="BOARD/CHANGE_SHOWING_ALL_CONTENTS",E="BOARD/KEYWORD_SEARCH",j="BOARD/SEARCH_TYPE_SELECTOR_CHANGE",y="BOARD/API_REQUEST_ERROR",S=[{value:"MESSAGE",print:"\ubb38\uc758\uc0ac\ud56d"},{value:"LOCATION",print:"\ubc84\uadf8\uacbd\ub85c"},{value:"EMAIL",print:"\ub4f1\ub85d\uc790"}],v={pageNumber:0,pageSize:10,selectedData:[],isModalOpen:!1,modalData:{},isWriteModal:!1,isSearch:!1,keyword:"",boardId:0,searchType:"",isRequestFail:!1,errorCode:"",errorMessage:""},w=Object(m.a)((n={},Object(s.a)(n,p,(function(e,a){return Object(d.a)(Object(d.a)({},e),{},{pageNumber:a.payload.pageNumber,pageSize:a.payload.pageSize,selectedData:a.payload.selectedData,isRequestFail:!1})})),Object(s.a)(n,f,(function(e,a){return Object(d.a)(Object(d.a)({},e),{},{isModalOpen:!0,modalData:a.payload})})),Object(s.a)(n,g,(function(e,a){return Object(d.a)(Object(d.a)({},e),{},{isModalOpen:!1,isWriteModal:!1,modalData:{}})})),Object(s.a)(n,b,(function(e,a){return Object(d.a)(Object(d.a)({},e),{},{selectedData:a.payload,isRequestFail:!1})})),Object(s.a)(n,O,(function(e,a){return Object(d.a)(Object(d.a)({},e),{},{isModalOpen:!0,isWriteModal:!0})})),Object(s.a)(n,h,(function(e,a){return Object(d.a)(Object(d.a)({},e),{},{isSearch:!1,keyword:"",boardId:0===e.boardId?1:0,pageNumber:a.payload.pageNumber,pageSize:a.payload.pageSize,selectedData:a.payload.selectedData,isRequestFail:!1})})),Object(s.a)(n,E,(function(e,a){return Object(d.a)(Object(d.a)({},e),{},{isSearch:!0,keyword:a.payload.keyword,boardId:0===e.boardId?1:0,pageNumber:a.payload.pageNumber,pageSize:a.payload.pageSize,selectedData:a.payload.selectedData,isRequestFail:!1})})),Object(s.a)(n,j,(function(e,a){return Object(d.a)(Object(d.a)({},e),{},{searchType:a.payload})})),Object(s.a)(n,y,(function(e,a){return Object(d.a)(Object(d.a)({},e),{},{isRequestFail:!0,errorCode:a.payload.code,errorMessage:a.payload.message})})),n),v),C="MAIN/LOGIN_SUCCESS",R="MAIN/LOGIN_FAIL",N="MAIN/PAGE_CHANGE",k="MAIN/JOIN_FAIL",D=Object(m.a)((r={},Object(s.a)(r,C,(function(e,a){return Object(d.a)(Object(d.a)({},e),{},{accountId:a.payload.accountId,role:a.payload.role,isLogged:!0})})),Object(s.a)(r,R,(function(e,a){return Object(d.a)(Object(d.a)({},e),{},{isLogged:!1,errorMessage:a.payload})})),Object(s.a)(r,N,(function(e,a){return Object(d.a)(Object(d.a)({},e),{},{errorMessage:null,isLoginPage:!e.isLoginPage})})),Object(s.a)(r,k,(function(e,a){return Object(d.a)(Object(d.a)({},e),{},{errorMessage:a.payload})})),r),{accountId:null,isLogged:!1,errorMessage:null,isLoginPage:!0,role:null}),A=Object(u.c)({main:D,board:w}),I=t(442),M=t(440),P=t(96),x=(t(477),t(229)),L=t(40),T=t(104),z=t.n(T),B=t(145),_=t(24),W=t(644),F=t(645),G=t(622),q=t(640),H=t(648),V=t(649),J=t(643),K=t(423),U=t.n(K),Y=t(650),Q=t(372),X=t(421),Z=t.n(X),$=Object(Q.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function ee(e){var a=e.handleClick,t=e.isLoginPage,n=$(),r=Object(c.useState)(""),l=Object(_.a)(r,2),i=l[0],u=l[1],s=Object(c.useState)(""),d=Object(_.a)(s,2),m=d[0],p=d[1];return Object(c.useEffect)((function(){u(""),p("")}),[t]),o.a.createElement(J.a,{container:!0,component:"main",sx:{height:"100vh"}},o.a.createElement(G.a,null),o.a.createElement(J.a,{item:!0,xs:!1,sm:4,md:7,sx:{backgroundImage:"url("+Z.a+")",backgroundRepeat:"no-repeat",backgroundColor:function(e){return"light"===e.palette.mode?e.palette.grey[50]:e.palette.grey[900]},backgroundSize:"cover",backgroundPosition:"center"}}),o.a.createElement(J.a,{item:!0,xs:12,sm:8,md:5,component:H.a,elevation:6,square:!0},o.a.createElement(V.a,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center"}},o.a.createElement(W.a,{className:n.paper},o.a.createElement(U.a,null)),o.a.createElement(Y.a,{component:"h1",variant:"h5"},"Admin Page"),o.a.createElement("form",{className:n.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),a(i,m)}},o.a.createElement(q.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"\uc544\uc774\ub514\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",name:"email",autoComplete:"email",autoFocus:!0,value:i,onChange:function(e){return u(e.target.value)}}),o.a.createElement(q.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",type:"password",id:"password",autoComplete:"current-password",value:m,onChange:function(e){return p(e.target.value)}}),o.a.createElement(F.a,{type:"submit",fullWidth:!0,variant:"contained",className:n.submit},"Sign In")))))}var ae=t(136),te=t.n(ae),ne="http://localhost:8071/admin";function re(e,a){return ce.apply(this,arguments)}function ce(){return(ce=Object(B.a)(z.a.mark((function e(a,t){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te.a.post(ne+"/onLogin",{user_id:a,user_pw:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var oe=t(647),le=Object(oe.a)(C,(function(e,a){return{accountId:e,role:a}})),ie=Object(oe.a)(R,(function(e){return e})),ue=(Object(oe.a)(N),Object(oe.a)(k,(function(e){return e})),Object(P.b)((function(e){return{errorMessage:e.main.errorMessage,isLoginPage:e.main.isLoginPage}}),(function(e){return{loginSuccess:function(a){return e(le(a))},loginFail:function(a){return e(ie(a))}}}))((function(e){var a=e.isLoginPage,t=e.loginSuccess,n=e.loginFail,r=Object(L.f)(),c=function(){var e=Object(B.a)(z.a.mark((function e(a,c){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re(a,c);case 2:1===e.sent.data?(t(a),alert("\ub85c\uadf8\uc778\uc5d0 \uc131\uacf5\ud558\uc168\uc2b5\ub2c8\ub2e4. \uac8c\uc2dc\ud310\uc73c\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4."),r.push("/board")):(n("\ub85c\uadf8\uc778 \uc2e4\ud328"),alert("\ub85c\uadf8\uc778\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4."));case 4:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}();return o.a.createElement(ee,{handleClick:c,isLoginPage:a})}))),se="http://localhost:8071/admin";function de(e,a){return te.a.get(se+"/getAllBoardList?page="+e+"&size="+a)}function me(e,a,t,n){return te.a.get(se+"/getBoardBySearch?page="+e+"&size="+a+"&type="+t+"&keyword="+n)}var pe=function(e,a,t){var n=ge(a*e),r=be(a),c=fe(t.data);return he(e)?0===c.length?new Array:1===t.data.totalPages?c:c.concat(r):Ee(e,t)?n.concat(c):n.concat(c).concat(r)},fe=function(e){return e},ge=function(e){return Array.apply(null,new Array(e)).map(Object.prototype.valueOf,new Object).map((function(e,a){return Oe(a)}))},be=function(e){return Array.apply(null,new Array(e)).map(Object.prototype.valueOf,new Object).map((function(e,a){return Oe(a)}))},Oe=function(e){var a=new Object;return a.tableData={id:e},a},he=function(e){return 0==e},Ee=function(e,a){return e==a.data.totalPages-1},je=function(e,a,t){return function(n){return console.log(JSON.stringify(a)),function(e){return te.a.post(se+"/updateBoardById",e)}(a).then((function(r){t.forEach((function(t){if(t.id!=e);else{for(var n in a)t[n]=a[n];"003"==t.status?t.status="\ucc98\ub9ac\uc644\ub8cc":"002"==t.status?t.status="\ucc98\ub9ac\uc9c4\ud589\uc911":t.status="\uc811\uc218"}})),n({type:b,payload:t})})).then(function(e){return te.a.post(se+"/sendEmail",e)}(a))}},ye=function(e,a){return{type:y,payload:{code:e,message:a}}},Se=t(292),ve=t.n(Se),we=t(631),Ce=t(397),Re=t(400),Ne=t(427),ke=t.n(Ne),De=t(436),Ae=t.n(De),Ie=t(428),Me=t.n(Ie),Pe=t(435),xe=t.n(Pe),Le=t(304),Te=t.n(Le),ze=t(303),Be=t.n(ze),_e=t(429),We=t.n(_e),Fe=t(430),Ge=t.n(Fe),qe=t(432),He=t.n(qe),Ve=t(433),Je=t.n(Ve),Ke=t(434),Ue=t.n(Ke),Ye=t(437),Qe=t.n(Ye),Xe=t(431),Ze=t.n(Xe),$e=t(249),ea=t.n($e),aa=t(438),ta=t.n(aa),na=t(297),ra=t(386),ca=Object(Q.a)((function(e){return{selectEmpty:{marginTop:e.spacing(2)}}}));function oa(e){var a=e.dataList,t=e.selectedValue,n=e.handleChangeSelect,r=ca();return o.a.createElement(na.a,{value:""===t?a[0].value:t,onChange:function(e){return n(e.target.value)},displayEmpty:!0,className:r.selectEmpty,inputProps:{"aria-label":"Without label"}},a.map((function(e){return o.a.createElement(ra.a,{key:e.value,value:e.value,selected:!0},e.print)})))}var la={Add:Object(c.forwardRef)((function(e,a){return o.a.createElement(ke.a,Object.assign({},e,{ref:a}))})),Check:Object(c.forwardRef)((function(e,a){return o.a.createElement(Me.a,Object.assign({},e,{ref:a}))})),Clear:Object(c.forwardRef)((function(e,a){return o.a.createElement(Be.a,Object.assign({},e,{ref:a}))})),Delete:Object(c.forwardRef)((function(e,a){return o.a.createElement(We.a,Object.assign({},e,{ref:a}))})),DetailPanel:Object(c.forwardRef)((function(e,a){return o.a.createElement(Te.a,Object.assign({},e,{ref:a}))})),Edit:Object(c.forwardRef)((function(e,a){return o.a.createElement(Ge.a,Object.assign({},e,{ref:a}))})),Export:Object(c.forwardRef)((function(e,a){return o.a.createElement(Ze.a,Object.assign({},e,{ref:a}))})),Filter:Object(c.forwardRef)((function(e,a){return o.a.createElement(He.a,Object.assign({},e,{ref:a}))})),FirstPage:Object(c.forwardRef)((function(e,a){return o.a.createElement(Je.a,Object.assign({},e,{ref:a}))})),LastPage:Object(c.forwardRef)((function(e,a){return o.a.createElement(Ue.a,Object.assign({},e,{ref:a}))})),NextPage:Object(c.forwardRef)((function(e,a){return o.a.createElement(Te.a,Object.assign({},e,{ref:a}))})),PreviousPage:Object(c.forwardRef)((function(e,a){return o.a.createElement(xe.a,Object.assign({},e,{ref:a}))})),ResetSearch:Object(c.forwardRef)((function(e,a){return o.a.createElement(Be.a,Object.assign({},e,{ref:a}))})),Search:Object(c.forwardRef)((function(e,a){return o.a.createElement(ea.a,Object.assign({},e,{ref:a}))})),SortArrow:Object(c.forwardRef)((function(e,a){return o.a.createElement(Ae.a,Object.assign({},e,{ref:a}))})),ThirdStateCheck:Object(c.forwardRef)((function(e,a){return o.a.createElement(Qe.a,Object.assign({},e,{ref:a}))})),ViewColumn:Object(c.forwardRef)((function(e,a){return o.a.createElement(ta.a,Object.assign({},e,{ref:a}))}))},ia=Object(Q.a)((function(e){return{margin:{margin:e.spacing(2)},root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},selectEmpty:{marginTop:e.spacing(2)}}}));function ua(e){var a=e.keywordInStore,t=e.pageNumber,n=e.pageSize,r=e.columns,c=e.selectedData,l=e.searchType,i=e.handleChangePageNumber,u=e.handleChangePageSize,s=e.handleRowClick,d=e.handleSearch,m=e.handleShowAllContentsButton,p=e.handleChangeSearchTypeSelect,f=ia(),g="";return o.a.createElement(ve.a,{onChangePage:i,onChangeRowsPerPage:u,icons:la,columns:r,page:t,data:c,pagenationType:"stepped",options:{search:!1,paginationType:"stepped",pageSize:10},onRowClick:function(e,a){s(a)},components:{Toolbar:function(e){return o.a.createElement(we.a,{container:!0},o.a.createElement(we.a,{item:!0,xs:6},o.a.createElement(we.a,{container:!0,alignItems:"center",justify:"flex-end",direction:"row"},o.a.createElement(we.a,{className:f.margin},o.a.createElement(we.a,{container:!0,spacing:1,alignItems:"flex-end"},o.a.createElement(we.a,{item:!0},o.a.createElement(ea.a,null)),o.a.createElement(we.a,{item:!0},o.a.createElement(oa,{dataList:S,selectedValue:l,handleChangeSelect:p})),o.a.createElement(we.a,{item:!0},o.a.createElement(Ce.a,{id:"input-with-icon-grid",placeholder:""!=a?"\uac80\uc0c9\uc5b4: "+a:"\uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud558\uc138\uc694.",onChange:function(e){return a=e.target.value,void(g=a);var a}})),o.a.createElement(we.a,null,o.a.createElement(Re.a,{color:"primary",size:"medium",onClick:function(){return d(n,l,g)}},"Search")),o.a.createElement(we.a,null,o.a.createElement(Re.a,{color:"secondary",size:"medium",onClick:function(){return m(n)}},"\uc804\uccb4\uae00 \ubcf4\uae30")))))))}}})}var sa=t(252),da=t(118),ma=t(641),pa=t(638),fa=t(651),ga=t(635);function ba(){return Math.round(20*Math.random())-10}function Oa(){var e=50+ba(),a=50+ba();return{top:"".concat(e,"%"),left:"".concat(a,"%"),transform:"translate(-".concat(e,"%, -").concat(a,"%)")}}var ha=Object(Q.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function Ea(e){var a=e.isModalOpen,t=e.modalData,n=e.isWriteModal,r=e.handleClose,l=e.handleSave,i=ha(),u=o.a.useState(Oa),s=Object(_.a)(u,1)[0],d=Object(c.useState)(!1),m=Object(_.a)(d,2),p=m[0],f=m[1],g=Object(c.useState)(),b=Object(_.a)(g,2),O=b[0],h=b[1],E=Object(c.useState)(t.status),j=Object(_.a)(E,2),y=j[0],S=j[1];return o.a.createElement("div",null,o.a.createElement(sa.a,{open:a,onClose:r,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},o.a.createElement("div",{style:s,className:i.paper},o.a.createElement("form",{className:i.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),l({id:t.id,email:t.email,status:y,message:t.message,comments:O})}},o.a.createElement("div",null,o.a.createElement(Ce.a,{id:"outlined-full-width",label:"\ubc84\uadf8 \ub0b4\uc5ed",fullWidth:!0,InputLabelProps:{shrink:!0},variant:"outlined",defaultValue:t.message,margin:"normal",required:!0,disabled:!0}),o.a.createElement(Ce.a,{id:"outlined-multiline-static",label:"\ucc98\ub9ac\uc0c1\ud669",placeholder:"\ucc98\ub9ac\uc0c1\ud669\uc744 \uc785\ub825\ud558\uc138\uc694.",fullWidth:!0,multiline:!0,rows:4,defaultValue:O,variant:"outlined",margin:"normal",onChange:function(e){return h(e.target.value)},required:!0}),o.a.createElement(fa.a,{fullWidth:!0},o.a.createElement(ma.a,{id:"demo-simple-select-label"},"\uc0c1\ud0dc: ",t.status),o.a.createElement(ga.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",label:"\ucc98\ub9ac\uc0c1\ud0dc",onChange:function(e){return S(e.target.value)}},o.a.createElement(pa.a,{value:"001"},"\uc811\uc218"),o.a.createElement(pa.a,{value:"002"},"\ucc98\ub9ac\uc9c4\ud589\uc911"),o.a.createElement(pa.a,{value:"003"},"\ucc98\ub9ac\uc644\ub8cc")))),o.a.createElement("hr",null),n?o.a.createElement("div",null,o.a.createElement(da.a,{variant:"body2",gutterBottom:!0},"\uc791\uc131\uc790 : ",t.email),o.a.createElement(we.a,{container:!0},o.a.createElement(Re.a,{type:"submit",color:"primary",className:i.submit},"Save"),o.a.createElement(Re.a,{onClick:function(){f(!1),r()}},"Close"))):o.a.createElement("div",null,o.a.createElement(da.a,{variant:"body2",gutterBottom:!0},"\uc791\uc131\uc790 : ",t.email),o.a.createElement(da.a,{variant:"body2",gutterBottom:!0},"\uc791\uc131\uc77c : ",t.regdt),o.a.createElement(we.a,{container:!0},p?o.a.createElement(we.a,null,o.a.createElement(Re.a,{type:"submit",color:"primary",className:i.submit},"Save"),o.a.createElement(Re.a,{onClick:function(){return f(!1)}},"Back")):o.a.createElement(Re.a,{color:"primary",onClick:function(){return f(!0)}},"Modify"),o.a.createElement(Re.a,{onClick:function(){f(!1),r()}},"Close")))))))}var ja=t(634),ya=t(387),Sa=t(293),va=t(439),wa=t.n(va),Ca=Object(Q.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function Ra(e){var a=e.title,t=Ca(),n=Object(L.f)();return o.a.createElement("div",{className:t.root},o.a.createElement(ja.a,{position:"static"},o.a.createElement(ya.a,null,o.a.createElement(Sa.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu"},o.a.createElement(wa.a,null)),o.a.createElement(da.a,{variant:"h6",className:t.title},a),o.a.createElement(Re.a,{onClick:Object(B.a)(z.a.mark((function e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.push("/");case 1:case"end":return e.stop()}}),e)}))),variant:"contained",size:"medium",color:"primary"},"\ub85c\uadf8\uc544\uc6c3"))))}var Na=Object(P.b)((function(e){return{pageNumber:e.board.pageNumber,pageSize:e.board.pageSize,selectedData:e.board.selectedData,isModalOpen:e.board.isModalOpen,modalData:e.board.modalData,isWriteModal:e.board.isWriteModal,isSearch:e.board.isSearch,keyword:e.board.keyword,boardId:e.board.boardId,searchType:e.board.searchType}}),(function(e){return{changePage:function(a,t,n,r,c){return e(function(e,a,t,n,r){return function(c){return(r&&""!=n.trim()?me(e+1,a,t,n):de(e+1,a)).then((function(t){console.log(JSON.stringify(t));var n=pe(e,a,t);c({type:p,payload:{pageNumber:e,pageSize:a,selectedData:n}})})).catch((function(e){c(ye(e.response.status,e.message))}))}}(a,t,n,r,c))},clickRow:function(a){return e(function(e){return{type:f,payload:e}}(a))},closeModal:function(){return e({type:g})},modifyData:function(a,t,n){return e(je(a,t,n))},changeShowAllContents:function(a){return e(function(e){return function(a){return de(1,e).then((function(t){var n=pe(0,e,t);a({type:h,payload:{pageNumber:0,pageSize:e,selectedData:n}})})).catch((function(e){a(ye(e.response.status,e.message))}))}}(a))},keywordSearch:function(a,t,n){return e(function(e,a,t){return function(n){return me(1,e,a,t).then((function(a){var r=pe(0,e,a);n({type:E,payload:{keyword:t,pageNumber:0,pageSize:e,selectedData:r}})})).catch((function(e){n(ye(e.response.status,e.message))}))}}(a,t,n))},searchTypeSelectorChange:function(a){return e(function(e){return{type:j,payload:e}}(a))}}}))((function(e){var a=e.pageNumber,t=e.pageSize,n=e.selectedData,r=e.isModalOpen,l=e.modalData,i=e.isWriteModal,u=e.isSearch,s=e.keyword,d=e.boardId,m=e.searchType,p=e.changePage,f=e.clickRow,g=e.closeModal,b=e.modifyData,O=e.keywordSearch,h=e.changeShowAllContents,E=e.searchTypeSelectorChange;Object(c.useEffect)((function(){p(a,t)}),[]);return o.a.createElement("div",null,o.a.createElement(Ra,{title:"\uac8c\uc2dc\ud310"}),o.a.createElement(ua,{key:d,pageNumber:a,pageSize:t,searchType:m,handleChangeSearchTypeSelect:E,keywordInStore:s,handleChangePageNumber:function(e){p(e,t,m,s,u)},handleChangePageSize:function(e){p(a,e,m,s,u)},handleRowClick:f,handleSearch:O,handleShowAllContentsButton:h,columns:[{title:"\ubb38\uc758\uc0ac\ud56d",field:"message"},{title:"\uc791\uc131\uc790",field:"email"},{title:"\ubc84\uadf8\uacbd\ub85c",field:"location"},{title:"\ucc98\ub9ac\uc0c1\ud0dc",field:"status"},{title:"\ub4f1\ub85d\uc77c\uc790",field:"regdt"}],selectedData:n}),r?o.a.createElement(Ea,{isModalOpen:r,modalData:l,isSearch:u,keyword:s,handleClose:g,handleSave:function(e){b(l.id,e,n.slice(0)),g()},isWriteModal:i}):null)})),ka=function(){return o.a.createElement(x.a,null,o.a.createElement(L.c,null,o.a.createElement(L.a,{path:"/",exact:!0,component:ue}),o.a.createElement(L.a,{path:"/board",component:Na})))},Da=Object(I.a)(),Aa=Object(u.e)(A,Object(u.a)(Da,M.a));console.log(Aa.getState()),i.a.render(o.a.createElement(P.a,{store:Aa},o.a.createElement(ka,null)),document.getElementById("root"))}},[[468,1,2]]]);
//# sourceMappingURL=main.a9db19ec.chunk.js.map