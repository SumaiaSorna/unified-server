const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type University {
    id: ID
    name: String
    courses: [String]
    addressLine1: String
    addressLine2: String
    city: String
    postcode: String
    colleges: [String]
  }

  type Student {
    id: ID!
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    interests: [String]
    university: University
    bio: String
    course: String
    sellerRating: Float
    friends: [Student]
  }

  type Staff {
    id: ID!
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    university: University!
    college: String!
  }

  type SignupStudentSuccess {
    student: Student!
  }

  type SignupStaffSuccess {
    success: Boolean!
    staff: Staff
  }

  type StudentAuth {
    token: ID!
    student: Student!
  }

  type StaffAuth {
    token: ID!
    staff: Staff!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  input SignupStudentInput {
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    password: String!
    interests: [String]
    university: String
    bio: String
    course: String
  }

  input SignupStaffInput {
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    password: String!
    university: ID!
    college: String!
  }

  type Query {
    dashboard: String!
    colleges(id: ID!): [University]!
    universities: [University]!
  }

  type Mutation {
    signupStudent(input: SignupStudentInput!): SignupStudentSuccess!
    loginStudent(input: LoginInput!): StudentAuth!
    signupStaff(input: SignupStaffInput!): SignupStaffSuccess!
    loginStaff(input: LoginInput!): StaffAuth!
  }
`;

module.exports = typeDefs;
