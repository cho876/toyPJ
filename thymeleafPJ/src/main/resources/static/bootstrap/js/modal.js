$(document).ready(function() {
	makeButton(1001,'버그신고');
	makeButton(1000,'업무문의');
				
	// 메시지 전송 버튼
	$(".msg_send_btn").click(function(){
		var sndMessage = $('.write_msg').val();
		makeReceiveMsg(sndMessage);
		$('.write_msg').val('');
	});
			
	// 닫기 버튼
	$("#closeButton").click(function(){
		window.parent.document.getElementById('chatroom').style.display="none";
	});
	
				
	$(".question").click(function(){
		console.log("question clicked");
			btnProcessLogic(this);
	});
});



function btnProcessLogic(data){
	var btnId = $(data).attr("id");
	var btnNo = btnId.split("_")[1];
	var btnNm = $(data).text();
	makeSendMsg(btnNm);
	
	$.ajax({
		type:"GET",
		url: "/main/getNextScenario",
		data: 'btnNo=' + btnNo,
		dataType:"json",
		success:function(res){
			makeReceiveMsg(res.data.result);
		}
	});
}

// 버튼형 챗봇 시나리오
function makeButton(btnNo, msg){
	var itemText = "";
	itemText += '<button id="btn_'+btnNo+'" type="button" class="btn btn-outline-primary question">'+msg+'</button>';
	$(itemText).appendTo($(".input_btn_write"));
}

// Make 수신봇 채팅
function makeReceiveMsg(msg){
	var itemText = "";

	itemText += '<div class="incoming_msg">';
	itemText += '<div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>';
	itemText += '<div class="received_msg">';
	itemText += '<div class="received_withd_msg">';
	itemText += '<p>'+msg+'</p>';
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