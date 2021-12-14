import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Topbar from '../components/TopBar';

class Menu3 extends React.Component {
 	constructor(props){
		super(props);
	}
	movePage(){
		this.props.history.push('/mainComp');
	}
	
	render(){
		return (
			<div>
				<Topbar	title="Nexon Introduce" />
				<div>
				   <Box
				      sx={{
				        display: 'flex',
				        flexDirection: 'column',
				        minHeight: '100vh',
				      }}
				    >
				      <CssBaseline />
				      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
				        <Typography variant="h2" component="h1" gutterBottom>
				          Introduce Nexon
				        </Typography>
				        <Typography variant="h5" component="h2" gutterBottom>
				          {'NEXON is driven by onging quests to provide the best gaming experience for global users'}
				        </Typography>
				        <Typography variant="body1">Nexon Introduce page</Typography>
				      </Container>
				      <Box
				        component="footer"
				        sx={{
				          py: 3,
				          px: 2,
				          mt: 'auto',
				          backgroundColor: (theme) =>
				            theme.palette.mode === 'light'
				              ? theme.palette.grey[200]
				              : theme.palette.grey[800],
				        }}
				      >
				        <Container maxWidth="sm">
				          <Typography variant="body1">
				            location: 7, Pangyo-ro 256beon-gil, Bundang-gu, Seongnam-si, Gyeonggi-do, Korea
				          </Typography>
				        </Container>
				      </Box>
				    </Box>
				</div>
			</div>
		);
	}
}


export default Menu3;
