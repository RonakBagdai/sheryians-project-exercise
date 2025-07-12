import { useState } from "react";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      getBreaches({ variables: { email } });
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

      {/* Main Container - Centered */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        {/* Header */}
        <header className="w-full flex justify-center py-8 animate-fade-in-up">
          <div className="flex items-center gap-4 hover-lift">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
              <svg
                className="w-7 h-7 text-white"
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
            <span className="text-4xl font-bold text-white tracking-tight">
              Breach<span className="text-blue-400 font-extrabold">Guard</span>
            </span>
          </div>
        </header>

        {/* Main Content - Centered */}
        <main className="w-full max-w-4xl flex flex-col items-center">
          <div
            className="text-center mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Have I Been{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Breached?
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Check if your email address has been compromised in known data
              breaches. Stay informed, stay secure.
            </p>
          </div>

          {/* Search Box */}
          <div
            className="w-full max-w-2xl mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <form onSubmit={handleSubmit} className="relative">
              <div className="relative">
                <input
                  type="email"
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 p-6 rounded-2xl text-lg focus-ring transition-all duration-300"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="absolute right-2 top-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
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
              </div>
            </form>
          </div>

          {/* Results - Centered */}
          <div className="w-full max-w-5xl">
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 backdrop-blur-sm rounded-2xl p-8 text-center text-red-300 shadow-xl">
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
                <p className="text-red-200">{error.message}</p>
              </div>
            )}

            {submitted &&
              !loading &&
              data &&
              (data.breachedAccounts.length === 0 ? (
                <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/20 backdrop-blur-sm rounded-2xl p-8 text-center shadow-xl">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-green-300 mb-3">
                    No Breaches Found!
                  </h2>
                  <p className="text-gray-300 text-lg">
                    Your email address was not found in any known data breaches.
                    Keep up the good security practices!
                  </p>
                </div>
              ) : (
                <BreachTimeline breaches={data.breachedAccounts} />
              ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full flex justify-center mt-16 mb-8">
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
