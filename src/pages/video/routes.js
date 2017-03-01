import React from 'react';
import { Route } from 'react-router';
import VideoPage from './video';
import ItemDetails from './item-details';

export default (
    <Route>
        <Route component = { VideoPage } path = { VideoPage.path } />
        <Route component = { ItemDetails } path = { VideoPage.path + '/:id' }  />
    </Route>
);
