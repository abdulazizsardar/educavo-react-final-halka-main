

const SingleTestimonialFour = (props) => {
    const { itemClass, Title, Designation, Description } = props;
	return(

        <div className={itemClass ? itemClass : 'testi-item'}>
            <div class="item-content">
                <p>{Description ? Description : 'Education is the passport to the future for tomorrow belongs to those who pre pare for it today. Sed ut perspiciatis unde omnis iste natus error sit vo luptatem. Education is the passport to the future for tomorrow belongs'}</p>
                <div class="testi-information">
                    <div class="name">{Title ? Title : 'Mahadi Mansura'}</div>
                    <span class="designation">{Designation ? Designation : 'CSE Student'}</span>
                </div>
            </div> 
        </div>
	)
}

export default SingleTestimonialFour