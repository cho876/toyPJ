import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import {useHistory, Link} from "react-router-dom";

import '../css/topbar.css';

/* For css - Start */
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));
/* For css - End */

export default function Topbar({title}) {
    const classes = useStyles();
    const history = useHistory();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {title}
                    </Typography>

					<div className='tabs'>
						<ul>
							<li>
								<Link to="/main"><span className='tabsText'>Main</span></Link>
							</li>
							<li>
								<Link to="/dashboard"><span className='tabsText'>Dashboard</span></Link>
							</li>
							<li>
								<Link to="/notice"><span className='tabsText'>Notice</span></Link>
							</li>
							<li>
								<Link to="/intro"><span className='tabsText'>Introduce</span></Link>
							</li>
						</ul>
					</div>

                    {
					 <Button onClick={async () => {
                            history.push("/")
                        }} variant="contained" size="medium" color="primary" >로그아웃</Button>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}
