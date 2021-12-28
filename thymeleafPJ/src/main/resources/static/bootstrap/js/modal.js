    	var loadTimer = 2000;
    	
    	$(document).ready(function() {
			var initData = [
				{
					btnNo:'1001',
					btnNm:'버그신고'
				},
				{
					btnNo:'1000',
					btnNm:'업무문의'
				}
			];
    		makeButton(initData);
    	});
    	
    	
    	// 오류 입력 후, '보내기' 버튼 클릭
    	function sendBtnClick(){
			var sndMessage = $('.write_msg').val();
			makeSendMsg(sndMessage);
			makeLoading();
			setTimeout(function(){
				makeReceiveMsg("신고해주셔서 감사합니다.");
				makeReceiveMsg("필요한 문의사항을 선택해주세요.");
				changeBtnOrText("btn");
				$(".spinner-box").css('display','none');
			},loadTimer);
    	}
    	
    	// 오류 입력 후, 엔터키
    	function keyEvent(data){
    		if(window.event.keyCode === 13){
    			makeSendMsg(data);
    			makeLoading();
    			setTimeout(function(){
        			makeReceiveMsg("신고해주셔서 감사합니다.");
        			makeReceiveMsg("필요한 문의사항을 선택해주세요.");
        			changeBtnOrText("btn");
        			$(".spinner-box").css('display','none');
    			},loadTimer);
    		}
    	}

    	// 버튼 구성에 대해 원하는 버튼 누르는 경우
    	function btnProcessLogic(data){
    		var btnId = $(data).attr("id");
    		var btnNo = btnId.split("_")[1];
    		var btnNm = $(data).text();
    		makeSendMsg(btnNm);
			makeLoading();

    		setTimeout(function(){
        		var postData = {
        				"userId" : "kwonnee",
        				"btnNo" : btnNo,
        		}
        		
        		$.ajax({
        			contentType: 'application/json',
        			type:"POST",
        			url: "/api/sendMessage",
        			data: JSON.stringify(postData),
        			dataType:"json",
        			success:function(data){
        				if(data.result == "success"){
        					if(data.type == "button"){
								var btnList = data.msg;
								makeButton(btnList);
								changeBtnOrText("btn");	
							}
							else if(data.type == "text"){
								var msg = data.msg;
								makeReceiveMsg(msg);
								changeBtnOrText("msg");	
							}
        					$(".spinner-box").css('display','none');
						}
        			}
        		});    			
    		},loadTimer);
    	}

    	// 버튼 구성이 필요한 경우 > 버튼만 존재 / 오류 기입이 필요한 경우 > 인풋박스만 존재
    	function changeBtnOrText(flag){
    		if(flag =="btn"){
    			$(".input_btn_write").css('display','block');
    			$(".input_msg_write").css('display','none');
    		}else{
    			$(".input_btn_write").css('display','none');
    			$(".input_msg_write").css('display','block');
				$('.write_msg').val('');
    		}
    	}

    	
    	// 버튼 구성
    	function makeButton(btnList){
			$(".input_btn_write button").remove();	// 기존 버튼 내역 삭제

			for(var i=0; i<btnList.length;i++){
				console.log(btnList[i].btnNo);
    			console.log(btnList[i].btnNm);
				var itemText = "";
    			itemText += '<button id="btn_'+btnList[i].btnNo+'" type="button" class="btn btn-outline-primary question" onclick="btnProcessLogic(this);">'+btnList[i].btnNm+'</button>';
	    		$(itemText).appendTo($(".input_btn_write"));
			}
    	}

    	// Make 수신봇 채팅
    	function makeReceiveMsg(msg){
    		var itemText = "";

    		itemText += '<div class="incoming_msg">';
    		itemText += '<div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>';
    		itemText += '<div class="received_msg">';
    		itemText += '<div class="received_withd_msg">';
    		if(msg == ''){
        		itemText += '<p th:text="${result}">www</p>';    			
    		}else{
        		itemText += '<p>'+msg+'</p>';
    		}
    		itemText += '<span class="time_date"> 11:01 AM    |    June 9</span></div>';
    		itemText += '</div>';
    		itemText += '</div>';
    		$(itemText).appendTo($(".msg_history"));
    		$(".msg_history").scrollTop($(".msg_history")[0].scrollHeight); // 채팅 스크롤 하단 고정
    	}
    	
    	// Make 질문자 채팅
    	function makeSendMsg(msg){
    		var itemText = "";

    		itemText += '<div class="outgoing_msg">';
    		itemText += '<div class="sent_msg">';
    		itemText += '<p>'+msg+'</p>';
    		itemText += '<span class="time_date"> 11:01 AM    |    June 9</span></div>';
    		itemText += '</div>';
    		itemText += '</div>';
    		$(itemText).appendTo($(".msg_history"));
    		$(".msg_history").scrollTop($(".msg_history")[0].scrollHeight); // 채팅 스크롤 하단 고정
    	}
    	
		// Make 로딩바
    	function makeLoading(){
    		var itemText="";
    		
    		itemText += '<div class="spinner-box">';
    		itemText += '<div class="pulse-container">';
    		itemText += '<div class="pulse-bubble pulse-bubble-1"></div>';
    		itemText += '<div class="pulse-bubble pulse-bubble-2"></div>';
    		itemText += '<div class="pulse-bubble pulse-bubble-3"></div>';
    		itemText += '</div>';
    		itemText += '</div>';
    		$(itemText).appendTo($(".msg_history"));
			$(".msg_history").scrollTop($(".msg_history")[0].scrollHeight); // 채팅 스크롤 하단 고정
    	}