import Slider from "react-slick";
import PropertiesCard from "./PropertiesCard";
import "./TopPropertiesCarousel.css";

function TopPropertiesCarousel({ properties }) {
  if (!properties || properties.length === 0) return <p>No top properties found.</p>;

  // Sort by review score descending
  const topProperties = properties
    .slice()
    .sort((a, b) => b.review_score - a.review_score)
    .slice(0, 6); // show top 6

  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {topProperties.map((property) => (
          <div key={property.id} className="carousel-slide-wrapper">
            <PropertiesCard property={property} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TopPropertiesCarousel;
