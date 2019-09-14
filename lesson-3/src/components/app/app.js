import React from 'react';
import AppHeader from '../app-header';
import SearchPannal from '../search-panel';
import PostStatysFilter from '../post-status-filter'

const App = () => {
    return ( 
        <div className = "app">
            <AppHeader/> 
          <div className = "serc-pannal d-flex">
              <SearchPannal/> 
              <PostStatysFilter/>
          </div>
        </div>
        
        
    )
}

export default App;