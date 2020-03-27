import React from 'react';
import { Link } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be the hero"/>

                <form>
                    <h1>Login</h1>

                    <input placeholder="Your identification"/>
                    <button className="button" type="submit">Enter</button>

                    <Link to="/register"><FiLogIn size={16} color="#e02041"/> I am not registered</Link>
                </form>

            </section>

            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}
