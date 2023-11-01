import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = (props) => {
	const { itemClass, serviceImage, Title, Desc } = props;
	return(
        <div className={itemClass ? itemClass : 'services-wrap bg1'}>
            <div class="services-item">
                <div class="services-icon">
                    <img 
                        src={serviceImage}  
                        alt={Title} 
                    /> 
                </div>
                <div class="services-desc">
                    <h3 class="title">
                        <Link to='/service/service-details'>
                            {Title ? Title : 'Web Development'}
                        </Link>
                    </h3>
                    <p>
                        {Desc ? Desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna'}
                    </p>
                </div>
            </div>
        </div>
	)
}

export default SingleService