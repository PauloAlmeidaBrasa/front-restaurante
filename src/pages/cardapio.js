
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

  const handleSubmit = async(e) => {

    e.preventDefault();
    const formInputs = e.target
    const cardapioNome = formInputs[0].value
    const cardapioDescricao = formInputs[1].value
    console.log(formInputs)
    //const cardapioDescricao = formInputs[2].value
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/cardapio/update`,{
        params: {
          id: id,
          nome: cardapioNome,
          descricao: cardapioDescricao
        }
      });
      //setFormData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }

  };

  return (
<div className={styles.container} >
  <form  onSubmit={handleSubmit}>
    <div className={styles.styleDivnome} >
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="nome"
        name="nome"
        value={formData.nome}
        onChange={handleChange}
      />
    </div>
    <div className={styles.styleDivnome}>
      <label htmlFor="descricao">Description:</label>
      <textarea
        id="descricao"
        name="descricao"
        value={formData.descricao}
        onChange={handleChange}
      />
    </div>

    <div className={styles.styleDivnome} >
      <label>Pratos:</label>
  
     {           
        <select>
          {formData.pratos.map(prato => (
            <option key={prato.id}>{prato.nome}</option>
          ))}
        </select> } 
    </div>
    <button className={styles.buttonForm}  type="submit">Submit</button>
  </form>
</div>
  );
};


export default Cardapio;