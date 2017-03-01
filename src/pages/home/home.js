import React, { PropTypes } from 'react';
import Input from '../../components/ui/input/index';
import Loader from '../../components/loader/index';
import { connect } from 'react-redux';
import  classnames from 'classnames';
import { 
    addTodo,
    likeTodo, 
    deliteTodo, 
    getTodos
                } from './actions';
import { LS } from '../../utils/index';

class HomePage extends React.Component {

    static path = '/';

    static propTypes = {
        home: PropTypes.object.isRequired,
        dispatch: PropTypes.object.isRequired

    };

    constructor(props) {
        super(props);

        this.state = {
            todoName: ''
        };
        
        this.props.dispatch( getTodos() );
    }
    
    inputOnChange(value) {
        this.setState({ todoName: value });
    }

    addTodo() {
        
        this.props.dispatch( addTodo(this.props.home.todos, this.state.todoName) );
        this.setState({ todoName: ''});
    };

    renderTodos(item, idx) {
        const todoClasses = classnames('todo-item', {
            'is-liked': item.liked
        });
        const btnClasses = classnames('btn', {
            'active': item.liked
        });
        return (
            <li key={ idx }>
                <button onClick={ this.deliteTodo.bind(this, item)}>Удалить</button>
                <button className={ btnClasses } onClick={ this.likeTodo.bind(this, item)}>Отметить</button>
                <span className={ todoClasses }>{ item.name }</span>
            </li>
        );
    }

    likeTodo(todo) {
        this.props.dispatch( likeTodo(todo) );
    }
    deliteTodo(todo){
        this.props.dispatch( deliteTodo(todo) );
    }

    render () {
        const { todoName } = this.state;
        const { todos, error, isLoading } = this.props.home;
        LS.set('todos', todos);
        return (
            <div className='todo-item'>
                <h2>TODO ЧЕРЕЗ LOCALSTORAGE</h2>
                <ul>
                    { isLoading 
                        ? <Loader /> 
                        : todos.length!== 0
                            ? todos.map(this.renderTodos.bind(this))
                            : 'Элементов нет'}
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
        home: state.home
    };
}

export default connect(mapStateToProps) (HomePage);

