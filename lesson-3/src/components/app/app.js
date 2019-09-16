import React from 'react';

import AppHeader from '../app-header';
import SearchPannal from '../search-panel';
import PostStatysFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

const App = () => {


    const data = [
        {lable: 'Goin to lealrn React', important: true, id: 'wdwa' },   
        {lable: 'Goin to lealrn React 1', important: false, id: 'wefwef'  },
        {lable: 'Goin to lealrn React 2', important: false, id: 'qsewd' }
    ];



    return ( 
        <div className = "app">
            <AppHeader/> 
          <div className = "serch-pannal d-flex">
              <SearchPannal/> 
              <PostStatysFilter/>
          </div>
          <PostList posts = {data} />
          <PostAddForm/>
        </div>
        
        
    )
}

export default App;