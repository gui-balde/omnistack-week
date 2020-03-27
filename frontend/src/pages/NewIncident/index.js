import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg';

import './styles.css'

export default function NewIncident() {
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

                <form>
                    <input placeholder="Title"/>
                    <textarea placeholder="Description" />
                    <input placeholder="Value in BRL"/>

                    <button className="button" type="submit">
                        Create
                    </button>
                </form>
            </div>
        </div>
    )
}