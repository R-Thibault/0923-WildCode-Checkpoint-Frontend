// TODO
import { gql } from "@apollo/client";

export const allCountries = gql`
  query Countries {
    items: countries {
      id
      code
      name
      emoji
      continent {
        id
        name
      }
    }
  }
`;

export const oneCountry = gql`
  query Country($code: String!) {
    item: country(code: $code) {
      id
      code
      name
      emoji
      continent {
        id
        name
      }
    }
  }
`;

export const allContinents = gql`
  query Continents {
    items: continents {
      id
      name
    }
  }
`;

export const addCountry = gql`
  mutation Mutation($data: NewCountryInput!) {
    item: addCountry(data: $data) {
      id
    }
  }
`;
