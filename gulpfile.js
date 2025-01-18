import gulp from "gulp";
import chokidar from "chokidar";
import {
  __dirname,
  isBuild,
  destFolder,
  srcFolder,
  projectPaths,
} from "./gulp/config/paths.js";

/**
 * 작업 가져오기
 */
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html, htmlInclude } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { javaScript } from "./gulp/tasks/javaScript.js";
import { images } from "./gulp/tasks/images.js";
import { fonts } from "./gulp/tasks/fonts.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftpDeploy } from "./gulp/tasks/ftpDeploy.js";
import { sftpDeploy } from "./gulp/tasks/sftpDeploy.js";

const handleHTML = html.bind(null, isBuild);
const handleHtmlInclude = htmlInclude.bind(null, isBuild);
const handleSCSS = scss.bind(null, isBuild);
const handleJS = javaScript.bind(null, !isBuild);
const handleImages = images.bind(null, isBuild);
const handleFonts = fonts.bind(null, isBuild);

/**
 * 파일 변경 관찰자
 */
function watcher() {
  gulp.watch(projectPaths.publicSrc, copy);
  gulp.watch(projectPaths.pagesSrc, handleHTML);
  gulp.watch(projectPaths.pagesIncludeWatch, handleHtmlInclude);
  gulp.watch(projectPaths.stylesSrc, handleSCSS);
  gulp.watch(projectPaths.scriptsSrc, handleJS);
  gulp.watch(projectPaths.imagesSrc, handleImages);
  gulp.watch(projectPaths.fontsSrc, handleFonts);
}

// function createWatcher(path, handler) {
//     const watcherOptions = {
//         ignoreInitial: true,
//         usePolling: true,
//         interval: 100,
//         awaitWriteFinish: {
//             stabilityThreshold: 100,
//             pollInterval: 100
//         }
//     };

//     const watcher = chokidar.watch(path, watcherOptions);
//     watcher.on('all', handler);
//     return watcher;
// }

// function watcher() {
//     const publicWatcher = createWatcher(projectPaths.publicSrc, () => {
//         gulp.series(copy)();
//     });

//     const htmlWatcher = createWatcher(projectPaths.pagesSrc, () => {
//         gulp.series(handleHTML)();
//     });

//     const htmlIncludeWatcher = createWatcher(projectPaths.pagesIncludeWatch, () => {
//         gulp.series(handleHtmlInclude)();
//     });

//     // 여기에 추가적인 watch 로직을 구현하세요.
// }

/**
 * 개발 모드의 병렬 작업
 * */
const devTasks = gulp.parallel(
  copy,
  handleHTML,
  handleHtmlInclude,
  handleSCSS,
  handleJS,
  handleImages,
  handleFonts
);

/**
 * 주요 목표
 * */
const mainTasks = gulp.series(devTasks);

/**
 * 작업 실행 시나리오 구축
 * */
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

const build = gulp.series(reset, mainTasks);
const backupZIP = gulp.series(zip);
const deployFTP = gulp.series(reset, mainTasks, ftpDeploy);
const deploySFTP = gulp.series(reset, mainTasks, sftpDeploy);

/**
 * 기본 스크립트 실행
 * */
gulp.task("default", dev);

/**
 * 스크립트 내보내기
 * */
export { dev, build, backupZIP, deployFTP, deploySFTP };
