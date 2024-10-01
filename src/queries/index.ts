import { gql } from "urql";
export const CREATE_HR = gql`
  mutation CreateHr(
    $name: String
    $email: String
    $password: String
    $lang: ID
  ) {
    createHr(
      input: { name: $name, email: $email, password: $password, lang: $lang }
    ) {
      success
      user {
        id
        email
        isActive
      }
      token
      refreshToken
      response
    }
  }
`;

export const LOGIN_HR = `
  mutation LoginHr($email: String, $password: String) {
    loginHr(input: { email: $email, password: $password }) {
      success
      response
      token
      tokenExpire
      refreshToken
      user {
        id
        email
        name
        company {
          id
          name
          image
        }
      }
    }
  }
`;

export const USERS_QUERY = `
  query Users(
    $id: String
    $searchKeyword: String
    $orderBy: String
    $orderType: String
    $offset: Int
    $first: Int
    $startDate: Date
    $endDate: Date
    $gender: String
    $status: Boolean
  ) {
    users(
      id: $id
      searchKeyword: $searchKeyword
      orderBy: $orderBy
      orderType: $orderType
      offset: $offset
      first: $first
      startDate: $startDate
      endDate: $endDate
      gender: $gender
      status: $status
    ) {
      edgeCount
      totalCount
      edges {
        node {
          id
          name
          firstName
          lastName
          username
          email
          cpf
          totalBalance
          userpix {
            pixKey
            pixKeyType
          }
          company {
            name
          }
          userprofile {
            image
            dob
            gender {
              id
              nameEn
              namePt
            }
          }
          userwalletSet(isActive: true) {
            edges {
              node {
                id
                isActive
                initialBalance
                availableBalance
                benefit {
                  amount
                  benefit {
                    id
                    image
                    nameEn
                    namePt
                    colorCode
                  }
                }
              }
            }
          }
          transactionSet(lastTransactions: 1) {
            edges {
              node {
                id
                amount
              }
            }
          }
          isActive
        }
      }
    }
  }
`;
