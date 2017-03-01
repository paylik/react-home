import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';

import { HomePage, HomeRoutes } from './pages/home/index';
import { VideoRoutes } from './pages/video/index';
import { ContactRoutes } from './pages/contact/index';

import  ErrorPage from './pages/error/index';

export default (
    <Route component={ App } path={ App.path }>
        <IndexRoute component = { HomePage } />
        
        { HomeRoutes }
        { ContactRoutes }
        { VideoRoutes }
        
        <Route path = '*' component = { ErrorPage }/>
    </Route>
);
