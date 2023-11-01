import React from 'react';
import { Link } from 'react-router-dom';

const RecentPostWidget = () => {
    return (
        <div className="recent-posts mb-50">
            <h3 class="widget-title">Recent Posts</h3>
            <ul>
                <li><Link to="/blog/blog-details">University while the lovely valley team work</Link></li>
                <li><Link to="/blog/blog-details">High school program starting soon 2021</Link></li>
                <li><Link to="/blog/blog-details">Modern School the lovely valley team work</Link></li>
                <li><Link to="/blog/blog-details">While the lovely valley team work</Link></li>
                <li><Link to="/blog/blog-details">This is a great source of content for anyone…</Link></li>
            </ul>
        </div>
    )
}

export default RecentPostWidget;