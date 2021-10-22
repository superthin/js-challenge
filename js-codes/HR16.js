//Dựa trên: https://vi.wikipedia.org/wiki/Năm_nhuận
function is_leap_year(year){
	if (year % 100 != 0){
		if (year % 4 == 0) return true
		return false
	}
	if (year % 400 == 0) return true
	return false
}
function max_day(month, year){
	if (month >= 1 && month <= 7){
		if (month == 2) return is_leap_year(year) ? 29 : 28
		return month % 2 == 1 ? 31 : 30
	}
	return month % 2 == 1 ? 30 : 31
}
function check_range(day, month, year){
	if (day == 0 || day >= 32) return false
	if (month == 0 || month >= 13) return false
	if (day > max_day(month, year)) return false
	return true
}
function check_date(input) {
	const date_regex = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/
    const date_match = input.match(date_regex)
	if (!date_match){
		console.log("Input's format is not vaild")
		return false
	}
    const day = parseInt(date_match[1],10)
    const month = parseInt(date_match[2],10)
    const year = parseInt(date_match[3],10)
    if (!check_range(day, month, year)){
		console.log("Day, month or year out of range")
		return false
	}
	return true
}
check_date("31-02-2000")
