import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Character NFT template</title>
        <meta property="og:title" content="Character NFT template" />
      </Helmet>
      <header data-thq="thq-navbar" className="home-navbar">
        <div className="home-container1">
          <img alt="image" src="/Logo/ekans-200h.png" className="home-image" />
        </div>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="home-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="home-nav"
          ></nav>
        </div>
        <div data-thq="thq-navbar-btn-group" className="home-btn-group">
          <div className="home-socials">
            <button className="social button">
              <a
                href="https://x.com/ekansonchain?s=20"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  alt="image"
                  src="/Icons/twitter.svg"
                  className="home-image1"
                />
              </a>
            </button>
            <button className="social button">
              <a
                href="https://t.me/+K2ykXRmWyjI3NDJk"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  alt="image"
                  src="/Icons/telegram.svg"
                  className="home-image2"
                />
              </a>
            </button>
          </div>
          <button className="home-view button">BUY $EKANS</button>
        </div>
        <div data-thq="thq-burger-menu" className="home-burger-menu">
          <button className="button home-button">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </button>
        </div>
        <div data-thq="thq-mobile-menu" className="home-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="home-nav1"
          >
            <div className="home-container2">
              <span className="home-logo">Character</span>
              <div data-thq="thq-close-menu" className="home-menu-close">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="home-nav2"
            >
              <span className="home-text">About</span>
              <span className="home-text01">Features</span>
              <span className="home-text02">Pricing</span>
              <span className="home-text03">Team</span>
              <span className="home-text04">Blog</span>
            </nav>
            <div className="home-container3">
              <button className="home-login button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div className="home-icon-group">
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <section className="home-hero">
        <div className="home-heading"></div>
      </section>
      <div className="home-container4"></div>
      <section className="home-roadmap">
        <div className="home-heading1">
          <h2 className="home-header">Roadmap</h2>
        </div>
        <div className="home-list">
          <div className="home-step">
            <span className="home-caption">01</span>
            <div className="home-heading2">
              <h2 className="home-header01">Project Launch</h2>
              <p className="home-header02">
                Create social media, token creation. Airdrops and community
                incentives.
              </p>
            </div>
          </div>
          <div className="home-step1">
            <span className="home-caption1">02</span>
            <div className="home-heading3">
              <h2 className="home-header03">Staking and governance</h2>
              <p className="home-header04">$EKANS Staking.</p>
            </div>
          </div>
          <div className="home-step2">
            <span className="home-caption2">03</span>
            <div className="home-heading4">
              <h2 className="home-header05">Listings</h2>
              <p className="home-header06">
                <span>
                  Listings listings listings listings and more listings.
                </span>
                <br></br>
              </p>
            </div>
          </div>
          <div className="home-step3">
            <span className="home-caption3">04</span>
            <div className="home-heading5">
              <h2 className="home-header07">Surprise</h2>
              <p className="home-header08">Some hush hush stuff..... </p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-tokenomics">
        <div className="home-row">
          <div className="home-column">
            <div className="home-card">
              <img
                alt="image"
                src="/Characters/ekans21-1500w.png"
                className="home-image3"
              />
            </div>
          </div>
        </div>
        <div className="home-column1">
          <div className="home-card1">
            <div className="home-content">
              <h2 className="home-header09">Tokenomics</h2>
              <p className="home-description">
                <span className="home-text07">50% Liquidity</span>
                <br className="home-text08"></br>
                <span className="home-text09">25% Project developments</span>
                <br className="home-text10"></br>
                <span className="home-text11">20% Farming</span>
                <br className="home-text12"></br>
                <span className="home-text13">5% Airdrop </span>
                <br className="home-text14"></br>
                <br></br>
              </p>
            </div>
            <button className="home-button1 button">BUY $EKANS</button>
          </div>
        </div>
      </section>
      <footer className="home-footer">
        <span className="home-copyright">
          © 2024 EKANS. All Rights Reserved.
        </span>
      </footer>
      <div>
        <div className="home-container6">
          <Script
            html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
