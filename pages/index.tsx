import { useEffect, useState } from 'react';
import { ipGeo, ipTime } from '../api';
import { Layout } from '../components/Layout';

import { MainContainer } from '../components/MainContainer';

const Home = () => {
  const [location, setLocation] = useState<any>({});
  const [time, setTime] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [isDay, setIsDay] = useState<boolean>(false);

  const dayOrNight = (time: string) => {
    const currentHours = new Date(time).getHours();
    if (currentHours < 6 && currentHours > 18) {
      setIsDay(false);
    } else {
      setIsDay(true);
    }
  };

  useEffect(() => {
    const getInformation = async () => {
      try {
        const location = await fetch(ipGeo).then(data => data.json());
        setLocation(location);
        const time = await fetch(ipTime).then(data => data.json());
        setTime(time);
        dayOrNight(time.datetime);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    setLoading(true);
    getInformation();
  }, []);

  if (error)
    return (
      <div className='container mx-auto px-10 py-10'>
        <h1 className='text-5xl font-black'>Error</h1>
      </div>
    );
  if (loading)
    return (
      <div className='container mx-auto px-10 py-10'>
        <h1 className='text-5xl font-black'>Loading...</h1>
      </div>
    );

  return (
    <Layout title='Dashboard' isDay={isDay}>
      <MainContainer
        location={{
          timeZone: location.time_zone,
          countryName: location.country_name,
          city: location.city,
          regionName: location.region_name,
          latitude: location.latitude,
          longitude: location.longitude,
        }}
        time={{
          abbreviation: time.abbreviation,
          datetime: time.datetime,
          dayOfWeek: time.day_of_week,
          dayOfYear: time.day_of_year,
          weekNumber: time.week_number,
        }}
      />
    </Layout>
  );
};

export default Home;
