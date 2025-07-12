const breachSchema = `
  type Breach {
    Name: String
    Title: String
    Domain: String
    BreachDate: String
    Description: String
    Industry: String
    Logo: String
    PasswordRisk: String
    XposedData: String
    XposedRecords: Int
    References: String
  }

  type Query {
    breachedAccounts(email: String!): [Breach]
  }
`;

module.exports = breachSchema;
