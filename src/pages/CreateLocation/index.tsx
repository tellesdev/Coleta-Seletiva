import React, { useEffect, useState } from 'react';
import './styles.css'

import api from '../../services/Api'

import Logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Map, TileLayer, Marker } from 'react-leaflet'

interface Item {
  id: number;
  title: string;
  image_url: string;
}

const CreateLocation: React.FC = () => {

  const [items, setItems ] = useState<Item[]>([])

  useEffect(() => {
    api.get('items').then(response => {
      setItems(response.data)
    });
  }, [])
  
  return(
    <>
      <div id="page-create-location">
          <div className="content">
            <header>
              <img src={Logo} alt="Coleta Seletiva"/>
              <Link to="/">
                <FiArrowLeft/>
                Voltar para home
              </Link>
            </header>

          <form action="">
            <h1>Cadastro do <br /> Local da Coleta </h1>

            <fieldset>
              <legend>
                <h2>Dados</h2>
              </legend>
              <div className="field">
                <label htmlFor="name">Nome da entidade</label>
                <input type="text" name="name" id="name"/>
              </div>
              <div className="field-group">
              <div className="field">
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email"/>
              </div>
              <div className="field">
                <label htmlFor="whatsapp">Whatsapp</label>
                <input type="text" name="whatsapp" id="whatsapp"/>
              </div>
              </div>
           

            </fieldset>

            <fieldset>
              <legend>
                <h2>Endereços</h2>
                  <span>Marque o endereço no mapa</span>
              </legend>
              <Map center={[-27.2279632, -52.0779778]} zoom={16}>
              <TileLayer
                   attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               />
               <Marker position={[-27.2279632, -52.0779778]} />
              </Map>
              <div className="field-group">
                <div className="field">
                  <label htmlFor="city">Cidade</label>
                  <input type="text" name="city" id="city" />
                </div>
                <div className="field">
                  <label htmlFor="uf">Estado</label>
                  <input type="text" name="uf" id="uf" />
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend>
                <h2>Items coletados</h2>
                <span>Você pode marcar um ou mais ítens</span>
              </legend>
              <ul className="items-grid">
                {items.map(item => (
                  <li key={item.id}>
                    <img src={item.image_url} alt={item.title}/>
                  </li>
                ))}
                
              
                
                
              </ul>
            </fieldset>

            <button type="submit">
              Cadastrar local de coleta
            </button>

          </form>

          </div>
      </div>

    </>
  );
}

export default CreateLocation;