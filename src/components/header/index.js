
import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {

    static path = '/';

    render () {
        return (
            <div>
                 <div className='logo'>
                    <div className='logo_logo'> <Link to='/products'><img src='img/logo-jenavi-smorgon-3.png' alt='logo' width={380} height={184} /></Link>
                    </div>
                    <div className='logo_time'>
                        <h2>ТОРГОВЫЙ ОБЪЕКТ 'ЖЕНАВИ' </h2>
                        <h3>РЕЖИМ РАБОТЫ: <br />
                            пн-пт 10<sup>00</sup>-20<sup>00</sup>, сб-вс 10<sup>00</sup>-19<sup>00</sup>, перерыв 14<sup>00</sup>-15<sup>00</sup></h3>
                        <p>Директор Ольга Николаевна +375-29-782-33-37 (мтс) </p>
                    </div>
                    <div className='logo_swarovsky'><a href='img/swarovski-sertificat.jpg'><img src='img/Swarovski-logo.jpg' width={184} height={184} alt='logo' /></a></div>
                </div>
                <nav> 
                 <ul>
                     <Link to='/'><li>Главная</li></Link>
                     <Link to='/video'><li>Видео</li></Link>
                     <Link to='/contact'><li>О нас</li></Link>
                </ul>
                </nav>
            </div>
        );
    }
}
