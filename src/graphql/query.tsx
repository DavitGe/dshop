import { gql } from "@apollo/client";

export const GET_SLIDERS = gql`
  query getSliders {
    sliders {
      title
      image
      buttonText
      to
    }
  }
`;

export const GET_ADDS = gql`
  query getAdds {
    advertisements {
      type
      text
      buttonText
      linkTo
      img
    }
  }
`;

export const GET_FEATURED = gql`
  query getFeatured {
    products {
      title
      img
      price
      oldPrice
    }
  }
`;

export const GET_PRODUCTS = gql`
  query getFeatured {
    products {
      title
      img
      price
      oldPrice
    }
  }
`;
