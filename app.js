/* AFTER THE ENCORE — reconstructed from supplied conversation and accessible public project metadata.
   Standalone, frontend-only; no account/API integration. Sources for historical photo assets:
   https://github.com/deff-227/yeopne/tree/main/assets */
(() => {
'use strict';
const ASSET='https://raw.githubusercontent.com/deff-227/yeopne/main/assets/';
const PHOTO=(f)=>ASSET+f;
const PHOTOS=['stage.jpg','selfie-oct24-v47-1.jpg','selfie-oct24-v47-2.jpg','selfie-oct24-v47-3.jpg','selfie-oct23-v42.jpg','selfie-09.jpg','selfie-11.jpg','selfie-15.jpg','night.jpg','flowers.jpg','guitar.jpg','sky.jpg'];
const ICONS={kakao:['#f9dd4c','💬'],x:['#080c11','𝕏'],insta:['linear-gradient(135deg,#fbd05e,#f14c91,#8553d4)','◎'],instagram:['linear-gradient(135deg,#fbd05e,#f14c91,#8553d4)','◎'],news:['#ededed','▤'],messages:['#65c1f3','✉'],mail:['#f5f5f5','✉'],gallery:['#edeaf7','✿'],phone:['#76c97b','☎'],notes:['#f2dfaa','▤'],music:['#e3b5cf','♫'],settings:['#8998a5','⚙'],browser:['#73a9e5','◉'],calendar:['#fff','26'],bubble:['#94c3fb','b']};
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

const STORE='afterTheEncore_followup_v1';
const DEFAULT={minute:0,unlocked:false,cleared:[],readRooms:[],sent:{},likedTweets:[],reposted:[],tweetReplies:{},likedInsta:[],savedInsta:[],instaReplies:{},favorited:[],musicPlaying:false,played:false,tabX:'추천',storyMuted:false,notificationsMuted:false};
let state;
try{state={...DEFAULT,...JSON.parse(localStorage.getItem(STORE)||'{}')}}catch(_){state={...DEFAULT}}
const save=()=>{try{localStorage.setItem(STORE,JSON.stringify(state))}catch(_){}};
const screen=document.getElementById('screen');
let pinBuffer='';
let homeIndex=0;
let page='lock',viewArgs={},history=[],photoIdx=0,appTab='feed',tweetExpand='',storyIndex=null,instaOpenComments={},scrollPositions={};
const escaped=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const formatText=s=>escaped(s).replace(/\n/g,'<br>');
const ICON_FILES={kakao:'icon-kakao.png',messages:'icon-messages.png',gallery:'icon-gallery.png',phone:'icon-phone.png',settings:'icon-settings.png',music:'icon-music.png',browser:'icon-internet.png',calendar:'icon-calendar.png'};
const iconApp=(name,label,sz)=>{const [bg,icon]=ICONS[name]||['#625976','✦'];const image=ICON_FILES[name];return `<button class="app-icon-button" data-open="${name}" aria-label="${escaped(label)}"><span class="app-icon ${name}" style="background:${image?'transparent':bg};color:${['kakao','news','mail','settings','calendar','notes'].includes(name)?'#273037':'#fff'};${sz?'width:46px;height:46px':''}">${image?`<img src="${PHOTO(image)}" alt="" draggable="false">`:icon}</span>${label?`<small>${escaped(label)}</small>`:''}${name==='kakao'&&unreadRoomCount()?`<span class="app-notice">${unreadRoomCount()}</span>`:''}</button>`};
const selected=(list,id)=>list.includes(id);
const sceneTime=()=>`00:${String(Math.min(59,state.minute||0)).padStart(2,'0')}`;
const timeMinute=t=>t.startsWith('23:')?-1:Number((t||'00:00').split(':')[1]||0);
const allMessages=id=>CHAT_ROOMS[id]?.messages||[];
const arrived=at=>at<0||at<=(state.minute||0);
function forward(minutes=1){const v=Math.min(26,(state.minute||0)+minutes);if(v===(state.minute||0))return;state.minute=v;save();if(['lock','home','notifications','kakao','thread','messages','mail','news'].includes(page)){const old=screen.scrollTop;render();if(!['lock','home'].includes(page))screen.scrollTop=old;}else updateStatus();}

function unreadRoomCount(){return Object.keys(CHAT_ROOMS).filter(id=>!state.readRooms.includes(id)).length}
function availableNotices(){return state.notificationsMuted?[]:ALERTS.filter(n=>arrived(n.at)&&!state.cleared.includes(n.id))}
function updateStatus(){let remain=availableNotices().length;document.getElementById('unread-dot').style.display=remain?'inline-block':'none';document.getElementById('status-time').textContent=sceneTime()}
function nav(to,args={},replace=false){if(page!==to||JSON.stringify(args)!==JSON.stringify(viewArgs)){if(!replace)history.push({page,args:viewArgs,scroll:screen.scrollTop});page=to;viewArgs=args;render()}}
function back(){if(page==='viewer'){page='gallery';render();return}if(history.length){const h=history.pop();page=h.page;viewArgs=h.args||{};render();screen.scrollTop=h.scroll||0;return}if(page!=='home'){page='home';viewArgs={};render()}}
function render(){updateStatus();const html=({lock:lockPage,pin:pinPage,home:homePage,drawer:drawerPage,notifications:notificationsPage,kakao:kakaoPage,thread:threadPage,x:xPage,instagram:instagramPage,news:newsPage,article:articlePage,messages:messagesPage,mail:mailPage,maildetail:mailDetailPage,smsthread:smsThreadPage,gallery:galleryPage,viewer:viewerPage,phone:phonePage,notes:notesPage,music:musicPage,settings:settingsPage,browser:browserPage,calendar:calendarPage,bubble:bubblePage,recent:recentPage})[page]();screen.innerHTML=html;screen.scrollTop=0;wireSpecific();}
const header=(title,sub='',actions='')=>`<div class="app-header"><button class="header-btn" data-back aria-label="뒤로">‹</button><div><h2>${title}</h2>${sub?`<p class="subheader">${sub}</p>`:''}</div><span class="header-spacer"></span>${actions}</div>`;
function lockPage(){
 const clock=sceneTime().split(':');
 const first=ALERTS.filter(n=>arrived(n.at)).slice(-2).reverse();
 return `<div class="lock-screen">
  <div class="lock-icon">♧</div><div class="lock-time"><span>${clock[0]}</span><span>${clock[1]}</span></div>
  <div class="lock-date">10월 26일 월요일</div>
  ${first.map(n=>`<button type="button" class="lock-notification" data-unlock aria-label="${escaped(n.title)}의 알림 확인"><div class="notice-top"><span><span class="kakao-mini">${n.from==='카카오톡'?'TALK':escaped(n.from)}</span> ${escaped(n.from)}</span><span>지금</span></div><div class="notice-name">${escaped(n.title)}</div><div class="notice-message">${escaped(n.message)}</div></button>`).join('')}
  <div class="lock-bottom"><button type="button" data-unlock>화면을 밀어 잠금 해제 ↑</button></div>
 </div>`;
}

function homePage(){
 const primary=['kakao','messages','mail','news','x','instagram','gallery','browser','calendar','notes','music','settings'];
 const tools=['phone','kakao','messages','mail','news','calendar','notes','settings'];
 return `<div class="home"><div class="home-carousel" id="home-carousel">
 <section class="home-page page-primary"><div class="home-top">
 <button class="weather-widget" data-open="calendar"><span class="weather-moon">☾</span><div class="degree">13°</div><small>서울특별시<br>맑음 · 최저 11° / 최고 20°</small><small style="margin-top:5px">10.26 오전 ${sceneTime()}</small></button>
 <div class="mini-widgets"><button class="date-widget" data-open="calendar">10월 26일 월요일<b>공연 다음 날</b></button><button class="schedule-widget" data-open="news">실시간 이슈<b>열애설 기사 확산</b><span style="font-size:9px;opacity:.72">AFTER THE ENCORE</span></button></div></div>
 <button class="search-widget" data-open="browser"><span class="google-g">G</span><span style="flex:1;text-align:left;opacity:.60;font-size:12px">검색어 또는 URL 입력</span><span>⌕</span><span>♫</span></button>
 <div class="home-apps">${primary.map(id=>iconApp(id,({kakao:'카카오톡',messages:'메시지',mail:'Gmail',news:'NAVER 뉴스',x:'X',instagram:'Instagram',gallery:'갤러리',browser:'인터넷',calendar:'캘린더',notes:'Samsung Notes',music:'YT Music',settings:'설정'})[id])).join('')}</div></section>
 <section class="home-page page-tools"><h3>자주 쓰는 앱</h3><div class="home-apps">${tools.map(id=>iconApp(id,({phone:'전화',kakao:'카카오톡',messages:'메시지',mail:'Gmail',news:'뉴스',calendar:'캘린더',notes:'Samsung Notes',settings:'설정'})[id])).join('')}</div><button class="home-note-widget" data-open="notes"><small>Samsung Notes</small><b>막콘 끝나고</b><p>공연 잘 끝냈다.<br>아직도 귓가에 소리가 남아 있다.</p></button></section>
 <section class="home-page page-music"><h3>어젯밤의 기록</h3><button class="home-note-widget" data-open="gallery"><img src="${PHOTO('stage.jpg')}" alt="공연장 사진"><small>갤러리</small><b>마지막 공연</b><p>2026.10.25 · 막콘을 끝낸 밤</p></button><div class="home-apps">${[['gallery','갤러리'],['music','YT Music'],['x','X'],['instagram','Instagram']].map(x=>iconApp(...x)).join('')}</div></section>
 </div><div class="dots">${[0,1,2].map(i=>`<button type="button" data-home-page="${i}" aria-label="홈 화면 ${i+1}" class="${i===homeIndex?'active':''}">●</button>`).join('')}</div>
 <div class="dock">${[['phone','전화'],['kakao','카카오톡'],['messages','메시지'],['browser','인터넷']].map(a=>iconApp(...a)).join('')}</div>
 <button class="drawer-button" data-open="drawer" aria-label="모든 앱">⌃</button></div>`;
}
function drawerPage(){
 const apps=[['kakao','카카오톡'],['messages','메시지'],['phone','전화'],['mail','Gmail'],['news','NAVER 뉴스'],['x','X'],['instagram','Instagram'],['gallery','갤러리'],['browser','인터넷'],['calendar','캘린더'],['notes','Samsung Notes'],['music','YT Music'],['settings','설정']];
 return `<div class="app-page drawer-native"><div class="drawer-title">모든 앱</div><div class="home-apps">${apps.map(a=>iconApp(...a)).join('')}</div><button class="drawer-dismiss" data-open="home">홈 화면으로</button></div>`;
}

function pinPage(){
 const dots=[0,1,2,3].map(i=>`<span class="pin-dot ${i<pinBuffer.length?'filled':''}"></span>`).join('');
 const keys=[1,2,3,4,5,6,7,8,9,'',0,'⌫'].map((v,i)=>v===''?'<span></span>':`<button type="button" data-pin-key="${v}" aria-label="${v==='⌫'?'한 자리 지우기':v}">${v}<small>${['','ABC','DEF','GHI','JKL','MNO','PQRS','TUV','WXYZ'][i]||' '}</small></button>`).join('');
 return `<div class="pin-screen"><h2>PIN 입력</h2><div class="pin-hint" id="pin-message">휴대전화의 잠금을 해제하려면 PIN을 입력하세요.</div><div class="pin-dots">${dots}</div><div class="keypad">${keys}</div><div class="lock-tip">힌트 · 0613</div></div>`;
}
function notificationsPage(){const notes=availableNotices();return `<div class="notice-sheet"><div class="notice-heading"><div><p>10월 26일 월요일</p><h2>${sceneTime()}</h2></div><button class="header-btn" data-back aria-label="닫기">✕</button></div><div class="quickbar"><button class="quick-tile on" data-quick="wifi"><strong>◉ Wi-Fi</strong>연결됨</button><button class="quick-tile on" data-quick="sound"><strong>♫ 소리</strong>벨소리</button><button class="quick-tile" data-quick="flight"><strong>✈ 비행기</strong>꺼짐</button></div><div class="brightness"><span></span></div><div class="noti-actions"><strong>알림 ${notes.length}개</strong><button class="text-btn" data-clear-notices>모두 지우기</button></div>${notes.length?notes.slice().reverse().map(n=>`<button class="notification" data-notice="${n.id}"><span class="notice-icon">${n.icon}</span><span class="notice-message"><b>${escaped(n.title)}</b><small>${escaped(n.message)}</small></span><time>00:${String(n.at).padStart(2,'0')}</time></button>`).join(''):'<div class="empty">알림이 없다.<br>대화·문자·메일은 그대로 남아 있다.</div>'}<div class="silent-row"><span>전체 알림</span><button data-mute-notices>${state.notificationsMuted?'다시 켜기':'알림 끄기'}</button></div></div>`}

function kakaoPage(){return `<div class="app-page">${header('채팅','',`<button class="header-btn" data-open="notifications">♧</button>`)}<div class="tabs"><button class="active">채팅</button><button data-open="kakao">친구</button></div>${Object.entries(CHAT_ROOMS).map(([id,ch])=>{const msgs=getRoomMessages(id);const last=(state.sent[id]||[]).at(-1);let line=last?.text||msgs.at(-1)?.text||'새 메시지 없음';const badge=state.readRooms.includes(id)?'':'<span class="count">1</span>';return `<button class="chat-row" data-room="${id}"><span class="avatar" style="background:${ch.color}">${ch.avatar?`<img src="${PHOTO(ch.avatar)}" alt="">`:(ch.initial||'●')}</span><span class="chat-summary"><strong>${escaped(ch.name)}</strong><p>${escaped(line)}</p></span><span class="chat-meta"><span>${last?sceneTime():msgs.at(-1)?.time||'어제'}</span>${badge}</span></button>`}).join('')}</div>`}
function getRoomMessages(id){return [...CHAT_ROOMS[id].messages.filter(m=>arrived(timeMinute(m[2]))).map((m,i)=>({who:m[0],text:m[1],time:m[2],key:'seed-'+i})),...(state.sent[id]||[]).map((m,i)=>({...m,who:'me',key:'added-'+i}))]}
function threadPage(){const id=viewArgs.id;if(!CHAT_ROOMS[id])return kakaoPage();const ch=CHAT_ROOMS[id];state.readRooms=Array.from(new Set([...state.readRooms,id]));save();const messages=getRoomMessages(id);return `<div class="thread">${header(escaped(ch.name),'2026년 10월 26일 · 새벽',`<button class="header-btn" data-open="phone">☎</button>`)}<div class="thread-scroll"><div class="day-divider">2026년 10월 25일 일요일 ~ 26일 월요일</div>${messages.map((m,i)=>{let mine=m.who==='me';let who=m.who==='yechan'?'신예찬':m.who==='wonsang'?'조원상':m.who==='gwangil'?'신광일':ch.name;let init=who.substring(0,1);return `<div class="bubble-row ${mine?'me':''}">${mine?'':`<span class="bubble-avatar">${escaped(init)}</span>`}<div class="bubble-column">${!mine&&id==='group'?`<div class="bubble-author">${escaped(who)}</div>`:''}<div class="bubble-text">${formatText(m.text)}</div></div><span class="bubble-time">${escaped(m.time)}</span></div>`}).join('')}</div><form class="compose" id="compose" data-compose="${id}"><input id="compose-input" aria-label="메시지 입력" autocomplete="off" placeholder="메시지 보내기" maxlength="300"/><button type="submit">전송</button></form></div>`}
function xPage(){let ordered=state.tabX==='최신'?TWEETS.slice().reverse():TWEETS;return `<div class="app-page"><div class="feed-top"><button data-back style="font-size:22px">‹</button><strong>𝕏</strong><button data-open="settings" style="font-size:20px">⚙</button></div><div class="x-trends">실시간 트렌드 · #최상엽 #신예찬 #루시막콘</div><div class="tabs"><button class="${state.tabX==='추천'?'active':''}" data-x-tab="추천">추천</button><button class="${state.tabX==='최신'?'active':''}" data-x-tab="최신">최신</button></div>${ordered.map(t=>tweetCard(t)).join('')}</div>`}
function tweetCard(t){const like=selected(state.likedTweets,t.id),rt=selected(state.reposted,t.id),replies=[...t.replies,...(state.tweetReplies[t.id]||[]).map(text=>['@me',text])];return `<div class="feed-post"><span class="avatar">${t.avatar}</span><div class="feed-main"><div class="feed-byline"><strong>${escaped(t.name)}</strong><span>${escaped(t.handle)} · ${t.date}</span></div><div class="feed-copy">${formatText(t.text)}</div>${t.article?`<button class="media-card" data-open="article"><img src="${PHOTO('stage.jpg')}" alt="공연장 전경" onerror="this.style.display='none'"><div class="media-body"><small>연예24 · 단독</small><strong>[단독] 최상엽·신예찬, 공연 뒤 차량 안 입맞춤 포착</strong><small>연예 뉴스 · 오늘 00:02</small></div></button>`:''}<div class="feed-actions"><button data-tweet-replies="${t.id}">♡ ${t.n[0]+replies.length-t.replies.length}</button><button class="${rt?'reposted':''}" data-repost="${t.id}">⇄ ${t.n[1]+Number(rt)}</button><button class="${like?'active':''}" data-like-tweet="${t.id}">${like?'♥':'♡'} ${t.n[2]+Number(like)}</button><button data-copy-tweet="${t.id}">↗</button></div>${tweetExpand===t.id?`<div class="replies">${replies.map(r=>`<div><span class="tweet-reply-name">${escaped(r[0])}</span>${escaped(r[1])}</div>`).join('')}</div><form class="reply-box" data-reply="${t.id}"><input placeholder="답글 작성" aria-label="답글" maxlength="250" required><button type="submit">답글</button></form>`:''}</div></div>`}
function instagramPage(){return `<div class="app-page"><div class="insta-head"><button data-back style="font-size:20px">‹</button><strong>Instagram</strong><button data-open="messages" style="font-size:20px">♡</button></div><div class="stories">${[['내 스토리','profile-sangyeop-v20.jpg'],['stage.1025','stage.jpg'],['blue_moment','flowers.jpg'],['slow.tonight','night.jpg'],['sound__room','guitar.jpg']].map((s,i)=>`<button class="story" data-story="${i}"><div class="story-ring"><img src="${PHOTO(s[1])}" alt=""></div>${s[0]}</button>`).join('')}</div>${INSTA.map(p=>instaPost(p)).join('')}</div>`}
function instaPost(p){const like=selected(state.likedInsta,p.id),saved=selected(state.savedInsta,p.id),comments=[...p.comments,...(state.instaReplies[p.id]||[]).map(t=>['me',t])];return `<article class="insta-post"><div class="insta-user"><span class="avatar"><img src="${PHOTO(p.avatar)}" alt=""></span><span>${p.user}<small>공연의 밤</small></span><span style="margin-left:auto">•••</span></div><img class="insta-image" loading="lazy" src="${PHOTO(p.photo)}" alt="공연 사진"><div class="insta-actions"><button data-like-ig="${p.id}" style="color:${like?'#f27885':'#fff'}">${like?'♥':'♡'}</button><button data-comments-ig="${p.id}">♧</button><button data-share-ig="${p.id}">➤</button><button data-save-ig="${p.id}" class="save">${saved?'▣':'▢'}</button></div><div class="insta-caption"><strong>좋아요 ${p.likes+Number(like)}개</strong><p><b>${p.user}</b> ${escaped(p.caption)}</p><button data-comments-ig="${p.id}">댓글 ${comments.length}개 모두 보기</button>${(instaOpenComments[p.id]?comments:comments.slice(0,2)).map(c=>`<div class="ig-comment"><b>${escaped(c[0])}</b> ${escaped(c[1])}</div>`).join('')}${instaOpenComments[p.id]?`<form class="reply-box" data-ig-reply="${p.id}"><input required maxlength="200" aria-label="댓글" placeholder="댓글 달기..."><button type="submit">게시</button></form>`:''}<small>${p.time} 전</small></div></article>`}
const ARTICLES=[
 {id:'kiss',time:'00:02',source:'연예24',title:'[단독] 최상엽·신예찬, 공연 뒤 차량 안 입맞춤 포착',summary:'공연을 마친 뒤 주차장에 세워진 차량 내부를 찍은 사진이 온라인에 유포되며 두 사람의 관계에 대한 추측이 이어지고 있다.',paragraphs:['25일 늦은 밤 공연장을 빠져나온 두 사람이 같은 차량에 탑승한 것으로 보이는 사진이 외부로 전해졌다. 일부 사진에는 차 안에서 서로 가까이 마주한 모습이 담긴 것으로 주장된다.','촬영 시점과 원본의 맥락은 독립적으로 검증되지 않았다. 사진 게시자는 얼굴이 확인되는 원본을 추가로 확보했다고 밝혔다.','열애 여부에 대한 공식 입장은 아직 발표되지 않았다. 관련 문의가 이어지는 가운데 사생활을 침해하는 촬영 방식에 대한 비판도 나오고 있다.']},
 {id:'hands',time:'00:05',source:'연예포커스',title:'손잡고 주차장으로…최상엽·신예찬 심야 데이트설',summary:'차량 사진과 공연 뒤 동선을 나란히 놓은 게시물이 확산되고 있다.',paragraphs:['공연 종료 직후 두 사람의 이동 동선을 연결하는 온라인 게시물이 잇따르고 있다.','확인되지 않은 정황과 익명 게시물만으로 관계를 단정하기는 어렵다.']},
 {id:'ring',time:'00:08',source:'이슈톡',title:'같은 반지 포착? 최상엽·신예찬, 과거 사진까지 재조명',summary:'손가락 확대 사진과 팬들이 모은 과거 영상 캡처가 온라인에 퍼졌다.',paragraphs:['온라인 커뮤니티에서는 두 사람이 착용한 반지가 비슷하다는 주장이 등장했다.','유사한 디자인이라는 사실만으로 연인 관계를 확인할 수는 없지만 관련 게시물에는 수많은 댓글이 달리고 있다.']},
 {id:'follow',time:'00:13',source:'뉴스브릿지',title:'소속사 확인 중에도 사진 추가 확산…새벽 내내 문의 쇄도',summary:'소속사 공식 발표가 나오지 않은 상황에서 관련 기사들이 속속 올라오고 있다.',paragraphs:['첫 보도 뒤 짧은 시간 사이 다수의 매체가 사진과 SNS 반응을 인용해 후속 기사를 발행했다.','소속사는 관련 내용을 확인 중인 것으로 알려졌으며 공식 입장은 아직 나오지 않았다.']},
 {id:'fan',time:'00:17',source:'핫이슈NOW',title:'공연 여운도 가시기 전…갑작스러운 열애설에 엇갈린 반응',summary:'축하와 당혹감, 과도한 사생활 추적을 비판하는 반응이 한꺼번에 쏟아졌다.',paragraphs:['일부 팬들은 놀라움을 나타낸 반면, 사진 촬영과 유포 방식 자체가 사생활 침해라는 의견도 적지 않다.','공연에 관한 이야기로 가득했던 온라인 공간은 밤사이 빠르게 다른 화제로 옮겨갔다.']}
];
const currentArticle=()=>ARTICLES.find(a=>a.id===(viewArgs.id||'kiss'))||ARTICLES[0];
function newsPage(){return `<div class="app-page news-native"><div class="news-top">N <span>뉴스</span><small>속보　연예　랭킹　스포츠</small></div><div class="news-bar">실시간 이슈 <b>최상엽 · 신예찬</b></div><div class="article-list"><p class="section-label">연예 · 최신기사</p>${ARTICLES.filter(a=>timeMinute(a.time)<=Math.max(state.minute,2)).map((a,i)=>`<button class="news-item" data-article="${a.id}"><span class="news-source">${a.source} · ${a.time}</span><strong>${a.title}</strong><span class="news-summary">${a.summary}</span>${i===0?'<div class="news-visual">주차장 / 차량 내부 <span>IMAGE 01—03</span></div>':''}</button>`).join('')}</div></div>`}
function articlePage(){const a=currentArticle();return `<div class="app-page news-native"><div class="news-top">N <span>뉴스</span><small>${a.source} · 연예</small></div>${header('기사 상세','2026.10.26 · '+a.time)}<article class="article-body"><p class="news-source">${a.source}</p><h1>${a.title}</h1><div class="article-meta">입력 2026.10.26 ${a.time} | 연예뉴스</div><div class="leak-photo"><div class="leak-label">PARKING LOT · CAM 03</div><div class="leak-light"></div><div class="leak-bottom"><span>촬영본 일부</span><span>00 / 25</span></div></div><div class="article-caption">유포 중인 이미지 관련 자료</div>${a.paragraphs.map(t=>`<p>${escaped(t)}</p>`).join('')}<div class="byline">${a.source} 연예취재팀</div><div class="article-end"><button class="text-btn" data-open="x">X 반응 보기 ↗</button><button class="text-btn" data-open="instagram">Instagram ↗</button><button class="text-btn" data-open="news">다른 기사</button></div></article></div>`}
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
function messagesPage(){return `<div class="app-page sms-app">${header('메시지','대화')}<div class="sms-list">${SMS_THREADS.filter(t=>arrived(t.at)).map(t=>`<button class="sms-row" data-sms="${t.id}"><span class="avatar sms-avatar">${t.sender.slice(0,3)}</span><span class="sms-brief"><strong>${escaped(t.sender)}</strong><small>${escaped(t.body.filter(m=>arrived(timeMinute(m[0]))).at(-1)?.[1]||'새 메시지')}</small></span><time>00:${String(t.at).padStart(2,'0')}</time></button>`).join('')}</div></div>`}
function photoProof(){return `<div class="photo-proof" aria-label="수신된 사진 3장"><div class="photo-proof-label">이미지 3장</div><div class="proof-grid">${[1,2,3].map(i=>`<button data-proof="${i}" class="proof-tile"><span>PHOTO ${String(i).padStart(2,'0')}</span><b>${i===1?'PARKING LOT':i===2?'PASSENGER SEAT':'CLOSE-UP'}</b><small>이미지 ${i}</small></button>`).join('')}</div></div>`}
function smsThreadPage(){const t=SMS_THREADS.find(x=>x.id===viewArgs.id)||SMS_THREADS[0];return `<div class="app-page sms-app">${header(escaped(t.sender),'메시지')}<div class="sms-thread"><div class="sms-day">10월 26일 월요일</div>${t.body.filter(m=>arrived(timeMinute(m[0]))).map(m=>`<div class="sms-msg-time">${m[0]}</div>${m[1]==='[사진 3장]'?photoProof():`<div class="sms-bubble">${formatText(m[1])}</div>`}`).join('')}<div class="sms-write"><input disabled placeholder="메시지 입력"/><button disabled>➤</button></div></div></div>`}
function mailPage(){const filtered=MAILS.filter(m=>arrived(m.at));return `<div class="app-page mail-app"><div class="mail-top"><button data-back>‹</button><b>Gmail</b><span>⌕　◯</span></div><div class="mail-category">기본　 <b>받은편지함</b> <span>${filtered.length}개</span></div>${filtered.slice().reverse().map(m=>`<button class="mail-row" data-mail="${m.id}"><span class="mail-avatar">${m.from[0]}</span><span class="mail-data"><strong>${escaped(m.from)}</strong><b>${escaped(m.title)}</b><small>${escaped(m.body.slice(0,56))}…</small></span><time>00:${String(m.at).padStart(2,'0')}</time></button>`).join('')}</div>`}
function mailDetailPage(){const m=MAILS.find(x=>x.id===viewArgs.id)||MAILS[0];return `<div class="app-page mail-app"><div class="mail-top"><button data-back>‹</button><b>Gmail</b><span>⋮</span></div><div class="mail-detail"><h2>${escaped(m.title)}</h2><p>${escaped(m.from)} <small>${escaped(m.address)}</small></p><div class="mail-divider"></div><p>${escaped(m.body)}</p><div class="mail-divider"></div><button data-open="mail">받은편지함으로 돌아가기</button></div></div>`}

function galleryPage(){return `<div class="app-page"><div class="gallery-head"><strong>갤러리</strong><small>${PHOTOS.length}장의 사진</small></div><div class="tabs"><button class="active">사진</button><button data-show-favorites>즐겨찾기 ${state.favorited.length}</button></div><div class="section-label">10월의 기록</div><div class="gallery-grid">${PHOTOS.map((f,i)=>`<button data-photo="${i}"><img loading="lazy" src="${PHOTO(f)}" alt="공연 사진 ${i+1}"></button>`).join('')}</div></div>`}
function viewerPage(){const name=PHOTOS[photoIdx]||PHOTOS[0];return `<div class="viewer"><div class="viewer-top"><button data-back>✕</button><span>${photoIdx+1} / ${PHOTOS.length}</span><button data-favorite="${photoIdx}">${selected(state.favorited,photoIdx)?'♥':'♡'}</button></div><img src="${PHOTO(name)}" alt="공연 사진 ${photoIdx+1}"><div class="viewer-controls"><button data-photo-prev>‹</button><span>26 OCT 2026 · ALBUM</span><button data-photo-next>›</button></div></div>`}
function phonePage(){return `<div class="app-page">${header('전화','최근 기록')}${[['예찬이형♥','10월 25일 · 23:18'],['원상이형','10월 25일 · 21:52'],['광일이','10월 25일 · 14:11'],['엄마','10월 25일 · 12:04']].map(([n,t])=>`<div class="call-item"><span class="avatar">☎</span><span><b>${n}</b><br><small style="color:#8f9fa8">통화 기록</small></span><span class="call-time">${t}</span></div>`).join('')}</div>`}
function notesPage(){return `<div class="app-page">${header('Samsung Notes','모든 노트')}<div class="memo"><div class="memo-card"><small>2026.10.25 · 공연 끝나고</small><strong>막콘</strong><p>마지막 공연도 좋은 밤 좋은 꿈\n왈왈이들과 평생 버스킹</p></div><div class="memo-card"><small>2026.10.26 · 00:03</small><strong>아직 정리되지 않은 것들</strong><p>오늘 공연 진짜 끝났다.\n정신없어서 마지막 인사도 제대로 기억 안 남.\n일단 내일 다시 생각하자.</p></div></div></div>`}
function musicPage(){return `<div class="app-page">${header('음악','지금 듣는 음악')}<div class="music-wrap"><div class="record">♫</div><h2>나는 너야</h2><p>LUCY · Fan Song</p><div class="music-line"></div><div class="music-controls"><button data-prev-song>⏮</button><button data-play>${state.musicPlaying?'Ⅱ':'▶'}</button><button data-next-song>⏭</button></div></div></div>`}
function settingsPage(){return `<div class="app-page">${header('설정','휴대폰 환경')}<div class="settings-list"><div class="settings-item"><strong>배경 시점</strong><span>2026.10.26. ${sceneTime()}</span></div><div class="settings-item"><strong>기록 저장</strong><span>이 브라우저에 저장</span></div><div class="settings-item"><strong>전체 알림</strong><button data-mute-notices>${state.notificationsMuted?'다시 켜기':'알림 끄기'}</button></div><div class="settings-item"><strong>대화 기록</strong><span>알림과 별도 보관</span></div><div class="settings-item"><strong>이전 휴대폰</strong><a href="https://deff-227.github.io/yeopne/" target="_blank" rel="noopener noreferrer">열기 ↗</a></div><button class="reset-btn" data-reset>처음부터 다시 시작</button></div></div>`}

function browserPage(){return `<div class="app-page">${header('인터넷','최근 방문한 페이지')}<div class="input-wrapper"><div class="fake-input">주소 또는 검색어 입력</div></div><p class="section-label">즐겨찾기</p>${[['N 뉴스','news'],['X','x'],['Instagram','instagram']].map(([name,id])=>`<button class="chat-row" data-open="${id}"><span class="avatar">${id==='news'?'N':id==='x'?'𝕏':'◎'}</span><span class="chat-summary"><strong>${name}</strong><p>최근 방문함</p></span><span>›</span></button>`).join('')}</div>`}

function calendarPage(){return `<div class="app-page">${header('캘린더','2026년 10월')}<div style="text-align:center;padding:22px"><h1>26</h1><p style="font-size:12px;color:#a0b0b6">월요일</p></div><div class="memo"><div class="memo-card"><small>10월 23일 ~ 25일</small><strong>LUCY 공연</strong><p>첫콘 · 중콘 · 막콘</p></div><div class="memo-card"><small>10월 26일</small><strong>공연 다음 날</strong><p>잠깐 쉬고, 정리하기</p></div></div></div>`}
function bubblePage(){return `<div class="app-page">${header('bubble','STAR')}<div class="memo"><div class="memo-card"><small>2026년 10월 24일</small><p>중콘도 역시 최고여따!!!\n짐짜 너무 재밌어서 정신없이 시간가는줄모르고 뛰어놀아따 ㅎ\n역시 너희랑 노는게 잴재미써 ㅎ</p></div><div class="memo-card"><small>2026년 10월 25일 · 막콘</small><p>마지막 공연도 좋은 밤 좋은 꿈\n왈왈이들과 평생 버스킹</p></div></div></div>`}
function recentPage(){return `<div class="app-page">${header('최근 앱')}<div class="memo">${[['카카오톡','kakao'],['X','x'],['Instagram','instagram'],['뉴스','news'],['갤러리','gallery']].map(([name,key])=>`<button class="memo-card" data-open="${key}" style="display:block;width:100%;text-align:left;color:#fff">${name} ↗</button>`).join('')}</div></div>`}
function flip(list,id){const s=new Set(list);s.has(id)?s.delete(id):s.add(id);return [...s]}
function toast(msg){const prev=document.getElementById('toast');if(prev)prev.remove();const el=document.createElement('div');el.id='toast';el.textContent=msg;el.style.cssText='position:absolute;bottom:42px;left:15%;width:70%;background:#d6e4ce;color:#203027;padding:11px 10px;text-align:center;font-size:12px;border-radius:99px;z-index:25;box-shadow:0 5px 20px #0009';document.querySelector('.phone-surface').appendChild(el);setTimeout(()=>el.remove(),2200)}
function modal(title,body,confirm){const layer=document.getElementById('modal-layer');layer.hidden=false;layer.innerHTML=`<div class="modal-card"><h3>${escaped(title)}</h3><p>${escaped(body)}</p><footer><button data-modal-cancel>취소</button><button class="danger" data-modal-confirm>확인</button></footer></div>`;layer.querySelector('[data-modal-cancel]').onclick=()=>{layer.hidden=true;layer.innerHTML=''};layer.querySelector('[data-modal-confirm]').onclick=()=>{layer.hidden=true;layer.innerHTML='';confirm()}}
function wireSpecific(){if(page==='home'){const slider=screen.querySelector('#home-carousel');if(slider){requestAnimationFrame(()=>{slider.scrollLeft=homeIndex*slider.clientWidth});let sx=0,sy=0;slider.addEventListener('pointerdown',e=>{sx=e.clientX;sy=e.clientY});slider.addEventListener('pointerup',e=>{const dx=e.clientX-sx,dy=e.clientY-sy;if(Math.abs(dx)>50&&Math.abs(dy)<90){homeIndex=Math.max(0,Math.min(2,homeIndex+(dx<0?1:-1)));slider.scrollTo({left:homeIndex*slider.clientWidth,behavior:'smooth'})}});slider.addEventListener('scroll',()=>{const i=Math.round(slider.scrollLeft/Math.max(1,slider.clientWidth));homeIndex=Math.max(0,Math.min(2,i));screen.querySelectorAll('.dots [data-home-page]').forEach((b,n)=>b.classList.toggle('active',n===homeIndex))},{passive:true})}}if(page==='thread'){const box=document.querySelector('.thread-scroll');if(box)box.scrollTop=box.scrollHeight}}
function handleClick(e){const el=e.target.closest('button,a');if(!el||el.tagName==='A')return;
 const ds=el.dataset;
 if('unlock' in ds){pinBuffer='';nav('pin');return}
 if('pinKey' in ds){if(ds.pinKey==='⌫')pinBuffer=pinBuffer.slice(0,-1);else if(pinBuffer.length<4)pinBuffer+=ds.pinKey;if(pinBuffer.length===4){if(pinBuffer==='0613'){state.unlocked=true;save();pinBuffer='';nav('home',{},true);return}pinBuffer='';render();const msg=document.getElementById('pin-message');if(msg)msg.textContent='PIN이 올바르지 않습니다.';return}render();return}
 if('back' in ds){back();return}
 if('homePage' in ds){homeIndex=Number(ds.homePage)||0;const slider=screen.querySelector('#home-carousel');slider?.scrollTo({left:homeIndex*slider.clientWidth,behavior:'smooth'});screen.querySelectorAll('.dots [data-home-page]').forEach((b,n)=>b.classList.toggle('active',n===homeIndex));return}
 if('open' in ds){if(ds.open==='news'&&state.minute<2)forward(2);if(ds.open==='x'&&state.minute<4)forward(4);nav(ds.open);return}
 if('article' in ds){nav('article',{id:ds.article});return}
 if('sms' in ds){nav('smsthread',{id:ds.sms});return}
 if('mail' in ds){nav('maildetail',{id:ds.mail});return}
 if('proof' in ds){modal('촬영본 '+ds.proof,'주차장에서 촬영됐다는 사진이 첨부되어 있습니다. 선명한 원본은 함께 오지 않았습니다.',()=>{});return}
 if('notice' in ds){const n=ALERTS.find(x=>x.id===ds.notice);if(!n)return;state.cleared=[...new Set([...state.cleared,n.id])];save();if(CHAT_ROOMS[n.target])nav('thread',{id:n.target});else if(n.target.startsWith('article'))nav('article',{id:n.target.split(':')[1]||'kiss'});else if(n.target.startsWith('sms'))nav('smsthread',{id:n.target});else nav(n.target);return}
 if('clearNotices' in ds){state.cleared=[...new Set([...state.cleared,...ALERTS.filter(n=>arrived(n.at)).map(n=>n.id)])];save();render();toast('알림만 지웠다. 대화는 보존된다.');return}
 if('muteNotices' in ds){state.notificationsMuted=!state.notificationsMuted;save();render();return}
 if('quick' in ds){el.classList.toggle('on');return}
 if('room' in ds){nav('thread',{id:ds.room});return}
 if('xTab' in ds){state.tabX=ds.xTab;save();render();return}
 if('likeTweet' in ds){state.likedTweets=flip(state.likedTweets,ds.likeTweet);save();let scroll=screen.scrollTop;render();screen.scrollTop=scroll;return}
 if('repost' in ds){state.reposted=flip(state.reposted,ds.repost);save();let scroll=screen.scrollTop;render();screen.scrollTop=scroll;return}
 if('tweetReplies' in ds){tweetExpand=tweetExpand===ds.tweetReplies?'':ds.tweetReplies;let scroll=screen.scrollTop;render();screen.scrollTop=scroll;return}
 if('copyTweet' in ds){const t=TWEETS.find(t=>t.id===ds.copyTweet);if(navigator.clipboard?.writeText)navigator.clipboard.writeText(t.text).then(()=>toast('게시물 내용을 복사했다')).catch(()=>toast('복사할 수 없다'));else toast('복사 기능을 지원하지 않는다');return}
 if('likeIg' in ds){state.likedInsta=flip(state.likedInsta,ds.likeIg);save();let scroll=screen.scrollTop;render();screen.scrollTop=scroll;return}
 if('saveIg' in ds){state.savedInsta=flip(state.savedInsta,ds.saveIg);save();let scroll=screen.scrollTop;render();screen.scrollTop=scroll;return}
 if('commentsIg' in ds){instaOpenComments[ds.commentsIg]=!instaOpenComments[ds.commentsIg];let scroll=screen.scrollTop;render();screen.scrollTop=scroll;return}
 if('shareIg' in ds){toast('공유 링크가 준비되지 않았다');return}
 if('story' in ds){storyIndex=Number(ds.story);toast('스토리를 확인했다');return}
 if('photo' in ds){photoIdx=Number(ds.photo);nav('viewer');return}
 if('photoPrev' in ds){photoIdx=(photoIdx+PHOTOS.length-1)%PHOTOS.length;render();return}
 if('photoNext' in ds){photoIdx=(photoIdx+1)%PHOTOS.length;render();return}
 if('favorite' in ds){state.favorited=flip(state.favorited,Number(ds.favorite));save();render();return}
 if('showFavorites' in ds){const liked=state.favorited;toast(liked.length?`즐겨찾기 ${liked.length}장 · 사진을 눌러 하트 설정`:'즐겨찾기한 사진이 없다');return}
 if('play' in ds){state.musicPlaying=!state.musicPlaying;save();render();toast('실제 음원 재생은 지원하지 않는다');return}
 if('nextSong' in ds||'prevSong' in ds){toast('현재 재생목록은 나는 너야 한 곡이다');return}
 if('reset' in ds){modal('처음부터 다시 시작','알림과 읽음, 작성한 메시지, 진행 시각을 초기화한다. 기본 대화는 삭제되지 않는다.',()=>{state={...DEFAULT};save();history=[];nav('lock',{},true)});return}
}
function handleSubmit(e){const form=e.target.closest('form');if(!form)return;e.preventDefault();const id=form.dataset.compose;if(id&&CHAT_ROOMS[id]){const inp=form.querySelector('input'),text=inp.value.trim();if(!text)return;state.sent[id]=[...(state.sent[id]||[]),{text,time:sceneTime()}];state.readRooms=Array.from(new Set([...state.readRooms,id]));save();render();return}
 const tid=form.dataset.reply;if(tid){const inp=form.querySelector('input'),txt=inp.value.trim();if(!txt)return;state.tweetReplies[tid]=[...(state.tweetReplies[tid]||[]),txt];save();let scroll=screen.scrollTop;render();screen.scrollTop=scroll;return}
 const iid=form.dataset.igReply;if(iid){const inp=form.querySelector('input'),txt=inp.value.trim();if(!txt)return;state.instaReplies[iid]=[...(state.instaReplies[iid]||[]),txt];save();let scroll=screen.scrollTop;render();screen.scrollTop=scroll;return}}
screen.addEventListener('click',handleClick);screen.addEventListener('submit',handleSubmit);
document.getElementById('status-toggle').onclick=()=>nav('notifications');
document.getElementById('home-btn').onclick=()=>{if(!state.unlocked){pinBuffer='';nav('pin');return}page='home';history=[];render()};
document.getElementById('back-btn').onclick=back;
document.getElementById('recent-btn').onclick=()=>nav('recent');
let startY=0;screen.addEventListener('touchstart',e=>{startY=e.touches[0].clientY},{passive:true});screen.addEventListener('touchend',e=>{if(page!=='notifications'&&page!=='viewer'&&startY<180&&e.changedTouches[0].clientY-startY>85){nav('notifications')}else if(page==='lock'&&startY-e.changedTouches[0].clientY>65){pinBuffer='';nav('pin')}else if(page==='viewer'){const diff=e.changedTouches[0].clientX-(window.__swipeX||0);if(Math.abs(diff)>60){photoIdx=(photoIdx+(diff<0?1:PHOTOS.length-1))%PHOTOS.length;render()}}},{passive:true});screen.addEventListener('touchstart',e=>{window.__swipeX=e.touches[0].clientX},{passive:true});
document.getElementById('foldBtn').onclick=()=>{const dev=document.getElementById('device');dev.classList.toggle('folded-open');document.getElementById('foldBtn').innerHTML=dev.classList.contains('folded-open')?'<span>▯</span> 접어 보기':'<span>▣</span> 펼쳐 보기';};
for(const id of ['power-display','power-side'])document.getElementById(id).onclick=()=>{state.unlocked=false;save();pinBuffer='';history=[];nav('lock',{},true)};
document.addEventListener('keydown',e=>{if(page!=='pin')return;if(/^\d$/.test(e.key)||e.key==='Backspace'){const key=e.key==='Backspace'?'⌫':e.key;const b=screen.querySelector('[data-pin-key="'+key+'"]');b?.click();}});
page=state.unlocked?'home':'lock';render();
let pulse=0;setInterval(()=>{if(document.hidden||document.activeElement?.matches?.('input,textarea'))return;pulse++;if(pulse%3===0)forward(1)},1000);
document.addEventListener('visibilitychange',()=>{if(!document.hidden){pulse=0;render()}});
})();
