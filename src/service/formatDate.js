export function formatDate(inputFormat) {
  function pad(s) {
    return s < 10 ? '0' + s : s;
  }
  var d = new Date(inputFormat);
  return [d.getFullYear(), pad(d.getMonth() + 1), pad(d.getDate())].join('-');
}
