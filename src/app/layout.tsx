import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const dungGeunMoFont = localFont({
  src: [
    {
      path: "./fonts/DungGeunMo.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-dgm",
});

const faviconList = [
  {
    path: "/favicons/agumon.png",
    probability: 9,
  },
  {
    path: "/favicons/gabumon.png",
    probability: 9,
  },
  {
    path: "/favicons/palmon.png",
    probability: 9,
  },
  {
    path: "/favicons/patamon.png",
    probability: 9,
  },
  {
    path: "/favicons/piyomon.png",
    probability: 9,
  },
  {
    path: "/favicons/wargreymon.png",
    probability: 2,
  },
  {
    path: "/favicons/metalgarurumon.png",
    probability: 2,
  },
  {
    path: "/favicons/omegamon.png",
    probability: 1,
  },
];
const totalProbability = faviconList
  .map((item) => item.probability)
  .reduce((acc, current) => acc + current, 0);

function getRandomFavicon() {
  let randomWeight = Math.random() * totalProbability;

  for (const item of faviconList) {
    if (randomWeight < item.probability) return item.path;

    randomWeight -= item.probability;
  }

  return faviconList[faviconList.length - 1].path;
}

export async function generateMetadata(): Promise<Metadata> {
  const randomIconUrl = getRandomFavicon();

  return {
    title: "WebRPG - Digimon",
    description: "WebRPG - Digimon",
    icons: [
      {
        rel: "icon",
        url: randomIconUrl,
      },
    ],
  };
}

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${dungGeunMoFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
