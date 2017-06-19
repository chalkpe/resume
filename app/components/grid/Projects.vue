<template lang="pug">
  .content
    h2 Projects

    .projects
      .project(v-for='project in projects')
        .project-icon.icon: i.fa.fa-circle-o
        .project-content
          a(:href='project.href') {{ project.name }}
          p.period {{ project.period }}
          p.description {{ project.description }}
          p.tags: span.tag(v-for='s in project.tags') {{ s }}
</template>

<script>
  export default {
    data: () => ({
      projects: [
        {
          name: 'node-minesweeper',
          href: 'https://github.com/ChalkPE/node-minesweeper',
          period: '2016.04 - 2016.05',
          description: '터미널에서 돌아가는 지뢰찾기 게임. npm에 처음으로 올린 모듈.',
          tags: ['Node.js', 'JavaScript', 'Minesweeper', 'npm', 'CLI']
        },

        {
          name: 'Cesium',
          href: 'https://github.com/ChalkPE/Cesium',
          period: '2015.12 - 2016.01',
          description: 'Express + Socket.IO 기반의 채팅 서비스. 사용자 인증 로직을 처음 구현함.',
          tags: ['JavaScript', 'Node.js', 'Express', 'Socket.IO', 'MongoDB', 'OAuth', 'Jade']
        },

        {
          name: 'coin-dozer',
          href: 'https://github.com/ChalkPE/coin-dozer',
          period: '2015.12',
          description: '교내 Online Judge 사이트 미러. MongoDB의 여러 기능을 처음 사용해 봄.',
          tags: ['Node.js', 'Mirror', 'Crawler', 'Express', 'MongoDB', 'cheerio', 'Materialize']
        },

        {
          name: 'seize.online',
          href: 'http://play.with.chalk.pe/Seize.html',
          period: '2015.11 - 2015.12',
          description: 'HTML5 Canvas 기반의 땅따먹기 게임. 게임 알고리즘에 대한 고민을 많이 함.',
          tags: ['HTML5', 'Canvas', 'Bootstrap', 'jQuery', 'Chart.js']
        },

        {
          name: 'PocketHeaderBuilder',
          href: 'https://github.com/ChalkPE/PocketHeaderBuilder',
          period: '2015.10',
          description: '디어셈블된 MC:PE 바이너리 코드에서 C++ 헤더를 생성해 주는 프로그램.',
          tags: ['Java', 'Reversing', 'C++', 'Mangling', 'Crawler']
        },

        {
          name: 'Cameraman',
          href: 'https://github.com/ChalkPE/Cameraman',
          period: '2015.06 - 2015.10',
          description: 'MC:PE 타입랩스 촬영용 서버 플러그인. PHP에서 처음으로 객체지향 프로그래밍을 활용함.',
          tags: ['PHP', 'Minecraft PE', 'OOP', 'Time-lapse', 'PocketMine-MP']
        },

        {
          name: 'MDT',
          href: 'https://github.com/ChalkPE/MDT',
          period: '2015.03',
          description: 'MC:PE 바이너리 패치 파일을 만들어 주는 안드로이드 앱. 친구와 공동 개발.',
          tags: ['Android', 'Java', 'Gradle', 'PTPatch', 'Minecraft PE', 'Reversing']
        },

        {
          name: 'Takoyaki',
          href: 'https://github.com/ChalkPE/Takoyaki',
          period: '2014.12 - 2016.01',
          description: '네이버 카페 게시글 크롤러. 자바스크립트로 작성된 플러그인 추가 가능. 처음으로 주문 제작한 프로그램.',
          tags: ['Java', 'Crawler', 'Naver', 'Maven', 'HtmlUnit', 'Rhino', 'JavaScript']
        },

        {
          name: 'Branch',
          href: 'https://play.google.com/store/apps/details?id=com.perkteam.chalk.branch',
          period: '2013.12 - 2014.05',
          description: 'MC:PE 스크립트 에디터. 처음으로 플레이 스토어에 올린 안드로이드 앱.',
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
        background-color: $grey-light;

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
