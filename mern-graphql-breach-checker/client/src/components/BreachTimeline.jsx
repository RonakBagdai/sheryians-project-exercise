import { useRef, useEffect } from "react";

function BreachCard({ breach }) {
  // Animate card on mount
  const cardRef = useRef(null);
  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.classList.add("animate-fade-in-up");
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className="flex flex-col w-full sm:w-[500px] max-w-full min-h-[20rem] bg-gradient-to-br from-[#1a2233cc] via-[#23243acc] to-[#23243acc] backdrop-blur-xl border border-[#22304a] rounded-2xl p-8 shadow-2xl mb-8 self-center transition-all duration-300 hover:scale-105 hover:shadow-3xl group"
    >
      {/* Logo and Title */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-700 via-purple-700 to-pink-700 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
          <img
            src={breach.Logo || "/default-logo.png"}
            alt={breach.Title}
            className="w-10 h-10 object-contain"
          />
        </div>
        <h3 className="text-2xl font-extrabold text-white break-words max-w-[300px] drop-shadow">
          {breach.Title}
        </h3>
      </div>
      {/* Description */}
      <p className="text-gray-200 mb-4 leading-relaxed text-base sm:text-lg">
        {/* Render description with links in blue */}
        {breach.Description.split(/(https?:\/\/[^\s]+)/g).map((part, idx) =>
          part.startsWith("http") ? (
            <a
              key={idx}
              href={part}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 underline hover:text-pink-300 transition break-all"
            >
              {part}
            </a>
          ) : (
            part
          )
        )}
      </p>
      {/* Compromised Data */}
      <div className="mb-6">
        <span className="font-semibold text-white">Compromised data:</span>
        <ul className="list-disc list-inside text-white mt-2 marker:text-pink-400 text-base">
          {(Array.isArray(breach.XposedData)
            ? breach.XposedData
            : (breach.XposedData || "").split(";")
          ).map((item, idx) =>
            item.trim() ? <li key={idx}>{item.trim()}</li> : null
          )}
        </ul>
      </div>
      {/* View Details Button */}
      <button
        className="border border-pink-400 text-pink-400 hover:bg-pink-600/10 transition-all duration-300 rounded-lg px-5 py-2 font-semibold w-fit mt-2 shadow hover:scale-105"
        onClick={() => alert("Details coming soon!")}
      >
        View Details
      </button>
    </div>
  );
}

export default function BreachTimeline({ breaches }) {
  if (!breaches || breaches.length === 0) return null;

  return (
    <div className="w-full py-12 sm:py-16 relative flex flex-col items-center">
      {/* Vertical timeline line */}
      <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-800/60 via-pink-500/30 to-transparent -translate-x-1/2 z-0 animate-gradient-y" />

      <div className="space-y-24 w-full max-w-6xl relative z-10 px-2 sm:px-4">
        {breaches.map((breach, idx) => {
          const isLeft = idx % 2 === 0;
          const breachYear = breach.BreachDate
            ? breach.BreachDate.split("-")[0]
            : "Unknown";

          return (
            <div
              key={breach.Name}
              className="relative flex w-full min-h-[200px] items-center"
            >
              {/* Left card or spacer */}
              <div
                className={`w-1/2 ${
                  isLeft ? "flex justify-end pr-8 md:pr-12" : ""
                } hidden md:flex`}
              >
                {isLeft && <BreachCard breach={breach} />}
              </div>
              {/* Timeline dot for desktop */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 flex-col items-center z-10 hidden md:flex">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white border-4 border-pink-400 shadow-2xl text-2xl font-extrabold flex items-center justify-center animate-bounce-slow">
                  {breachYear}
                </div>
              </div>
              {/* Right card or spacer */}
              <div
                className={`w-1/2 ${
                  !isLeft ? "flex justify-start pl-8 md:pl-12" : ""
                } hidden md:flex`}
              >
                {!isLeft && <BreachCard breach={breach} />}
              </div>
              {/* Mobile: dot above card */}
              <div className="w-full flex flex-col items-center md:hidden mt-[-1rem]">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white border-4 border-pink-400 shadow-2xl text-2xl font-extrabold flex items-center justify-center mb-4 animate-bounce-slow">
                  {breachYear}
                </div>
                <BreachCard breach={breach} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
