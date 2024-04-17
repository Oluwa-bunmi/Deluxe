import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonial } from "../constants/data";
const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Set to true for automatic sliding
    autoplaySpeed: 2000, // Set the interval (in milliseconds)
  };
  return (
    <section className="mb-[60px]">
      <div className="container">
        <h2 className="text-center text-[32px] font-semibold accia text-primary">
          What Our Customers Are Saying
        </h2>
        <p className="text-center text-xl leading-[28px] text-dark mb-[41px]">
          Take a look at what our customers are saying about our products
        </p>
        <div>
          <Slider {...settings}>
            {testimonial.map((item, index) => (
              <div key={index}>
                <div className="bg-secondary containe items-center flex flex-col lg:flex-row gap-[60px] py-[30px] px-[20px] sm:px-[100px] rounded-lg">
                  <img src={item.image} alt={item.name} />
                  <div className="flex flex-col items-end gap-[22px]">
                    <p className="text-[16px] font-normal leading-[24px] text-dark">
                      {item.testimony}
                    </p>
                    <p className="font-medium text-xl text-primary">
                      {item.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
