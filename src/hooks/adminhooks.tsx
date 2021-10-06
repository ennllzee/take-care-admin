import { gql } from "@apollo/client";

const useAdminApi = () => {
  const getSingleAdmin = gql`
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

  const createdAdmin = gql`
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

  const updateAdmin = gql`
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

  const deleteAdmin = gql`
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

  const validateGuide = gql`
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
        IsValidated
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
        ValidatedDate
        GoogleId
        Avatar
        CongenitalDisorders
        Role
        CreatedAt
        UpdatedAt
      }
    }
  `;

  const loginAdmin = gql`
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
    getSingleAdmin,
    createdAdmin,
    updateAdmin,
    deleteAdmin,
    validateGuide,
    loginAdmin,
  };
};

export default useAdminApi;
