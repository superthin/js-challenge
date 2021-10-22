// copied from https://daynhauhoc.com/t/thu-thach-lap-trinh-javascript-ve-1-thu-tuong-don-gian-nhung-roi-nao/120552/3
function myDateValid(dateStrVn) {
    const date_regex = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
    const date_match = input.match(date_regex)
	if (!date_match){
		console.log("Input's format is not vaild")
		return false
	}
    let [d,m,y] = dateStrVn.split('-');
    let myDate = new Date(+y, +m - 1, +d);
    
    return +d == myDate.getDay() && +m == myDate.getMonth() + 1 && +y ==  myDate.getYear() ;
}
