
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
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/cardapio`,{
          params: {
            id: id
          }
        });
        setFormData(response.data);
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

  };

  return (
<div className={styles.formStyle} >
  <form  onSubmit={handleSubmit}>
    <div >
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.nome}
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

    <div>
      <label>Pratos:</label>
  
        {           
        <select>
          {formData.pratos.map(prato => (
            <option key={prato.id}>{prato.nome}</option>
          ))}
        </select> } 
    </div>
    <button type="submit">Submit</button>
  </form>
</div>
  );
};


export default Cardapio;