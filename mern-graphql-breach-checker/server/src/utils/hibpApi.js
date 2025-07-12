const axios = require("axios");

const getBreaches = async (email) => {
  try {
    const resp = await axios.get(
      `https://api.xposedornot.com/v1/breach-analytics?email=${encodeURIComponent(
        email
      )}`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
          Accept: "application/json",
        },
      }
    );
    const details = resp.data?.ExposedBreaches?.breaches_details || [];
    return details.map((breach) => ({
      Name: breach.breach,
      Title: breach.breach,
      Domain: breach.domain,
      BreachDate: breach.xposed_date,
      Description: breach.details,
      Industry: breach.industry,
      Logo: breach.logo,
      PasswordRisk: breach.password_risk,
      XposedData: breach.xposed_data,
      XposedRecords: breach.xposed_records,
      References: breach.references,
    }));
  } catch (error) {
    console.error("API error:", error);
    return [];
  }
};

module.exports = { getBreaches };
