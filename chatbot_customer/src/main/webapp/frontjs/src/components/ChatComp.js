import React, {Component} from 'react';
import chatApi from "../store/api/chatApi";
import { Button } from "reactstrap";
import {connect} from 'react-redux';

import '../css/layout.css';

class ChatComp extends Component{
	textRef = React.createRef();
	
	constructor(props){
		super(props);
			
        this.state={
			senderId:"사용자",
			email:this.props.accountId,
			message:null,
			location:null,
			btnList:[],
			enableWrite:false,
			replies:[
				{
					className:'left',
					senderId:'알림봇',
					message:'안녕하세요.\n무엇을 도와드릴까요?',
					isButton:false,
					btnList:[]
				},
				{
					className:'left',
					senderId:'알림봇',
					message:'문의할 내용에 대해 입력해주세요.',
					isButton:true,
					btnList:[
						{
							btnno:'1001',
							btnmsg:'버그신고'
						},
						{
							btnno:'1000',
							btnmsg:'업무문의'
						},
					]
				}
			],
			flag:"normal"
		}
	}
	
	// Call by KeyPress
	handleKeyPress=(event)=>{
		if(event.charCode === 13){
			this.addMessage('right', '사용자', this.state.message,[],false);

			var data={
				senderId:this.state.senderId,
				message:this.state.message,
				location:window.location.href,
				email:this.state.email
			}
			this.receiveMessage(data);
		}
	}

	// Send bug data to server
	receiveMessage=(data)=>{
		chatApi.sendBug(data)
			.then(res=>{
				this.addMessage('left','알림봇',res.data.message,[],false);	// 버그 보낸 후, 알림봇 답변 (1)
				this.addMessage('left','알림봇',this.state.replies[1].message,this.state.replies[1].btnList,true);	// 버그 보낸 후, 알림봇 답변 (2)

				this.clearMessage();	// Clear textField
			});
	}
	
	// Clear textField		
	clearMessage=()=>{
		this.textRef.current.value = '';
		this.state.message = '';
		this.state.enableWrite = false;
	}
	
	
	onChange=(e)=>{
		this.setState({[e.target.name]:e.target.value})
	}

	// 채팅 데이터(replies)를 add하는 func
	addMessage=(lr, senderId,message,btnList,isButton)=>{
			this.setState({replies:[...this.state.replies,{
				uuid:this.state.replies.length+1,
				className:lr,
				senderId:senderId,
				message:message,
				btnList:btnList,
				isButton:isButton
				}]
			})
			
			const {scrollHeight} = this.box;
			this.box.scrollTop = scrollHeight;	// Scroll 위치 조정 (최하단)
	}
	
	// Button type 질의응답 진행 시, call
	clickEvent=(code)=>{
		if(code === '1001'){	// '버그신고' Click
			this.state.enableWrite = true;
			this.addMessage('left','알림봇','버그 상세 내용을 기입해주세요.\n비회원은 피드백을 받으실 수 없습니다.',[],false);
		}else{
			chatApi.getBtn(code)
			.then(res=>{
				var flag = res.data.flag;
				var msg;
				
				if(flag === 'btn'){	// 아직 Button type 질의가 남은 경우,
					res.data.nextBtn.map((e)=>{
						msg = e.parentNm;
						this.setState({btnList:[...this.state.btnList,{
							btnno:e.childNo,
							btnmsg:e.childNm
							}]
						});	
					})
					
					this.addMessage('right','사용자',msg,[],true);
	
					var totalBtn = this.state.btnList;			
					this.addMessage('left','알림봇','문의할 내용을 입력해주세요.',totalBtn,true);
		
					this.setState({btnList:[]})
				}
				else if(flag === 'str'){ // Button type 질의가 종료되고 최종 답변에 도달한 경우,
					console.log("str pushed");
					this.addMessage('right','사용자',res.data.msg,[],false);
					this.addMessage('left','알림봇',res.data.ans,[],false);
					this.addMessage('left','알림봇',this.state.replies[1].message,this.state.replies[1].btnList,true);
				}
			})
		}
	}
	
	render(){
		return(
            <div className="dimmed_layer_wrapper">
                <div className="full_layer">
                    <div className="common_alert"> 
				        <div className="chatName">
				            <span>문의하기</span>
							<Button className="exitBtn" color="secondary" size="sm" onClick={this.props.onClose}><span>나가기</span></Button>
				        </div>

					    <div class="chat" ref={(ref)=>{this.box=ref}}>
					        <ul>{
								this.state.replies.map((e)=>(
									<li class={e.className}>
										<div class="sender">
											<span>{e.senderId}</span>
										</div>
										<div class="message">
											<span>{e.message}</span>
										</div>
										<div class="btn">
											{
												e.isButton ? e.btnList.map((btn)=>(
													<Button onClick={()=>this.clickEvent(btn.btnno)}>{btn.btnmsg}</Button>
												)) : null
											}
										</div>
									</li>
								))
							}
					        </ul>
					    </div>
					    <div class="input-div">
					        <textarea
								placeholder="문의사항을 기재해주세요."
								name="message"
								ref={this.textRef}
								onChange={this.onChange}
								rows={3}
								onKeyPress={this.handleKeyPress}
								disabled={
									this.state.enableWrite ? false : true
								}/>
					    </div>
	
					    <div class="chat format">
					        <ul>{
								this.state.replies.map((e)=>(
									<li class={e.className}>
										<div class="sender">
											<span>{e.senderId}</span>
										</div>
										<div class="message">
											<span>{e.message}</span>
										</div>
									</li>
								))
							}
					        </ul>
                    	</div>
                	</div>
            	</div>
			</div>
		);
	}
}


const mapStateToProps = state => ({
	accountId: state.main.accountId
})

const mapDispatchToProps = dispatch => ({
	// Nothing
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatComp);
