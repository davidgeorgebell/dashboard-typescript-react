import { formatTime } from '../utils/formatTime';
import { isLeapYear } from '../utils/isLeapYear';

type MainContainerProps = {
  location: LocationProps;
  time: TimeProps;
};

type LocationProps = {
  timeZone: string;
  countryName: string;
  city: string;
  regionName: string;
  latitude?: number;
  longitude?: number;
};
type TimeProps = {
  datetime: string;
  dayOfWeek: number;
  dayOfYear: number;
  weekNumber: number;
  abbreviation: string;
};

export const MainContainer = ({ location, time }: MainContainerProps) => {
  const getDaysLeftInYear = (num: number) => {
    if (isLeapYear(num) === true) {
      return 366 - time.dayOfYear;
    } else return 365 - time.dayOfYear;
  };
  const year = new Date().getFullYear();
  const daysLeftInYear = getDaysLeftInYear(year);

  return (
    <div>
      <h1>
        {formatTime(time.datetime)}
        <span>{time.abbreviation}</span>
      </h1>
      <h2>
        Days remaining in {year}: {daysLeftInYear}
      </h2>
      <p>{location.timeZone}</p>
      <p>{location.countryName}</p>
      <div>
        <p>Day of Year {time.dayOfYear}</p>
        <p>Day of Week {time.dayOfWeek}</p>
        <p>Week number {time.weekNumber}</p>
      </div>
    </div>
  );
};
