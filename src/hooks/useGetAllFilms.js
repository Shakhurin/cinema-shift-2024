import { useEffect, useState } from 'react';

export const useGetAllFilms = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    try {
      fetch('https://shift-backend.onrender.com/cinema/today')
        .then((res) => res.json())
        .then((data) => {
          setList(data.films);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return list;
};
