## 🔥 작업 영역(script)
⚡ 인터랙션 및 페이지에 필요한 컴포넌트 및 기능 script 작업
⚡ pageComp 폴더
> - 각 페이지별 script : main.js, company.js, business.js, project.js, center.js, utils.js
> - header 및 gnb script : header.js
> - 기능별 공통 script : ui.js

## 🔥 폴더구조

### [pages]

- pages 는 총 9개의 폴더로 구성 `main,company,components,contact,include,business,project,news,utill`

### [assets]

⚡ assets는 총 4개의 폴더로 구성 `fonts, images, scripts, styles`

⚡ fonts

> - 프로젝트에 사용되는 font 관리
> - 국문 'Pretendard' / 영문 'Prompt' 적용

⚡ images

> - `common, main, content, icon, lottie, mp4, email` 총 7개의 폴더

⚡ styles

> - main.css : main 전용 css
> - content.css : main을 제외한 컨텐츠에 사용 된 css
> - codinglist.css : 코딩리스트 전용 css
> - component_guide.css : 컴포넌트 전용 css

⚡ scripts

> - `common,lib,pageComp,uiCopm` 총 4개의 폴더
> - common
>   - condition.js : 디바이스 , 브라우저 체크 , 그 외 추가해서 조건문 추가해서 사용
>   - publicInit : 공통 버튼이나 모달 버튼 등, 페이지 로드될 때 공통으로 바인. 이후 비동기로 초기화되는 함수는 개발과 별도로 상의가 필요
>   - uxg-ui : 개발 전달용 공통 컴포넌트 또는 함수
> - lib ( 라이브러리 )
>   - script library 제어 및 관리
> - pageComp
>   - 페이지에서 사용되는 js 제어 및 관리
> - uiComp
>   - uxg-dev showcase에 적용 된 컴포넌트 js 적용 및 관리

## 🔥 반응형(단위 및 해상도)

⚡ 단위

> - PC : vw (Viewport Width)
> - MO : rem (Root EM)

⚡ 해상도

> - PC: 기준 1920px, 최소 너비 1024px, 최대 너비 2560px
> - MO: 너비 375px부터 1024px까지
> - TA: 사용하지 않음 (모바일 대체)

## 🔥 OS 및 브라우저

> - PC : Chrome 최신버전 / Microsoft Edge 최신버전
> - MO : iOS Safari 최신버전 / iOS, Android Chrome 최신버전 / Android 삼성브라우저 최신버전

# uxg-boilerplate-2024

### 2024.01.19 - v0.2.3

---

## NVM 설치

NVM (Node Version Manager)은 Node.js 버전을 관리하는 프로그램입니다. 다양한 Node.js 버전을 쉽게 설치, 제거, 전환할 수 있게 해주어, 서로 다른 프로젝트에서 각기 다른 Node.js 버전을 필요로 할 때 매우 유용합니다. NVM을 사용하면 특정 버전의 Node.js를 전역으로 또는 프로젝트별로 관리할 수 있어, 버전 호환성 문제를 해결하는 데 도움이 됩니다.

> NVM 설치 방법
>
> - windows : https://sharryhong.github.io/2016/12/20/nodejs-nvm/
> - mac : https://gist.github.com/falsy/8aa42ae311a9adb50e2ca7d8702c9af1
> - NVM Lastest : https://github.com/coreybutler/nvm-windows/releases For window only

## Gulp 설치

```js
// 실행 명령어
// node 버전은 16이상이여야 합니다.
$ nvm install v16.19.0
$ nvm use 16.19.0
$ node -v
v16.19.0
```

## Gulp CLI

gulp-cli는 Gulp 작업을 실행하기 위한 커맨드 라인 인터페이스(CLI) 도구입니다. 이 모듈은 시스템 전역에 설치되어, 개발자가 명령 프롬프트나 터미널을 통해 Gulp 작업을 쉽게 실행할 수 있게 해줍니다. gulp-cli를 사용하면 로컬 또는 전역에 설치된 Gulp를 구동할 수 있으며, 다양한 프로젝트에서 각기 다른 Gulp 버전을 사용하는 것을 용이하게 합니다. 이는 Gulp 기반의 자동화된 빌드 및 개발 작업을 관리하는 데 필수적인 도구입니다.

```js
// nvm으로 설치한 노드 버전별로 설치되어야 합니다.
$ npm i -g gulp-cli
```

## Gulp 실행

```js
// vscode 실행 프로젝트 폴더로 이동 후 터미널 오픈

// 노드모듈 설치
$ npm install
// gulp 실행
$ npm run dev
// build
$ npm run build
// backup
$ npm run bak
// uxdev.etribe.co.kr SFTP upload
$ npm run sftp
```