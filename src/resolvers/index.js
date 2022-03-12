// JOB Queries and Mutations
const createJob = require("./job/createJob");
const jobs = require("./job/jobs");
const job = require("./job/job");
const updateJob = require("./job/updateJob");
const deleteJob = require("./job/deleteJob");

// STUDENT and STAFF AUTH Queries and Mutations
const signupStudent = require("./signupStudent");
const loginStudent = require("./loginStudent");
const signupStaff = require("./signupStaff");
const loginStaff = require("./loginStaff");

// UNIVERSITY Queries and Mutations
const colleges = require("./colleges");
const universities = require("./universities");

// ITEM Queries and Mutations
const createItem = require("./createItem");

// FORUM Queries and Mutations
const createForumPost = require("./forumPost/createForumPost");

const resolvers = {
  Query: {
    colleges,
    universities,
    jobs,
    job,
  },
  Mutation: {
    createJob,
    signupStudent,
    createItem,
    updateJob,
    deleteJob,
    signupStaff,
    loginStudent,
    loginStaff,
    createForumPost,
  },
};

module.exports = resolvers;
