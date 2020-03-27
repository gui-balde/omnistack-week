import React from 'react';
import { Link } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

import './styles.css'

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero"/>

                <span>Welcome, NPO name</span>

                <Link className="button" to="/incidents/new">Create new incident</Link>
                <button type="button">
                    <FiPower size={18} color="#e02041"/>
                </button>
            </header>

            <h1>Incidents</h1>

            <ul>
                <li>
                    <strong>Incident:</strong>
                    <p>Title</p>

                    <strong>Description</strong>
                    <p>Test description</p>

                    <strong>Value</strong>
                    <p>R$ 130</p>

                    <button>
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                <li>
                    <strong>Incident:</strong>
                    <p>Title</p>

                    <strong>Description</strong>
                    <p>Test description</p>

                    <strong>Value</strong>
                    <p>R$ 130</p>

                    <button>
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                <li>
                    <strong>Incident:</strong>
                    <p>Title</p>

                    <strong>Description</strong>
                    <p>Test description</p>

                    <strong>Value</strong>
                    <p>R$ 130</p>

                    <button>
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                <li>
                    <strong>Incident:</strong>
                    <p>Title</p>

                    <strong>Description</strong>
                    <p>Test description</p>

                    <strong>Value</strong>
                    <p>R$ 130</p>

                    <button>
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
            </ul>
        </div>
    );
}