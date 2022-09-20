export const formatDate = date => {
  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

export const formatFancyDate = date => {
  let dayOfTheWeek = date.substring(0, 3);
  switch (dayOfTheWeek) {
    case "Mon":
      dayOfTheWeek = "Monday";
      break;
    case "Tue":
      dayOfTheWeek = "Tuesday";
      break;
    case "Wed":
      dayOfTheWeek = "Wednesday";
      break;
    case "Thu":
      dayOfTheWeek = "Thursday";
      break;
    case "Fri":
      dayOfTheWeek = "Friday";
      break;
    case "Sat":
      dayOfTheWeek = "Saturday";
      break;
    case "Sun":
      dayOfTheWeek = "Sunday";
      break;

    default:
      break;
  }

  let d = new Date(date),
    month = d.getMonth() + 1,
    day = d.getDate();

  month = getMonthFromDate(month);

  return [dayOfTheWeek, day, month];
};

export const capitalizeText = text => {
  if (text !== undefined)
    return `${text.slice(0, 1).toUpperCase()}${text.slice(1)}...`;
};

export const formatMarker = marker => {
  const parts = marker.split(":");
  const firstWord =
    parts[0].substring(0, 1).toUpperCase() +
    parts[0].substring(1, parts[0].lenght);

  if (parts.length === 1) return firstWord;

  const secondPartAsArray = parts[1].split("_");

  let final = firstWord + " -";

  secondPartAsArray.forEach((word, index) => {
    if (index === 0)
      final +=
        " " +
        word.substring(0, 1).toUpperCase() +
        word.substring(1, parts[0].lenght);
    else final += " " + word;
  });

  return final;
};

export const formatDateFromTo = (dateFrom, dateTo) => {
  let formatedString;

  if (dateFrom !== undefined && dateTo !== undefined) {
    if (dateFrom.substring(0, 4) === dateTo.substring(0, 4)) {
      if (dateFrom.substring(5, 7) === dateTo.substring(5, 7)) {
        if (dateFrom === dateTo)
          formatedString = `${dateFrom.substring(8, 10)}. ${getMonthFromDate(
            parseInt(dateFrom.substring(5, 7))
          )} ${dateFrom.substring(0, 4)}`;
        else
          formatedString = `${dateFrom.substring(8, 10)}. - ${dateTo.substring(
            8,
            10
          )}. ${getMonthFromDate(parseInt(dateFrom.substring(5, 7)))}
          ${dateFrom.substring(0, 4)}
        `;
      }
    } else
      formatedString = formatedString = `${dateFrom.substring(
        8,
        10
      )}.${parseInt(dateFrom.substring(5, 7))}.${dateFrom.substring(
        0,
        4
      )} - ${dateTo.substring(8, 10)}.${parseInt(
        dateTo.substring(5, 7)
      )}.${dateTo.substring(0, 4)}
`;
  }

  return formatedString;
};

const getMonthFromDate = month => {
  switch (month) {
    case 1:
      month = "January";
      break;
    case 2:
      month = "February";
      break;
    case 3:
      month = "March";
      break;
    case 4:
      month = "April";
      break;
    case 5:
      month = "May";
      break;
    case 6:
      month = "June";
      break;
    case 7:
      month = "July";
      break;
    case 8:
      month = "August";
      break;
    case 9:
      month = "September";
      break;
    case 10:
      month = "October";
      break;
    case 11:
      month = "November";
      break;
    case 12:
      month = "December";
      break;

    default:
      break;
  }

  return month;
};

export const formatLocationId = locationId => {
  return locationId.split(":")[1];
};
