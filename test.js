let datetime = (new Date().toLocaleString("ja-JP", {timeZone: "America/Los_Angeles"}));
let date = datetime.split(", ")[0];

console.log(date.replace(/(\d+)\/(\d+)\/(\d+)/,"$3-$1-$2"));