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
    featuredProducts {
      title
      price
      oldPrice
      img
    }
  }
`;

export const GET_PRODUCTS = gql`
  query getProducts($offset: Int, $limit: Int) {
    products(offset: $offset, limit: $limit) {
      id
      title
      img
      price
      oldPrice
    }
  }
`;

export const GET_PRODUCT_BY_ID = gql`
  query getById($id: String) {
    getProductById(id: $id) {
      id
      title
      img
      price
    }
  }
`;
