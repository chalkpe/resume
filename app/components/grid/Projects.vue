<template lang="pug">
  .content
    h2 Projects

    .projects: .project(v-for='project in projects')
      .project-icon.icon
        i.fa.fa-check-circle(v-if='project.year')
        i.fa.fa-circle-o(v-else)

      .project-content.year(v-if='project.year')
        p.title.is-4 {{ project.year }}년
      .project-content(v-else)
        a(:href='project.href') {{ project.name }}
        p.period {{ project.period }}
        p.description {{ project.description }}
        p.tags: span.tag(v-for='s in project.tags') {{ s }}
</template>

<script>
  export default {
    data: () => ({
      projects: [
        { year: 2017 },

        {
          name: 'hots-replay-bot',
          href: 'https://github.com/if-Team/hots-replay-bot',
          period: '2017.10',
          description: '히어로즈 오브 더 스톰 전적을 검색해 주는 텔레그램 봇',
          tags: ['JavaScript', 'Telegram Bot', 'LocalStorage', 'Heroes of the Storm']
        },

        {
          name: 'atom-rip',
          href: 'https://github.com/5959XD/atom-rip',
          period: '2017.09',
          description: '휴식 시간을 갖게 하는 Atom 에디터 패키지. 9XD 해커톤 출품작',
          tags: ['JavaScript', 'Atom', 'Less', 'Hackathon']
        },

        {
          name: 'sudonmul-info',
          href: 'https://github.com/SigongTeam/sudonmul-info',
          period: '2017.08 - 2017.09',
          description: '실시간 수돗물 수질 정보를 알려주는 서비스. 제4회 대한민국 SW융합 해커톤 출품작',
          tags: ['JavaScript', 'Vue.js', 'webpack', 'MongoDB', 'Koa', 'Headless Chrome', 'Crawler']
        },

        {
          name: 'naver-place',
          href: 'https://github.com/ChalkPE/naver-place',
          period: '2017.08',
          description: '네이버 플레이스 매장 정보 크롤러',
          tags: ['Node.js', 'Headless Chrome', 'Crawler', 'Koa 2', 'Naver']
        },

        {
          name: 'ng-telegram-bot',
          href: 'https://github.com/ChalkPE/ng-telegram-bot',
          period: '2017.07',
          description: 'Angular 4 기반의 텔레그램 봇 뷰어',
          tags: ['TypeScript', 'Angular 4', 'Telegram Bot', 'LocalStorage']
        },

        {
          name: 'namugazi',
          href: 'https://github.com/ChalkPE/namugazi',
          period: '2017.07',
          description: '나무위키 하이퍼링크 최단경로 탐색기.',
          tags: ['JavaScript', 'MongoDB', 'BFS', 'namu.wiki']
        },

        {
          name: 'determinant',
          href: 'https://github.com/ChalkPE/determinant',
          period: '2017.06',
          description: '행렬식을 계산해 주는 모듈',
          tags: ['JavaScript', 'Maths', 'CircleCI', 'mocha']
        },

        {
          name: 'Edison',
          href: 'https://github.com/jnjcomu/edison-server',
          period: '2017.05 - 2017.06',
          description: 'Koa 기반의 교내 프로젝트 API 서버',
          tags: ['Node.js', 'Koa', 'MongoDB', 'REST', 'JSON Web Token']
        },

        {
          name: 'fetch-instagram',
          href: 'https://github.com/ChalkPE/fetch-instagram',
          period: '2017.05',
          description: '특정 해시태그의 인스타그램 최근 이미지 목록을 가져오는 서버',
          tags: ['Node.js', 'Express', 'PhantomJS', 'Crawler', 'Instagram']
        },

        {
          name: 'welcomes',
          href: 'https://github.com/ChalkPE/welcomes',
          period: '2017.04 - 2017.05',
          description: '콘솔에 환영 메세지를 추가해 주는 스크립트',
          tags: ['Node.js', '.zshrc', 'npm', 'OpenWeatherMap']
        },

        {
          name: 'facebook-autopoker',
          href: 'https://github.com/ChalkPE/facebook-autopoker',
          period: '2017.04',
          description: '페이스북 콕 찔러보기를 자동화하는 프로그램',
          tags: ['JavaScript', 'PhantomJS', 'Headless', 'Babel', 'Crawler', 'Facebook']
        },

        {
          name: 'cross-set-solver',
          href: 'https://chalkpe.github.io/cross-set-solver/',
          period: '2017.04',
          description: '스팀 게임 Cross Set 웹 버전',
          tags: ['Vue.js', 'webpack', 'Babel', 'Sass', 'CSS3 Transition']
        },

        {
          name: 'Hasuin',
          href: 'https://hasuin.github.io',
          period: '2017.02',
          description: '하스스톤 퀴즈 페이지. 페이지 뷰 2500+회',
          tags: ['Vue.js', 'webpack', 'Babel', 'LocalStorage', 'Hearthstone']
        },

        { year: 2016 },

        {
          name: 'gksdud',
          href: 'https://www.npmjs.com/package/gksdud',
          period: '2016.12',
          description: '한/영 키를 안 누르고 친 글자를 고쳐 주는 모듈',
          tags: ['Node.js', 'Functional progamming', 'RegExp', 'mocha', 'TDD']
        },

        {
          name: 'DIMI VOCA',
          href: 'https://github.com/ChalkPE/legacy-voca',
          period: '2016.07 - 2016.10',
          description: '교내 온라인 영어 단어 학습 서비스',
          tags: ['Node.js', 'Bower', 'Express', 'MongoDB', 'jQuery', 'ESLint']
        },

        {
          name: 'node-minesweeper',
          href: 'https://github.com/ChalkPE/node-minesweeper',
          period: '2016.04 - 2016.05',
          description: 'CLI 지뢰찾기 게임. npm에 처음 올린 모듈',
          tags: ['Node.js', 'JavaScript', 'Minesweeper', 'npm', 'CLI']
        },

        { year: 2015 },

        {
          name: 'Cesium',
          href: 'https://github.com/ChalkPE/Cesium',
          period: '2015.12 - 2016.01',
          description: '웹소켓 기반의 채팅 서비스',
          tags: ['Node.js', 'Express', 'Socket.IO', 'MongoDB', 'OAuth']
        },

        {
          name: 'coin-dozer',
          href: 'https://github.com/ChalkPE/coin-dozer',
          period: '2015.12',
          description: '교내 Online Judge 사이트 미러',
          tags: ['Node.js', 'Mirror', 'Express', 'MongoDB', 'cheerio']
        },

        {
          name: 'seize.online',
          href: 'http://play.with.chalk.pe/Seize.html',
          period: '2015.11 - 2015.12',
          description: 'HTML5 Canvas 기반의 땅따먹기 게임',
          tags: ['HTML5 Canvas', 'Bootstrap', 'jQuery', 'Chart.js']
        },

        {
          name: 'PocketHeaderBuilder',
          href: 'https://github.com/ChalkPE/PocketHeaderBuilder',
          period: '2015.11',
          description: '디어셈블된 MC:PE 바이너리 코드에서 C++ 헤더를 생성해 주는 프로그램',
          tags: ['Java', 'Reversing', 'C++', 'Mangling', 'Crawler']
        },

        {
          name: 'ALyricBot',
          href: 'https://github.com/ChalkPE/ALyricBot',
          period: '2015.10',
          description: '텔레그램 그룹에 전송된 음악 파일의 가사를 알송 서버에서 찾아주는 봇',
          tags: ['Java', 'Telegram Bot', 'ALSong', 'NIO', 'Cache']
        },

        {
          name: 'Cameraman',
          href: 'https://github.com/ChalkPE/Cameraman',
          period: '2015.06 - 2015.10',
          description: 'MC:PE 타입랩스 촬영용 서버 플러그인',
          tags: ['PHP', 'Minecraft PE', 'OOP', 'PocketMine-MP']
        },

        {
          name: 'MDT',
          href: 'https://github.com/ChalkPE/MDT',
          period: '2015.03',
          description: 'MC:PE 바이너리 패치 파일을 만들어 주는 안드로이드 앱. 공동 개발',
          tags: ['Android', 'Java', 'Gradle', 'Minecraft PE', 'Reversing']
        },

        { year: 2014 },

        {
          name: 'Takoyaki',
          href: 'https://github.com/ChalkPE/Takoyaki',
          period: '2014.12 - 2016.01',
          description: '네이버 카페 게시글 크롤러. 자바스크립트 플러그인 추가 가능',
          tags: ['Java', 'Crawler', 'Naver', 'Maven', 'HtmlUnit', 'Rhino', 'JavaScript']
        },

        {
          name: 'Branch',
          href: 'https://play.google.com/store/apps/details?id=com.perkteam.chalk.branch',
          period: '2013.12 - 2014.05',
          description: 'MC:PE 스크립트 에디터. 처음 플레이 스토어에 올린 앱',
          tags: ['Android', 'Java', 'ModPE', 'Minecraft PE', 'JavaScript', 'Rhino']
        }
      ]
    })
  }
</script>

<style lang="scss">
  @import '~bulma';

  .projects {

    .project {
      display: flex;
      position: relative;
      margin-bottom: 1.6rem;

      &::before {
        content: '';
        background-color: $grey-lighter;

        width: 0.2em;

        height: 100%;

        top: 1.5em;
        left: 0.63em;
        position: absolute;
      }

      .project-icon {
        flex: 0 0 auto;
        i { color: $primary; }
      }

      .project-content {
        flex: 1 1 auto;
        padding: 0 0 0.2rem 1.5rem;

        .name {
          font-size: 1.2em;
        }

        .period {
          color: $grey-light;
          margin-bottom: 0.5em;
        }

        .tags {
          margin-top: -0.5em;

          .tag:not(:last-of-type) {
            margin-right: 0.5em;
            margin-bottom: 0.5em;
          }
        }

      }
    }
  }
</style>
