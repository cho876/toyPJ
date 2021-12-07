(this.webpackJsonpreactjs=this.webpackJsonpreactjs||[]).push([[0],{116:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(10),i=a.n(r),l=(a(90),a(74)),c=a(12),o=a(24),h=a(25),u=a(36),j=a(34),d=a(159),m=a(163),g=a(162),b=a(160),p=a(161),x=a(158),O=a(154),f=a(71),y=a.n(f),v=a(72),C=a.n(v),U=a(39),k=a.n(U),N="http://localhost:8081/kwonnee/users",w=new(function(){function e(){Object(o.a)(this,e)}return Object(h.a)(e,[{key:"getAllUsers",value:function(){return k.a.get(N)}},{key:"getUserByID",value:function(e){return k.a.get(N+"/"+e)}},{key:"deleteUserByID",value:function(e){return k.a.delete(N+"/"+e)}},{key:"addUser",value:function(e){return k.a.post(N+"/add/",e)}},{key:"editUser",value:function(e){return k.a.put(N+"/"+e.id,e)}}]),e}()),D=a(3),S=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).reloadUserList=function(){w.getAllUsers().then((function(e){n.setState({users:e.data})})).catch((function(e){console.log("reload ERROR",e)}))},n.deleteUser=function(e){w.deleteUserByID(e).then((function(t){n.setState({message:"User Deleted Successfully"}),n.setState({users:n.state.users.filter((function(t){return t.id!=e}))})})).catch((function(e){console.log("delete ERROR",e)}))},n.editUser=function(e){window.localStorage.setItem("userID",e),n.props.history.push("/edit-user")},n.addUser=function(){window.localStorage.removeItem("userID"),n.props.history.push("/add-user")},n.state={users:[],message:null},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.reloadUserList()}},{key:"render",value:function(){var e=this;return Object(D.jsxs)("div",{children:[Object(D.jsx)(O.a,{variant:"h4",style:W,children:"User List"}),Object(D.jsx)(x.a,{variant:"contained",color:"primary",onClick:this.addUser,children:" Add User"}),Object(D.jsxs)(d.a,{children:[Object(D.jsx)(b.a,{children:Object(D.jsxs)(p.a,{children:[Object(D.jsx)(g.a,{children:"ID"}),Object(D.jsx)(g.a,{children:"FirstName"}),Object(D.jsx)(g.a,{align:"right",children:"LastName"}),Object(D.jsx)(g.a,{align:"right",children:"Age"}),Object(D.jsx)(g.a,{align:"right",children:"Salary"}),Object(D.jsx)(g.a,{align:"right",children:"Edit"}),Object(D.jsx)(g.a,{align:"right",children:"Delete"})]})}),Object(D.jsx)(m.a,{children:this.state.users.map((function(t){return Object(D.jsxs)(p.a,{children:[Object(D.jsx)(g.a,{component:"th",scope:"user",children:t.firstName}),Object(D.jsx)(g.a,{align:"right",children:t.lastName}),Object(D.jsx)(g.a,{align:"right",children:t.userName}),Object(D.jsx)(g.a,{align:"right",children:t.age}),Object(D.jsx)(g.a,{align:"right",children:t.salary}),Object(D.jsx)(g.a,{align:"right",onClick:function(){return e.editUser(t.id)},children:Object(D.jsx)(y.a,{})}),Object(D.jsx)(g.a,{align:"right",onClick:function(){return e.deleteUser(t.id)},children:Object(D.jsx)(C.a,{})})]},t.id)}))})]})]})}}]),a}(s.a.Component),W={display:"flex",justifyContents:"center"},I=S,E=a(168),L=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onChange=function(){},n.state={userName:"",password:"",firstName:"",lastName:"",age:"",salary:"",message:null},n}return Object(h.a)(a,[{key:"render",value:function(){return Object(D.jsxs)("div",{children:[Object(D.jsx)(O.a,{variant:"h4",style:A,children:"Add User"}),Object(D.jsxs)("form",{style:R,children:[Object(D.jsx)(E.a,{type:"text",placeholder:"please input your username",name:"username",fullWidth:!0,margin:"normal",value:this.state.userName,onChange:this.onChange}),Object(D.jsx)(E.a,{type:"text",placeholder:"please input your password",name:"password",fullWidth:!0,margin:"normal",value:this.state.password,onChange:this.onChange}),Object(D.jsx)(E.a,{type:"text",placeholder:"please input your first name",name:"firstName",fullWidth:!0,margin:"normal",value:this.state.firstName,onChange:this.onChange}),Object(D.jsx)(E.a,{type:"text",placeholder:"please input your last name",name:"lastName",fullWidth:!0,margin:"normal",value:this.state.lastName,onChange:this.onChange}),Object(D.jsx)(E.a,{type:"text",placeholder:"please input your age",name:"age",fullWidth:!0,margin:"normal",value:this.state.age,onChange:this.onChange}),Object(D.jsx)(E.a,{type:"text",placeholder:"please input your salary",name:"salary",fullWidth:!0,margin:"normal",value:this.state.salary,onChange:this.onChange}),Object(D.jsx)(x.a,{variant:"contained",color:"primary",onClick:this.saveUser,children:"Save"})]})]})}}]),a}(s.a.Component),R={display:"flex",flexFlow:"row wrap"},A={display:"flex",justifyContent:"center"},F=L,B=a(73),M=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).loadUser=function(){},n.onChange=function(e){n.setState(Object(B.a)({},e.target.name,e.target.value))},n.saveUser=function(e){e.preventDefault();n.state.id,n.state.password,n.state.firstName,n.state.lastName,n.state.age,n.state.salary},n.state={id:"",firstName:"",lastName:"",age:"",salary:"",message:null},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.loadUser()}},{key:"render",value:function(){return Object(D.jsxs)("div",{children:[Object(D.jsx)(O.a,{variant:"h2",style:T,children:"Edit User"}),Object(D.jsxs)("form",{children:[Object(D.jsx)(E.a,{type:"text",name:"username",readonly:!0,fullWidth:!0,margin:"normal",value:this.state.username}),Object(D.jsx)(E.a,{type:"text",name:"firstname",placeholder:"Edit your first name",fullWidth:!0,margin:"normal",value:this.state.firstName,onChange:this.onChange}),Object(D.jsx)(E.a,{type:"text",name:"lastname",placeholder:"Edit your last name",fullWidth:!0,margin:"normal",value:this.state.lastName,onChange:this.onChange}),Object(D.jsx)(E.a,{type:"number",name:"age",placeholder:"Edit your age",fullWidth:!0,margin:"normal",vale:this.state.age,onChange:this.onChange}),Object(D.jsx)(E.a,{type:"number",name:"salary",placeholder:"Edit your salary",fullWidth:!0,margin:"normal",value:this.state.salary,onChange:this.onChange}),Object(D.jsx)(x.a,{variant:"contained",color:"primary",onClick:this.saveUser,children:"Save"})]})]})}}]),a}(s.a.Component),T={display:"flex",justifyContainer:"center"},J=M,P={marginTop:"20px"},G=function(){return Object(D.jsx)("div",{children:Object(D.jsx)(l.a,{children:Object(D.jsx)("div",{style:P,children:Object(D.jsxs)(c.c,{children:[Object(D.jsx)(c.a,{exact:!0,path:"/",component:I}),Object(D.jsx)(c.a,{path:"/kwonnee/users",component:I}),Object(D.jsx)(c.a,{path:"/add-user",component:F}),Object(D.jsx)(c.a,{path:"/edit-user",component:J})]})})})})},q=a(164),z=a(165),H=a(166),K=a(76),Q={flexGrow:1},V=function(){return Object(D.jsx)("div",{children:Object(D.jsx)(q.a,{position:"static",children:Object(D.jsxs)(z.a,{children:[Object(D.jsx)(H.a,{edge:"start",color:"inherit","aria-label":"Menu",children:Object(D.jsx)(K.a,{})}),Object(D.jsx)(O.a,{variant:"h6",style:Q,children:"React User Application"}),Object(D.jsx)(x.a,{color:"inherit",children:"Login"})]})})})},X=a(167);var Y=function(){return Object(D.jsxs)("div",{children:[Object(D.jsx)(V,{}),Object(D.jsx)(X.a,{children:Object(D.jsx)(G,{})})]})},Z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,169)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),r(e),i(e)}))};i.a.render(Object(D.jsx)(s.a.StrictMode,{children:Object(D.jsx)(Y,{})}),document.getElementById("root")),Z()},90:function(e,t,a){}},[[116,1,2]]]);
//# sourceMappingURL=main.d6366be9.chunk.js.map