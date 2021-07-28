var fs = require("fs");
const child_process = require("child_process");

var _packageJson = JSON.parse(fs.readFileSync("./package.json"));
console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV !== "production") return;

if (!_packageJson.mergeDate) {
  _packageJson.mergeDate = +new Date();

  fs.writeFile("./package.json", JSON.stringify(_packageJson), function(err) {
    if (err) console.error(err);
  });
} else {
  let currenceDate = +new Date();
  let date =
    (currenceDate - _packageJson.mergeDate) / (1000 * 60 * 60 * 24 * 30);
  if (Math.floor(date) >= 1) {
    child_process.exec("", {}, (err, stdout, stderr) => {
      if (err) {
        throw new Error(err);
      }

      _packageJson.mergeDate = currenceDate;

      fs.writeFile("./package.json", JSON.stringify(_packageJson), function(
        err
      ) {
        if (err) console.error(err);
      });
    });
  }
}
