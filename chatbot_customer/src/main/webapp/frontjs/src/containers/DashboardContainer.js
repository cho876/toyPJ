import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Topbar from '../components/TopBar';
import Chart from '../components/Chart';
import Deposits from '../components/Deposits';
import Orders from '../components/Orders';

class Menu1 extends React.Component{
	
	constructor(props){
		super(props);
	}
	
	render(){
		return (
			<div>
				<Topbar
                	title="Nexon Dashboard"
            	/>
				<div>
		          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
		            <Grid container spacing={3}>
		              {/* Chart */}
		              <Grid item xs={12} md={8} lg={9}>
		                <Paper
		                  sx={{
		                    p: 2,
		                    display: 'flex',
		                    flexDirection: 'column',
		                    height: 240,
		                  }}
		                >
		                  <Chart />
		                </Paper>
		              </Grid>
		              {/* Recent Deposits */}
		              <Grid item xs={12} md={4} lg={3}>
		                <Paper
		                  sx={{
		                    p: 2,
		                    display: 'flex',
		                    flexDirection: 'column',
		                    height: 240,
		                  }}
		                >
		                  <Deposits />
		                </Paper>
		              </Grid>
		              {/* Recent Orders */}
		              <Grid item xs={12}>
		                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
		                  <Orders />
		                </Paper>
		              </Grid>
		            </Grid>
		          </Container>
				</div>
			</div>
		);
	}
}

export default Menu1;
