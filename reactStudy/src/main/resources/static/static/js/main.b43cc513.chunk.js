(this.webpackJsonpreactjs=this.webpackJsonpreactjs||[]).push([[0],{115:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(10),i=a.n(r),l=a(74),c=a(12),o=a(24),h=a(25),u=a(36),d=a(34),j=a(158),g=a(162),m=a(161),p=a(159),f=a(160),b=a(157),O=a(153),x=a(72),y=a.n(x),v=a(73),C=a.n(v),U=a(39),N=a.n(U),w="http://localhost:8081/kwonnee/users",k=new(function(){function e(){Object(o.a)(this,e)}return Object(h.a)(e,[{key:"getAllUsers",value:function(){return N.a.get(w+"/list")}},{key:"getUserByID",value:function(e){return N.a.get(w+"/list/"+e)}},{key:"deleteUserByID",value:function(e){return N.a.delete(w+"/delete/"+e)}},{key:"addUser",value:function(e){return N.a.post(w+"/add/",e)}},{key:"editUser",value:function(e){return N.a.post(w+"/edit/",e)}}]),e}()),S=a(3),R=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).reloadUserList=function(){k.getAllUsers().then((function(e){n.setState({users:e.data})})).catch((function(e){console.log("reload ERROR",e)}))},n.deleteUser=function(e){k.deleteUserByID(e).then((function(t){n.setState({message:"User Deleted Successfully"}),n.setState({users:n.state.users.filter((function(t){return t.id!=e}))})})).catch((function(e){console.log("delete ERROR",e)}))},n.editUser=function(e){window.localStorage.setItem("userID",e),n.props.history.push("/edit-user")},n.addUser=function(){window.localStorage.removeItem("userID"),n.props.history.push("/add-user")},n.state={users:[],message:null},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.reloadUserList()}},{key:"render",value:function(){var e=this;return Object(S.jsxs)("div",{children:[Object(S.jsx)(O.a,{variant:"h4",style:D,children:"User List"}),Object(S.jsx)(b.a,{variant:"contained",color:"primary",onClick:this.addUser,children:" Add User"}),Object(S.jsxs)(j.a,{children:[Object(S.jsx)(p.a,{children:Object(S.jsxs)(f.a,{children:[Object(S.jsx)(m.a,{children:"index"}),Object(S.jsx)(m.a,{align:"right",children:"FirstName"}),Object(S.jsx)(m.a,{align:"right",children:"LastName"}),Object(S.jsx)(m.a,{align:"right",children:"Username"}),Object(S.jsx)(m.a,{align:"right",children:"Age"}),Object(S.jsx)(m.a,{align:"right",children:"Salary"}),Object(S.jsx)(m.a,{align:"right",children:"Edit"}),Object(S.jsx)(m.a,{align:"right",children:"Delete"})]})}),Object(S.jsx)(g.a,{children:this.state.users.map((function(t){return Object(S.jsxs)(f.a,{children:[Object(S.jsx)(m.a,{component:"th",scop:"user",children:t.id}),Object(S.jsx)(m.a,{align:"right",children:t.firstName}),Object(S.jsx)(m.a,{align:"right",children:t.lastName}),Object(S.jsx)(m.a,{align:"right",children:t.username}),Object(S.jsx)(m.a,{align:"right",children:t.age}),Object(S.jsx)(m.a,{align:"right",children:t.salary}),Object(S.jsx)(m.a,{align:"right",onClick:function(){return e.editUser(t.id)},children:Object(S.jsx)(y.a,{})}),Object(S.jsx)(m.a,{align:"right",onClick:function(){return e.deleteUser(t.id)},children:Object(S.jsx)(C.a,{})})]},t.id)}))})]})]})}}]),a}(s.a.Component),D={display:"flex",justifyContents:"center"},E=R,I=a(52),W=a(167),L=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onChange=function(e){n.setState(Object(I.a)({},e.target.name,e.target.value))},n.saveUser=function(e){e.preventDefault();var t={username:n.state.username,password:n.state.password,firstName:n.state.firstName,lastName:n.state.lastName,age:n.state.age,salary:n.state.salary};k.addUser(t).then((function(e){n.setState({message:t.username+"\ub2d8\uc774 \uc131\uacf5\uc801\uc73c\ub85c \ub4f1\ub85d\ub418\uc5c8\uc2b5\ub2c8\ub2e4."}),console.log(n.state.message),n.props.history.push("/kwonnee/users/list")})).catch((function(e){console.log("saveUser() ERROR",e)}))},n.state={username:"",password:"",firstName:"",lastName:"",age:"",salary:"",message:null},n}return Object(h.a)(a,[{key:"render",value:function(){return Object(S.jsxs)("div",{children:[Object(S.jsx)(O.a,{variant:"h4",style:B,children:"Add User"}),Object(S.jsxs)("form",{style:A,children:[Object(S.jsx)(W.a,{type:"text",placeholder:"please input your username",name:"username",fullWidth:!0,margin:"normal",value:this.state.username,onChange:this.onChange}),Object(S.jsx)(W.a,{type:"text",placeholder:"please input your password",name:"password",fullWidth:!0,margin:"normal",value:this.state.password,onChange:this.onChange}),Object(S.jsx)(W.a,{type:"text",placeholder:"please input your first name",name:"firstName",fullWidth:!0,margin:"normal",value:this.state.firstName,onChange:this.onChange}),Object(S.jsx)(W.a,{type:"text",placeholder:"please input your last name",name:"lastName",fullWidth:!0,margin:"normal",value:this.state.lastName,onChange:this.onChange}),Object(S.jsx)(W.a,{type:"text",placeholder:"please input your age",name:"age",fullWidth:!0,margin:"normal",value:this.state.age,onChange:this.onChange}),Object(S.jsx)(W.a,{type:"text",placeholder:"please input your salary",name:"salary",fullWidth:!0,margin:"normal",value:this.state.salary,onChange:this.onChange}),Object(S.jsx)(b.a,{variant:"contained",color:"primary",onClick:this.saveUser,children:"Save"})]})]})}}]),a}(s.a.Component),A={display:"flex",flexFlow:"row wrap"},B={display:"flex",justifyContent:"center"},F=L,M=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).loadUser=function(){k.getUserByID(window.localStorage.getItem("userID")).then((function(e){var t=e.data;n.setState({id:t.id,username:t.username,password:t.password,firstName:t.firstName,lastName:t.lastName,age:t.age,salary:t.salary}),console.log("state's age:"+n.state.age)})).catch((function(e){console.log("loadUser() ERROR",e)}))},n.onChange=function(e){n.setState(Object(I.a)({},e.target.name,e.target.value))},n.saveUser=function(e){e.preventDefault();var t={id:n.state.id,username:n.state.username,password:n.state.password,firstName:n.state.firstName,lastName:n.state.lastName,age:n.state.age,salary:n.state.salary};k.editUser(t).then((function(e){n.setState({message:t.username+"\ub2d8 \uc815\ubcf4\uac00 \uc218\uc815\ub418\uc5c8\uc2b5\ub2c8\ub2e4."}),n.props.history.push("/kwonnee/users/list")})).catch((function(e){console.log("saveUser() ERROR",e)}))},n.state={id:"",username:"",firstName:"",lastName:"",age:"",salary:"",message:null},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.loadUser()}},{key:"render",value:function(){return Object(S.jsxs)("div",{children:[Object(S.jsx)(O.a,{variant:"h2",style:T,children:"Edit User"}),Object(S.jsxs)("form",{children:[Object(S.jsx)(W.a,{type:"text",name:"username",placeholder:"Edit your first name",fullWidth:!0,margin:"normal",value:this.state.username,onChange:this.onChange}),Object(S.jsx)(W.a,{type:"text",name:"firstName",placeholder:"Edit your first name",fullWidth:!0,margin:"normal",value:this.state.firstName,onChange:this.onChange}),Object(S.jsx)(W.a,{type:"text",name:"lastName",placeholder:"Edit your last name",fullWidth:!0,margin:"normal",value:this.state.lastName,onChange:this.onChange}),Object(S.jsx)(W.a,{type:"number",name:"age",placeholder:"Edit your age",fullWidth:!0,margin:"normal",value:this.state.age,onChange:this.onChange}),Object(S.jsx)(W.a,{type:"number",name:"salary",placeholder:"Edit your salary",fullWidth:!0,margin:"normal",value:this.state.salary,onChange:this.onChange}),Object(S.jsx)(b.a,{variant:"contained",color:"primary",onClick:this.saveUser,children:"Save"})]})]})}}]),a}(s.a.Component),T={display:"flex",justifyContainer:"center"},J=M,P={marginTop:"20px"},G=function(){return Object(S.jsx)("div",{children:Object(S.jsx)(l.a,{children:Object(S.jsx)("div",{style:P,children:Object(S.jsxs)(c.c,{children:[Object(S.jsx)(c.a,{exact:!0,path:"/",component:E}),Object(S.jsx)(c.a,{path:"/add-user",component:F}),Object(S.jsx)(c.a,{path:"/edit-user",component:J})]})})})})},q=a(163),z=a(164),H=a(165),K=a(76),Q={flexGrow:1},V=function(){return Object(S.jsx)("div",{children:Object(S.jsx)(q.a,{position:"static",children:Object(S.jsxs)(z.a,{children:[Object(S.jsx)(H.a,{edge:"start",color:"inherit","aria-label":"Menu",children:Object(S.jsx)(K.a,{})}),Object(S.jsx)(O.a,{variant:"h6",style:Q,children:"React User Application"}),Object(S.jsx)(b.a,{color:"inherit",children:"Login"})]})})})},X=a(166);var Y=function(){return Object(S.jsxs)("div",{children:[Object(S.jsx)(V,{}),Object(S.jsx)(X.a,{children:Object(S.jsx)(G,{})})]})},Z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,168)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),r(e),i(e)}))};i.a.render(Object(S.jsx)(s.a.StrictMode,{children:Object(S.jsx)(Y,{})}),document.getElementById("root")),Z()}},[[115,1,2]]]);
//# sourceMappingURL=main.b43cc513.chunk.js.map