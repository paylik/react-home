
import React from 'react';
import { Link } from 'react-router';

export default class Footer extends React.Component {

    static path = '/';

    render () {
        return (
            <div>
                <footer>
                    <p>Весь товар, представленный на нашем сайте вы можете преобрести в нашем магазине, <br/> который распологается по адресу г. Сморгонь, ул. Ленина 4, цокольный этаж.</p>
                    <p>© 2017 <Link to = '/'>paylik.myjino.ru</Link></p>
                </footer>
            </div>
        );
    }
}
