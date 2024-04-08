
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import styles from '../style/styles.module.css';

const Cardapio = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    descricao: '',
    pratos: []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/cardapio/${id}`); // Adjust the endpoint URL accordingly
        const { name, descricao, pratos } = response.data;
        setFormData({ name, descricao, pratos });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., submit data to the server
  };
/* 
  const [cardapio, mountCardapio] = useState([]);

  const fetchItems = async () => {
    try {
      axios
        .get(`${process.env.REACT_APP_API_URL}/cardapio/${id}`,{
          params: {
            limit: 50,
            offset: 0
          }
        })
        .then((response) => {

        })
        .catch((err) => {
          console.error(err);
        });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }; */

  return (
    <div>
      <h1>Cardapio Detail</h1>
      <div className={styles.formStyle} >
        <form  onSubmit={handleSubmit}>
          <div >
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="descricao">Description:</label>
            <textarea
              id="descricao"
              name="descricao"
              value={formData.descricao}
              onChange={handleChange}
            />
          </div>
          {/* Example for rendering pratos */}
          <div>
            <label>Pratos:</label>
            <ul>
              {formData.pratos.map(prato => (
                <li key={prato.id}>{prato.name}</li>
              ))}
            </ul>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};



export default Cardapio;




