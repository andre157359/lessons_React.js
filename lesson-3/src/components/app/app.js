import React from 'react';

import AppHeader from '../app-header';
import SearchPannal from '../search-panel';
import PostStatysFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

const App = () => {
    return ( 
        <div className = "app">
            <AppHeader/> 
          <div className = "serch-pannal d-flex">
              <SearchPannal/> 
              <PostStatysFilter/>
          </div>
          <PostList/>
          <PostAddForm/>
        </div>
        
        
    )
}

export default App;