import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import ApiComp from './ApiComp';

class SendComp extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			input_url: null,
			userName:'',
			division:'',
			department:'',
			service:'',
			request:''
		}
	}

	componentDidMount() {
		this.loadUser();
	}

	loadUser = () => {
		this.state.input_url = window.localStorage.getItem('webhookUrl');
	}
	
	sendData=()=>{
		console.log("saveData Button pushed");
		console.log("userName: " + this.state.userName);
		console.log("webhook: " + this.state.input_url);
		console.log("division: " + this.state.division);
		console.log("department: " + this.state.department);
		console.log("service: " + this.state.service);
		console.log("request: " + this.state.request);
		
		let sndData={
			webhookUrl:this.state.input_url,
			userName:this.state.userName,
			department:this.state.department,
			service:this.state.service,
			request:this.state.request
		}
		
		ApiComp.sendToSlack(sndData)
		.then(res=>{
			alert("메시지가 성공적으로 전송되었습니다");
			/*if(res == 0){
				alert("메시지가 성공적으로 전송되었습니다");
			}else{
				alert("메시지 전송 중 오류 발생");
			}*/
		})
		.catch(err=>{
			console.log("sendData() ERROR", err);
		})
	}
	backSite=()=>{
		this.props.history.goBack();
	}

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}

	render() {
		return (
			<div>
					<Typography variant="h4" style={style}>VOC 내용</Typography>
					<form style={formContainer}>
						<TextField type="text" placeholder="담당자 이름을 입력해주세요..." name="userName"
							fullWidth margin="normal" value={this.state.username} onChange={this.onChange}/>

						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-label">본부 검색</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								name="division"
								value={this.state.division}
								label="담당 본부를 선택해주세요"
								onChange={this.onChange}>
								
						    <MenuItem value={"sign_web"}>재무관리본부</MenuItem>
						  </Select>
						</FormControl>
						
						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-label">부서명</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								name="department"
								value={this.state.department}
								label="담당 부서를 선택해주세요"
								onChange={this.onChange}>
								
						    <MenuItem value={"sign_web"}>재무그룹웨어팀</MenuItem>
						  </Select>
						</FormControl>
						
						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-label">요청 서비스명</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								name="service"
								value={this.state.service}
								label="요청 서비스를 선택해주세요"
								onChange={this.onChange}>
								
						    <MenuItem value={"sign_web"}>전자결재(WEB)</MenuItem>
						    <MenuItem value={"sign_mobile"}>전자결재(MOBILE)</MenuItem>
						    <MenuItem value={"etc"}>기타</MenuItem>
						  </Select>
						</FormControl>

						<TextField label="내용" multiline placeholder="요청 내용을 입력해주세요..." rows={3} name="request"
							fullWidth margin="normal" value={this.state.request} onChange={this.onChange}/>

						<Button variant="contained" color="primary" onClick={this.sendData}>Save</Button>
						<Button variant="contained" color="primary" onClick={this.backSite}>Back</Button>

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
        justifyContent:'center'
} 
export default SendComp;