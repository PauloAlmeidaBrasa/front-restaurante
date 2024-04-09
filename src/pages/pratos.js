import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from "react-router-dom";


const GetPratos = () => {
  const [pratos, setPratos] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  
  const fetchItems = async () => {
    try {
      axios
        .get(`${process.env.REACT_APP_API_URL}/pratos`,{
          params: {
            limit: 50,
            offset: 0
          }
        })
        .then((response) => {
          setPratos(response.data)
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
    <div>
      <h1>Mostra Pratos</h1>
      <ul>
        { 
          pratos.map(item => {
            return (
              <li><Link to={`/prato/${item.id}`}><div >{item.nome}</div></Link></li>
            )
          })  
        }
      </ul>
    </div>
    </>);
};

export default GetPratos;
