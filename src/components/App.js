import React, { Component } from 'react';

import Header from './Header';
import Main from './Main';

export default () => {
    return (
        <div className='App container'>
            <Header />
            <Main />
        </div>
    );
}