import React from 'react';

const EventsShort = (props) => {
    const { eventsClass, dateboxClass, catLink1, catLink2, titleClass, titleLink, animateName, animateDelay } = props;
    return (
        <div className={eventsClass ? eventsClass : 'events-short mb-30'} data-aos={animateName ? animateName : 'fade-up'} data-aos-delay={animateDelay ? animateDelay : ''}>
            <div className={dateboxClass ? dateboxClass : 'date-part bgc1'}>
                <span className="month">{props.month}</span>
                <div className="date">{props.date}</div>
            </div>
            <div className="content-part">
                <div className="categorie">
                    <a href={catLink1 ? catLink1 : '#'}>{props.cat1}</a> & <a href={catLink2 ? catLink2 : '#'}>{props.cat2}</a>
                </div>
                <h4 className={titleClass ? titleClass : 'title mb-0'}>
                    <a href={titleLink ? titleLink : '#'}>{props.title}</a>
                </h4>
            </div>
        </div>
    )
}

export default EventsShort