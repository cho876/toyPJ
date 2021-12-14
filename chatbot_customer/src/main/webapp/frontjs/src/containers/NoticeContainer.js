import React from 'react';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Topbar from '../components/Topbar';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


class NoticeContainer extends React.Component {
	
	constructor(props){
		super(props);
	}
	movePage(){
		this.props.history.push('/mainComp');
	}
	
	render(){
		return (
			<div>
				<Topbar
                	title="Nexon Notice"
            	/>
				<div>
			      <main>
			        {/* Hero unit */}
			        <Box
			          sx={{
			            bgcolor: 'background.paper',
			            pt: 8,
			            pb: 6,
			          }}
			        >
			          <Container maxWidth="sm">
			            <Typography
			              component="h1"
			              variant="h2"
			              align="center"
			              color="text.primary"
			              gutterBottom
			            >
			              Nexon Notice page
			            </Typography>
			            <Typography variant="h5" align="center" color="text.secondary" paragraph>
			              Something short and leading about the Nexon Notice contents.
			            </Typography>
			            <Stack
			              sx={{ pt: 4 }}
			              direction="row"
			              spacing={2}
			              justifyContent="center"
			            >
			            </Stack>
			          </Container>
			        </Box>
			        <Container sx={{ py: 8 }} maxWidth="md">
			          {/* End hero unit */}
			          <Grid container spacing={4}>
			            {cards.map((card) => (
			              <Grid item key={card} xs={12} sm={6} md={4}>
			                <Card
			                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
			                >
			                  <CardMedia
			                    component="img"
			                    sx={{
			                      // 16:9
			                      pt: '56.25%',
			                    }}
			                    image="https://source.unsplash.com/random"
			                    alt="random"
			                  />
			                  <CardContent sx={{ flexGrow: 1 }}>
			                    <Typography gutterBottom variant="h5" component="h2">
			                      Heading
			                    </Typography>
			                    <Typography>
			                      This is a media card. You can use this section to describe the
			                      content.
			                    </Typography>
			                  </CardContent>
			                  <CardActions>
			                    <Button size="small">View</Button>
			                    <Button size="small">Edit</Button>
			                  </CardActions>
			                </Card>
			              </Grid>
			            ))}
			          </Grid>
			        </Container>
			      </main>
				</div>
			</div>
		);
	}
}

export default NoticeContainer;
