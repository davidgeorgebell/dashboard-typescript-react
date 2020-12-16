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
    <div className='h-screen max-w-5xl flex flex-col justify-evenly mx-auto container px-10'>
      <div className='flex justify-between'>
        <div>
          <h1 className='text-8xl font-black'>
            {formatTime(time.datetime)}
            <span className='text-2xl font-normal'>{time.abbreviation}</span>
          </h1>
          <p className='uppercase text-xl'>in {location.countryName}</p>
        </div>
        <div>
          <p className='text-xl font-normal'>TIMEZONE</p>
          <h3 className='text-6xl font-black'>{location.timeZone}</h3>
        </div>
      </div>
      <div className='flex justify-between mb-10'>
        <div className='text-center'>
          <p className='text-xl'>DAYS REMAINING IN {year}</p>
          <h3 className='font-black text-6xl'>{daysLeftInYear}</h3>
        </div>
        <div className='text-center'>
          <p className='text-xl'>DAY OF YEAR </p>
          <h3 className='font-black text-6xl'>{time.dayOfYear}</h3>
        </div>
        <div className='text-center'>
          <p className='text-xl'>DAY OF WEEK </p>
          <h3 className='font-black text-6xl'>{time.dayOfWeek}</h3>
        </div>
        <div className='text-center'>
          <p className='text-xl'>WEEK NUMBER </p>
          <h3 className='font-black text-6xl'>{time.weekNumber}</h3>
        </div>
      </div>
    </div>
  );
};
