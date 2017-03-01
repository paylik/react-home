
import React, { PropTypes } from 'react';
import { store } from '../../index';
import { bindAll } from 'lodash';

export default class ItemDetails extends React.Component {
    
    static propTypes = {
        routeParams: PropTypes.any.isRequired
    };
    
    constructor(props) {
        super(props);

        bindAll(this, ['getCurrentItemFromStore']);

        const item = this.getCurrentItemFromStore();
        
        this.state = {
            id: item.id,
            name: item.name,
            youtube: item.youtube
        };
    }
 
    getCurrentItemFromStore() {
        const actualStore = store.getState();
        const { items } = actualStore.video;
        
        const idx = items.findIndex(item => item.id === Number(this.props.routeParams.id));
        return {
            id: items[ idx ].id,
            name: items[ idx ].name,
            youtube: items[ idx ].youtube
        };
    }
    
    

    render () {
        return (
            <div>
                <p> { this.state.name } : { this.state.id } </p>
                <iframe
                    src={`https://www.youtube.com/embed/${ this.state.youtube }`}
                    frameBorder='0'
                    allowFullScreen
                ></iframe>
            </div>
        );
    }
}
