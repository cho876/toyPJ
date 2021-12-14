import React from 'react';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import ApiService from '../../ApiService';


class EditUserComponent extends React.Component{
	constructor(props){
		super(props);
		
		this.state={
			id:'',
			username:'',
			firstName:'',
			lastName:'',
			age:'',
			salary:'',
			message:null
		}
	}
	
	componentDidMount(){
		this.loadUser();
	}
	
	loadUser=()=>{
		ApiService.getUserByID(window.localStorage.getItem("userID"))
		.then(res=>{
			let user = res.data;
			
			this.setState({
				id:user.id,
				username:user.username,
				password:user.password,
				firstName:user.firstName,
				lastName:user.lastName,
				age:user.age,
				salary:user.salary
			})
			console.log("state's age:" + this.state.age);
		})
		.catch(err=>{
			console.log("loadUser() ERROR",err);
		})
	}
	
	onChange=(e)=>{
		this.setState(
			{[e.target.name]:e.target.value}
		);
	}
	
	saveUser=(e)=>{
		e.preventDefault();	// 페이지 이동 X
		let user={
			id:this.state.id,
			username:this.state.username,
			password:this.state.password,
			firstName:this.state.firstName,
			lastName:this.state.lastName,
			age:this.state.age,
			salary:this.state.salary
		}
		
		ApiService.editUser(user)
			.then(res=>{
				this.setState({message:user.username+"님 정보가 수정되었습니다."})
				this.props.history.push('/');
			})
			.catch(err=>{
				console.log("saveUser() ERROR",err);
			})
	}
	
	render(){
		return(
			<div>
				<Typography variant="h2" style={style}>Edit User</Typography>
				<form>
					<TextField type="text" name="username" placeholder="Edit your first name" 
					fullWidth margin="normal" value={this.state.username} onChange={this.onChange}/>
					
					<TextField type="text" name="firstName" placeholder="Edit your first name" 
					fullWidth margin="normal" value={this.state.firstName} onChange={this.onChange}/>
					
					<TextField type="text" name="lastName" placeholder="Edit your last name"
					fullWidth margin="normal" value={this.state.lastName} onChange={this.onChange}/>
					
					<TextField type="number" name="age" placeholder="Edit your age"
					fullWidth margin="normal" value={this.state.age} onChange={this.onChange}/>
					
					<TextField type="number" name="salary" placeholder="Edit your salary"
					fullWidth margin="normal" value={this.state.salary} onChange={this.onChange}/>
					
					<Button variant="contained" color="primary" onClick={this.saveUser}>Save</Button>
				</form>
			</div>
		);
	}
}

const style={
	display:'flex',
	justifyContainer:'center'
}
export default EditUserComponent;