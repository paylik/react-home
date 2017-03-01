
import React, { PropTypes } from 'react';
import Input from '../ui/input/index';
import { connect } from 'react-redux';
import  TooDooReducer from './reducers';

class GuaranteesPage extends React.Component {

    static path = '/';
    
    static propTypes = {
        toodoo: PropTypes.object.isRequired,
        dispatch: PropTypes.object.isRequired
    
    };
    
    constructor(props) {
        super(props);

        this.state = {
            todoName: ''
        }
    }

    inputOnChange(value) {
        this.setState({ todoName: value });
    }

    addTodo() {
        if (this.state.todoName === '') {
            this.setState({ error: 'Поле не должно быть пустым'});
            return;
        }
        const id = this.state.todos[this.state.todos.length - 1].id + 1;
        const name = this.state.todoName;
        
        const todos = this.state.todos;
        todos.push({ id, name });
        this.setState({ todos });
        this.setState({ todoName: '', error: ''})
    };

    renderTodos(item, idx) {
        return (
            <li key={ idx }>{ item.name }</li>
        );
    }

    render () {
        const { todoName } = this.state;
        const { todos, error } = this.props.toodoo;
        return (
            <div>
                <ul>
                    { todos.map(this.renderTodos.bind(this))}
                </ul>
                <Input 
                    onChange={ this.inputOnChange.bind(this) } 
                    value={ todoName }
                    error={ error }
                />
                <button onClick={ this.addTodo.bind(this) } >Add todo</button>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        guarantees: state.guarantees
    };
}

export default connect(mapStateToProps) (GuaranteesPage);
    
    