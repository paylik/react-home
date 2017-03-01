
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

class Admin extends React.Component {

    static propTypes = {
        user: PropTypes.object.isRequired
    };
    

    render () {
        
       const { name, email } = this.props.user;
       if (name !== 'Паша' || email !== 'paylik@yandex.ru' ) {return null;}
        
        return (
            <div>
                <p>Привет, </p>
                
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(Admin);
