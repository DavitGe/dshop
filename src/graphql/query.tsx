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
