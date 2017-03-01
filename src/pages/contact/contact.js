import React, { PropTypes } from 'react';
import { bindAll } from 'lodash';
import is from 'is_js';
import { submitForm } from './actions';
import Input from '../../components/ui/input/index';
import { connect } from 'react-redux';
import { Admin } from '../../components/index';


class ContactPage extends React.Component {

    static path = '/contact';
    static propTypes = {
        dicpatch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            errorName: '',
            errorEmail: ''
        };

        bindAll(this, ['changeName', 'changeEmail', 'submit', '_isFormValid', '_isNameValid', '_isEmailValid' ])
    }

    changeName(name) {
        this.setState({ name })
    };

    changeEmail(email) {
        this.setState({ email })
    };
    
    _isFormValid() {
        return this._isNameValid(this.state.name) && this._isEmailValid(this.state.email);
    };

    submit(event) {
        event.preventDefault();
        if (!this._isFormValid()) return;
        
        this.props.dispatch( submitForm( this.state.name, this.state.email ));
        this.setState({
            name: '',
            email: ''
        })
    }
    _isNameValid(name) {
        let errorName = '';
        
        if (name === '') {
            errorName = 'Поле не может быть пустым';
            this.setState({ errorName });
            return  false;
        }
        if ( name.length < 3 ) { 
            errorName = 'Длина имени не может быть меньше трёх символов';
            this.setState({ errorName });
            return  false;
        }
        this.setState({ errorName });
        return true;
    }

    _isEmailValid(email) {
        let errorEmail = '';

        if (email === '') {
            errorEmail = 'Поле не может быть пустым';
            this.setState({ errorEmail });
            return  false;
        }
        if ( !is.email(email) ) {
            errorEmail = 'Введите корректный E-mail';
            this.setState({ errorEmail });
            return  false;
        }
        this.setState({ errorEmail });
        return true;
    }

    render () {
        return (
        
            <div className='in'>
                <div className='row'>
                    <div className='col-xs-6'>
                <form className='b-contact'>
                    <h4>Имя: </h4>
                    <Input 
                        onChange={ this.changeName } 
                        value={ this.state.name} 
                        error={ this.state.errorName}
                    />
                    <h4>E-mail: </h4>
                    <Input 
                        onChange={ this.changeEmail } 
                        value={ this.state.email}
                        error={ this.state.errorEmail}
                    />
                    <button className='btn btn-primary' type='submit' onClick={ this.submit }>Сохранить</button>
                </form>
                        </div>
                    
                    </div>
                <h2>ТОРГОВЫЙ ОБЪЕКТ 'ЖЕНАВИ' </h2>
                <h3>РЕЖИМ РАБОТЫ: <br />
                    пн-пт 10<sup>00</sup>-20<sup>00</sup>, сб-вс 10<sup>00</sup>-19<sup>00</sup>, перерыв 14<sup>00</sup>-15<sup>00</sup></h3>
                <p>Частноу торговое унитарное предприятие "Ритакар"</p>
                <p>УНП 591804844, г. Сморгонь, ул. Ленина д. 4</p>
                <p>р/с 3012164648018 в дополнительном офисе №404 г.Сморгонь ОАО «БПС-Сбербанк»</p>
                <p>Директор Ольга Николаевна +375-29-782-33-37 (мтс) </p>
                <p>Наш магазин находится по адресу: г. Сморгонь, ул. Ленина д. 4</p>

                <div>
                    <iframe 
                        width={625} 
                        height={350} 
                        frameBorder={0} 
                        scrolling="no" 
                        marginHeight={0} 
                        marginWidth={0} 
                        src="http://www.openstreetmap.org/export/embed.html?bbox=26.400870680809025%2C54.48021471265457%2C26.40269458293915%2C54.48155952127111&layer=mapnik" 
                        style={{border: '1px solid black'}} 
                    ></iframe>
                    <br />
                    <small><a target='_blank' href="http://www.openstreetmap.org/#map=19/54.48089/26.40178&layers=N">
                        Посмотреть более крупную карту</a></small>
                </div>

                <p>Ориентир: Кафе "Вместе", цокольный этаж, вход с правой стороны</p>
               
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(ContactPage);

