import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

import ApiService from '../../ApiService';

class UserListComponent extends React.Component{
	constructor(props){
		super(props);
		
		this.state={
			users:[],
			message:null,
		}
	}
	
	componentDidMount(){
		this.reloadUserList();
	}
	
	reloadUserList=()=>{
		ApiService.getAllUsers()
		.then(res=>{
			this.setState({users:res.data})
		})
		.catch(err=>{
			console.log('reload ERROR',err);
		})
	}
	
	deleteUser=(userID)=>{
		ApiService.deleteUserByID(userID)
		.then(res=>{
			this.setState({message:'User Deleted Successfully'});
			this.setState({
				users:this.state.users.filter(user=>user.id !== userID)
			});
		})
		.catch(err=>{
			console.log('delete ERROR',err);
		})
		
	}
	
	editUser=(ID)=>{
		window.localStorage.setItem("userID",ID);
		this.props.history.push('/edit-user');	// '/edit-user'로 넘어갈 때, props 넘
	}
	
	addUser=()=>{
		window.localStorage.removeItem("userID");
		this.props.history.push('/add-user');	// '/add-user'로 넘어갈 때, props 넘
	}
	
	
	render(){
		return(
			<div>
				<Typography variant="h4" style={style}>User List</Typography>
				<Button variant="contained" color="primary" onClick={this.addUser}> Add User</Button>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>index</TableCell>
							<TableCell align="right">FirstName</TableCell>
							<TableCell align="right">LastName</TableCell>
							<TableCell align="right">Username</TableCell>
							<TableCell align="right">Age</TableCell>
							<TableCell align="right">Salary</TableCell>
							<TableCell align="right">Edit</TableCell>
							<TableCell align="right">Delete</TableCell>
						</TableRow>
					</TableHead>
					
					<TableBody>
						{
							this.state.users.map(user=>
							<TableRow key={user.id}>
								<TableCell component="th" scop="user">{user.id}</TableCell>
								<TableCell align="right">{user.firstName}</TableCell>
								<TableCell align="right">{user.lastName}</TableCell>
								<TableCell align="right">{user.username}</TableCell>
								<TableCell align="right">{user.age}</TableCell>
								<TableCell align="right">{user.salary}</TableCell>
								<TableCell align="right" onClick={()=>this.editUser(user.id)}>
									<CreateIcon/>
								</TableCell>
								<TableCell align="right" onClick={()=>this.deleteUser(user.id)}>
									<DeleteIcon/>
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
		);
	}
}

const style={
	display:'flex',
	justifyContents:'center'
}
export default UserListComponent;