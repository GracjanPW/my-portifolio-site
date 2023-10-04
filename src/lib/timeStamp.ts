/* eslint-disable import/no-anonymous-default-export */

export default function (datestring: string) {
  let date = new Date(datestring);
  let month = date.getUTCMonth() + 1; //months from 1-12
  let day = date.getUTCDate();
  let year = date.getUTCFullYear();

  return day + "/" + month + "/" + year;
}
