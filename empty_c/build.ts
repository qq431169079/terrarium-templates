import * as gulp from "gulp";
import { Service, project } from "@wasm/studio-utils";

gulp.task("deploy", async () => {
  await Service.deployFiles(project.globFiles("{src,assets}/**"), "c");
});

gulp.task("default", ["deploy"]);
