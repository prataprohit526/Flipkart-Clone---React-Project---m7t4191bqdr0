import { Box, Grid, GridItem, Img, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

function BannerOffer() {
  return (
    <div>
      <Box m="15px">
        <SimpleGrid columns={[1, 2, 3]} spacing="20px">
          <NavLink to="/products/mobiles">
            <Box>
              <Img src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/38fb516019105ea8.jpg?q=50" />
            </Box>
          </NavLink>
          <NavLink to="/products/fashion">
            <Box>
              <Img
                src="https://dealroup.com/wp-content/uploads/2022/03/Flipkart-Grocery-Offers-Sale.jpg"
                alt="offerBaner"
              />
            </Box>
          </NavLink>
          <NavLink to="/products/grocery">
            <Box>
              <Img src="https://www.shopickr.com/wp-content/uploads/2016/08/flipkart-beauty-sale-1.jpg" />
            </Box>
          </NavLink>
        </SimpleGrid>
      </Box>
    </div>
  );
}

export default BannerOffer;
