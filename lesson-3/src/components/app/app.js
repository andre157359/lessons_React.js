import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPannal from '../search-panel';
import PostStatysFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
        {lable: 'Goin to lealrn React', important: true, id: '1' },   
        {lable: 'Goin to lealrn React 1', important: false, id: '2'  },
        {lable: 'Goin to lealrn React 2', important: false, id: '3' }
    ]
        };
        this.deleteItem = this.deleteItem.bind(this);   
        this.addItem = this.addItem.bind(this);   

        this.maxId = 4;
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index =data.findIndex(elem => elem.id === id);

           

            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

            return {
                data: newArr
            }
        });
        
    }

    addItem(body) {
        const newItem = {
            lable: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }

        })
    }


  render() {
    return ( 
        <div className = "app">
            <AppHeader/> 
          <div className = "serch-pannal d-flex">
              <SearchPannal/> 
              <PostStatysFilter/>
          </div>
          <PostList 
                posts = {this.state.data}
                onDelete = {this.deleteItem}/>
          <PostAddForm
            onAdd = {this.addItem}/>
        </div>
        
        
    )
  }
}
