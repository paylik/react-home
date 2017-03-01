import React, { PropTypes } from 'react';
import VideoItem from './video-item';
import { connect } from 'react-redux';
import { bindAll } from 'lodash';

class VideoPage extends React.Component {

    static path = '/video';
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        video: PropTypes.object.isRequired
};
    
    constructor(props) {
        super(props);

        bindAll(this, ['renderItems']);
        
    }

    renderItems(item, idx) {
        return (
            <VideoItem 
                    key = { idx }
                    id = { item.id }
                    name = { item.name }
                    youtube = { item.youtube }
                />
        );
    }

    render () {
        const { items } = this.props.video;
        return (
            <div>
                <h2>СПИСОК ВИДЕО С РЕДАКТИРОВАНИЕМ ЧЕРЕЗ МОДАЛЬНОЕ ОКНО</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    { items.map(this.renderItems) }
                    </tbody>
                </table>
                
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        video: state.video
    };
}

export default connect(mapStateToProps)(VideoPage);
