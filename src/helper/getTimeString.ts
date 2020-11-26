import moment from "moment";

const getTimeString = (timeStamp: number, format: string = "MMM DD HH:mm") =>
  moment(new Date(timeStamp)).format(format);

export default getTimeString;
