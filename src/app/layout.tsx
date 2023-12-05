import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Github Searcher",
  description:
    "This Website provides a beautiful layout to search github profiles in the format of cards",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <div className="gradient1 -z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="956"
            height="435"
            viewBox="0 0 956 435"
            fill="none"
          >
            <g filter="url(#filter0_f_1_5)">
              <path
                d="M294.904 13.4735C341.846 165.325 911.577 272.117 828.464 297.809C745.351 323.502 225.493 343.573 178.552 191.722C131.61 39.8709 -310.835 -88.9645 -227.722 -114.657C-144.609 -140.35 247.963 -138.378 294.904 13.4735Z"
                fill="url(#paint0_linear_1_5)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_1_5"
                x="-356.59"
                y="-245.554"
                width="1311.82"
                height="679.667"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="59.25"
                  result="effect1_foregroundBlur_1_5"
                />
              </filter>
              <linearGradient
                id="paint0_linear_1_5"
                x1="255.213"
                y1="-99.8742"
                x2="403.393"
                y2="429.215"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#040031" />
                <stop offset="1" stop-color="#3D50B1" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="gradient2 -z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="683"
            height="428"
            viewBox="0 0 683 428"
            fill="none"
          >
            <g filter="url(#filter0_f_1_6)">
              <path
                d="M248.5 -22.5C248.5 21.6828 660.482 371 622.721 371C584.96 371 178.298 44.6828 178.298 0.5C178.298 -43.6828 25.2307 -92 62.9918 -92C100.753 -92 248.5 -66.6828 248.5 -22.5Z"
                fill="url(#paint0_linear_1_6)"
                fill-opacity="0.17"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_1_6"
                x="0"
                y="-149"
                width="682.167"
                height="577"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="28.5"
                  result="effect1_foregroundBlur_1_6"
                />
              </filter>
              <linearGradient
                id="paint0_linear_1_6"
                x1="241.5"
                y1="-30"
                x2="640.5"
                y2="405.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="#CA00B6" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="gradient3 max-sm:hidden -z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1148"
            height="418"
            viewBox="0 0 1148 418"
            fill="none"
          >
            <g filter="url(#filter0_f_1_3)">
              <path
                d="M658.895 13.8956C715.443 162.438 1290.83 232.612 1209.53 263.562C1128.23 294.512 610.716 347.756 554.169 199.214C497.622 50.6718 47.8496 -49.633 129.151 -80.583C210.453 -111.533 602.348 -134.646 658.895 13.8956Z"
                fill="url(#paint0_linear_1_3)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_1_3"
                x="0.853821"
                y="-222.001"
                width="1335.03"
                height="639.264"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="59.25"
                  result="effect1_foregroundBlur_1_3"
                />
              </filter>
              <linearGradient
                id="paint0_linear_1_3"
                x1="612.044"
                y1="-96.6847"
                x2="793.724"
                y2="421.856"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#040031" />
                <stop offset="1" stop-color="#3D50B1" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="gradient4 max-sm:hidden -z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="683"
            height="428"
            viewBox="0 0 683 428"
            fill="none"
          >
            <g filter="url(#filter0_f_1_6)">
              <path
                d="M248.5 -22.5C248.5 21.6828 660.482 371 622.721 371C584.96 371 178.298 44.6828 178.298 0.5C178.298 -43.6828 25.2307 -92 62.9918 -92C100.753 -92 248.5 -66.6828 248.5 -22.5Z"
                fill="url(#paint0_linear_1_6)"
                fill-opacity="0.17"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_1_6"
                x="0"
                y="-149"
                width="682.167"
                height="577"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="28.5"
                  result="effect1_foregroundBlur_1_6"
                />
              </filter>
              <linearGradient
                id="paint0_linear_1_6"
                x1="241.5"
                y1="-30"
                x2="640.5"
                y2="405.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="#CA00B6" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </body>
    </html>
  );
}
