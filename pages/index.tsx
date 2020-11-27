import { useEffect, useState } from 'react';
import { ipGeo, ipTime } from '../api';
import { Layout } from '../components/Layout';

import { MainContainer } from '../components/MainContainer';

const Home = () => {
  const [location, setLocation] = useState<any>({});
  const [time, setTime] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const getInformation = async () => {
      try {
        const location = await fetch(ipGeo).then(data => data.json());
        setLocation(location);
        const time = await fetch(ipTime).then(data => data.json());
        setTime(time);
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
      <div>
        <h1>Error</h1>
      </div>
    );
  if (loading)
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );

  return (
    <Layout title='Dashboard'>
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
