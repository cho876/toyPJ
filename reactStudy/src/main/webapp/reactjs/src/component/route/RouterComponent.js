import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import UserListComponent from '../user/UserListComponent';
import AddUserComponent from '../user/AddUserComponent';
import EditUserComponent from '../user/EditUserComponent';


const AppRouter=()=>{
	return(
		<div>
			<BrowserRouter>
				<div style={style}>
					<Switch>
						<Route exact path="/" component={UserListComponent}/>
						<Route path="/list" component={UserListComponent}/>
						<Route path="/add-user" component={AddUserComponent}/>
						<Route path="/edit-user" component={EditUserComponent}/>
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	)
}

const style={
	marginTop:'20px'
}

export default AppRouter;