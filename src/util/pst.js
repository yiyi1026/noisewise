export const pst = () => {
  let dateTime = (new Date().toLocaleString("ja-JP", {timeZone: "America/Los_Angeles"}));
  let date = dateTime.split(" ")[0];
  let dateReg = date.replace(/(\d+)\/(\d+)\/(\d+)/,"$1-$2-$3");
  return dateReg;
};

