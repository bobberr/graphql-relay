const checkSession = session => {
  if (!session.userId) {
    throw new Error("Unauthorized");
  }
};

module.exports.adminTypeDefs = adminTypeDefs = `
  type Query {
		logInAdmin(login: String!, password: String!): Boolean
		checkAuth: Boolean
	} 
	type Test {
		id: ID
		test: String
	}
  type Mutation {
    adminLogIn(login: String, password: String): Boolean
    logOutMutation: Boolean
  }
`;

module.exports.rootAdmin = rootAdmin = {
  Query: {
    logInAdmin: (obj, { login, password }, { session }) => {
      if (login === "admin" && password === "admin") {
        console.log("fires");
        session.userId = 123;
        return true;
      }
      return false;
    },
    checkAuth: (obj, args, { session }) => {
      return session.userId ? true : false;
    }
  },
  Mutation: {
    adminLogIn: (obj, arg, { session }) => {
      console.log(arg.login, arg.password);
      if (arg.login === "admin" && arg.password === "admin") {
        session.userId = 777;
        return true;
      } else {
        return false;
      }
    },
    logOutMutation: (obj, arg, req) => {
      req.session.destroy();
      return true;
    }
  }
};
