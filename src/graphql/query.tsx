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
