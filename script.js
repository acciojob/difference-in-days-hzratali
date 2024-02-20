var dateDiffInDays = function (date1, date2) {
  //   write your code here
	const oneDayMilliseconds = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
    const firstDate = Date.UTC(
        parseInt(date1.substring(0, 4)), // Year
        parseInt(date1.substring(5, 7)) - 1, // Month (zero-based)
        parseInt(date1.substring(8, 10)) // Day
    );
    const secondDate = Date.UTC(
        parseInt(date2.substring(0, 4)), // Year
        parseInt(date2.substring(5, 7)) - 1, // Month (zero-based)
        parseInt(date2.substring(8, 10)) // Day
    );

    const differenceMilliseconds = secondDate - firstDate;
    const differenceDays = Math.floor(differenceMilliseconds / oneDayMilliseconds);
    return differenceDays;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
