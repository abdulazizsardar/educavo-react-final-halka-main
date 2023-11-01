
const SingleTestimonialSeven = (props) => {
    const { itemClass, authorImage, Title, Designation, Description } = props;
    return (
        <div className={itemClass ? itemClass : 'testi-item'}>
            <div class="image-wrap">
                <img
                    src={authorImage}
                    alt={Title}
                />
            </div>
            <div class="desc">
                {Description ? Description : "Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That’s how I would describe Jeramy and his team at The Lorem Ipsum Company. When it comes to content marketing, you’ll definitely get the 5-star treatment from the Lorem Ipsum Company."}
            </div>
            <div class="testi-content">
                <h5 class="name">
                    {Title ? Title : 'Junita Mushenko'}
                </h5>
                <span class="designation">{Designation ? Designation : 'Math Teacher'}</span>
            </div>
        </div>
    )
}

export default SingleTestimonialSeven