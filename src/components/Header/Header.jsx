import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <header>
                <nav className=' nav container'>
                    <Link to={'/'}> <img src="https://media.istockphoto.com/id/1331491686/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%BD%D1%8B%D0%B9-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD.jpg?s=612x612&w=0&k=20&c=ZF1KkrkGRKVkdiwsbXOu-vIwrLAKr89CtVUOy9v8cgQ=" alt="" /></Link>
                   
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/create-product" >CreateProduct</Link>
                        </li>
                        <li>
                            <Link to="/login" >Login</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            
        </div>
    );
}

export default Header;
