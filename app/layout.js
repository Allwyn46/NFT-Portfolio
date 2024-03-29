import { Inter, Montserrat, Josefin_Sans, Yeseva_One } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "./responsive.css";

const jose = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-jose",
});

const yeseva = Yeseva_One({
  subsets: ["latin"],
  variable: "--font-yeseva",
  weight: "400",
});

const fira = localFont({
  src: [
    {
      path: "../public/fonts/Fira_Sans/Fonts/OTF/FiraSans-ExtraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Fira_Sans/Fonts/OTF/FiraSans-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Fira_Sans/Fonts/OTF/FiraSans-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Fira_Sans/Fonts/OTF/FiraSans-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Fira_Sans/Fonts/OTF/FiraSans-MediumItalic.otf",
      weight: "501",
      style: "italic",
    },
    {
      path: "../public/fonts/Fira_Sans/Fonts/OTF/FiraSans-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Fira_Sans/Fonts/OTF/FiraSans-SemiBoldItalic.otf",
      weight: "601",
      style: "italic",
    },
    {
      path: "../public/fonts/Fira_Sans/Fonts/OTF/FiraSans-BoldItalic.otf",
      weight: "701",
      style: "italic",
    },
    {
      path: "../public/fonts/Fira_Sans/Fonts/OTF/FiraSans-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Fira_Sans/Fonts/OTF/FiraSans-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-fira",
});

const supreme = localFont({
  src: [
    {
      path: "../public/fonts/Supreme/Fonts/OTF/Supreme-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-supreme",
});

const bespoke = localFont({
  src: [
    {
      path: "../public/fonts/Bespoke_Stencil/Fonts/OTF/BespokeStencil-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-bespoke",
});

export const metadata = {
  title: "NFT-Portfolio",
  description: "Created by Allwyn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${fira.variable} ${bespoke.variable} ${supreme.variable} ${jose.className}`}
      >
        {children}
      </body>
    </html>
  );
}
