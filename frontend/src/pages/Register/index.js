import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg';

import './styles.css'

import api from '../../services/api'

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUF] = useState('');

    async function handlerRegister(e) {
        e.preventDefault();
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };
        
        // axios will send JSON data per default
        try{
            const response = await api.post('ongs', data);
            alert(`Register ID: ${response.data.id}`);
        } catch(err) {
            alert("Something went wrong! Please try again later.");
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Register</h1>
                    <p>Register to enter the platform and help people find your NPO's incidents</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#e02041"/>
                        I am already registered
                    </Link>
                </section>

                <form onSubmit={handlerRegister}>
                    <input 
                        placeholder="NPO name" 
                        value={name} 
                        onChange={e => setName(e.target.value)}/>

                    <input 
                        type="email" 
                        placeholder="E-Mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}/>

                    <input 
                        placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                        />

                    <div className="input-group">
                        <input 
                            placeholder="City"
                            value={city}
                            onChange={e => setCity(e.target.value)}/>

                        <input 
                            placeholder="State" 
                            style={{ width: 80 }}
                            value={uf}
                            onChange={e => setUF(e.target.value)}/>
                    </div>

                    <button className="button" type="submit">
                        Register
                    </button>
                </form>
            </div>
        </div>
    )
}