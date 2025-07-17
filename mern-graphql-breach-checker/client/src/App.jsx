import { useState, useEffect } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import BreachTimeline from "./components/BreachTimeline.jsx";

const BREACHED_ACCOUNTS = gql`
  query BreachedAccounts($email: String!) {
    breachedAccounts(email: $email) {
      Name
      Title
      Domain
      BreachDate
      Description
      Industry
      Logo
      PasswordRisk
      XposedData
      XposedRecords
      References
    }
  }
`;

export default function App() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [getBreaches, { loading, data, error }] =
    useLazyQuery(BREACHED_ACCOUNTS);

  // State for global breach stats
  const [breachStats, setBreachStats] = useState({
    websites: 0,
    accounts: 0,
    loading: true,
    error: null,
  });

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch("https://api.xposedornot.com/v1/breaches");
        const json = await res.json();
        const breaches = json.exposedBreaches || [];
        const websites = breaches.length;
        const accounts = breaches.reduce(
          (sum, b) =>
            sum + (typeof b.exposedRecords === "number" ? b.exposedRecords : 0),
          0
        );
        setBreachStats({ websites, accounts, loading: false, error: null });
      } catch (e) {
        setBreachStats({
          websites: 0,
          accounts: 0,
          loading: false,
          error: e.message,
        });
      }
    }
    fetchStats();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      getBreaches({ variables: { email } });
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a101a] via-[#101826] to-[#181f2a] relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'#9C92AC\' fill-opacity=\'0.03\'%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40 pointer-events-none animate-pulse-slow"></div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-2 sm:px-4">
        {/* Header */}
        <header
          className="w-full flex justify-center py-8"
          aria-label="Site header"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl animate-fade-in">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight drop-shadow-lg animate-fade-in">
              Breach
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 font-extrabold">
                Guard
              </span>
            </span>
          </div>
        </header>

        <main
          className="w-full max-w-7xl flex flex-col items-center"
          id="main-content"
        >
          {/* Hero Section */}
          <section
            className="text-center mb-10 sm:mb-16 px-2 animate-fade-in-up"
            aria-labelledby="hero-title"
          >
            <h1
              id="hero-title"
              className="text-5xl sm:text-7xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg"
            >
              Have I Been{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                Breached?
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Check if your email address has been compromised in known data
              breaches. Stay informed, stay secure.
            </p>
          </section>

          {/* Search Box */}
          <section
            className="w-full max-w-lg mb-10 animate-fade-in-up"
            aria-label="Breach search"
          >
            <form
              onSubmit={handleSubmit}
              className="relative flex flex-col sm:flex-row gap-4 items-center"
              aria-label="Breach search form"
            >
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                className="flex-1 w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 p-5 rounded-2xl text-lg focus:ring-2 focus:ring-pink-400 outline-none transition-all duration-300 shadow-lg focus:scale-105"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:scale-105"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Checking<span className="loading-dots"></span>
                  </div>
                ) : (
                  "Check Breaches"
                )}
              </button>
            </form>
          </section>

          {/* Email Breach History & Timeline */}
          {submitted && data && (
            <section
              className="w-full max-w-5xl mx-auto mb-8 px-2 animate-fade-in-up"
              aria-labelledby="breach-history-title"
            >
              <h2
                id="breach-history-title"
                className="text-3xl md:text-4xl font-extrabold text-white text-center mb-2"
              >
                Email Breach History
              </h2>
              <p className="text-gray-400 text-center mb-6">
                Timeline of data breaches affecting your email address
              </p>
              {data.breachedAccounts.length > 0 ? (
                <>
                  <div className="bg-gradient-to-r from-red-900/40 via-pink-900/30 to-red-900/40 border border-red-500/40 rounded-2xl p-8 text-center mb-8 shadow-lg animate-fade-in">
                    <span className="block text-6xl font-extrabold text-pink-400 mb-2 drop-shadow">
                      {data.breachedAccounts.length}
                    </span>
                    <span className="block text-2xl font-bold text-pink-300 mb-2">
                      Data Breaches
                    </span>
                    <p className="text-pink-200 max-w-2xl mx-auto">
                      Oh no — compromised! This email address has been found in
                      multiple data breaches. Review the details below to see
                      where your data was exposed.
                    </p>
                  </div>
                  {/* Stay Protected Callout */}
                  <aside
                    className="bg-gradient-to-r from-blue-900/40 via-purple-900/30 to-pink-900/40 border border-blue-500/40 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between mb-8 shadow-lg animate-fade-in"
                    aria-label="Stay Protected"
                  >
                    <div>
                      <span className="font-semibold text-white flex items-center gap-2">
                        <svg
                          className="w-5 h-5 text-blue-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"
                          />
                        </svg>
                        Stay Protected
                      </span>
                      <p className="text-blue-200 text-sm mt-1">
                        Get notified when your email appears in future data
                        breaches
                      </p>
                    </div>
                    <button className="mt-4 sm:mt-0 px-6 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-blue-600 text-white font-semibold rounded transition-all duration-300 shadow-lg hover:scale-105">
                      Notify Me
                    </button>
                  </aside>
                </>
              ) : (
                <div className="bg-gradient-to-r from-green-900/40 via-emerald-900/30 to-green-900/40 border border-green-500/40 rounded-2xl p-8 text-center mb-8 shadow-lg animate-fade-in">
                  <span className="block text-6xl font-extrabold text-emerald-400 mb-2">
                    0
                  </span>
                  <span className="block text-2xl font-bold text-emerald-300 mb-2">
                    Data Breaches
                  </span>
                  <p className="text-emerald-200 max-w-2xl mx-auto">
                    Good news — no pwnage found! This email address wasn't found
                    in any of the data breaches loaded into BreachGuard. That's
                    great news!
                  </p>
                </div>
              )}
            </section>
          )}

          {/* Timeline */}
          <section
            className="w-full max-w-6xl mx-auto mb-8 px-2 animate-fade-in-up"
            aria-label="Breach results"
          >
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 backdrop-blur-sm rounded-2xl p-8 text-center text-red-300 shadow-xl animate-fade-in">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h2 className="text-xl font-semibold">Error</h2>
                </div>
                <p className="text-red-200 max-w-2xl mx-auto">
                  {error.message}
                </p>
              </div>
            )}
            {submitted && !loading && data && (
              <BreachTimeline breaches={data.breachedAccounts} />
            )}
          </section>

          {/* Global Breach Stats */}
          <section
            className="w-full max-w-6xl mb-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up px-2"
            style={{ animationDelay: "0.6s" }}
            aria-label="Global breach statistics"
          >
            <div className="flex-1 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-pink-900/40 border border-blue-500/40 rounded-lg p-6 flex flex-col items-center shadow-lg">
              <span className="text-4xl font-extrabold text-white drop-shadow">
                {breachStats.loading
                  ? "..."
                  : breachStats.websites.toLocaleString()}
              </span>
              <span className="text-blue-400 text-lg mt-2">
                breached websites
              </span>
            </div>
            <div className="flex-1 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-pink-900/40 border border-blue-500/40 rounded-lg p-6 flex flex-col items-center shadow-lg">
              <span className="text-4xl font-extrabold text-white drop-shadow">
                {breachStats.loading
                  ? "..."
                  : breachStats.accounts.toLocaleString()}
              </span>
              <span className="text-pink-400 text-lg mt-2">
                breached accounts
              </span>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer
          className="w-full flex justify-center mt-16 mb-8"
          aria-label="Site footer"
        >
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-2">
              &copy; {new Date().getFullYear()} BreachGuard. All rights
              reserved.
            </p>
            <p className="text-gray-600 text-xs">
              Powered by advanced security monitoring and breach detection.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
