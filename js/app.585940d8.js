(function(e){function t(t){for(var i,n,o=t[0],c=t[1],l=t[2],u=0,h=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&h.push(s[n][0]),s[n]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);p&&p(t);while(h.length)h.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],i=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(i=!1)}i&&(r.splice(t--,1),e=n(n.s=a[0]))}return e}var i={},s={app:0},r=[];function n(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=i,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var p=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"194e":function(e,t,a){"use strict";a("6581")},"25a2":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("main",[e._m(0),a("section",{staticClass:"section"},[a("div",{staticClass:"container"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-3"},[a("resume-skills"),a("resume-contacts")],1),a("div",{staticClass:"column is-8 is-offset-1"},[a("resume-timeline")],1)])])])])])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"hero is-primary is-bold"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title"},[e._v("Junyoung Park")]),a("h2",{staticClass:"subtitle"},[e._v("Front-end web developer")])])])])}],n=(a("92c6"),a("7f10"),a("27d6")),o=a.n(n),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h2",[e._v("Skills")]),e._l(e.skills,(function(t){return a("div",{staticClass:"tag"},[e._v(e._s(t))])}))],2)},l=[],p={data:function(){return{skills:["Node.js","Vue.js","React","Koa","hapi","webpack","MongoDB","Firebase"]}}},u=p,h=(a("b25e"),a("2877")),d=Object(h["a"])(u,c,l,!1,null,"36ae1d02",null),f=d.exports,m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h2",[e._v("Contacts")]),e._l(e.contacts,(function(t){return a("div",{staticClass:"level is-mobile"},[a("div",{staticClass:"level-left"},[a("span",{staticClass:"level-item icon"},[a("i",{staticClass:"fa",class:"fa-"+t.icon})]),a("a",{staticClass:"level-item",attrs:{href:t.href}},[e._v(e._s(t.text))])])])}))],2)},g=[],C=[{text:"@ChalkPE",icon:"github-alt",href:"https://github.com/ChalkPE"},{text:"chalkpe@gmail.com",icon:"envelope-o",href:"mailto:chalkpe@gmail.com"},{text:"한국디지털미디어고등학교",icon:"graduation-cap",href:"https://www.dimigo.hs.kr/"},{text:"2000년 6월 17일",icon:"birthday-cake",href:"#"}],b={data:function(){return{contacts:C}}},v=b,k=(a("dba9"),Object(h["a"])(v,m,g,!1,null,"30e1f36e",null)),_=k.exports,j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},e._l(e.timeline,(function(t){return a("div",{staticClass:"projects"},[a("p",{staticClass:"title is-4"},[e._v(e._s(t.year)+"년")]),e._l(t.projects,(function(t){return a("div",{staticClass:"project"},[e._m(0,!0),a("div",{staticClass:"project__content"},[a("a",{staticClass:"project__name",attrs:{href:t.href,target:"_blank"}},[e._v(e._s(t.name))]),a("p",{staticClass:"project__period"},[e._v(e._s(t.period))]),a("p",{staticClass:"project__description"},[e._v(e._s(t.description))]),a("p",{staticClass:"project__tags"},e._l(t.tags,(function(t){return a("span",{staticClass:"project__tag tag"},[e._v(e._s(t))])})),0)])])}))],2)})),0)},P=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"project__icons icon"},[a("i",{staticClass:"project__icon fa fa-circle-o"})])}],y=[{year:2021,projects:[{name:"fleetify",href:"https://github.com/ChalkPE/fleetify",period:"2021.05",description:"트위터 프로필 사진에 테두리를 넣어 주는 페이지",tags:["React","Next.js"]}]},{year:2020,projects:[{name:"ultimate-predation",href:"https://github.com/ChalkPE/ultimate-predation",period:"2020.12",description:"PC 게임 파이널판타지14 레이드 시뮬레이션 페이지",tags:["React","styled-components","GitHub Actions","FINAL FANTASY XIV"]},{name:"ffxiv-titan-jail",href:"https://github.com/ChalkPE/ffxiv-titan-jail",period:"2020.03",description:"PC 게임 파이널판타지14 레이드 알림 오버레이",tags:["JavaScript","FINAL FANTASY XIV"]}]},{year:2019,projects:[{name:"ffxiv-opener-overlay",href:"https://github.com/ChalkPE/ffxiv-opener-overlay",period:"2019.02 - 2019.09",description:"PC 게임 파이널판타지14 스킬 사용 기록 오버레이",tags:["Vue.js","FINAL FANTASY XIV"]},{name:"ant",href:"https://github.com/ChalkPE/ant",period:"2019.01 - 2019.02",description:"스크린샷 파일을 일괄 이동하는 유틸리티",tags:["JavaScript","CLI"]},{name:"egg-widget",href:"https://github.com/ChalkPE/egg-widget",period:"2019.01",description:"KT 에그의 데이터 사용량을 표시해 주는 Electron 기반 데스크탑 위젯",tags:["Electron","Widget","Crawler"]}]},{year:2018,projects:[{name:"DIMIGOIN",href:"https://github.com/dimigoin/dimigoin-front",period:"2018.01 - 2018.12",description:"한국디지털미디어고등학교 시스템 전산화 프로젝트",tags:["Vue","Vuex","webpack","Sass"]},{name:"crystal-analysis",href:"https://github.com/ChalkPE/crystal-analysis",period:"2018.12",description:"PC 게임 파이널판타지14 결제 내역 시각화 프로그램",tags:["Node.js","Crawler","FINAL FANTASY XIV"]},{name:"ask",href:"https://github.com/ChalkPE/ask",period:"2018.05 - 2018.06",description:"익명으로 질문을 받아 답변하는 서비스",tags:["Firebase","Vue.js","Vue Router","Parcel","Serverless"]},{name:"react-waldo",href:"https://github.com/ChalkPE/react-waldo",period:"2018.04",description:"입력한 문장을 왈도체로 만들어 주는 서비스",tags:["React","MobX","webpack 4"]},{name:"gnome-tweet-counter",href:"https://github.com/ChalkPE/gnome-tweet-counter",period:"2018.02 - 2018.03",description:"데스크톱 환경 GNOME 3용 위젯 익스텐션",tags:["JavaScript","GNOME 3"]},{name:"inventory",href:"https://github.com/ChalkPE/inventory-admin",period:"2018.01",description:"쇼핑몰 어드민 관리 페이지",tags:["Vue.js","Vuex","MongoDB"]}]},{year:2017,projects:[{name:"atom-rip",href:"https://github.com/5959XD/atom-rip",period:"2017.09",description:"Atom 에디터 패키지. 9XD 해커톤 출품작",tags:["JavaScript","Atom","Hackathon"]},{name:"sudonmul-info",href:"https://github.com/SigongTeam/sudonmul-info",period:"2017.08 - 2017.09",description:"실시간 수돗물 수질 정보를 알려주는 서비스. 제4회 대한민국 SW융합 해커톤 출품작",tags:["JavaScript","Vue.js","webpack","MongoDB","Koa","Headless Chrome","Crawler"]},{name:"naver-place",href:"https://github.com/ChalkPE/naver-place",period:"2017.08",description:"네이버 플레이스 매장 정보 크롤러",tags:["Node.js","Headless Chrome","Crawler","Koa"]},{name:"determinant",href:"https://github.com/ChalkPE/determinant",period:"2017.06",description:"행렬식을 계산해 주는 모듈",tags:["Node.js","Math","CircleCI"]},{name:"fetch-instagram",href:"https://github.com/ChalkPE/fetch-instagram",period:"2017.05",description:"인스타그램에서 태그별 최근 게시글을 검색해 주는 서버",tags:["Node.js","Express","PhantomJS","Crawler","Instagram"]},{name:"welcomes",href:"https://github.com/ChalkPE/welcomes",period:"2017.04 - 2017.05",description:"콘솔에 환영 메세지를 추가해 주는 스크립트",tags:["Node.js","CLI"]},{name:"facebook-autopoker",href:"https://github.com/ChalkPE/facebook-autopoker",period:"2017.04",description:"페이스북 콕 찔러보기 기능을 자동화하는 프로그램",tags:["Node.js","PhantomJS","Babel","Crawler","Facebook"]},{name:"Hasuin",href:"https://hasuin.github.io",period:"2017.02",description:"PC 게임 하스스톤 퀴즈 페이지",tags:["Vue.js","webpack","Babel","Hearthstone"]}]},{year:2016,projects:[{name:"gksdud",href:"https://www.npmjs.com/package/gksdud",period:"2016.12",description:"한/영 키를 안 누르고 친 문장을 고쳐 주는 npm 패키지",tags:["Node.js","RegExp"]},{name:"VOCA",href:"https://github.com/ChalkPE/legacy-voca",period:"2016.07 - 2016.10",description:"온라인 영어 단어 학습 서비스",tags:["Node.js","Express","MongoDB","jQuery"]},{name:"node-minesweeper",href:"https://github.com/ChalkPE/node-minesweeper",period:"2016.04 - 2016.05",description:"CLI 지뢰찾기 게임",tags:["Node.js","CLI"]},{name:"BrainfuckInterpreter",href:"https://github.com/ChalkPE/BrainfuckInterpreter",period:"2016.01",description:"난해한 프로그래밍 언어 Brainfuck의 Android 구현체",tags:["Android","Brainfuck"]}]},{year:2015,projects:[{name:"Cesium",href:"https://github.com/ChalkPE/Cesium",period:"2015.12 - 2016.01",description:"WebSocket 기반의 채팅 서비스",tags:["Node.js","Express","Socket.IO","MongoDB"]},{name:"PocketHeaderBuilder",href:"https://github.com/ChalkPE/PocketHeaderBuilder",period:"2015.11",description:"모바일 게임 MC:PE의 C++ 헤더 생성 프로그램",tags:["Java","Reversing","C++","Crawler"]},{name:"ALyricBot",href:"https://github.com/ChalkPE/ALyricBot",period:"2015.10",description:"음악 파일의 알송 가사를 찾아주는 텔레그램 봇",tags:["Java","Telegram"]},{name:"Cameraman",href:"https://github.com/ChalkPE/Cameraman",period:"2015.06 - 2015.10",description:"모바일 게임 MC:PE 서버 플러그인",tags:["PHP","Minecraft PE","PocketMine-MP"]}]},{year:2014,projects:[{name:"Takoyaki",href:"https://github.com/ChalkPE/Takoyaki",period:"2014.12 - 2016.01",description:"네이버 카페 게시글 크롤러",tags:["Java","Crawler","Rhino"]}]}],E={data:function(){return{timeline:y}}},w=E,S=(a("194e"),Object(h["a"])(w,j,P,!1,null,null,null)),x=S.exports,N={components:{ResumeSkills:f,ResumeContacts:_,ResumeTimeline:x},created:function(){o.a.load({custom:{families:["Spoqa Han Sans"],urls:["//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css"]}})}},A=N,I=(a("034f"),Object(h["a"])(A,s,r,!1,null,null,null)),O=I.exports;console.log(new i["a"]({el:"#app",render:function(e){return e(O)}}))},6581:function(e,t,a){},"85ec":function(e,t,a){},"8fec":function(e,t,a){},b25e:function(e,t,a){"use strict";a("25a2")},dba9:function(e,t,a){"use strict";a("8fec")}});
//# sourceMappingURL=app.585940d8.js.map