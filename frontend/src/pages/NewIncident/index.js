import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg';

import './styles.css'
import api from '../../services/api';

export default function NewIncident() {
    const ongId = localStorage.getItem('ongId');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const history = useHistory();

    async function handleCreate(e) {
        e.preventDefault();  // prevent default form redirect

        const data = {
            title, description, value
        }

        try{
            api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            });

            history.push('/profile');
        } catch(err) {
            alert('Something went wrong, please try again later!');
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>New incident</h1>
                    <p>Detail the incident to find your hero</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#e02041"/>
                        Back to Profile
                    </Link>
                </section>

                <form onSubmit={handleCreate}>
                    <input 
                        placeholder="Title"
                        value={title}
                        onChange={ e => setTitle(e.target.value)}
                    />

                    <textarea 
                        placeholder="Description"
                        value={description}
                        onChange={ e => setDescription(e.target.value)}
                    />

                    <input 
                        placeholder="Value in BRL"
                        value={value}
                        onChange={ e => setValue(e.target.value)}
                    />

                    <button className="button" type="submit">
                        Create
                    </button>
                </form>
            </div>
        </div>
    )
}