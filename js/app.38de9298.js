(function(e){function t(t){for(var r,s,n=t[0],c=t[1],p=t[2],h=0,u=[];h<n.length;h++)s=n[h],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&u.push(i[s][0]),i[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(u.length)u.shift()();return o.push.apply(o,p||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,n=1;n<a.length;n++){var c=a[n];0!==i[c]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},i={app:0},o=[];function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=t,n=n.slice();for(var p=0;p<n.length;p++)t(n[p]);var l=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"0453":function(e,t,a){},"10ff":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("main",[e._m(0),a("section",{staticClass:"section"},[a("div",{staticClass:"container"},[a("resume-contacts"),a("resume-timeline")],1)])])])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"hero is-primary is-bold"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title"},[e._v("Seol Park")])])])])}],s=(a("92c6"),a("7f10"),a("27d6")),n=a.n(s),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h4",{staticClass:"title is-4"},[e._v("인적사항")]),e._l(e.contacts,(function(t){return a("div",{staticClass:"level is-mobile",attrs:{title:t.title}},[a("div",{staticClass:"level-left"},[a("span",{staticClass:"level-item icon"},[a("i",{staticClass:"fa",class:"fa-"+t.icon})]),a("a",{staticClass:"level-item",attrs:{href:t.href}},[e._v(e._s(t.text))])])])}))],2)},p=[],l=[{title:"생년월일",text:"2000년 6월 17일",icon:"birthday-cake",href:"#"},{title:"전화번호",text:"+82 10-9169-4579",icon:"phone",href:"tel:+821091694579"},{title:"이메일",text:"chalkpe@gmail.com",icon:"envelope-o",href:"mailto:chalkpe@gmail.com"},{title:"학력",text:"한국디지털미디어고등학교",icon:"graduation-cap",href:"https://www.dimigo.hs.kr/"},{title:"GitHub",text:"@chalkpe",icon:"github-alt",href:"https://github.com/chalkpe"}],h={data:function(){return{contacts:l}}},u=h,d=(a("6bb9"),a("2877")),m=Object(d["a"])(u,c,p,!1,null,"14f9e264",null),f=m.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"timeline"},e._l(e.works,(function(t){return a("div",{key:t.name,staticClass:"content"},[a("h4",{staticClass:"title is-4"},[e._v(e._s(t.name))]),e._l(t.data,(function(t){return t.projects.length?a("div",{key:t.name,staticClass:"projects"},[a("h5",{staticClass:"title is-5"},[e._v(e._s(t.year)+"년")]),e._l(t.projects,(function(e){return a("resume-project",{key:e.name,attrs:{project:e}})}))],2):e._e()}))],2)})),0)},b=[],v=(a("4de4"),a("d81d"),a("b0c0"),a("5530")),k=[{year:2023,projects:[{name:"두나무",href:"https://dunamu.com",description:"업비트 웹 프론트엔드 개발",period:"2022.6 ~",type:"work"}]},{year:2022,projects:[{name:"EYEVACS",href:"https://eyevacs.com",description:"클라우드 기반 주체관제/요금정산 시스템",period:"2020.11 - 2022",tags:["React","Recoil","Recharts","hapi","MongoDB","Redis","AWS ECS"],type:"work"}]},{year:2021,projects:[{name:"obj-to-cloudwatch-pattern",href:"https://github.com/chalkpe/obj-to-cloudwatch-pattern",period:"2021.08",description:"객체를 AWS CloudWatch 패턴 구문으로 변환해주는 라이브러리",tags:["JavaScript","AWS"]},{name:"fleetify",href:"https://github.com/chalkpe/fleetify",period:"2021.05",description:"트위터 프로필 사진에 테두리를 넣어 주는 페이지",tags:["React","Next.js"]},{name:"weather-poc",href:"https://chalkpe.github.io/weather-poc/",period:"2021.04",description:"PC 게임 파이널판타지14 날씨 데이터 시각화 페이지",tags:["D3.js","MongoDB"]}]},{year:2020,projects:[{name:"ultimate-predation",href:"https://github.com/chalkpe/ultimate-predation",period:"2020.12",description:"PC 게임 파이널판타지14 레이드 시뮬레이션 페이지",tags:["React","styled-components","GitHub Actions","FINAL FANTASY XIV"]},{name:"ffxiv-titan-jail",href:"https://github.com/chalkpe/ffxiv-titan-jail",period:"2020.03",description:"PC 게임 파이널판타지14 레이드 알림 오버레이",tags:["JavaScript","FINAL FANTASY XIV"]}]},{year:2019,projects:[{name:"ffxiv-opener-overlay",href:"https://github.com/chalkpe/ffxiv-opener-overlay",period:"2019.02 - 2019.09",description:"PC 게임 파이널판타지14 스킬 사용 기록 오버레이",tags:["Vue.js","FINAL FANTASY XIV"]},{name:"ant",href:"https://github.com/chalkpe/ant",period:"2019.01 - 2019.02",description:"스크린샷 파일을 일괄 이동하는 유틸리티",tags:["JavaScript","CLI"]},{name:"egg-widget",href:"https://github.com/chalkpe/egg-widget",period:"2019.01",description:"KT 에그의 데이터 사용량을 표시해 주는 Electron 기반 데스크탑 위젯",tags:["Electron","Widget","Crawler"]}]},{year:2018,projects:[{name:"DIMIGOIN",href:"https://github.com/dimigoin/dimigoin-front",period:"2018.01 - 2018.12",description:"한국디지털미디어고등학교 시스템 전산화 프로젝트",tags:["Vue","Vuex","webpack","Sass"]},{name:"crystal-analysis",href:"https://github.com/chalkpe/crystal-analysis",period:"2018.12",description:"PC 게임 파이널판타지14 결제 내역 시각화 프로그램",tags:["Node.js","Crawler","FINAL FANTASY XIV"]},{name:"ask",href:"https://github.com/chalkpe/ask",period:"2018.05 - 2018.06",description:"익명으로 질문을 받아 답변하는 서비스",tags:["Firebase","Vue.js","Vue Router","Parcel","Serverless"]},{name:"react-waldo",href:"https://github.com/chalkpe/react-waldo",period:"2018.04",description:"입력한 문장을 왈도체로 만들어 주는 서비스",tags:["React","MobX","webpack 4"]},{name:"gnome-tweet-counter",href:"https://github.com/chalkpe/gnome-tweet-counter",period:"2018.02 - 2018.03",description:"데스크톱 환경 GNOME 3용 위젯 익스텐션",tags:["JavaScript","GNOME 3"]},{name:"inventory",href:"https://github.com/chalkpe/inventory-admin",period:"2018.01",description:"쇼핑몰 어드민 관리 페이지",tags:["Vue.js","Vuex","MongoDB"]}]},{year:2017,projects:[{name:"atom-rip",href:"https://github.com/5959XD/atom-rip",period:"2017.09",description:"Atom 에디터 패키지. 9XD 해커톤 출품작",tags:["JavaScript","Atom","Hackathon"]},{name:"sudonmul-info",href:"https://github.com/SigongTeam/sudonmul-info",period:"2017.08 - 2017.09",description:"실시간 수돗물 수질 정보를 알려주는 서비스. 제4회 대한민국 SW융합 해커톤 출품작",tags:["JavaScript","Vue.js","webpack","MongoDB","Koa","Headless Chrome","Crawler"]},{name:"naver-place",href:"https://github.com/chalkpe/naver-place",period:"2017.08",description:"네이버 플레이스 매장 정보 크롤러",tags:["Node.js","Headless Chrome","Crawler","Koa"]},{name:"determinant",href:"https://github.com/chalkpe/determinant",period:"2017.06",description:"행렬식을 계산해 주는 모듈",tags:["Node.js","Math","CircleCI"]},{name:"fetch-instagram",href:"https://github.com/chalkpe/fetch-instagram",period:"2017.05",description:"인스타그램에서 태그별 최근 게시글을 검색해 주는 서버",tags:["Node.js","Express","PhantomJS","Crawler","Instagram"]},{name:"welcomes",href:"https://github.com/chalkpe/welcomes",period:"2017.04 - 2017.05",description:"콘솔에 환영 메세지를 추가해 주는 스크립트",tags:["Node.js","CLI"]},{name:"facebook-autopoker",href:"https://github.com/chalkpe/facebook-autopoker",period:"2017.04",description:"페이스북 콕 찔러보기 기능을 자동화하는 프로그램",tags:["Node.js","PhantomJS","Babel","Crawler","Facebook"]},{name:"Hasuin",href:"https://hasuin.github.io",period:"2017.02",description:"PC 게임 하스스톤 퀴즈 페이지",tags:["Vue.js","webpack","Babel","Hearthstone"]}]},{year:2016,projects:[{name:"gksdud",href:"https://www.npmjs.com/package/gksdud",period:"2016.12",description:"한/영 키를 안 누르고 친 문장을 고쳐 주는 npm 패키지",tags:["Node.js","RegExp"]},{name:"VOCA",href:"https://github.com/chalkpe/legacy-voca",period:"2016.07 - 2016.10",description:"온라인 영어 단어 학습 서비스",tags:["Node.js","Express","MongoDB","jQuery"]},{name:"node-minesweeper",href:"https://github.com/chalkpe/node-minesweeper",period:"2016.04 - 2016.05",description:"CLI 지뢰찾기 게임",tags:["Node.js","CLI"]},{name:"BrainfuckInterpreter",href:"https://github.com/chalkpe/BrainfuckInterpreter",period:"2016.01",description:"난해한 프로그래밍 언어 Brainfuck의 Android 구현체",tags:["Android","Brainfuck"]}]},{year:2015,projects:[{name:"Cesium",href:"https://github.com/chalkpe/Cesium",period:"2015.12 - 2016.01",description:"WebSocket 기반의 채팅 서비스",tags:["Node.js","Express","Socket.IO","MongoDB"]},{name:"PocketHeaderBuilder",href:"https://github.com/chalkpe/PocketHeaderBuilder",period:"2015.11",description:"모바일 게임 MC:PE의 C++ 헤더 생성 프로그램",tags:["Java","Reversing","C++","Crawler"]},{name:"ALyricBot",href:"https://github.com/chalkpe/ALyricBot",period:"2015.10",description:"음악 파일의 알송 가사를 찾아주는 텔레그램 봇",tags:["Java","Telegram"]},{name:"Cameraman",href:"https://github.com/chalkpe/Cameraman",period:"2015.06 - 2015.10",description:"모바일 게임 MC:PE 서버 플러그인",tags:["PHP","Minecraft PE","PocketMine-MP"]}]},{year:2014,projects:[{name:"Takoyaki",href:"https://github.com/chalkpe/Takoyaki",period:"2014.12 - 2016.01",description:"네이버 카페 게시글 크롤러",tags:["Java","Crawler","Rhino"]}]}],j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"project"},[e._m(0),a("div",{staticClass:"project__content"},[a("a",{staticClass:"project__name",attrs:{href:e.project.href,target:"_blank"}},[e._v(e._s(e.project.name))]),a("p",{staticClass:"project__period"},[e._v(e._s(e.project.period))]),a("p",{staticClass:"project__description"},[e._v(e._s(e.project.description))]),a("p",{staticClass:"project__tags"},e._l(e.project.tags,(function(t){return a("span",{staticClass:"project__tag tag"},[e._v(e._s(t))])})),0)])])},C=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"project__icons icon"},[a("i",{staticClass:"project__icon fa fa-circle-o"})])}],_={props:{project:Object}},y=_,w=(a("6648"),Object(d["a"])(y,j,C,!1,null,null,null)),S=w.exports,x=[{name:"경력사항",filter:function(e){return"work"===e.type}},{name:"프로젝트",filter:function(e){return void 0===e.type}}],P={components:{ResumeProject:S},data:function(){return{timeline:k}},computed:{works:function(){var e=this;return x.map((function(t){var a=t.name,r=t.filter;return{name:a,data:e.timeline.map((function(e){return Object(v["a"])(Object(v["a"])({},e),{},{projects:e.projects.filter(r)})}))}}))}}},A=P,O=Object(d["a"])(A,g,b,!1,null,null,null),N=O.exports,E={components:{ResumeContacts:f,ResumeTimeline:N},created:function(){n.a.load({custom:{families:["Spoqa Han Sans"],urls:["//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css"]}})}},I=E,M=(a("034f"),Object(d["a"])(I,i,o,!1,null,null,null)),B=M.exports;console.log(new r["a"]({el:"#app",render:function(e){return e(B)}}))},6648:function(e,t,a){"use strict";a("0453")},"6bb9":function(e,t,a){"use strict";a("10ff")},"85ec":function(e,t,a){}});
//# sourceMappingURL=app.38de9298.js.map