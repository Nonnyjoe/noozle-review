// lib/fetchData.js
import { gql } from '@apollo/client';
import client from './apolloClient';

const NOTICES_QUERY = gql`
  query notices {
    notices {
      edges {
        node {
          index
          input {
            index
          }
          payload
        }
      }
    }
  }
`;

export const fetchNotices = async () => {
  try {
    const { data } = await client.query({
      query: NOTICES_QUERY,
    });
    return data.notices.edges;
  } catch (error) {
    console.error("Error fetching notices:", error);
    throw error;
  }
};
