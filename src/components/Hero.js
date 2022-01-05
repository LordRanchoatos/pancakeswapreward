import React from "react";
import { ReactComponent as BunnyEnlarged } from "../assets/bunny-enlarged.svg";

const Hero = () => {
  return (
    <div class="sc-jSFjdj kJmatq">
      <div class="sc-jSFjdj sc-gKAaRy sc-cOohKt fKBiSv jcNvwq dVhZcw sc-ePZAhl eTIood">
        <div
          class="sc-jSFjdj jxszLn sc-iLCGUA SJrhE"
          style="margin: 0px; width: 100%;"
        >
          <div class="sc-iazTlQ dJqkyv">
            <div class="sc-eSRwjH lnhkkx">
              <svg
                viewBox="0 0 1660 339"
                width="100%"
                color="text"
                xmlns="http://www.w3.org/2000/svg"
                class="sc-bdnxRM kDWlca"
              >
                <path
                  d="M804 167.023C520.5 167.023 267.5 290.522 0 304.5V339H1660V0.5C1358.83 0.5 1104 167.023 804 167.023Z"
                  fill="url(#paint0_linear_light)"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_light"
                    x1="830"
                    y1="84"
                    x2="830"
                    y2="339"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" stop-opacity="0.48"></stop>
                    <stop
                      offset="0.566389"
                      stop-color="white"
                      stop-opacity="0.35"
                    ></stop>
                    <stop offset="1" stop-color="white"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div id="homepage-hero" class="sc-jSFjdj sc-gKAaRy bcKnBX gyufHB">
            <div class="sc-jSFjdj sc-gKAaRy kJmatq iKOCuh">
              <h2
                scale="xxl"
                color="secondary"
                class="sc-gtsrHT sc-jJMGnK izxulV gLmuIw"
              >
                The moon is made of pancakes.
              </h2>
              <h2
                scale="md"
                color="text"
                class="sc-gtsrHT sc-jJMGnK kUBYHh gcLVyG"
              >
                Trade, earn, and win crypto on the most popular decentralized
                platform in the galaxy.
              </h2>
              <div class="sc-jSFjdj sc-gKAaRy kJmatq jcNvwq">
                <button class="sc-hKFxyN cCyxGH" scale="md">
                  Connect Wallet
                </button>
                <a href="/swap">
                  <button class="sc-hKFxyN jRWmGv" scale="md">
                    Trade Now
                  </button>
                </a>
              </div>
            </div>
            <div class="sc-jSFjdj sc-gKAaRy bqmzQM cDfOxl">
              <picture>
                <source src={BunnyEnlarged}></source>
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
