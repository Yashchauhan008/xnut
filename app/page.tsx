import Image from "next/image";

function Branch({ size = 180 }: { size?: number }) {
  // Flat botanical branch drawn in the logo's browns — no gradients
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 90 C 35 70, 50 50, 80 20"
        stroke="#b9884f"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <ellipse cx="38" cy="66" rx="10" ry="4.5" fill="#edbf7e" transform="rotate(-40 38 66)" />
      <ellipse cx="55" cy="47" rx="10" ry="4.5" fill="#b9884f" transform="rotate(-40 55 47)" />
      <ellipse cx="70" cy="31" rx="10" ry="4.5" fill="#edbf7e" transform="rotate(-40 70 31)" />
      <ellipse cx="47" cy="61" rx="9" ry="4" fill="#b9884f" transform="rotate(50 47 61)" />
      <ellipse cx="63" cy="43" rx="9" ry="4" fill="#edbf7e" transform="rotate(50 63 43)" />
    </svg>
  );
}

function Peanut({ size = 20 }: { size?: number }) {
  // Flat peanut icon matching the one in the logo
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8.5 3.5 C 5.5 3.5, 4 6, 4.5 8.5 C 5 10.5, 7 11, 7.5 13 C 8 15.5, 6.5 17, 8 19 C 9.5 21, 13 21, 14.5 19 C 16 17, 15 15.5, 15.5 13 C 16 11, 18 10.5, 18.5 8.5 C 19 6, 17.5 3.5, 14.5 3.5 C 12.5 3.5, 12.5 4.5, 11.5 4.5 C 10.5 4.5, 10.5 3.5, 8.5 3.5 Z"
        fill="#edbf7e"
        stroke="#7e5227"
        strokeWidth="1.5"
      />
      <path d="M9 8 L 10.5 10 M13 8 L 11.5 10 M9.5 14 L 11 16 M13.5 14 L 12 16" stroke="#7e5227" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

function Drop({ size = 20 }: { size?: number }) {
  // Flat butter-drip icon in logo browns
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3 C 12 3, 5.5 11, 5.5 15.5 C 5.5 19, 8.5 21.5, 12 21.5 C 15.5 21.5, 18.5 19, 18.5 15.5 C 18.5 11, 12 3, 12 3 Z"
        fill="#b9884f"
        stroke="#7e5227"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function Jar({ size = 20 }: { size?: number }) {
  // Flat peanut-butter jar icon
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="6" y="3" width="12" height="4" rx="1.5" fill="#7e5227" />
      <path
        d="M6.5 8 C 5.5 9, 5 10, 5 12 L 5 18 C 5 19.5, 6 21, 8 21 L 16 21 C 18 21, 19 19.5, 19 18 L 19 12 C 19 10, 18.5 9, 17.5 8 Z"
        fill="#b9884f"
      />
      <rect x="7.5" y="11.5" width="9" height="6" rx="1.5" fill="#faf4ea" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="page">
      <div className="decor bottom-right">
        <Branch size={200} />
      </div>
      <div className="decor top-right">
        <Peanut size={36} />
      </div>

      <Image
        src="/logo.png"
        alt="xnut logo"
        width={793}
        height={563}
        className="logo"
        priority
      />

      <p className="eyebrow">From the earth, to your jar</p>

      <h1>Coming Soon</h1>

      <p className="tagline">
        Peanut butter powder — the goodness of peanuts, roasted and ground
        into a light powder. Plus classic and flavored peanut butter.
        We&apos;re busy getting the blend just right.
      </p>

      <div className="pills">
        <span className="pill">
          <Jar /> Peanut Butter Powder
        </span>
        <span className="pill">
          <Peanut /> Peanut Butter
        </span>
        <span className="pill">
          <Drop /> Flavored Peanut Butter
        </span>
      </div>

      <footer>
        Growing soon at <span className="domain">xnut.in</span>
      </footer>
    </main>
  );
}
