function BreachCard({ breach }) {
  return (
    <div className="bg-gradient-to-br from-[#1a2233cc] to-[#23243acc] backdrop-blur-md border border-[#22304a] rounded-2xl p-8 shadow-xl w-full max-w-md text-white transition hover:scale-[1.025] hover:shadow-2xl duration-200">
      <div className="flex items-center gap-3 mb-3">
        {breach.Logo && (
          <img
            src={breach.Logo}
            alt={breach.Name}
            className="w-12 h-12 rounded-lg object-contain bg-white/10 p-1"
          />
        )}
        <span className="font-bold text-xl tracking-tight">{breach.Title}</span>
      </div>
      <p className="text-gray-200 mb-3 leading-relaxed">{breach.Description}</p>
      <div className="text-sm text-blue-200 mb-2">
        <span className="font-semibold">Compromised data:</span>
        <ul className="list-disc ml-5 mt-1">
          {breach.XposedData?.split(";").map((d, i) =>
            d.trim() ? <li key={i}>{d.trim()}</li> : null
          )}
        </ul>
      </div>
      <div className="flex flex-wrap gap-2 mt-3">
        <span className="bg-blue-900/60 text-blue-200 text-xs px-2 py-1 rounded">
          {breach.Industry}
        </span>
        <span className="bg-blue-900/60 text-blue-200 text-xs px-2 py-1 rounded">
          Records: {breach.XposedRecords}
        </span>
        <span className="bg-blue-900/60 text-blue-200 text-xs px-2 py-1 rounded">
          Password: {breach.PasswordRisk}
        </span>
      </div>
      {breach.References && (
        <a
          href={breach.References}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-blue-400 border border-blue-400 rounded px-4 py-1 text-xs font-semibold hover:bg-blue-400 hover:text-white transition"
        >
          View Details
        </a>
      )}
    </div>
  );
}

export default function BreachTimeline({ breaches }) {
  if (!breaches || breaches.length === 0) return null;

  return (
    <div className="w-full py-16 relative flex flex-col items-center">
      {/* Vertical timeline line */}
      <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-800/40 via-blue-500/20 to-transparent -translate-x-1/2 z-0" />

      <div className="space-y-24 w-full max-w-6xl relative z-10">
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
                  isLeft ? "flex justify-end pr-12" : ""
                } hidden md:flex`}
              >
                {isLeft && <BreachCard breach={breach} />}
              </div>
              {/* Center timeline dot above year badge */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
                <div className="w-14 h-14 rounded-full bg-blue-500 text-white border-4 border-blue-500 shadow text-xl font-bold flex items-center justify-center">
                  {breachYear}
                </div>
              </div>
              {/* Right card or spacer */}
              <div
                className={`w-1/2 ${
                  !isLeft ? "flex justify-start pl-12" : ""
                } hidden md:flex`}
              >
                {!isLeft && <BreachCard breach={breach} />}
              </div>
              {/* Mobile: always show card below timeline */}
              <div className="w-full flex md:hidden mt-8">
                <BreachCard breach={breach} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
