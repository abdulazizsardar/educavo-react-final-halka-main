
const SingleTestimonialFive = (props) => {
    const {itemClass, quoteImage, authorImage, Title, Designation, Description } = props;
    return (
        <div className={itemClass ? itemClass : 'testi-item'}>
            <div class="item-content-basic">
                <div class="desc">
                    <img
                        src={quoteImage}
                        alt={Title}
                        className="quote"
                    /> {Description ? Description : 'Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That’s how I would describe Jeramy and his team at The Lorem Ipsum Company. When it comes to content marketing, you’ll definitely get the 5-star treatment from the Lorem Ipsum Company.'}
                </div>
                <div class="testi-content">
                    <div class="img-wrap">
                        <img
                            src={authorImage}
                            alt={Title}
                        />
                    </div>
                    <div class="name">
                        {Title ? Title : 'Junita Mushenko'}
                    </div>
                    <span class="designation">{Designation ? Designation : 'Math Teacher'}</span>
                </div>
            </div>
        </div>
    )
}

export default SingleTestimonialFive