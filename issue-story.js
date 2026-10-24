/* Authentic Yeopne phone + rumor sequel. */
(()=>{
const CHAT_ROOMS={
 company:{name:'매니저 형',initial:'매',color:'#48525e',time:'00:00',hint:'상엽아 폰 보지 말고 아무한테도 답장하지 마. 알았지',messages:[
  ['them','상엽아 지금 폰 보지 말고 아무한테도 답장하지 마. 알았지','00:00'],
  ['them','모르는 번호로 사진 왔어도 답하지 말고. 회사에서 확인 중이야','00:01'],
  ['them','근데 나도 물어는 봐야겠다. 그 사진 너 맞아? 예찬이랑?','00:03'],
  ['me','형 기사까지 난 거예요?','00:04'],
  ['them','일단 전화하지 말고 카톡으로만 해. 지금 홍보팀이랑 얘기 중이야','00:05'],
  ['them','사진 원본이 있다고 연락 온 기자가 몇 명이야. 절대 응답하지 마','00:09'],
  ['them','예찬이한테도 전달했어. 정리되면 다시 연락할게','00:15'],
  ['them','상엽아 읽었으면 답 좀 줘. 내용 말고 확인했다고만','00:23']
 ]},
 companypr:{name:'회사 홍보팀',initial:'홍',color:'#556074',time:'00:05',hint:'언론 대응은 회사 측에서 일괄 진행하겠습니다.',messages:[
  ['them','현재 온라인에 유포 중인 사진과 기사를 확인했습니다.','00:05'],
  ['them','열애 관련 문의가 여러 매체로부터 접수되고 있습니다.','00:07'],
  ['them','멤버 네 분 모두 개인적인 입장 표명은 삼가 주세요.','00:08'],
  ['them','현재로서는 추가 사진 공개 가능성이 있어 관련 내용을 확인 중입니다.','00:13'],
  ['them','언론 대응은 회사 측에서 일괄 진행하겠습니다.','00:19']
 ]},
 yechan:{name:'예찬이형♥',avatar:'profile-yechan-v20.jpg',color:'#445060',time:'00:21',hint:'딴 생각 말고 오늘은 우리 무대 복기하자.',messages:[
  ['them','엽아 나도 받았어. 저 번호엔 답장하지 마','00:06'],
  ['them','매니저 형이랑 나도 얘기하고 있어','00:07'],
  ['me','형은 괜찮아?','00:08'],
  ['them','응 ㅋㅋ 나야 괜찮지','00:09'],
  ['them','너 혼자 받은 거 아니니까 혼자 해결하려고 하지 말고','00:10'],
  ['me','내가 괜히','00:11'],
  ['them','아니 뭐가 괜히야 ㅎㅎ 우리 둘 다 있었잖아','00:12'],
  ['them','어차피 오늘은 회사에서도 넷 다 따로 대응 안 했으면 좋겠다네','00:13'],
  ['me','기사 계속 올라오네','00:17'],
  ['them','그러게. 근데 읽을수록 기분만 나쁠걸. 그냥 닫아','00:18'],
  ['them','오늘 진짜 재밌었잖아. 마지막 곡 할 때 너 표정 봤는데 ㅋㅋ','00:20'],
  ['them','딴 생각 말고 오늘은 우리 무대 복기하자.','00:21']
 ]},
 group:{name:'LUCY',initial:'L',color:'#455948',time:'00:20',hint:'일단 오늘은 넷 다 따로 대응 안 했으면 좋겠다네...',messages:[
  ['wonsang','야 다들 집 갔냐','23:56'],
  ['gwangil','나 방금 도착함. 다들 수고했어','23:58'],
  ['yechan','수고했어 얘들아 ㅎㅎ','23:59'],
  ['wonsang','뭐야 기사 올라온 거 봄?','00:06'],
  ['gwangil','나도 지금 봤는데 뭔 일이야','00:07'],
  ['yechan','회사랑 얘기했는데 일단 오늘은 넷 다 따로 대응 안 했으면 좋겠다네...','00:10'],
  ['yechan','정리되는 대로 어떻게 할지 정해보자. 우리끼리도 얘기는 나눠야지.','00:11'],
  ['me','미안해 얘들아','00:12'],
  ['wonsang','뭘 미안해 ㅋㅋ 너 때문에 뭐가 달라진 것도 아닌데','00:13'],
  ['gwangil','맞아 형이 뭘 미안해. 미안할 것도 많네 뭐','00:14'],
  ['wonsang','오늘 공연은 진짜 잘 끝났어. 그거까지 잊어먹지는 말자','00:16'],
  ['gwangil','아 기사 자꾸 보내지 마 나도 봤어 ㅋㅋ','00:18'],
  ['yechan','응. 일단 우리끼리는 내일 얘기하자. 오늘은 좀 쉬고','00:20']
 ]},
 wonsang:{name:'원상이',initial:'원',color:'#725e48',time:'00:24',hint:'너 자꾸 기사 읽지 말고 좀 자라',messages:[
  ['them','오늘 진짜 수고했어','23:54'],['me','형도 ㅎㅎ','23:55'],
  ['them','야 기사 올라온 거 봤어. 너 지금 폰 들고 있지','00:09'],
  ['them','회사에서 연락 왔으니까 일단 신경 쓰지 말고 있어','00:10'],
  ['them','단톡에서 미안하다는 말은 왜 해. 우리 다 같이 하는 건데','00:22'],
  ['them','너 자꾸 기사 읽지 말고 좀 자라','00:24']
 ]},
 gwangil:{name:'광일이',initial:'광',color:'#64506c',time:'00:25',hint:'형 오늘 엔딩 진짜 좋았어 그거는 기억해',messages:[
  ['them','형 오늘 고생했어','23:59'],
  ['them','아니 근데 기사 뭐냐 ㅋㅋ 나는 갑자기 단톡 보고 알았어','00:11'],
  ['me','미안하다','00:15'],
  ['them','아 형 자꾸 그 말 하지 마 ㅋㅋ','00:16'],
  ['them','우리끼리 얘기하면 되지 뭐. 오늘은 그냥 자자','00:23'],
  ['them','형 오늘 엔딩 진짜 좋았어 그거는 기억해','00:25']
 ]}
};

const ALERTS=[
 {id:'n0',at:0,from:'카카오톡',title:'매니저 형',message:'상엽아 지금 폰 보지 말고 아무한테도 답장하지 마. 알았지',target:'company',icon:'💬'},
 {id:'n1',at:1,from:'메시지',title:'010-9***-3***',message:'차 안에서 촬영한 사진 3장 보내드립니다. 신예찬 씨 맞으시죠?',target:'sms',icon:'✉'},
 {id:'n2',at:2,from:'뉴스',title:'실시간 연예',message:'[단독] 최상엽·신예찬, 공연 뒤 차량 안 입맞춤 포착',target:'article',icon:'▤'},
 {id:'n3',at:3,from:'카카오톡',title:'매니저 형',message:'근데 나도 물어는 봐야겠다. 그 사진 너 맞아? 예찬이랑?',target:'company',icon:'💬'},
 {id:'n4',at:4,from:'메시지',title:'010-7***-1***',message:'사진에 관해 본인 입장 확인을 부탁드립니다.',target:'sms2',icon:'✉'},
 {id:'n5',at:5,from:'카카오톡',title:'회사 홍보팀',message:'멤버 네 분 모두 개인 입장 표명은 삼가 주세요.',target:'companypr',icon:'💬'},
 {id:'n6',at:6,from:'카카오톡',title:'예찬이형♥',message:'엽아 나도 받았어. 저 번호엔 답장하지 마',target:'yechan',icon:'💬'},
 {id:'n7',at:7,from:'이메일',title:'연예부 취재팀',message:'[긴급] 최상엽 씨 관련 보도 확인 요청',target:'mail',icon:'✉'},
 {id:'n8',at:8,from:'뉴스',title:'연예 속보',message:'같은 반지? 공연 이전 사진까지 재조명',target:'article:ring',icon:'▤'},
 {id:'n9',at:9,from:'카카오톡',title:'원상이',message:'야 기사 올라온 거 봤어. 너 지금 폰 들고 있지',target:'wonsang',icon:'💬'},
 {id:'n10',at:10,from:'메시지',title:'010-9***-3***',message:'문자 확인하신 것 같은데 답변이 없으시네요.',target:'sms',icon:'✉'},
 {id:'n11',at:11,from:'카카오톡',title:'LUCY',message:'일단 오늘은 넷 다 따로 대응 안 했으면 좋겠다네...',target:'group',icon:'💬'},
 {id:'n12',at:12,from:'이메일',title:'인터뷰 요청',message:'사진 원본 관련 확인 부탁드립니다. 회신 가능하실까요?',target:'mail',icon:'✉'},
 {id:'n13',at:13,from:'뉴스',title:'연예 뉴스',message:'[종합] 소속사는 확인 중…추가 사진 확산',target:'article:follow',icon:'▤'},
 {id:'n14',at:14,from:'메시지',title:'010-2***-7***',message:'안녕하세요. 확인 가능한 번호가 맞으실까요?',target:'sms3',icon:'✉'},
 {id:'n15',at:16,from:'이메일',title:'연예 매체',message:'오늘 중 답변 가능한지 회신 부탁드립니다.',target:'mail',icon:'✉'},
 {id:'n16',at:18,from:'카카오톡',title:'광일이',message:'아 기사 자꾸 보내지 마 나도 봤어 ㅋㅋ',target:'gwangil',icon:'💬'},
 {id:'n17',at:20,from:'메시지',title:'010-9***-3***',message:'회신이 없으시면 현재 확보한 자료를 기준으로 진행하겠습니다.',target:'sms',icon:'✉'},
 {id:'n18',at:21,from:'카카오톡',title:'예찬이형♥',message:'딴 생각 말고 오늘은 우리 무대 복기하자.',target:'yechan',icon:'💬'},
 {id:'n19',at:23,from:'카카오톡',title:'매니저 형',message:'상엽아 읽었으면 답 좀 줘. 확인했다고만',target:'company',icon:'💬'},
 {id:'n20',at:25,from:'이메일',title:'편집부',message:'최상엽 님 측에 재차 입장을 요청드립니다.',target:'mail',icon:'✉'}
];

const TWEETS=[
 {id:'t1',name:'초당 두 번 새로고침',handle:'@refreshing__',avatar:'⏱',date:'18분',text:'야 시발 나 지금 막콘 후기 보려고 들어왔는데 뭔 차 안 입맞춤 단독이야??????',n:[96,1403,5391],article:true,replies:[['@airplane_mode','내 말이 지금 다들 타임라인이 미쳐 돌아감'],['@2am__song','공연 여운도 안 가셨다고 개빡침']]},
 {id:'t2',name:'녹차',handle:'@sogum_and_tea',avatar:'🍵',date:'17분',text:'기사 사진 저거 ㄹㅇ임?? 누가 찍은 건데 저 각도로 남의 차 안을 찍어? 사귀는 것도 놀라운데 찍은 사람이 더 소름임',n:[184,2311,6850],replies:[['@sundaymonday','차량 유리 너머 사진 찍는 거 진짜 범죄 아님?'],['@bye2222','진위 확인도 안 됐는데 퍼나르는 게 더 이상함']]},
 {id:'t3',name:'비공계 아님',handle:'@alright__yeah',avatar:'☻',date:'16분',text:'아니 나는 둘이 사귀는 거보다 이게 공연 끝난 지 몇 시간 만에 터진 게 더 어이없다고ㅋㅋㅋㅋㅋ 존나 타이밍 뭔데',n:[79,919,4020],replies:[['@go_home_please','누가 작정하고 기다린 거 같아서 짜증남']]},
 {id:'t4',name:'다시 오늘로',handle:'@today_1025',avatar:'♬',date:'15분',text:'커플링 분석하는 계정들아 니네가 무슨 국과수냐 반지 두 개 확대해놓고 ㅈㄴ 진지한 거 웃기네',n:[226,3109,9401],replies:[['@bananamilk','반지 다 똑같이 생겨서 구분도 안감 ㅋㅋㅋ'],['@wave_wave_','저러다가 손가락 지문도 분석하겠음']]},
 {id:'t5',name:'비 내리는 날',handle:'@rainfall_00',avatar:'☂',date:'13분',text:'아 나 진짜 상엽예찬이면 너무 놀라서 소리도 안 나옴 근데 지금 기사 제목들은 진심 선 넘었다',n:[97,1240,5025],replies:[['@silverline','ㅇㅇ 사생활 까발려서 조회수 빠는 거 너무 싫어']]},
 {id:'t6',name:'호두',handle:'@walnut_408',avatar:'◇',date:'11분',text:'오늘 엔딩 때까지 세상 제일 행복했는데 집 오는 길에 좆같은 기사부터 봐야 됨? 내 공연 좀 돌려줘',n:[250,4112,13203],replies:[['@wedanceagain','울다가 웃다가 왔는데 이게 뭔 지랄이냐고'],['@over_the_moon','막콘 영상 계속 보고 있었는데 ㅠ']]},
 {id:'t7',name:'mmm',handle:'@mmm_2131',avatar:'✳',date:'10분',text:'동성 열애설이라고 갑자기 사람이 잘못한 것처럼 구는 놈들은 뭐냐 진짜. 사생활 불법촬영이 더 문제지',n:[308,6219,17006],replies:[['@daydream_blue','포인트 이거임. 둘이 뭘 하든 자기들 일이지'],['@nope_nope','비난 대상이 아예 잘못됨']]},
 {id:'t8',name:'물결',handle:'@tidal_waves_',avatar:'〰',date:'9분',text:'솔직히 깜짝 놀랐는데 사진 더 풀어달라고 인용 달고 있는 새끼들은 진짜 뭐하는 애들이냐',n:[127,2218,8431],replies:[['@letsgo__now','원본 달라는 사람들 진심 제정신이냐']]},
 {id:'t9',name:'잠깐만',handle:'@hold__on_0',avatar:'!',date:'8분',text:'확인 중이라는 기사 하나 나오니까 얘네가 또 과거 라이브 1초 단위로 뜯기 시작함 ㅅㅂ 그냥 좀 냅둬',n:[164,3009,12520],replies:[['@moonandstars','재밌어 하면서 사생활 침해하는 거 진짜 싫음']]},
 {id:'t10',name:'ㄴㅇ',handle:'@and__then_99',avatar:'•',date:'6분',text:'남의 차 안까지 찍어 놓고 확인 중이니 뭐니 기사 여러 개 우르르 내는 거 존나 기분 나쁨',n:[281,4891,14404],replies:[['@cloud__10','기사 제목도 제각각이라 뭐가 사실인지 모르겠음'],['@and__then_99','그냥 뉴스 좀 그만 띄웠으면']]},
 {id:'t11',name:'왈왈왈',handle:'@woofing__101',avatar:'✦',date:'5분',text:'니들이 뭘 안다고 맞다 아니다 싸우냐고 ㅋㅋㅋ 나는 그냥 오늘 네 명 무대가 존나 좋았다는 거 말곤 모름',n:[220,3288,10692],replies:[['@somebody__','그거면 됐다 오늘 무대 진짜 좋았음']]},
 {id:'t12',name:'모두들 잘 자',handle:'@sleepwell_259',avatar:'☽',date:'2분',text:'기사 얘기하다가 문득 마지막 곡 생각났어. 오늘 콘서트 정말 좋았거든. 그 밤이 이런 걸로 지워지지는 않았으면.',n:[117,1712,5823],replies:[['@everything__','맞아 공연만큼은 오늘 그대로 남았으면']]}
];

const INSTA=[
 {id:'i1',user:'_octobernight',avatar:'stage.jpg',photo:'stage.jpg',caption:'오늘 마지막 곡 아직도 귀에서 들리는 것 같음. 막콘은 정말 미쳤다',time:'3시간',likes:2691,comments:[['vv_vv.22','오늘 앙코르 진짜ㅠㅠ'],['november.0','울다가 목 다 쉼'],['1am_memories','마지막 인사에서 정신 못 차렸어']]},
 {id:'i2',user:'dawn__archive',avatar:'night.jpg',photo:'night.jpg',caption:'집 와서 인스타 켰다가 기사 보고 기절할 뻔. 이게 지금 무슨 상황이야',time:'17분',likes:1847,comments:[['slow_0clock','나도 지금 너무 놀람'],['sand_011','차 사진 대체 누가 찍은 거야?'],['blue_sea_33','댓글 싸우는 거 제발 그만']]},
 {id:'i3',user:'after_sunset.26',avatar:'flowers.jpg',photo:'flowers.jpg',caption:'공연 다녀온 사람은 알 거임 오늘 네 명 진짜 행복해 보였고 무대 너무 좋았음... 제발 그 기억까지는 안 망쳤으면',time:'12분',likes:3287,comments:[['rooftop.lucy','이 사진 보니까 또 울컥함'],['a_rabbit_day','솔직히 뉴스 뜬 이후로 속상했음'],['tinynight_','누가 사귀든 그건 본인들 사생활이지']]},
 {id:'i4',user:'white_noise__',avatar:'guitar.jpg',photo:'guitar.jpg',caption:'커플링이라는 사진 너무 억지 아니냐ㅋㅋㅋㅋ 확대에 확대에 확대를 몇 번을 한 거야',time:'6분',likes:891,comments:[['melancholy.9','반지 말고 얼굴도 잘 안 보임'],['dreaming.00','와 이 댓글창 또 난리네'],['euns.hello','일단 기사 사진 퍼트리는 거부터 좀 그만']]}
];

const ARTICLES=[
 {id:'kiss',time:'00:02',source:'연예24',title:'[단독] 최상엽·신예찬, 공연 뒤 차량 안 입맞춤 포착',summary:'공연을 마친 뒤 주차장에 세워진 차량 내부를 찍은 사진이 온라인에 유포되며 두 사람의 관계에 대한 추측이 이어지고 있다.',paragraphs:['25일 늦은 밤 공연장을 빠져나온 두 사람이 같은 차량에 탑승한 것으로 보이는 사진이 외부로 전해졌다. 일부 사진에는 차 안에서 서로 가까이 마주한 모습이 담긴 것으로 주장된다.','촬영 시점과 원본의 맥락은 독립적으로 검증되지 않았다. 사진 게시자는 얼굴이 확인되는 원본을 추가로 확보했다고 밝혔다.','열애 여부에 대한 공식 입장은 아직 발표되지 않았다. 관련 문의가 이어지는 가운데 사생활을 침해하는 촬영 방식에 대한 비판도 나오고 있다.']},
 {id:'hands',time:'00:05',source:'연예포커스',title:'손잡고 주차장으로…최상엽·신예찬 심야 데이트설',summary:'차량 사진과 공연 뒤 동선을 나란히 놓은 게시물이 확산되고 있다.',paragraphs:['공연 종료 직후 두 사람의 이동 동선을 연결하는 온라인 게시물이 잇따르고 있다.','확인되지 않은 정황과 익명 게시물만으로 관계를 단정하기는 어렵다.']},
 {id:'ring',time:'00:08',source:'이슈톡',title:'같은 반지 포착? 최상엽·신예찬, 과거 사진까지 재조명',summary:'손가락 확대 사진과 팬들이 모은 과거 영상 캡처가 온라인에 퍼졌다.',paragraphs:['온라인 커뮤니티에서는 두 사람이 착용한 반지가 비슷하다는 주장이 등장했다.','유사한 디자인이라는 사실만으로 연인 관계를 확인할 수는 없지만 관련 게시물에는 수많은 댓글이 달리고 있다.']},
 {id:'follow',time:'00:13',source:'뉴스브릿지',title:'소속사 확인 중에도 사진 추가 확산…새벽 내내 문의 쇄도',summary:'소속사 공식 발표가 나오지 않은 상황에서 관련 기사들이 속속 올라오고 있다.',paragraphs:['첫 보도 뒤 짧은 시간 사이 다수의 매체가 사진과 SNS 반응을 인용해 후속 기사를 발행했다.','소속사는 관련 내용을 확인 중인 것으로 알려졌으며 공식 입장은 아직 나오지 않았다.']},
 {id:'fan',time:'00:17',source:'핫이슈NOW',title:'공연 여운도 가시기 전…갑작스러운 열애설에 엇갈린 반응',summary:'축하와 당혹감, 과도한 사생활 추적을 비판하는 반응이 한꺼번에 쏟아졌다.',paragraphs:['일부 팬들은 놀라움을 나타낸 반면, 사진 촬영과 유포 방식 자체가 사생활 침해라는 의견도 적지 않다.','공연에 관한 이야기로 가득했던 온라인 공간은 밤사이 빠르게 다른 화제로 옮겨갔다.']}
];

const SMS_THREADS=[
 {id:'sms',sender:'010-9***-3***',at:1,body:[['00:01','최상엽 씨 본인 번호 맞으시죠?'],['00:01','어젯밤 공연 끝나고 주차장에서 촬영된 사진입니다. 동행하신 분이 신예찬 씨 맞는지 확인 부탁드립니다.'],['00:01','[사진 3장]'],['00:02','두 분 얼굴이 확인되는 원본도 있습니다. 기사 나가기 전에 직접 말씀 듣고 싶습니다.'],['00:10','문자 확인하신 것 같은데 답변이 없으시네요.'],['00:20','회신이 없으시면 현재 확보한 자료를 기준으로 진행하겠습니다.']]},
 {id:'sms2',sender:'010-7***-1***',at:4,body:[['00:04','안녕하세요. 최상엽 씨 맞으신가요? 취재 건으로 확인 부탁드립니다.'],['00:12','관련 기사와 사진 입장 짧게라도 남겨주실 수 있을까요?']]},
 {id:'sms3',sender:'010-2***-7***',at:14,body:[['00:14','신예찬 씨와 관계에 대해 취재 중입니다. 답변 가능하신 시간 회신 부탁드립니다.'],['00:22','확인 후 연락 부탁드립니다.']]},
 {id:'sms4',sender:'010-5***-0***',at:17,body:[['00:17','안녕하세요. 취재를 위해 연락드렸습니다. 차량 사진이 전달된 사실이 맞습니까?']]}
];

const MAILS=[
 {id:'m0',at:7,from:'연예부 취재팀',address:'pressdesk@newsroom.example',title:'[긴급] 최상엽 씨 관련 보도 확인 요청',body:'최상엽 님 안녕하세요. 오늘 공개된 사진과 관련해 사실 관계 확인 요청드립니다. 신예찬 님과 관계 및 해당 일자 동선에 대해 입장을 여쭙고 싶습니다. 가능하시다면 조속히 회신 부탁드립니다.'},
 {id:'m1',at:11,from:'문화연예 담당',address:'entertainment@daily-example.com',title:'기사 송고 전 공식 확인 요청드립니다',body:'안녕하세요. 연락이 닿지 않아 메일로도 문의드립니다. 차량 내부 촬영본과 관련한 내용을 확인 중입니다. 공식 입장을 전달해 주시면 기사에 반영하겠습니다.'},
 {id:'m2',at:12,from:'온라인 편집부',address:'editor@media-example.com',title:'추가 사진 관련 확인',body:'기존에 확산된 사진 외 새로운 촬영본에 대한 제보가 접수되었습니다. 관련해 확인을 부탁드립니다.'},
 {id:'m3',at:16,from:'연예 매체',address:'showbiz@broadcast-example.com',title:'오늘 중 확인 가능하신가요?',body:'기 발송한 문의에 답변이 없어 재차 연락드립니다. 확인 가능하신 내용이 있다면 회신 부탁드립니다.'},
 {id:'m4',at:20,from:'온라인 뉴스',address:'issue@desk-example.com',title:'[재요청] 차량 사진 관련 공식 입장',body:'안녕하세요. 금일 새벽 보도된 사안에 관하여 최상엽 님의 입장 확인을 부탁드립니다.'},
 {id:'m5',at:25,from:'편집부',address:'desk@publish-example.com',title:'[최종 확인 요청] 관련 사진 보도',body:'보도 전 최종 확인차 다시 문의드립니다. 짧은 내용이라도 전달받을 수 있으면 감사하겠습니다.'}
];

/* Sequel phase 2 · received message first, then management, then the media flood. */
const SEQUENCE_VERSION=2;
const REVISED_CHAT_ROOMS={"company":[["them","상엽아 일단 폰 보지 마. 모르는 번호에서 뭐 왔어도 답장하지 말고. 알았지?","00:02"],["them","너한테 사진 보낸 사람이 회사에도 연락했어.","00:03"],["them","일단 회사에서 확인 중이니까 기사나 문자 함부로 열어보지 마.","00:04"],["them","근데 나도 너한테는 물어봐야겠다. 사진 속에 예찬이 맞아?","00:06"],["me","형 지금 이게 무슨 일이에요","00:07"],["them","나도 방금 알았어. 예찬이한테도 연락했으니까 걱정 말고.","00:08"],["them","기자들이랑은 절대 직접 얘기하지 마. 번호 차단해도 돼.","00:13"],["them","회사 입장 정해질 때까지 우리 넷 다 아무것도 올리지 말자.","00:22"],["them","상엽아. 괜찮지? 읽었으면 확인만 해줘.","00:31"]],"companypr":[["them","상엽 씨, 지금 접촉해 온 번호에 응답하셨나요?","00:04"],["them","사진을 전달받으셨다면 삭제하지 마시고 일단 보관만 부탁드립니다.","00:05"],["them","현재 보도 예정이라고 통보한 매체가 있습니다. 개인적인 회신은 하지 말아주세요.","00:08"],["them","소속 멤버 전원 동일하게 개별 입장 표명은 하지 않는 것으로 정리하겠습니다.","00:12"],["them","기사마다 사진과 설명이 달라 사실관계를 확인하고 있습니다.","00:19"],["them","추가 연락이 오더라도 읽으실 필요 없습니다. 필요하면 매니저 통해 알려드리겠습니다.","00:29"]],"yechan":[["them","엽아 나도 문자 받았어","00:07"],["them","번호 이상하지? 일단 답장하지 마 ㅎㅎ","00:08"],["them","매니저 형이랑도 얘기했어. 회사가 정리해 준대","00:09"],["me","형 괜찮아?","00:10"],["them","응 나는 괜찮지. 너는?","00:11"],["them","계속 폰 들여다보고 있지 ㅋㅋ 이제 좀 내려놔","00:12"],["me","진짜 기사도 나오는 거야?","00:14"],["them","올라온 것 같더라. 나도 제목만 봤어","00:15"],["them","일단 오늘은 넷 다 따로 대응 안 했으면 좋겠다네...","00:16"],["them","정리되는 대로 어떻게 할지 정해보자. 우리끼리도 얘기 나누고","00:17"],["me","형한테 괜히 미안하네","00:22"],["them","엽아 뭘 미안해 ㅋㅋ 둘 다 있었는데","00:23"],["them","너 지금 기사 댓글까지 읽고 있으면 혼난다","00:28"],["them","딴 생각 말고 오늘은 우리 무대 복기하자.","00:33"],["them","막곡 때 너 웃던 거 생각나? 나는 자꾸 그 생각 나는데 ㅎㅎ","00:35"]],"group":[["wonsang","아 다들 잘 들어갔냐","23:57"],["gwangil","방금 도착했음 형들 고생했어","23:58"],["yechan","수고했어 얘들아 ㅎㅎ","23:59"],["wonsang","야 방금 매니저 형 연락 왔는데","00:10"],["gwangil","뭔데??","00:10"],["wonsang","기사 뜬 거 봤어?","00:11"],["gwangil","잠깐 뭔 기사","00:11"],["yechan","다들 연락 받았구나 ㅋㅋ","00:12"],["wonsang","형들이랑 관련된 거 맞아? 회사는 뭐래","00:13"],["yechan","일단 오늘은 넷 다 따로 대응 안 했으면 좋겠다네...","00:14"],["gwangil","아니 그 사진 찍은 사람은 뭔데","00:15"],["wonsang","내 말이. 그걸 어디서 찍은 거야","00:16"],["me","미안하다 얘들아","00:17"],["gwangil","맞아 형이 뭘 미안해. 미안할 것도 많네 뭐","00:18"],["wonsang","뭘 미안해 ㅋㅋ 형이 찍으라고 한 것도 아니고","00:18"],["yechan","정리되는 대로 어떻게 할지 정해보자 우리끼리도 얘기는 나눠야지","00:20"],["gwangil","근데 그만 좀 보내라 기사 나도 알림 계속 옴","00:23"],["wonsang","ㅇㅇ 이제 기사 공유 금지. 다 봤어","00:24"],["yechan","일단 다들 쉬어. 오늘 공연은 정말 좋았잖아","00:32"]],"wonsang":[["them","형 기사 봤어?","00:14"],["them","아까 회사에서 연락 와서 나도 이제 알았어","00:15"],["them","괜히 검색하지 마. 별 얘기 다 나오더라","00:20"],["them","형 잘못도 아닌데 자꾸 미안하다 하지 말고","00:27"],["them","나도 폰 그만 보려고. 더 오면 매니저 형한테 넘길게","00:36"]],"gwangil":[["them","형 지금 괜찮아?","00:16"],["them","나 기사 보고 좀 놀랐어. 뭐가 뭔지 모르겠네","00:17"],["them","근데 형한테 모르는 번호로까지 연락 온다며","00:21"],["them","그런 거 답장하지 마 진짜","00:22"],["them","아 형 우리끼리는 그냥 평소대로 얘기하면 되잖아 ㅋㅋ","00:30"],["them","오늘 엔딩 진짜 좋았어. 그건 좀 기억해 줘","00:38"]]};
for(const [id,rows] of Object.entries(REVISED_CHAT_ROOMS))CHAT_ROOMS[id].messages=rows;
SMS_THREADS.splice(0,SMS_THREADS.length,...[{"id":"sms","sender":"010-9***-3***","at":0,"body":[["00:00","최상엽 씨 본인 번호 맞으시죠?"],["00:00","어젯밤 공연 끝나고 주차장에서 촬영한 사진입니다."],["00:00","[사진 3장]"],["00:01","동행하신 분, 신예찬 씨 맞습니까? 차량 안에서 입 맞추시는 장면이 담겼습니다."],["00:01","두 분 얼굴이 확인되는 원본도 따로 가지고 있습니다. 기사 나가기 전에 먼저 확인받고 싶네요."],["00:05","사진 보셨나요? 직접 설명하실 기회는 드리려고 연락드린 겁니다."],["00:18","문자 확인하신 것 같은데 답변이 없으시네요."],["00:30","회신 없으시면 확보한 사진을 기준으로 진행하겠습니다."]]},{"id":"sms2","sender":"010-7***-1***","at":9,"body":[["00:09","최상엽 씨 안녕하세요, 연예부 기자입니다. 지금 기사 관련 본인 입장 받을 수 있을까요?"],["00:17","짧게라도 확인 부탁드립니다. 통화 가능하신가요?"],["00:26","회사 쪽 연락이 안 되어 본인께 직접 문의드립니다."]]},{"id":"sms3","sender":"010-2***-7***","at":12,"body":[["00:12","차량 내부 사진이 맞는지 확인 부탁드립니다. 보도 예정입니다."],["00:22","상황이 급해서 재차 연락드립니다."],["00:34","혹시 이 번호로는 회신이 어려우실까요?"]]},{"id":"sms4","sender":"010-5***-0***","at":16,"body":[["00:16","신예찬 씨와 언제부터 교제하셨나요? 관련 질문 몇 가지만 드리겠습니다."],["00:24","커플링으로 추정되는 반지에 대해서도 확인 가능하실까요?"]]},{"id":"sms5","sender":"발신 번호 표시 제한","at":17,"body":[["00:17","형 지금 어디예요? 아까 공연장 쪽에서 봤는데."],["00:19","둘이 같이 차 탄 거 맞죠? 답 좀 해 줘요."],["00:28","읽고 있는 거 알아요. 사람들 다 궁금해해요."]]},{"id":"sms6","sender":"010-8***-4***","at":19,"body":[["00:19","사진은 저희한테도 왔습니다. 본인 확인 없이 기사 나갈 수 있으니 답 부탁드립니다."],["00:25","홍보팀과 연결 가능하신 연락처라도 회신해 주세요."]]},{"id":"sms7","sender":"알 수 없는 발신자","at":22,"body":[["00:22","왜 이제 와서 모르는 척해요? 저 예전부터 다 알고 있었어요."],["00:27","집 앞에도 사람 많겠네요. 조심해서 들어가세요."]]},{"id":"sms8","sender":"010-3***-8***","at":24,"body":[["00:24","기자입니다. 주차장에 동행한 사람, 정확히 누구인지 확인해 주실 수 있나요?"],["00:37","답변이 어려우시면 '노코멘트'라도 부탁드립니다."]]},{"id":"sms9","sender":"010-6***-2***","at":27,"body":[["00:27","최상엽 님, 온라인에 배포 중인 자료 관련해서 간단히 여쭙고 싶습니다."],["00:36","전화를 두 차례 드렸습니다. 문자로라도 부탁드립니다."]]},{"id":"sms10","sender":"발신 번호 표시 제한","at":31,"body":[["00:31","그 사진 저도 봤어요. 더 있는 거 아시죠?"],["00:38","방금 올라온 기사만 끝은 아니던데."]]}]);
MAILS.splice(0,MAILS.length,...[{"id":"m0","at":9,"from":"연예부 취재팀","address":"desk@pressdesk.example","title":"[취재 요청] 최상엽 씨 관련 사진 본인 확인","body":"안녕하세요. 25일 공연 직후 차량에서 촬영되었다는 사진을 확보했습니다. 신예찬 씨와의 관계, 촬영 경위에 대해 확인 부탁드립니다. 현 시각 송고 예정이오니 빠르게 회신 주시면 감사하겠습니다."},{"id":"m1","at":11,"from":"방송 연예팀","address":"culture@broadcastdesk.example","title":"방금 보도된 내용에 대한 추가 질문","body":"연예 담당 기자입니다. 소속사 확인 중이라는 답변 외에 당사자 개인 입장은 없는지 문의드립니다. 급한 건이라 문자와 이메일로 함께 연락드립니다."},{"id":"m2","at":13,"from":"온라인 편집부","address":"editor@mediabrief.example","title":"[긴급] 사진 원본 관련 질의","body":"주차장 차량 내 촬영본의 추가 버전이 제보되었다는 연락을 받았습니다. 사진에 대한 본인의 입장 확인이 가능할까요?"},{"id":"m3","at":15,"from":"종합 연예 뉴스","address":"newsroom@dailyissue.example","title":"공식 입장 요청드립니다","body":"확인 취재를 위해 연락드렸으나 통화가 연결되지 않아 이메일 남깁니다. 열애 여부 및 관련 사진의 진위를 알려주시면 보도에 반영하겠습니다."},{"id":"m4","at":18,"from":"문화부 취재팀","address":"culture@todayspaper.example","title":"[재문의] 신예찬 씨와의 관계 관련","body":"최상엽 님 안녕하세요. 답변이 없어 다시 연락드립니다. 가능하신 시각 알려주시면 서면으로 질의드리겠습니다."},{"id":"m5","at":20,"from":"디지털 이슈팀","address":"issue@newslab.example","title":"차량 사진 관련 기사 송고 예정","body":"공개된 영상과 사진에 대한 추가 취재 중입니다. 소속사에서 현재 확인 중이라는 입장을 제외하고 전달할 말씀이 있으실까요?"},{"id":"m6","at":22,"from":"독자 제보 센터","address":"tip@storyfeed.example","title":"제보 자료 사실 확인 요청","body":"최상엽 씨 관련한 사적인 사진이 계속 유입되고 있습니다. 본인이 해당 자료에 대해 확인해 주실 수 있을까요?"},{"id":"m7","at":24,"from":"온라인 문화 뉴스","address":"culture@mediaplus.example","title":"금일 보도에 대한 반론권 보장","body":"기사에 대한 의견이나 정정하고 싶은 내용이 있다면 확인 후 반영하겠습니다. 연락 부탁드립니다."},{"id":"m8","at":27,"from":"연예뉴스 취재팀","address":"press@onairdesk.example","title":"[2차 요청] 기사 추가 확인 부탁드립니다","body":"이전에 드린 문의를 재차 전달드립니다. 지금까지 사진에 대한 공식 답변이 없어서 본인께 연락드립니다."},{"id":"m9","at":30,"from":"뉴스 편집국","address":"editorial@briefly.example","title":"사진 확보 경위 관련 질의","body":"사진을 유포한 계정과 촬영 시점에 대한 확인도 받고 있습니다. 사실관계를 안내해 주시면 감사하겠습니다."},{"id":"m10","at":33,"from":"방송 제작팀","address":"desk@enttoday.example","title":"[당일 인터뷰 가능 여부] 최상엽 씨","body":"연예 이슈 관련 짧은 전화 인터뷰가 가능하신지 여쭙습니다. 연락받을 수 있는 번호를 알려주시면 좋겠습니다."},{"id":"m11","at":36,"from":"취재 지원팀","address":"report@presswire.example","title":"최종 확인 요청","body":"금일 새벽 보도 관련하여 최종 확인차 문의드립니다. 본인 의견이 없으시면 기존에 접수된 자료를 토대로 진행할 예정입니다."}]);
ALERTS.splice(0,ALERTS.length,...[{"id":"seq2-0","at":0,"from":"문자","title":"010-9***-3***","message":"어젯밤 주차장에서 찍은 사진입니다. [사진 3장]","target":"sms","icon":"✉"},{"id":"seq2-1","at":1,"from":"문자","title":"010-9***-3***","message":"신예찬 씨 맞습니까? 차량 안 장면 원본도 있습니다.","target":"sms","icon":"✉"},{"id":"seq2-2","at":2,"from":"카카오톡","title":"매니저 형","message":"상엽아 일단 폰 보지 마. 그 번호 답장하지 말고.","target":"company","icon":"💬"},{"id":"seq2-3","at":3,"from":"카카오톡","title":"매니저 형","message":"너한테 사진 보낸 사람이 회사에도 연락했어.","target":"company","icon":"💬"},{"id":"seq2-4","at":4,"from":"카카오톡","title":"회사 홍보팀","message":"상엽 씨, 낯선 번호에 응답하셨나요? 개인 회신은 삼가 주세요.","target":"companypr","icon":"💬"},{"id":"seq2-5","at":5,"from":"문자","title":"010-9***-3***","message":"사진 보셨나요? 기사 나가기 전에 먼저 여쭙는 겁니다.","target":"sms","icon":"✉"},{"id":"seq2-6","at":6,"from":"뉴스","title":"연예 속보","message":"[단독] 최상엽·신예찬, 공연 뒤 차량 안 입맞춤 포착","target":"article:kiss","icon":"▤"},{"id":"seq2-7","at":7,"from":"카카오톡","title":"예찬이형♥","message":"엽아 나도 문자 받았어","target":"yechan","icon":"💬"},{"id":"seq2-8","at":8,"from":"카카오톡","title":"예찬이형♥","message":"매니저 형이랑도 얘기했어. 회사가 정리해 준대","target":"yechan","icon":"💬"},{"id":"seq2-9","at":9,"from":"문자","title":"010-7***-1***","message":"기사 관련해서 본인 입장 받을 수 있을까요?","target":"sms2","icon":"✉"},{"id":"seq2-10","at":9,"from":"메일","title":"연예부 취재팀","message":"[취재 요청] 최상엽 씨 관련 사진 본인 확인","target":"mail","icon":"✉"},{"id":"seq2-11","at":10,"from":"카카오톡","title":"LUCY","message":"기사 뜬 거 봤어? 회사는 뭐래","target":"group","icon":"💬"},{"id":"seq2-12","at":11,"from":"메일","title":"방송 연예팀","message":"방금 보도된 내용에 대한 추가 질문","target":"mail","icon":"✉"},{"id":"seq2-13","at":11,"from":"카카오톡","title":"원상이","message":"형 기사 봤어? 회사에서 연락 와서 알았어","target":"wonsang","icon":"💬"},{"id":"seq2-14","at":12,"from":"문자","title":"010-2***-7***","message":"차량 내부 사진 맞는지 확인 부탁드립니다.","target":"sms3","icon":"✉"},{"id":"seq2-15","at":12,"from":"카카오톡","title":"회사 홍보팀","message":"멤버 네 분 모두 개별 입장 표명은 하지 않는 것으로 정리하겠습니다.","target":"companypr","icon":"💬"},{"id":"seq2-16","at":13,"from":"메일","title":"온라인 편집부","message":"[긴급] 사진 원본 관련 질의","target":"mail","icon":"✉"},{"id":"seq2-17","at":14,"from":"뉴스","title":"이슈톡","message":"같은 반지 포착? 최상엽·신예찬 과거 사진 재조명","target":"article:ring","icon":"▤"},{"id":"seq2-18","at":15,"from":"메일","title":"종합 연예 뉴스","message":"공식 입장 요청드립니다","target":"mail","icon":"✉"},{"id":"seq2-19","at":16,"from":"문자","title":"010-5***-0***","message":"언제부터 교제하셨나요? 질문 몇 가지만 드리겠습니다.","target":"sms4","icon":"✉"},{"id":"seq2-20","at":16,"from":"카카오톡","title":"광일이","message":"형 지금 괜찮아? 나도 기사 봤어","target":"gwangil","icon":"💬"},{"id":"seq2-21","at":17,"from":"문자","title":"발신 번호 표시 제한","message":"형 지금 어디예요? 공연장 쪽에서 봤는데.","target":"sms5","icon":"✉"},{"id":"seq2-22","at":18,"from":"문자","title":"010-9***-3***","message":"문자 확인하신 것 같은데 답변이 없으시네요.","target":"sms","icon":"✉"},{"id":"seq2-23","at":18,"from":"메일","title":"문화부 취재팀","message":"[재문의] 신예찬 씨와의 관계 관련","target":"mail","icon":"✉"},{"id":"seq2-24","at":19,"from":"문자","title":"010-8***-4***","message":"저희한테도 사진이 왔습니다. 본인 확인 부탁드립니다.","target":"sms6","icon":"✉"},{"id":"seq2-25","at":19,"from":"뉴스","title":"연예 포커스","message":"손잡고 주차장으로…공연 뒤 심야 데이트설","target":"article:hands","icon":"▤"},{"id":"seq2-26","at":20,"from":"메일","title":"디지털 이슈팀","message":"차량 사진 관련 기사 송고 예정","target":"mail","icon":"✉"},{"id":"seq2-27","at":20,"from":"카카오톡","title":"LUCY","message":"미안하다는 말 좀 하지 마 ㅋㅋ","target":"group","icon":"💬"},{"id":"seq2-28","at":21,"from":"뉴스","title":"연예 속보","message":"소속사 확인 중에도 추가 사진 확산","target":"article:follow","icon":"▤"},{"id":"seq2-29","at":22,"from":"문자","title":"알 수 없는 발신자","message":"왜 모르는 척해요? 예전부터 알고 있었어요.","target":"sms7","icon":"✉"},{"id":"seq2-30","at":22,"from":"메일","title":"독자 제보 센터","message":"제보 자료 사실 확인 요청","target":"mail","icon":"✉"},{"id":"seq2-31","at":23,"from":"문자","title":"010-7***-1***","message":"회사랑 연락 안 돼서요. 다시 확인 부탁드립니다.","target":"sms2","icon":"✉"},{"id":"seq2-32","at":24,"from":"문자","title":"010-3***-8***","message":"주차장에 동행한 사람 정확히 누구였나요?","target":"sms8","icon":"✉"},{"id":"seq2-33","at":24,"from":"메일","title":"온라인 문화 뉴스","message":"금일 보도에 대한 반론권 보장","target":"mail","icon":"✉"},{"id":"seq2-34","at":25,"from":"카카오톡","title":"예찬이형♥","message":"그냥 기사 읽지 말고 좀 쉬어 ㅎㅎ","target":"yechan","icon":"💬"},{"id":"seq2-35","at":26,"from":"문자","title":"010-9***-3***","message":"회신이 없으시면 확보 자료로 진행하겠습니다.","target":"sms","icon":"✉"},{"id":"seq2-36","at":27,"from":"문자","title":"010-6***-2***","message":"관련 사진 본인 확인 요청드립니다.","target":"sms9","icon":"✉"},{"id":"seq2-37","at":27,"from":"메일","title":"연예뉴스 취재팀","message":"[2차 요청] 기사 추가 확인 부탁드립니다","target":"mail","icon":"✉"},{"id":"seq2-38","at":28,"from":"문자","title":"발신 번호 표시 제한","message":"읽고 있는 거 알아요. 답 좀 해 줘요.","target":"sms5","icon":"✉"},{"id":"seq2-39","at":29,"from":"카카오톡","title":"회사 홍보팀","message":"추가 연락이 와도 읽으실 필요 없습니다.","target":"companypr","icon":"💬"},{"id":"seq2-40","at":30,"from":"메일","title":"뉴스 편집국","message":"사진 확보 경위 관련 질의","target":"mail","icon":"✉"},{"id":"seq2-41","at":31,"from":"문자","title":"발신 번호 표시 제한","message":"그 사진 저도 봤어요. 더 있는 거 아시죠?","target":"sms10","icon":"✉"},{"id":"seq2-42","at":32,"from":"카카오톡","title":"LUCY","message":"오늘 공연은 정말 좋았잖아. 이제 좀 쉬어","target":"group","icon":"💬"},{"id":"seq2-43","at":33,"from":"메일","title":"방송 제작팀","message":"[당일 인터뷰 가능 여부] 최상엽 씨","target":"mail","icon":"✉"},{"id":"seq2-44","at":34,"from":"문자","title":"010-2***-7***","message":"혹시 이 번호로는 회신이 어려우실까요?","target":"sms3","icon":"✉"},{"id":"seq2-45","at":35,"from":"카카오톡","title":"예찬이형♥","message":"딴 생각 말고 오늘은 우리 무대 복기하자.","target":"yechan","icon":"💬"},{"id":"seq2-46","at":36,"from":"메일","title":"취재 지원팀","message":"최종 확인 요청","target":"mail","icon":"✉"},{"id":"seq2-47","at":37,"from":"문자","title":"010-3***-8***","message":"답변 어려우시면 '노코멘트'라도 부탁드립니다.","target":"sms8","icon":"✉"},{"id":"seq2-48","at":38,"from":"문자","title":"발신 번호 표시 제한","message":"방금 올라온 기사만 끝은 아니던데.","target":"sms10","icon":"✉"}]);
ARTICLES.forEach(a=>{const times={kiss:"00:06",hands:"00:19",ring:"00:14",follow:"00:21",fan:"00:25"};a.time=times[a.id]||a.time;});

(function afterEncore(){
 const STORAGE="yn-issue-2026-event";
 let flow={minute:0,muted:false,cleared:[],liked:[],igliked:[]};
 try{flow={...flow,...JSON.parse(localStorage.getItem(STORAGE)||"{}")}}catch(e){}
 const save=()=>localStorage.setItem(STORAGE,JSON.stringify(flow));
 const escaped=t=>esc(String(t??""));
 const shown=()=>ALERTS.filter(n=>n.at<=flow.minute&&!flow.muted&&!flow.cleared.includes(n.id));
 const clock=()=>`00:${String(flow.minute).padStart(2,"0")}`;
 const mapping={company:"manager1",companypr:"company",yechan:"yechan",group:"group",wonsang:"wonsang",gwangil:"gwangil"};
 if(flow.sequenceVersion!==SEQUENCE_VERSION){
   for(const id of Object.values(mapping))if(Array.isArray(chats[id]))chats[id]=chats[id].filter(m=>!String(m[5]||"").startsWith("issue26:"));
   saveStore("chats",chats);flow.minute=0;flow.cleared=[];flow.muted=false;flow.sequenceVersion=SEQUENCE_VERSION;save();
 }
 CONTACTS.manager1.name="매니저 형";CONTACTS.manager1.short="매니저 형";
 CONTACTS.company.name="회사 홍보팀";CONTACTS.company.short="회사 홍보팀";
 CONTACTS.yechan.name="예찬이형♥";
 function injectMessages(){
  let changed=false;
  Object.entries(CHAT_ROOMS).forEach(([id,room])=>{
   const key=mapping[id];if(!key)return;
   chats[key]??=[];
   room.messages.forEach((m,i)=>{
    const min=m[2].startsWith("23:")?-1:Number(m[2].slice(-2));
    if(min>flow.minute)return;
    const eventId=`issue26:${id}:${i}`;if(chats[key].some(x=>x[5]===eventId))return;
    let content=m[1];if(key==="group"&&m[0]!=="me")content=(m[0]==="yechan"?"신예찬":m[0]==="wonsang"?"조원상":m[0]==="gwangil"?"신광일":m[0])+": "+content;
    chats[key].push([m[0]==="me"?1:0,content,m[2].startsWith("23:")?"오후 11:"+m[2].slice(-2):"오전 12:"+m[2].slice(-2),null,Date.parse("2026-10-26T00:"+m[2].slice(-2)+":00+09:00"),eventId]);
    changed=true;
   });
  });
  if(changed)saveStore("chats",chats);
 }
 for(const [k,label] of [["after-news","NAVER 뉴스"],["after-x","X"],["after-ig","Instagram"]])if(!APPS.some(x=>x[0]===k))APPS.push([k,label]);
 const iconOriginal=appIcon;appIcon=function(id){if(id==="after-news")return "<b style='font-size:32px;color:#04ab52'>N</b>";if(id==="after-x")return "<b style='font-size:30px;color:white'>𝕏</b>";if(id==="after-ig")return "<b style='font-size:28px;color:white'>◎</b>";return iconOriginal(id)};
 const renderOriginal=renderApp;renderApp=function(id){if(["after-news","after-x","after-ig"].includes(id))return issueView(id);return renderOriginal(id)};
 const openHome=goHome;goHome=function(...args){let out=openHome(...args);reviseHome();return out};
 function reviseHome(){
  const el=document.querySelector("#surface .home");if(!el)return;
  [["bubble","after-news"],["youtube","after-x"],["recorder","after-ig"]].forEach(([before,after])=>{const b=el.querySelector(`.app-button[onclick="openApp('${before}')"]`);if(b)b.outerHTML=appButton(after,true)});
  el.querySelectorAll(".date-widget").forEach(x=>x.innerHTML="10월 26일 월요일<b>공연이 끝난 다음 날</b>");
  el.querySelectorAll(".schedule-widget").forEach(x=>{x.setAttribute("onclick","openApp('after-news')");x.innerHTML="온라인 속보<b>최상엽·신예찬 열애설</b><span style='font-size:9px'>관련 기사 확인</span>"});
  const txt=el.querySelector(".weather-widget small:last-child");if(txt)txt.textContent="10.26 오전 "+clock();
 }
 const lockOriginal=renderLock;
 renderLock=function(...args){const x=lockOriginal(...args);const el=document.querySelector("#surface .lock-screen");if(!el)return x;
  const t=el.querySelector(".lock-time");if(t)t.innerHTML="<span>00</span><span>"+String(flow.minute).padStart(2,"0")+"</span>";
  const d=el.querySelector(".lock-date");if(d)d.textContent="10월 26일 월요일";
  let c=el.querySelector(".issue-lock-preview")||el.querySelector(".lock-notification");
  if(!c){
   c=document.createElement("button");c.type="button";c.className="lock-notification issue-lock-preview";
   c.innerHTML='<div class="notice-top"><span><span class="kakao-mini">SMS</span> 메시지</span><span>지금</span></div><div class="notice-name"></div><div class="notice-message"></div>';
   el.appendChild(c);
  }
  if(c){c.classList.add("issue-lock-preview");c.setAttribute("onclick","beginUnlock('messages')");c.querySelector(".notice-name").textContent="010-9***-3***";c.querySelector(".notice-message").textContent="어젯밤 주차장에서 찍은 사진입니다. [사진 3장]";const badge=c.querySelector(".notice-top");if(badge)badge.innerHTML='<span><span class="kakao-mini" style="background:#dfefff;color:#3c627e">SMS</span> 메시지</span><span>지금</span>';c.style.display=flow.muted||flow.cleared.includes("seq2-0")?"none":""}
  return x;
 };
 if(typeof queueIncomingCall==="function")queueIncomingCall=function(){};
 const pinKeyOriginal=pinKey;
 pinKey=function(...args){const to=pending;const result=pinKeyOriginal(...args);if(unlocked&&to==="messages"){openApp("messages");showSMS("sms")}return result};
 if(typeof queueRefreshCallV29==="function")queueRefreshCallV29=function(){};
 const kakaoOriginal=renderKakao;renderKakao=function(...a){injectMessages();return kakaoOriginal(...a)};
 const chatOriginal=openChat;openChat=function(id){injectMessages();return chatOriginal(id)};
 const quickOriginal=openQuick;openQuick=function(){
  quickOriginal();
  const root=document.querySelector("#overlay .quick-panel");if(!root)return;
  const h=root.querySelector(".quick-head>span");if(h)h.textContent="10월 26일 월요일 · "+clock();
  root.querySelectorAll(".quick-notice").forEach(x=>x.remove());
  const old=root.querySelector(".issue-alerts");if(old)old.remove();
  const p=document.createElement("div");p.className="issue-alerts";
  p.innerHTML=`<div class="issue-alert-controls"><b>새 알림 ${shown().length}개</b><button data-issue="mute">${flow.muted?"알림 켜기":"알림 끄기"}</button><button data-issue="clear">모두 지우기</button></div><div class="issue-alert-scroll">${shown().slice().reverse().map(n=>`<button data-issue="notice" data-id="${n.id}"><small>${escaped(n.from)} · 00:${String(n.at).padStart(2,"0")}</small><b>${escaped(n.title)}</b><span>${escaped(n.message)}</span></button>`).join("")||"<p>새 알림이 없습니다.</p>"}</div>`;
  root.querySelector(".quick-bottom")?.before(p);
 };
 const smsOriginal=renderSMS;renderSMS=function(){const list=SMS_THREADS.filter(t=>t.at<=flow.minute);shell("메시지",`<div class="sms-hero">메시지 <span>${list.length}개의 대화</span></div>${list.map(t=>`<button class="chat-list-row" data-issue="sms" data-id="${t.id}"><span class="profile">${escaped(t.sender.slice(0,2))}</span><span class="chat-details"><b>${escaped(t.sender)}</b><p>${escaped(t.body.at(-1)[1])}</p></span><small>${clock()}</small></button>`).join("")}`)};
 const mailOriginal=renderMail;renderMail=function(){const list=MAILS.filter(t=>t.at<=flow.minute);shell("Gmail",`<div class="section-label">기본　받은편지함 · ${list.length}개</div>${list.slice().reverse().map(t=>`<button class="chat-list-row" data-issue="mail" data-id="${t.id}"><span class="profile">${escaped(t.from[0])}</span><span class="chat-details"><b>${escaped(t.from)}</b><p>${escaped(t.title)}</p></span><small>00:${String(t.at).padStart(2,"0")}</small></button>`).join("")}`)};
 renderInternet=function(){shell("인터넷",`<div class="section-label">즐겨찾기</div><div class="issue-sites"><button data-issue="app" data-id="after-news"><b>N</b> NAVER 뉴스</button><button data-issue="app" data-id="after-x"><b>𝕏</b> X</button><button data-issue="app" data-id="after-ig"><b>◎</b> Instagram</button></div><div class="section-label">최근 검색</div><button class="list-item" data-issue="app" data-id="after-news">최상엽 신예찬 열애설　›</button>`)};
 function issueView(which){
  if(which==="after-news"){shell("NAVER 뉴스",`<div class="issue-brand">N <strong>뉴스</strong><small>속보　연예　랭킹</small></div><div class="issue-hot">실시간 이슈　최상엽 · 신예찬</div>${ARTICLES.filter(a=>Number(a.time.slice(-2))<=Math.max(2,flow.minute)).map(a=>`<button class="issue-article" data-issue="article" data-id="${a.id}"><small>${escaped(a.source)} · ${escaped(a.time)}</small><b>${escaped(a.title)}</b><p>${escaped(a.summary)}</p></button>`).join("")}`);return}
  if(which==="after-x"){shell("X",`<div class="issue-brand issue-dark">𝕏 <small>추천 | 최신</small></div>${TWEETS.map(t=>`<div class="issue-post"><b>${escaped(t.name)}</b> <small>${escaped(t.handle)} · ${escaped(t.date)}</small><p>${escaped(t.text)}</p><button data-issue="article" data-id="kiss" class="issue-link">기사 원문 보기 ↗</button><div class="issue-post-actions"><button data-issue="like" data-id="${t.id}">${flow.liked.includes(t.id)?"♥":"♡"} ${t.n[1]}</button><span>↗ ${t.n[2]}</span></div>${t.replies.slice(0,1).map(r=>`<small class="issue-comment">${escaped(r[0])}　${escaped(r[1])}</small>`).join("")}</div>`).join("")}`);return}
  if(which==="after-ig"){shell("Instagram",`<div class="issue-brand">Instagram <small>♡　✈</small></div>${INSTA.map(p=>`<div class="issue-insta"><div class="issue-insta-user"><img src="https://deff-227.github.io/yeopne/assets/${p.avatar}"><b>${escaped(p.user)}</b></div><img class="issue-insta-photo" src="https://deff-227.github.io/yeopne/assets/${p.photo}"><div class="issue-post-actions"><button data-issue="iglike" data-id="${p.id}">${flow.igliked.includes(p.id)?"♥":"♡"} ${p.likes}</button></div><p>${escaped(p.caption)}</p>${p.comments.map(c=>`<small class="issue-comment">${escaped(c[0])}　${escaped(c[1])}</small>`).join("")}</div>`).join("")}`);return}
 }
 function showArticle(id){const a=ARTICLES.find(a=>a.id===id)||ARTICLES[0];shell("기사 상세",`<article class="issue-detail"><small>${escaped(a.source)} · ${escaped(a.time)}</small><h2>${escaped(a.title)}</h2><p>${escaped(a.summary)}</p><div class="issue-proof"><b>첨부 사진 01</b><b>첨부 사진 02</b><b>첨부 사진 03</b></div>${a.paragraphs.map(t=>`<p>${escaped(t)}</p>`).join("")}<button data-issue="app" data-id="after-x">X 반응 보기 ↗</button></article>`)}
 function showSMS(id){const t=SMS_THREADS.find(t=>t.id===id);if(!t)return;screen="sms-thread";setSurface(`<section class="app-view sms-thread"><header class="app-header"><button data-issue="smsback">‹</button><h2>${escaped(t.sender)}</h2></header><div class="chat-scroll">${t.body.map(x=>`<div class="message"><div class="msg-body"><div class="bubble-line"><div class="bubble">${escaped(x[1])}</div><small>${escaped(x[0])}</small></div></div></div>`).join("")}${id==="sms"?"<div class='issue-proof'><b>사진 01</b><b>사진 02</b><b>사진 03</b></div>":""}</div></section>`,{light:true})}
 function showMail(id){const m=MAILS.find(x=>x.id===id);if(m)shell("Gmail",`<div class="issue-detail"><h2>${escaped(m.title)}</h2><small>${escaped(m.from)} · ${escaped(m.address)}</small><p>${escaped(m.body)}</p><button data-issue="mailback">받은편지함으로</button></div>`)}
 
renderSMS=function(){
 const list=SMS_THREADS.filter(t=>t.at<=flow.minute).slice().reverse();
 shell("메시지",`<div class="sms-hero">메시지 <span>${list.length}개의 대화</span></div>${list.map(t=>{
   const latest=t.body.filter(m=>Number(m[0].slice(-2))<=flow.minute).at(-1);
   return `<button class="chat-list-row issue-sms-row" data-issue="sms" data-id="${t.id}"><span class="profile">${escaped(t.sender.slice(0,2))}</span><span class="chat-details"><b>${escaped(t.sender)}</b><p>${escaped(latest?.[1]||"")}</p></span><small>00:${String(t.at).padStart(2,"0")}</small></button>`;
 }).join("")}`);
};
showSMS=function(id){
 const t=SMS_THREADS.find(t=>t.id===id);if(!t)return;
 screen="sms-thread";
 const rows=t.body.filter(x=>Number(x[0].slice(-2))<=flow.minute);
 setSurface(`<section class="app-view sms-thread"><header class="app-header"><button data-issue="smsback" class="icon-btn" aria-label="목록으로">‹</button><h2>${escaped(t.sender)}</h2></header><div class="chat-scroll"><div class="chat-date">10월 26일 월요일</div>${rows.map(x=>`<div class="message"><div class="msg-body"><div class="bubble-line"><div class="bubble">${escaped(x[1])}</div><small>${escaped(x[0])}</small></div></div></div>`).join("")}${id==="sms"&&flow.minute>=0?`<div class="issue-proof">${[1,2,3].map(i=>`<button data-issue="proof" data-id="${i}">사진 ${String(i).padStart(2,"0")}</button>`).join("")}</div>`:""}</div><div class="issue-sms-footer">알 수 없는 발신자에게는 답장하지 않았습니다.</div></section>`);
};
const goIssueNotice=function goIssueNotice(n){
 flow.cleared=[...new Set([...flow.cleared,n.id])];save();overlay.innerHTML="";
 if(mapping[n.target])return openChat(mapping[n.target]);
 if(n.target==="mail")return openApp("mail");
 if(n.target.startsWith("sms")){openApp("messages");return showSMS(n.target)}
 if(n.target.startsWith("article:")){openApp("after-news");return showArticle(n.target.split(":")[1])}
 if(n.target==="article"){openApp("after-news");return showArticle("kiss")}
 if(n.target==="x")return openApp("after-x");
 return openApp("after-news");
};
const flashIncoming=function flashIncoming(newArr){
 if(!unlocked||flow.muted||!newArr.length)return;
 const root=document.getElementById("screen");if(!root)return;
 root.querySelectorAll(".issue-push-banner").forEach(x=>x.remove());
 const n=newArr.at(-1),btn=document.createElement("button");
 btn.type="button";btn.className="issue-push-banner";
 btn.innerHTML=`<small>${escaped(n.from)} · 방금</small><b>${escaped(n.title)}</b><span>${escaped(n.message)}</span>${newArr.length>1?`<small>외 ${newArr.length-1}개 알림</small>`:""}`;
 btn.onclick=()=>{btn.remove();goIssueNotice(n)};
 root.appendChild(btn);setTimeout(()=>btn.remove(),4300);
};
document.getElementById("surface").addEventListener("click",e=>{
  const b=e.target.closest("[data-issue]");if(!b)return;
  const t=b.dataset.issue,id=b.dataset.id;
  if(t==="mute"){flow.muted=!flow.muted;save();openQuick()}
  else if(t==="clear"){flow.cleared=[...new Set([...flow.cleared,...ALERTS.filter(a=>a.at<=flow.minute).map(a=>a.id)])];save();openQuick()}
  else if(t==="app")openApp(id);
  else if(t==="article")showArticle(id);
  else if(t==="sms")showSMS(id);
  else if(t==="proof")showInfo("첨부된 사진", "주차장에서 촬영된 것으로 주장하는 사진 3장이 전송됐습니다. 현재 미리보기만 표시됩니다.");
  else if(t==="mail")showMail(id);
  else if(t==="smsback")renderSMS();
  else if(t==="mailback")renderMail();
  else if(t==="like"||t==="iglike"){const k=t==="like"?"liked":"igliked";flow[k]=flow[k].includes(id)?flow[k].filter(x=>x!==id):[...flow[k],id];save();issueView(t==="like"?"after-x":"after-ig")}
 });
 document.getElementById("overlay").addEventListener("click",e=>{
  const b=e.target.closest("[data-issue]");if(!b)return;
  const t=b.dataset.issue;if(t==="mute"){flow.muted=!flow.muted;save();openQuick()}
  if(t==="clear"){flow.cleared=[...new Set([...flow.cleared,...ALERTS.filter(a=>a.at<=flow.minute).map(a=>a.id)])];save();openQuick()}
  if(t==="notice"){const n=ALERTS.find(a=>a.id===b.dataset.id);if(n)goIssueNotice(n)}
 });
 injectMessages();lockPhone();
 const initialStatus=document.querySelector("#statusbar>span:first-child");
 if(initialStatus)initialStatus.innerHTML=clock()+" <span class='tiny-notice'>▣</span>";
 setInterval(()=>{if(flow.minute<38){flow.minute++;save();injectMessages();const newArr=ALERTS.filter(n=>n.at===flow.minute);if(screen==="lock")renderLock();else if(screen==="kakao"&&!activeChat)renderKakao();else if(screen==="kakao"&&activeChat)renderChat();else if(screen==="messages")renderSMS();else if(screen==="mail")renderMail();flashIncoming(newArr)}const status=document.querySelector("#statusbar>span:first-child");if(status)status.innerHTML=clock()+" <span class='tiny-notice'>"+(shown().length?"▣":"")+"</span>"},6500);
})();
})();
