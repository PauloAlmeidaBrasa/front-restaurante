import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from "react-router-dom";
/* import  dotenv from 'dotenv'
dotenv.config() */


const GetCardapios = () => {
  const [cardapios, setCardapios] = useState([]);

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
          setCardapios(response.data)
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
 
  //onClick={() => handleClick(item.id)}

  return (
    <>
    <div>
      <h1>Mostra Cardápio</h1>
      <ul>
        { 
          cardapios.map(item => {
            return (
              <li><Link to={`/cardapio/${item.id}`}><div >{item.nome}</div></Link></li>
            )
          })  
        }
      </ul>
    </div>
    </>);
};

export default GetCardapios;

/* {items.map(item => (
  <li key={item.id}>{item.name}</li>
))} */

{/* <li key={item.id}>{item.nome}</li> */}