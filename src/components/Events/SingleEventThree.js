import React from 'react';
import { Link } from 'react-router-dom';

const SingleEventThree = (props) => {
    const { eventClass, eventImg, eventLocation, eventDate, eventSchedule, eventTitle, eventDesc } = props;
    return (
        <div className={eventClass ? eventClass : 'event-item'}>
            <div class="event-short">
                <div class="featured-img">
                    <img src={eventImg} alt="Image" />
                </div>
                <div class="content-part">
                    <h4 class="title"><Link to="#">{eventTitle ? eventTitle : 'Educational Technology and Mobile Learning'}</Link></h4>
                    {eventDesc ? 
                        <p className="text">
                            {eventDesc}
                        </p> : ''
                    } 
                    <div class="address"><i class="fa fa-map-o"></i> {eventLocation ? eventLocation : 'New Margania'}</div>
                    {
                        eventDate ? 
                        <div class="date-part">
                            <div class="date">
                                <i class="fa fa-calendar-check-o"></i>
                                {eventDate} 
                            </div>
                        </div>: ''                    
                    }
                    
                    {eventSchedule ? 
                        <div className="time">
                            <i className="fa fa-clock-o"></i> 
                            {eventSchedule}
                        </div>  :  ''
                    }
                </div> 
            </div>
        </div>
    )
}

export default SingleEventThree