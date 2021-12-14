import React, {useEffect, useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import {makeStyles} from '@material-ui/core/styles';

import logoPath from '../image/maple.jpg';


/* For css - Start */
	const useStyles = makeStyles((theme) => ({
	    paper: {
	        marginTop: theme.spacing(8),
	        display: 'flex',
	        flexDirection: 'column',
	        alignItems: 'center',
	    },
	    form: {
	        width: '100%',
	        marginTop: theme.spacing(1),
	    },
	    submit: {
	        margin: theme.spacing(3, 0, 2),
	    },
	}));
/* For css - End */

	
export default function Login({handleClick}) {
	const classes = useStyles();


	const [accountId, setAccountId] = useState("");
	const [password, setPassword] = useState("");
	
	useEffect(()=>{
		setAccountId("");
		setPassword("");
	},[])

  return (
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url('+logoPath+')',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar className={classes.paper}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Customer Page
            </Typography>
            <form className={classes.form} noValidate onSubmit={(event) => {event.preventDefault(); handleClick(accountId, password)}}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="이메일을 입력해주세요."
                name="email"
                autoComplete="email"
                autoFocus
				value={accountId}
				onChange={event=>setAccountId(event.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="비밀번호를 입력해주세요."
                type="password"
                id="password"
                autoComplete="current-password"
				value={password}
				onChange={event=>setPassword(event.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
				className={classes.submit}
              >
                Sign In
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
  );
}
