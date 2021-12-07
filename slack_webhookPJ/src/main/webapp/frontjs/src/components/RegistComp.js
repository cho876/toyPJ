import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

class RegistComp extends React.Component{
	constructor(props){
		super(props);
		
		this.state={
			input_url:null
		}
	}
	
	onChange=(e)=>{
		this.setState({[e.target.name]:e.target.value})
	}	
	
	submitUrl=()=>{
		window.localStorage.setItem('webhookUrl',this.state.input_url);
		this.props.history.push('/sendComp');
	}
	
	render(){
		return(
			<div>
				<Typography variant="h4" style={style}>webhook URL 입력</Typography>

				<form style={formContainer}>
					<TextField type="text" placeholder="slack의 webhook url을 입력해주세요..." name="input_url" fullWidth margin="normal" variant="outlined" value={this.state.input_url} onChange={this.onChange}/>
					<Button variant="contained" color="primary" onClick={this.submitUrl}>확인</Button>
				</form>
			</div>
		);
	}
}

const formContainer={
        display:'flex',
        flexFlow:'row wrap'
}

const style={
        display:'flex',
        justifyContents:'center'
}
export default RegistComp;