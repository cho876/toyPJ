## 토이 프로젝트 내역

### [ chatbot_admin & chatbot_customer ]
#### chatbot_admin
- 개발목표:
  1. 버그 문의사항에 대해 조회할 수 있느 화면을 구성한다.
  2. 문의사항별로 세부 접근(=모달)이 가능하며 '처리상태', '코멘트'에 대한 수정이 가능하다.
  3. 처리 상태가 바뀌면 SMTP를 통해 안내 메일링 처리한다.
#### chatbot_customer
- 개발목표:
  1. 챗봇에 문의할 수 있는 '문의하기' 플로팀 버튼을 구성한다.
  2. 모달형태로 레이아웃을 구성하며 Menu-Driven 형태로 챗봇을 구현한다.
  3. '버그신고'의 경우 사용자가 직접 버그 내역을 기재할 수 있도록 처리하며, '챗봇상담'은 Button 형태로 질의 클릭 및 답변한다.
- 개발스택: SpringBoot, React, MySQL


### [ slack_webhookPJ ]
- 개발목표: slack의 'Incoming webhook' API르 활용하여 간단한 메시지 푸쉬를 구현한다.
- 개발스택: SpringBoot, React


### [ reactPJ ]
- 개발목표: Front framework로 React를 활용하여 간단한 홈페이지를 구현한다.
- 개발스택: SpringBoot, React, Firebase
