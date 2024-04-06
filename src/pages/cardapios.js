import React, { useState, useEffect } from 'react';
import axios from 'axios'
/* import  dotenv from 'dotenv'
dotenv.config() */


const GetCardapios = () => {
  const [cardapios, setCardapios] = useState();
  const items = ['card1','card2','card3','card4','card5']

  useEffect(() => {
    fetchItems();
  }, []);

  
  const fetchItems = async () => {
    try {
      axios
        .get(`${process.env.REACT_APP_API_URL}/cardapios`,{
          params: {
            limit: 50,
            offset: 0
          }
        })
        .then((response) => {
          console.log("response  ====>  ",response)
          setCardapios(response.data)
        })
        .catch((err) => {
          console.error(err);
        });


      // const response = await fetch('http://localhost:8000/api/cardapios');
      // const data = await response.json();
      // console.log(data)
      // setItems(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Mostra</h1>
      { <ul>
        {/* {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))} */}
        </ul> }
    </div>
  );
};

export default GetCardapios;