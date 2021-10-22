// copied from https://daynhauhoc.com/t/thu-thach-lap-trinh-javascript-ve-1-thu-tuong-don-gian-nhung-roi-nao/120552/3
// ver 1.0
function myDateValid(dateStrVn) {
  const validPattern = [
    /^(?:[0-2]\d|30)-(?:0[13-9]|1[0-2])-(?!.*0000)\d{4}$/,
    /^31-(?:0[13578]|1[02])-(?!.*0000)\d{4}$/,
    /^(?:[01]\d|2[0-8])-02-(?!.*0000)\d{4}$/,
    /^29-02-(\d\d(?:[13579][26]|[2468][048]|0[48])|(?:[13579][26]|[2468][048]|0[48])00)$/
  ]
  // ES6
  return validPattern.some(p => p.exec(dateStrVn));
}

// ver 1.1
function myDateValid(dateStrVn) {
  const validPattern_v11 = [
    /^(?:[0-2]\d|30)-(?:0[13-9]|1[0-2])-(?!.*0000)\d{4}$/,
    /^31-(?:0[13578]|1[02])-(?!.*0000)\d{4}$/,
    /^(?:[01]\d|2[0-8])-02-(?!.*0000)\d{4}$/,
    /^29-02-(?:(\d\d)?(?:[13579][26]|[2468][048]|0[48])(00)?)$/
  ]
  // ES6
  return dateStrVn.length == 2+1+2+1+4 && validPattern_v11.some(p => p.exec(dateStrVn));
}

// ver 2.0
function myDateValid(dateStrVn) {
  const validPattern_v2 = [
    /^(?:[01]\d|2[0-8])-(?:0\d|1[0-2])-(?!.*0000)\d{4}$/,
    /^(?:29|30)-(0[13-9]|1[0-2])-(?!.*0000)\d{4}$/,
    /^31-(?:0[13578]|1[02])-(?!.*0000)\d{4}$/,
    /^29-02-(\d\d(?:[13579][26]|[2468][048]|0[48])|(?:[13579][26]|[2468][048]|0[48])00)$/
  ]
  // ES6
  return validPattern_v2.some(p => p.exec(dateStrVn));
}

// ver 3 bình thường
function myDateValid(ddmmyyyy_date) {
  yyyymmdd_date = ddmmyyyy_date.split('-').reverse().join('-');
  try {
    yyyymmdd_full = new Date(yyyymmdd_date).toISOString();
  } catch (err) {
    return false;
  }
  return yyyymmdd_full.startsWith(yyyymmdd_date+"T");
}

// ver 3 tà đạo
function myDateValid(d) {
  try { return new Date(d = d.split`-`.reverse().join`-`).toISOString().startsWith(d+"T") } catch (err) { return false }
}
