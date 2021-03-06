import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Button, Modal, TextField, Typography, Grid} from '@material-ui/core';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


/* for CSS - Start */
function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));
/* for CSS - End */


export default function ContentsModal({isModalOpen, modalData, isWriteModal, handleClose, handleSave}) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);

    const [isModify, setIsModify] = useState(false);
    const [comments, setComments] = useState();
    const [status, setStatus] = useState(modalData.status);

    const combineData = () => {	// submit form
        return {
			id: modalData.id,
            email: modalData.email,
			status: status,
			message: modalData.message,
			comments: comments
        }
    }

    return (
        <div>
            <Modal
                open={isModalOpen}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={modalStyle} className={classes.paper}>
                    <form noValidate onSubmit={(event) => {
                        event.preventDefault();
                        handleSave(combineData());
                    }}>
                            <div>
                                <TextField
                                    id="outlined-full-width"
                                    label="?????? ??????"
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    defaultValue={modalData.message}
                                    margin="normal"
                                    required
									disabled
                                />
                                <TextField
                                    id="outlined-multiline-static"
                                    label="????????????"
                                    placeholder="??????????????? ???????????????."
                                    fullWidth
                                    multiline
                                    rows={4}
                                    defaultValue={modalData.comments}
                                    variant="outlined"
                                    margin="normal"
                                    onChange={event => setComments(event.target.value)}
                                    required
                                />
						       <FormControl fullWidth>
						        <InputLabel id="demo-simple-select-label">??????: {modalData.status}</InputLabel>
						        <Select
						          labelId="demo-simple-select-label"
						          id="demo-simple-select"
						          label="????????????"
						          onChange={event => setStatus(event.target.value)}
						        >
						          <MenuItem value={'001'}>??????</MenuItem>
						          <MenuItem value={'002'}>???????????????</MenuItem>
						          <MenuItem value={'003'}>????????????</MenuItem>
						        </Select>
						      </FormControl>
                            </div>
                        <hr/>
                        {isWriteModal ?
                            <div>
                                <Typography variant="body2" gutterBottom>????????? : {modalData.email}</Typography>
                                <Grid container>
                                    <Button type="submit" color="primary">Save</Button>
                                    <Button onClick={() => {
                                        setIsModify(false);
                                        handleClose();
                                    }}>Close</Button>
                                </Grid>
                            </div>
                            :
                            <div>
                                <Typography variant="body2" gutterBottom>????????? : {modalData.email}</Typography>
                                <Typography variant="body2" gutterBottom>????????? : {modalData.regdt}</Typography>
                                <Grid container>
                                    {isModify ?
                                        <Grid>
                                            <Button type="submit" color="primary">Save</Button>
                                            <Button onClick={() => setIsModify(false)}>Back</Button>
                                        </Grid>
                                        :
                                       <Button color="primary" onClick={() => setIsModify(true)}>Modify</Button>
                                    }
                                    <Button onClick={() => {
                                        setIsModify(false);
                                        handleClose();
                                    }}>Close</Button>
                                </Grid>
                            </div>
                        }
                    </form>
                </div>
            </Modal>
        </div>
    );
}
