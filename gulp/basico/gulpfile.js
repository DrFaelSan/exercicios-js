const gulp = require("gulp");

//  a porta de entrada do comando gulp começa apartir dessa tesk dafault
gulp.task("default", () => {
  // nesse bloco declaro que ela inicia um função e faço todos comandos abaixo.
  console.log("Ok!");
  // com esse comando gulp.start(eu declaro que vai iniciar por default a task copiar e depois a task fim.)
  gulp.start("copiar", "fim");
});

//aqui embaixo declaro que a copiar só começa depois que executar o array de task's.
gulp.task("copiar", ["antes1", "antes2"], () => {
  //   console.log("Copiar!!!");
  gulp
    .src("pastaA/**/*.txt")
    // .pipe(trasformacao1())
    // .pipe(trasformacao2())
    .pipe(gulp.dest("pastaB"));
});

gulp.task("antes1", () => {
  console.log("antes 1!!!");
});

gulp.task("antes2", () => {
  console.log("antes 2!!!");
});

gulp.task("fim", ["fim1", "fim2"]);

gulp.task("fim1", () => {
  console.log("Fim1 !!!");
});

gulp.task("fim2", () => {
  console.log("Fim2 !!!");
});
