module.exports = function toReadable (number) {
	
	var partOne = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
	var partTwo = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

	if (number === 0) return 'zero';
	if (Number.isNaN(parseInt(number))) return 'error: input value is not a number'
	number = number.toString();
	if (number.length > 9) return 'error: too great a value';

	let numArr = ('000000000' + number.toString()).substr(-9);
	numArr = numArr.match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    var humanNumber = '';

    if (numArr[1] != 0)
    	humanNumber += (partOne[Number(numArr[1])] || partTwo[numArr[1][0]] + ' ' + partOne[numArr[1][1]]) + 'crore ';
    if (numArr[2] != 0)
    	humanNumber += (partOne[Number(numArr[2])] || partTwo[numArr[2][0]] + ' ' + partOne[numArr[2][1]]) + 'lakh ';
    if (numArr[3] != 0)
    	humanNumber += (partOne[Number(numArr[3])] || partTwo[numArr[3][0]] + ' ' + partOne[numArr[3][1]]) + 'thousand ';
    if (numArr[4] != 0)
    	humanNumber += (partOne[Number(numArr[4])] || partTwo[numArr[4][0]] + ' ' + partOne[numArr[4][1]]) + 'hundred ';
    if (numArr[5] != 0)
    	humanNumber += (partOne[Number(numArr[5])] || partTwo[numArr[5][0]] + ' ' + partOne[numArr[5][1]]);
    
    return humanNumber.trim();
}