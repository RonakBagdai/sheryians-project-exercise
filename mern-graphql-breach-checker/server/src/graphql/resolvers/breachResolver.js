const hibpApi = require("../../utils/hibpApi");

const breachResolver = {
  Query: {
    breachedAccounts: async (_, { email }) => {
      return hibpApi.getBreaches(email);
    },
  },
};

module.exports = breachResolver;
