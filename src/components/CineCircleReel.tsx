import Image from "next/image";

/* Competitive analysis as a slowly turning reel. The ring rotates and each
   bubble counter-rotates at the same rate so the marks stay upright.
   Logos are redrawn as SVG in the brand colours sampled from the mockup. */

const SIZE = 500; // reel diameter
const RING = 152; // distance from centre to each bubble centre
const BUBBLE = 112;

function Reddit() {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full" aria-hidden>
      <circle cx="24" cy="24" r="24" fill="#FF4500" />
      <circle cx="24" cy="27" r="13" fill="#fff" />
      <circle cx="19.5" cy="26" r="2.3" fill="#FF4500" />
      <circle cx="28.5" cy="26" r="2.3" fill="#FF4500" />
      <path
        d="M19 31.5c1.4 1.4 3.1 2 5 2s3.6-.6 5-2"
        stroke="#FF4500"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="37" cy="14" r="3.4" fill="#fff" />
      <path d="M24 14.5 25.8 8l5.6 1.4" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <circle cx="24" cy="14.5" r="2.4" fill="#fff" />
    </svg>
  );
}

function Substack() {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full" aria-hidden>
      <rect width="48" height="48" rx="24" fill="#FF6718" />
      <rect x="15" y="14" width="18" height="2.8" fill="#fff" />
      <rect x="15" y="19.4" width="18" height="2.8" fill="#fff" />
      <path d="M15 24.8h18V35l-9-5-9 5V24.8Z" fill="#fff" />
    </svg>
  );
}

function RottenTomatoes() {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full" aria-hidden>
      <circle cx="24" cy="24" r="24" fill="#fff" />
      <circle cx="24" cy="25" r="16" fill="none" stroke="#FA330C" strokeWidth="3.2" />
      <path
        d="M20 7.5c2.6-1.6 6-1.4 8 .9-2.4 1.9-5.8 1.8-8-.9Z"
        fill="#FA330C"
      />
      <text
        x="24"
        y="31"
        textAnchor="middle"
        fontFamily="Helvetica, Arial, sans-serif"
        fontWeight="700"
        fontSize="14"
        fill="#FA330C"
      >
        RT
      </text>
    </svg>
  );
}

function Letterboxd() {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full" aria-hidden>
      <circle cx="24" cy="24" r="24" fill="#2B3339" />
      <circle cx="14" cy="24" r="6.4" fill="#FF8000" />
      <circle cx="24" cy="24" r="6.4" fill="#00E054" />
      <circle cx="34" cy="24" r="6.4" fill="#40BBF4" />
    </svg>
  );
}

function Joyraft() {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full" aria-hidden>
      <defs>
        <linearGradient id="joyraft" x1="4" y1="42" x2="44" y2="6" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#4E1CEC" />
          <stop offset="0.45" stopColor="#E0219B" />
          <stop offset="0.75" stopColor="#FF6A1F" />
          <stop offset="1" stopColor="#FFC83D" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="24" fill="url(#joyraft)" />
      <path
        d="M30 13v16.5a7.5 7.5 0 1 1-7.5-7.5H26"
        stroke="#fff"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function Beli() {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full" aria-hidden>
      <circle cx="24" cy="24" r="24" fill="#fff" />
      <text
        x="24"
        y="30"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="700"
        fontSize="16"
        fill="#134F5C"
      >
        beli
      </text>
    </svg>
  );
}

const competitors = [
  { name: "Reddit", Logo: Reddit },
  { name: "Substack", Logo: Substack },
  { name: "Rotten Tomatoes", Logo: RottenTomatoes },
  { name: "Letterboxd", Logo: Letterboxd },
  { name: "Joyraft", Logo: Joyraft },
  { name: "Beli", Logo: Beli },
];

export default function CineCircleReel() {
  return (
    <div className="max-w-full overflow-hidden flex justify-center">
      <div
        className="relative rounded-full bg-[#FCEEEB]"
        style={{ width: SIZE, height: SIZE }}
      >
        {/* Turning ring */}
        <div className="reel-ring absolute inset-0">
          {competitors.map(({ name, Logo }, i) => {
            const angle = (-90 + i * 60) * (Math.PI / 180);
            const x = SIZE / 2 + RING * Math.cos(angle);
            const y = SIZE / 2 + RING * Math.sin(angle);
            return (
              <div
                key={name}
                className="absolute"
                style={{
                  left: x,
                  top: y,
                  width: 0,
                  height: 0,
                }}
              >
                <div className="reel-upright absolute left-0 top-0">
                  <div
                    className="absolute rounded-full bg-white flex flex-col items-center justify-center px-3"
                    style={{
                      width: BUBBLE,
                      height: BUBBLE,
                      left: -BUBBLE / 2,
                      top: -BUBBLE / 2,
                    }}
                  >
                    <div className="w-11 h-11 drop-shadow-[0_2px_5px_rgba(0,0,0,0.3)]">
                      <Logo />
                    </div>
                    <span className="mt-1.5 text-[9px] leading-tight text-center text-neutral-700 [text-shadow:0_1px_2px_rgba(0,0,0,0.22)]">
                      {name}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CineCircle sits still in the middle */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Image
            src="/images/cinecircle/logo.png"
            alt="CineCircle"
            width={122}
            height={95}
            className="w-[96px] h-auto drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)]"
          />
          <span className="mt-1.5 text-[10px] text-neutral-700 [text-shadow:0_1px_2px_rgba(0,0,0,0.22)]">
            CineCircle
          </span>
        </div>
      </div>
    </div>
  );
}
