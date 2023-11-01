const SingleTestimonialSix = (props) => {
    const { itemClass, description, name, designation } = props;
    return (        
        <div className={itemClass ? itemClass : 'testimonial-item'}>
            <div class="row justify-content-end">
                <div class="col-lg-4">
                    <div class="img-part">
                        <img
                            src={props.authorImg}
                            alt={name}
                        />
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="content-part">
                        <div class="content-wrap">
                            <div class="text">
                                <p>
                                    {description ? description : 'Education is the passport to the future for tomorrow belongs to those who pre pare for it today.Sed ut perspiciatis unde omnis  iste natus error sit vo luptatem accusantium do loremque laudantium,'} 
                                </p>
                            </div>
                            <div class="info">
                                <div class="cite">
                                    <h3 class="name">{name ? name : 'Mahadi Mansura'}</h3>
                                </div>
                                <span class="position">{designation ? designation : 'CSE Student'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleTestimonialSix