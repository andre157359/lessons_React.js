import React from 'react';
import { Button } from 'reactstrap';

import './post-status-filter.css'

const PostStatysFilter = () => {
    return (
        <div className = "btn-group">
            <Button color="info">Все</Button>
            <button type = 'button' className = 'btn btn-info'>Все</button>
            <button type = 'button' className = 'btn btn-outline-secondary'>Понравилось</button>
        </div>
    )
}

export default PostStatysFilter;