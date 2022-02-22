// Dependencies
import dayjs from "dayjs";

const Date = ({ unformattedDate }) => (
  <> {dayjs(unformattedDate).format("D MMM YYYY")}</>
);

export default Date;
