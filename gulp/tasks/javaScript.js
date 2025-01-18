import gulp from "gulp";
import webpack from "webpack-stream";

import { webpackConfig } from "../../webpack.config.js";
import { plugins } from "../config/plugins.js";
import {
  __dirname,
  isBuild,
  destFolder,
  srcFolder,
  projectPaths,
} from "../config/paths.js";
import { logger } from "../config/Logger.js";

const javaScript = async (isDev) => {
  return (
    gulp
      .src(projectPaths.scriptsSrc)
      .pipe(logger.handleError("JS"))
      // .pipe(webpack({ config: await webpackConfig(isDev) }))
      .pipe(gulp.dest(destFolder))
      .pipe(plugins.browserSync.stream())
  );
};

export { javaScript };
