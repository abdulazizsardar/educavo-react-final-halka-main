import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesWidget = () => {
    return (
        <div className="widget-archives mb-50">
            <h3 className="widget-title">Categories</h3>
            <ul>
                <li><Link to="#">College</Link></li>
                <li><Link to="#">High School</Link></li>
                <li><Link to="#">Primary</Link></li>
                <li><Link to="#">School</Link></li>
                <li><Link to="#">University</Link></li>
            </ul>
        </div>
    )
}

export default CategoriesWidget;