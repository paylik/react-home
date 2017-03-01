
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { openModal } from '../../components/modal/index';
import EditModal from './edit-modal';
import DeleteModal from './delete-modal';
import { editItem, deleteItem } from './actions';

class VideoItem extends React.Component {
    
    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        youtube: PropTypes.string.isRequired,
        dispatch: PropTypes.func.isRequired
    };
    
    constructor(props) {
        super(props);
        
        this.edit = this.edit.bind(this);
        this.remove = this.remove.bind(this);
    }
    
    edit() {
        const { id, name, youtube } = this.props;
      this.props.dispatch( openModal({
          content: <EditModal id={ id } name={ name } youtube={ youtube } onSave={ editItem } />,
          title: 'Редактировать'
      }) );  
    }

    remove() {
        const { id, name } = this.props;
        this.props.dispatch( openModal({
            content: <DeleteModal id={ id } name={ name } onSuccess={ deleteItem } />,
            title: 'Удалить элемент?'
        }) );
    };
    

    render () {
        return (
            <tr>
                <td>{ this.props.id }</td>
                <td><Link to={`/video/${ this.props.id }`} > {this.props.name } </Link></td>
                <td>
                    <button onClick={ this.edit } >Редактировать</button>
                    <button onClick={ this.remove } >Удалить</button>
                </td>
            </tr>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(VideoItem);