import React from "react";
import { Carousel as BootstrapCarousel } from "react-bootstrap";
import customer from "../../Assets/customer.png";
import model from "../../Assets/jurica-koletic.jpg";
import joseph from "../../Assets/joseph.jpg";

const CustomCarousel = () => {
  const crouselData = [
    {
      image: customer,
      heading: "Customers Love Easyform",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      name: "Suman Chakraborty",
      Designation: "Business Developer",
    },
    {
      image: model,
      heading: "Customers Love Easyform",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      comments:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "Biltu Baidya",
      Designation: "Business Developer",
    },
    {
      image: joseph,
      heading: "Customers Love Easyform",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      comments:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "Ayan Das",
      Designation: "Business Developer",
    },
  ];

  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <BootstrapCarousel activeIndex={index} onSelect={handleSelect}>
      {crouselData.map((data, index) => (
        <BootstrapCarousel.Item key={index} className="my-5">
          <div className="d-flex flex-col justify-content-center align-item-center">
            <h3>{data.heading}</h3>
            <p>{data.text}</p>
            <img
              className="border rounded-circle  align-self-center"
              style={{ width: "76px" }}
              src={data.image}
              alt="slide"
            />
            <h3>Suman Chakraborty</h3>
            <p>Business Developer</p>
          </div>
        </BootstrapCarousel.Item>
      ))}
    </BootstrapCarousel>
  );
};

export default CustomCarousel;
