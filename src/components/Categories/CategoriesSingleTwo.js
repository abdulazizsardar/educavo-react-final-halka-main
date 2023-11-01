import React from 'react';

const CategoriesSingleTwo = (props) => {
    const { categoriesClass, iconImg, title, courseQuantity } = props;
    
    return (
        <a className={categoriesClass ? categoriesClass : 'categories-item'} href="#">
            <div className="icon-part">
                <img
                    src={iconImg}
                    alt={title}
                />
            </div>
            <div className="content-part">
                <h4 className="title">{title ? title : 'General Education'}</h4>
                <span className="courses">{courseQuantity ? courseQuantity : '05'} Courses</span>
            </div>
        </a>
    )
}

export default CategoriesSingleTwo