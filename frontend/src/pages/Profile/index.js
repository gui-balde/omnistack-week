import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import api from '../../services/api';
import logoImg from '../../assets/logo.svg'

import './styles.css'


export default function Profile() {
    const [incidents, setIncidents] = useState([]);
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    // two params for useEffect: 
    // 1. function to execute 
    // 2. an array for when to execute 
    //    - the array is for dependencies - it must contain state variables, when they change, the function should run!
    //    (empty array runs the function only once)
    useEffect(() => {
        api.get('profile', {
            headers: {Authorization: ongId}
        }).then(response => {
            setIncidents(response.data);
        });
    }, [ongId]);  // include as a dependency all variables that are used in the function

    async function handleDeleteIncident(incidentId) {
        try{
            await api.delete(`incidents/${incidentId}`, {
                headers: {Authorization: ongId}
                }
            );

            setIncidents(incidents.filter(incident => incident.id !== incidentId))
        }catch(err) {
            alert('Error deleting incident')
        }
    }

    function handleLogout() {
        localStorage.clear();

        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero"/>
                <span>Welcome, {ongName} name</span>

                <Link className="button" to="/incidents/new">Create new incident</Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size={18} color="#e02041"/>
                </button>
            </header>

            <h1>Incidents</h1>

            <ul>
                {incidents.map(incident => (
                    // it is important to include a key attribute whenver we have a list of items
                    <li key={incident.id}>
                        <strong>Incident:</strong>
                        <p>{incident.title}</p>

                        <strong>Description</strong>
                        <p>{incident.description}</p>

                        <strong>Value</strong>
                        <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL', }).format(incident.value)}</p>

                        <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}