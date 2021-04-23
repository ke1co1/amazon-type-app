import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
import "./MaterialCarousel.css";

function MaterialCarousel() {
  const images = [
    // {
    //   imgUrl:
    //     "https://i.gadgets360cdn.com/large/best_movies_on_amazon_prime_august_2020_1597408336879.jpg",
    // },
    {
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ODI1Y2FmMWUt/ODI1Y2FmMWUt-OTU3YWZkZDYt-w3000._CB656225500_.jpg",
    },
    {
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/G/01/GW_HUD/PrimeUP/XCM_Manual_1315748_US_us_prime_lt35_apr_2021_us_en_3751944_3000x1200_2X._CB656839915_.jpg",
    },
    {
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2021/Marketing/SWSpringDeal_DMUX-4280/Gateway/DV2/US-EN_030821_SpringSitewide_ACQ_GW_Hero_D_3000x1200_CV60._CB656151160_.jpg",
    },
    {
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/NjA0N2YxY2It/NjA0N2YxY2It-MmQ2OTcxMWMt-w3000._CB655440701_.jpg",
    },
  ];

  // var images = [
  //   {
  //     name: "Random Name #1",
  //     description: "Probably the most random thing you have ever seen!",
  //   },
  //   {
  //     name: "Random Name #2",
  //     description: "Hello World!",
  //   },
  // ];

  return (
    <Carousel>
      {images.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper>
      <img className="home__image" src={props.item.imgUrl} alt="" />
    </Paper>
  );
}

export default MaterialCarousel;
