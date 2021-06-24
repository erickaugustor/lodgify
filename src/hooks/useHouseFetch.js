import { useState, useEffect } from 'react';

const URL = 'https://gist.githubusercontent.com/huvber/b51c0279d3f452513a7c1f576a54f4d7/raw/4497a12b181713c6856303a666d240f7d561e4fe/mock-house';

const useHouseFetch = () => {
  const [status, setStatus] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
      if (!URL) return;

      const fetchData = async () => {
          setStatus('fetching');

          const response = await fetch(URL).catch(() => setStatus('error'));
          const data = await response.json();
  
          setData(data);
          setStatus('fetched');
      };

      fetchData();
  }, [URL]);

  return { status, data };
};

export default useHouseFetch;
