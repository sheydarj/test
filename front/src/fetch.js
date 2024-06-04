
import { useState, useEffect } from 'react';
const Fetch = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/home')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div>
      
      {
      data.message
      /* {photos.map((photo) => (
        <img key={photo.id} src={photo.url} alt={photo.title} width={100} />
      ))} */}
    </div>
  );
};
export default Fetch;

