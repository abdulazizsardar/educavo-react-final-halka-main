import React from 'react';
import { Link } from 'react-router-dom';

const SingleEvent = (props) => {
    const { eventClass, eventImg, eventCategory, eventLocation, eventDate, eventSchedule, eventTitle, eventDesc, btnText } = props;
    return (
        <div className={eventClass ? eventClass : 'event-item'}>
            <div className="event-short">
                <div className="featured-img">
                    <img src={eventImg} alt="Image" />
                </div>
                {eventCategory ? 
                    <div className="categorie">
                        <a href="#">{eventCategory}</a>
                    </div> : ''                    
                }
                
                <div className="content-part">
                    <div className="all-dates-time">
                        <div className="address"><i className="fa fa-map-o"></i> {eventLocation ? eventLocation : 'New Margania'}</div>
                        {eventSchedule ? 
                            <div className="time">
                                <i className="fa fa-clock-o" aria-hidden="true"></i> 
                                {eventSchedule}
                            </div> : ''
                        }
                           
                    </div>
                    <h4 className="title"><Link to="#">{eventTitle ? eventTitle : 'Educational Technology and Mobile Learning'}</Link></h4>
                    {
                        eventDesc ? 
                        <p className="text">
                            {eventDesc}
                        </p> : ''
                    }                    
                    <div className="event-btm">
                        <div className="date-part">
                            <div className="date">
                                <i className="fa fa-calendar-check-o"></i>
                                {eventDate ? eventDate : 'July 24, 2020'}
                            </div>
                        </div>
                        <div className="btn-part">
                            <Link to="#">{btnText ? btnText : 'Join Event'}</Link>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default SingleEvent