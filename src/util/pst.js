export const utc = () => {
  let date = (new Date().toLocaleString("ja-JP", {timeZone: "America/New_York"}));
  return date.split(",")[0];
};
