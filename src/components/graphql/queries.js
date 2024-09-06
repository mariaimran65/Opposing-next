export const GET_WAIT_LIST = `
  query (
    $limit: Int
    $skip: Int
    $sort: String
    $order: String
  ) {
    viewer {
        waiting_list(
        limit: $limit
        skip: $skip
        sort: $sort
        order: $order
      ) {
        edges {
          node {
            email
            name
            no
          }
        }
        count
      }
    }
  }
`;
