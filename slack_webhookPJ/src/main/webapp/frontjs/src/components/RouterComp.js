import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import RegistComp from './RegistComp';
import SendComp from './SendComp';


const AppRouter=()=>{
	return(
			<div>
				<BrowserRouter>
					<div style={style}>
						<Switch>
							<Route exact path="/" component={RegistComp}/>
							<Route path="/sendComp" component={SendComp}/>
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