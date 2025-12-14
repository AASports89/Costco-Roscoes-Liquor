import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      driverLogs {
        _id
        total_fill
        total_cost
        createdAt
      }
    }
  }
`;

export const QUERY_DRIVER_LOGS = gql`
  query getDriverLogs {
    driverLogs {
      _id
      name
      total_fill
      total_cost
      createdAt
    }
  }
`;

export const QUERY_SINGLE_DRIVER_LOG = gql`
  query getSingleDriverLog($driverLogId: ID!) {
    driverLog(driverLogId: $driverLogId) {
      _id
      total_fill
      total_cost
      createdAt
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      driverLogs {
        _id
        total_fill
        total_cost
        createdAt
      }
    }
  }
`;