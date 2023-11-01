import React from 'react';
import BlogPart from '../../components/Blog/HomeBlogSection';
import SectionTitle from '../../components/Common/SectionTitle';

import newsletterIcon from '../../assets/img/white-newsletter3.png';

const Blog = () => {
    return (
        <React.Fragment>
            <div id="rs-blog" className="rs-blog main-home modify1 pb-100 pt-100 md-pt-70 md-pb-70">
                <div className="container">
                    <SectionTitle
                        sectionClass="sec-title4 text-center mb-50"
                        subtitleClass="sub-title"
                        subtitle="News Update"
                        titleClass="title"
                        title="Latest News & events"
                    />
                    <BlogPart />
                </div>
            </div>
        </React.Fragment>
    );

}

export default Blog;