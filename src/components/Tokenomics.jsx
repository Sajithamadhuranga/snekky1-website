import AssetImage from './AssetImage';

const stats = [
  { label: 'BUY TAX', value: '0%', image: '/assets/tokenomics/buy-tax.png' },
  { label: 'SELL TAX', value: '0%', image: '/assets/tokenomics/sell-tax.png' },
  { label: 'BURNT LIQUIDITY', value: '', image: '/assets/tokenomics/liquidity.png' },
];

const flowSteps = [
  { title: '01 Snekky', desc: 'This is a short explanation. make it short and clear to keep students attentive.' },
  { title: '02 Snekky', desc: 'This is a short explanation. make it short and clear to keep students attentive.' },
  { title: '03 Snekky', desc: 'This is a short explanation. make it short and clear to keep students attentive.' },
  { title: '04 Snekky', desc: 'This is a short explanation. make it short and clear to keep students attentive.' },
];

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="bg-snekkyDark text-white">
      {/* Title */}
      <div className="py-8 sm:py-10">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-center">
          Tokenomics
        </h2>
      </div>

      {/* Diagonal #SNEKKY ribbon */}
      <div className="relative overflow-hidden h-10 sm:h-12">
        <div className="absolute -inset-x-1/4 -rotate-3 bg-gradient-to-r from-snekkyOrange to-amber-700 py-2 sm:py-3">
          <p className="font-display text-xs sm:text-base uppercase tracking-[0.4em] whitespace-nowrap text-snekkyYellow text-center">
            #SNEKKY &nbsp;&nbsp; #I'M SNEKKY &nbsp;&nbsp; #SNEKKY &nbsp;&nbsp; #I'M SNEKKY &nbsp;&nbsp; #SNEKKY
          </p>
        </div>
      </div>

      {/* Stat cards */}
      <div className="px-4 sm:px-8 lg:px-16 py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl overflow-hidden bg-gradient-to-br from-snekkyOrange to-amber-800 text-center pb-4"
          >
            <AssetImage src={s.image} alt={s.label} className="w-full h-25 sm:h-25 object-cover mb-3" />
            {s.value && (
              <p className="text-xl sm:text-2xl font-bold text-snekkyYellow mb-1">{s.value}</p>
            )}
            <p className="text-xs sm:text-sm font-display uppercase tracking-wider">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Flow diagram with circular ring graphic */}
      <div className="bg-gradient-to-b from-amber-200 via-snekkyYellow to-snekkyOrange px-4 sm:px-8 lg:px-16 py-10 sm:py-14 overflow-hidden">
        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-8 items-center max-w-6xl mx-auto">
          {/* Circular flow graphic */}
          <div className="relative flex items-center justify-center">
            <TokenomicsRing steps={flowSteps} />
          </div>

          {/* Mascot - right side */}
          <div className="flex justify-center lg:justify-end items-center">
            <AssetImage
              src="/assets/snekky-mascot.png"
              alt="Snekky mascot"
              className="h-56 sm:h-72 lg:h-[500px] w-auto object-contain drop-shadow-2xl lg:translate-x-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- S-curve ring graphic with 4 numbered nodes --- */
function TokenomicsRing({ steps }) {
  const nodePositions = [
    { cx: 320, cy: 60 },
    { cx: 130, cy: 180 },
    { cx: 130, cy: 330 },
    { cx: 320, cy: 460 },
  ];

  const labelPositions = [
    { x: 340, y: 50, anchor: 'start' },
    { x: 60, y: 170, anchor: 'end' },
    { x: 60, y: 320, anchor: 'end' },
    { x: 340, y: 450, anchor: 'start' },
  ];

  return (
    <div className="w-full max-w-md">
      <svg viewBox="0 0 460 520" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="ringGrad" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#F2C12E" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#F2C12E" stopOpacity="0" />
          </radialGradient>
          <marker id="arrowHead" markerWidth="8" markerHeight="8" refX="5" refY="2.5" orient="auto">
            <path d="M0,0 L0,5 L5,2.5 z" fill="#5B3A0E" />
          </marker>
        </defs>

        {/* Decorative background pattern circle */}
        <circle cx="190" cy="260" r="200" fill="url(#ringGrad)" />
        <circle cx="190" cy="260" r="200" fill="none" stroke="#C9740A" strokeWidth="1" strokeDasharray="3 5" opacity="0.5" />

        {/* Connecting S-curve path */}
        <path
          d="M 320 60 C 200 60, 130 100, 130 180
             C 130 260, 130 250, 130 330
             C 130 410, 200 460, 320 460"
          fill="none"
          stroke="#5B3A0E"
          strokeWidth="2.5"
          markerEnd="url(#arrowHead)"
        />

        {/* Numbered nodes */}
        {nodePositions.map((pos, i) => (
          <g key={i}>
            <circle cx={pos.cx} cy={pos.cy} r="22" fill="#7A4A0F" stroke="#F2C12E" strokeWidth="2" />
            <text
              x={pos.cx}
              y={pos.cy + 1}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#F2C12E"
              fontSize="16"
              fontWeight="bold"
              fontFamily="'Permanent Marker', cursive"
            >
              {String(i + 1).padStart(2, '0')}
            </text>
          </g>
        ))}

        {/* Labels + descriptions */}
        {steps.map((step, i) => {
          const lp = labelPositions[i];
          return (
            <g key={step.title}>
              <text
                x={lp.x}
                y={lp.y}
                textAnchor={lp.anchor}
                fill="#5B3A0E"
                fontSize="14"
                fontWeight="700"
                fontFamily="'Permanent Marker', cursive"
              >
                {step.title}
              </text>
              <foreignObject
                x={lp.anchor === 'end' ? lp.x - 150 : lp.x}
                y={lp.y + 6}
                width="150"
                height="55"
              >
                <p
                  style={{
                    fontSize: '10px',
                    lineHeight: '1.3',
                    color: '#5B3A0E',
                    textAlign: lp.anchor === 'end' ? 'right' : 'left',
                    opacity: 0.8,
                    fontFamily: "'Poppins', sans-serif",
                    margin: 0,
                  }}
                >
                  {step.desc}
                </p>
              </foreignObject>
            </g>
          );
        })}
      </svg>
    </div>
  );
}