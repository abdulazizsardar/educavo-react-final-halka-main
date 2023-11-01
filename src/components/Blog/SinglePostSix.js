
import { Link } from 'react-router-dom';

const SinglePostSix = ( props ) => {
    const {blogClass, blogImage, blogTitle, blogAuthor, blogPublishedDate, blogCategory, blogDesc, blogButtonClass, blogButtonText } = props;
    return (
        <div className={blogClass ? blogClass : 'blog-item'}>
            <div class="blog-img">
                <Link to="/blog/blog-details">
                    <img
                        src={blogImage}
                        alt={blogTitle}
                    />
                </Link>
            </div>
            <div class="blog-content">
                <h3 className="blog-title">
                    <Link to="/blog/blog-details">
                        {blogTitle ? blogTitle : 'University while the lovely valley team work'}
                    </Link>
                </h3>
                <div class="blog-meta">
                    <ul class="btm-cate">
                        <li>
                            <div class="blog-date">
                                <i class="fa fa-calendar-check-o"></i> {blogPublishedDate ? blogPublishedDate : 'September 14, 2020'}                                                        
                            </div>
                        </li>
                        <li>
                            <div class="author">
                                <i class="fa fa-user-o"></i> {blogAuthor ? blogAuthor : 'Admin'}  
                            </div>
                        </li>   
                        <li>
                            <div class="tag-line">
                                <i class="fa fa-book"></i>
                                <Link to="#">{blogCategory ? blogCategory : 'University'}</Link>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="blog-desc">   
                    {blogDesc ? blogDesc : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam... '}                                    
                </div>
                <div className={blogButtonClass ? blogButtonClass : 'blog-button'}>
                    <Link to="/blog/blog-details"  className="blog-btn">
                        {blogButtonText ? blogButtonText : 'Continue Reading'}
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default SinglePostSix