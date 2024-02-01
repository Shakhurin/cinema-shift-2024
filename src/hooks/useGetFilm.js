import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useGetFilm = () => {
  const [movie, setMovie] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    try {
      setIsLoading(true);
      fetch(`https://shift-backend.onrender.com/cinema${location.pathname}`)
        .then((res) => res.json())
        .then((data) => {
          setMovie(data.film);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  }, [location.pathname]);

  return { movie, isLoading };
};
