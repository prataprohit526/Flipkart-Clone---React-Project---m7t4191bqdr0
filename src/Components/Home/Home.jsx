import React from "react";
import Appliances from "./homeComponents/Appliances";
import Bestselling from "./homeComponents/Bestselling";
import Electronics from "./homeComponents/Electronics";
import Fashion from "./homeComponents/Fashion";
import FinalBanner from "./homeComponents/FinalBanner";
import Groceries from "./homeComponents/Groceries";
import Mobile from "./homeComponents/Mobile";
import TopOffers from "./homeComponents/TopOffers";
import OfferBanner from "./homeComponents/OfferBanner";
import CategoryBar from "./homeComponents/CategoryBar";
import BannerOffer from "./homeComponents/BannerOffer";

import { Box } from "@chakra-ui/react";
import CategoryBarForMobile from "./homeComponents/CategoryBarForMobile";

const Home = () => {
  return (
    <Box>
      <CategoryBar />
      <FinalBanner />
      <CategoryBarForMobile />
      <OfferBanner />
      <BannerOffer />
      <Fashion />
      <Bestselling />
      <Appliances />
      <Electronics />
      <Groceries />
      <Mobile />
      <TopOffers />
    </Box>
  );
};

export default Home;
