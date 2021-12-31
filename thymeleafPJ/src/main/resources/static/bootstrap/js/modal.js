var loadTimer = 2000;

var initData = [
	{
		btnNo: '1000',
		btnNm: '버그신고'
	},
	{
		btnNo: '1001',
		btnNm: '업무문의'
	}
];

$(document).ready(function() {
	makeButton(initData);
});

// 오류 입력 후, 엔터키
function keyEvent(data) {
	if (window.event.keyCode === 13) {
		$(".loading").css('display', 'block');
		makeSendMsg(data);
		setTimeout(function() {

			var postData = {
				empNo: '27495',
				message: data
			}
			$.ajax({
				contentType: 'application/json',
				type: "POST",
				url: "/bug/sendBug",
				data: JSON.stringify(postData),
				dataType: "json",
				success: function(data) {
					console.log(data);
					if (data.type == "btn") {	// button Type Answer
						makeButton(data.btnList);
					}
					else if (data.type == "txt") {	// text Type Answer
						makeReceiveMsg(data.ansVo.ansNm);
						makeButton(initData);
					}
					changeBtnOrText("btn");
				}
			});

			makeReceiveMsg("신고해주셔서 감사합니다.");
			makeReceiveMsg("필요한 문의사항을 선택해주세요.");
			changeBtnOrText("btn");
			makeButton(initData);
		}, loadTimer);
	}
}

// 버튼 구성에 대해 원하는 버튼 누르는 경우
function btnProcessLogic(data) {
	$(".loading").css('display', 'block');
	$(".input_btn_write button").remove();	// 기존 버튼 내역 삭제

	var btnId = $(data).attr("id");
	var btnNo = btnId.split("_")[1];
	var btnNm = $(data).text();
	makeSendMsg(btnNm);

	setTimeout(function() {
	
		if(btnNo == '1000'){	// 버그 신고일 경우, input 태그 생성
			changeBtnOrText("txt");
			return;
		}
		
		$.ajax({
			contentType: 'application/json',
			type: "GET",
			url: "/chat/getNextBtn",
			data: {
				btnNo : btnNo
			},
			dataType: "json",
			success: function(data) {
				console.log(data);
				if (data.type == "btn") {	// button Type Answer
					makeButton(data.btnList);
				}
				else if (data.type == "txt") {	// text Type Answer
					makeReceiveMsg(data.ansVo.ansNm);
					makeButton(initData);
				}
				changeBtnOrText("btn");
			}
		});
	}, loadTimer);
}

// 버튼 구성이 필요한 경우 > 버튼만 존재 / 오류 기입이 필요한 경우 > 인풋박스만 존재
function changeBtnOrText(flag) {
	if (flag == "btn") {
		$(".input_btn_write").css('display', 'block');
		$(".input_msg_write").css('display', 'none');
	} else {
		console.log("걸림2");
		$(".input_btn_write").css('display', 'none');
		$(".input_msg_write").css('display', 'block');
		$('.write_msg').val('');
	}
	$(".msg_container").scrollTop($(".msg_history")[0].scrollHeight); // 채팅 스크롤 하단 고정
	$(".loading").css('display', 'none');
}


// 버튼 구성
function makeButton(btnList) {
	for (var i = 0; i < btnList.length; i++) {
		var itemText = "";
		itemText += '<button id="btn_' + btnList[i].btnNo + '" type="button" class="btn btn-outline-success question" onclick="btnProcessLogic(this);">' + btnList[i].btnNm + '</button>';
		console.log(itemText);
		$(itemText).appendTo($(".input_btn_write"));
	}

}

// Make 수신봇 채팅
function makeReceiveMsg(msg) {
	let curDtt = new Date().toLocaleString();

	var itemText = "";

	itemText += '<div class="incoming_msg">';
	itemText += '<div class="incoming_msg_img"> <img src="/bootstrap/image/vot_profile.png" alt=""> </div>';
	itemText += '<div class="received_msg">';
	itemText += '<div class="received_withd_msg">';
	if (msg == '') {
		itemText += '<p th:text="${result}">www</p>';
	} else {
		itemText += '<p>' + msg + '</p>';
	}
	itemText += '<span class="time_date">' + curDtt + '</span></div>';
	itemText += '</div>';
	itemText += '</div>';
	$(itemText).appendTo($(".msg_history"));
}

// Make 질문자 채팅
function makeSendMsg(msg) {
	let curDtt = new Date().toLocaleString();

	var itemText = "";

	itemText += '<div class="outgoing_msg">';
	itemText += '<div class="sent_msg">';
	itemText += '<div>';
	itemText += '<p>' + msg + '</p>';
	itemText += '</div>';
	itemText += '<span class="time_date">' + curDtt + '</span></div>';
	itemText += '</div>';
	itemText += '</div>';
	$(itemText).appendTo($(".msg_history"));

	$(".msg_container").scrollTop($(".msg_history")[0].scrollHeight); // 채팅 스크롤 하단 고정
}