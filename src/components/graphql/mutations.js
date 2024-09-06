export const CREATE_WAIT_LIST = `
  mutation CreateWaitListRequest($input: WaitingListCreateInput!) {
    WaitingListCreate(input: $input) {
      error
      waitingListUser{
        email
        id
      }
    }
  }
`;

export const UPDATE_WAIT_LIST = `
  mutation WaitingListUpdate($input: WaitingListUpdateInput!) {
    WaitingListUpdate(input: $input) {
      error
      waitingListUser{
        email
      }
    }
  }
`;

export const SUBSCRIBE_TO_NEWSLETTER = `
  mutation CreateSubscriptionRequest($input: NewsletterSubscriptionCreateInput!) {
    NewsletterSubscriptionCreate(input: $input) {
      error
      subscriptionUser{
        email
      }
    }
  }
`;
export const TOOL_USER = `
  mutation CreateToolUserRequest($input: ToolUsersCreateInput!){
    ToolUserCreate(input: $input){
      toolUser {
        domainName
        createdAt
        country
        toolType
      }
    }
  }
`;
