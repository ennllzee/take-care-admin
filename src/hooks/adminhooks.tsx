import { gql, useQuery, useMutation } from "@apollo/client";

const useAdminApi = () => {
  const GET_SINGLE_ADMIN = gql`
    query Query($getAdminId: ID!) {
      getAdmin(_id: $getAdminId) {
        _id
        FirstName
        LastName
        Gender
        DOB
        Address
        ContactAddress
        PhoneNumber
        Email
        Education {
          Degree
          Acadamy
          Certificate {
            filename
            mimetype
            data
          }
        }
        WorkExp {
          JobTitle
          WorkPlace
        }
        LangSkill {
          Language
          Level
        }
        IdCard
        GoogleId
        Role
        CreatedAt
        UpdatedAt
        FaceWithIdCard {
          filename
          mimetype
          data
        }
        Avatar {
          filename
          mimetype
          data
        }
      }
    }
  `;

  const SIGNUP_ADMIN = gql`
    mutation Mutation($createdAdminInput: AdminSigninInput!) {
      createdAdmin(input: $createdAdminInput) {
        _id
        FirstName
        LastName
        Gender
        DOB
        Address
        ContactAddress
        PhoneNumber
        Email
        Education {
          Degree
          Acadamy
          Certificate
        }
        WorkExp {
          JobTitle
          WorkPlace
          JobPosition
        }
        LangSkill {
          Languages
          Level
        }
        IdCard
        FaceWithIdCard
        GoogleId
        Avatar
        CongenitalDisorders
        Role
        CreatedAt
        UpdatedAt
      }
    }
  `;

  const UPDATE_ADMIN = gql`
    mutation Mutation(
      $updateAdminId: ID!
      $updateAdminInput: AdminUpdateInput!
    ) {
      updateAdmin(_id: $updateAdminId, input: $updateAdminInput) {
        _id
        FirstName
        LastName
        Gender
        DOB
        Address
        ContactAddress
        PhoneNumber
        Email
        Education {
          Degree
          Acadamy
          Certificate
        }
        WorkExp {
          JobTitle
          WorkPlace
          JobPosition
        }
        LangSkill {
          Languages
          Level
        }
        IdCard
        FaceWithIdCard
        GoogleId
        Avatar
        CongenitalDisorders
        Role
        CreatedAt
        UpdatedAt
      }
    }
  `;

  const DELETE_ADMIN = gql`
    mutation Mutation($deleteAdminId: ID!) {
      deleteAdmin(_id: $deleteAdminId) {
        _id
        FirstName
        LastName
        Gender
        DOB
        Address
        ContactAddress
        PhoneNumber
        Email
        Education {
          Degree
          Acadamy
          Certificate
        }
        WorkExp {
          JobTitle
          WorkPlace
          JobPosition
        }
        LangSkill {
          Languages
          Level
        }
        IdCard
        FaceWithIdCard
        GoogleId
        Avatar
        CongenitalDisorders
        Role
        CreatedAt
        UpdatedAt
      }
    }
  `;

  const VALIDATION_GUIDE = gql`
    mutation Mutation($validateguideId: ID!) {
      validateguide(_id: $validateguideId) {
        _id
        FirstName
        LastName
        Gender
        DOB
        Address
        ContactAddress
        PhoneNumber
        Email
        Gmail
        IsVerified
        Education {
          Degree
          Acadamy
          Certificate {
            filename
            mimetype
            data
          }
        }
        WorkExp {
          JobTitle
          WorkPlace
        }
        IdCard
        FaceWithIdCard {
          filename
          mimetype
          data
        }
        VerifyDate
        GoogleId
        Avatar {
          filename
          mimetype
          data
        }
        Status {
          Tag
          Details
        }
        CreatedAt
        UpdatedAt
      }
    }
  `;

  const LOGIN = gql`
    query Query($loginAdminToken: String) {
      loginAdmin(Token: $loginAdminToken) {
        _id
        FirstName
        LastName
        Gender
        DOB
        Address
        ContactAddress
        PhoneNumber
        Email
        Education {
          Degree
          Acadamy
          Certificate
        }
        WorkExp {
          JobTitle
          WorkPlace
          JobPosition
        }
        LangSkill {
          Languages
          Level
        }
        Avatar
        CongenitalDisorders
        Role
        CreatedAt
        UpdatedAt
      }
    }
  `;

  return {
    GET_SINGLE_ADMIN,
    SIGNUP_ADMIN,
    UPDATE_ADMIN,
    DELETE_ADMIN,
    VALIDATION_GUIDE,
    LOGIN,
  };
};

export default useAdminApi;
