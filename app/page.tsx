"use client";

import { useState } from "react";

const INSTAGRAM = "https://www.instagram.com/winkandrisebakery/";

const offerings = [
  {
    number: "01",
    title: "Artisan Sourdough",
    text: "The kind of bread that makes an everyday meal feel special.",
    className: "bread-one",
    art: "◒",
  },
  {
    number: "02",
    title: "Small-Batch Baking",
    text: "Thoughtfully prepared baked goods from a local home bakery.",
    className: "bread-two",
    art: "✳",
  },
  {
    number: "03",
    title: "Made for Sharing",
    text: "Something lovely for your table or to share with someone.",
    className: "bread-three",
    art: "♡",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main id="top">
      <div className="announcement">
        <span>✳</span>
        A LITTLE SOURDOUGH LOVE FROM MERIDIAN, IDAHO
        <span>✳</span>
      </div>

      <header className="header">
        <a className="brand" href="#top" onClick={closeMenu}>
          <span className="brand-name">
            wink <i>&</i> rise
          </span>
          <span className="brand-caption">SOURDOUGH BAKERY</span>
        </a>

        <nav
          className={`navigation ${menuOpen ? "navigation-open" : ""}`}
          aria-label="Main navigation"
        >
          <a href="#about" onClick={closeMenu}>
            Our Bakery
          </a>
          <a href="#bakes" onClick={closeMenu}>
            The Bakes
          </a>
          <a href="#ordering" onClick={closeMenu}>
            How to Order
          </a>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Instagram ↗
          </a>
          <a
            className="nav-button"
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            ORDER VIA INSTAGRAM ↗
          </a>
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="main-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            THE BEAUTY OF SLOW BAKING
          </div>

          <h1>
            Good bread.
            <br />
            <em>Good mornings.</em>
            <br />
            Little moments
            <br />
            of <span>joy.</span>
          </h1>

          <p className="hero-description">
            Meet Wink & Rise — a Meridian home bakery sharing the
            simple pleasure of organic sourdough and thoughtfully
            made bakes.
          </p>

          <div className="hero-actions">
            <a className="button button-dark" href="#bakes">
              EXPLORE THE BAKERY <span>↗</span>
            </a>
            <a
              className="text-link"
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
            >
              SAY HELLO ON INSTAGRAM ↗
            </a>
          </div>

          <div className="hero-bottom">
            <span>HOME-BAKED IN MERIDIAN, IDAHO</span>
            <span>SCROLL TO DISCOVER ↓</span>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="hero-art-label">
            <span>WARMTH IN EVERY SLICE</span>
            <span>✳</span>
          </div>

          <div className="art-oval">
            <div className="sun-disc" />
            <div className="loaf-shadow" />
            <div className="loaf">
              <span className="loaf-cut cut-one" />
              <span className="loaf-cut cut-two" />
              <span className="loaf-cut cut-three" />
              <span className="loaf-cut cut-four" />
            </div>
            <span className="art-wheat wheat-left">✳</span>
            <span className="art-wheat wheat-right">✳</span>
          </div>

          <div className="hero-art-footer">
            <span>FLOUR · WATER · TIME · LOVE</span>
            <span>EST. IN THE KITCHEN</span>
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          SLOW MORNINGS <span>✳</span> SOURDOUGH LOVE{" "}
          <span>✳</span> SMALL BATCH BAKING <span>✳</span>{" "}
          FRESHLY MADE <span>✳</span> SLOW MORNINGS{" "}
          <span>✳</span> SOURDOUGH LOVE <span>✳</span>{" "}
          SMALL BATCH BAKING <span>✳</span> FRESHLY MADE{" "}
          <span>✳</span>
        </div>
      </div>

      <section className="section about" id="about">
        <div className="section-topline">
          <span>01 / THE HEART OF THE BAKERY</span>
          <span>✳</span>
        </div>

        <div className="about-grid">
          <div>
            <p className="section-kicker">A LITTLE INTRODUCTION</p>
            <h2>
              Some things
              <br />
              are worth
              <br />
              <em>waiting for.</em>
            </h2>
          </div>

          <div className="about-right">
            <div className="about-symbol">✳</div>
            <p>
              There&apos;s something special about a loaf of sourdough:
              the beautiful crust, the comforting aroma, and the
              joy of sharing it around the table.
            </p>
            <p>
              Wink & Rise is a home-based bakery in Meridian,
              Idaho, centered on organic sourdough and the
              simple pleasure of homemade baking.
            </p>
            <a
              className="underlined-link"
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
            >
              GET TO KNOW THE BAKERY ↗
            </a>
          </div>
        </div>
      </section>

      <section className="section bakes" id="bakes">
        <div className="section-topline">
          <span>02 / SOMETHING GOOD IS BAKING</span>
          <span>THE COLLECTION</span>
        </div>

        <div className="bakes-heading">
          <div>
            <p className="section-kicker">FROM THE KITCHEN</p>
            <h2>
              The good <em>stuff.</em>
            </h2>
          </div>
          <p>
            Simple ingredients, comforting moments, and a little
            something to look forward to.
          </p>
        </div>

        <div className="bake-grid">
          {offerings.map((item) => (
            <article className="bake-card" key={item.number}>
              <div className={`bake-art ${item.className}`}>
                <div className="bake-art-ring" />
                <span className="bake-art-symbol">{item.art}</span>
                <span className="bake-art-caption">
                  WINK & RISE BAKERY
                </span>
              </div>

              <div className="bake-info">
                <span className="bake-number">
                  {item.number} / FROM THE BAKERY
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ask about ${item.title} on Instagram`}
                >
                  ↗
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="bakes-footer">
          <span>
            Curious about current bakes and availability?
          </span>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
          >
            SEE WHAT&apos;S BAKING ON INSTAGRAM ↗
          </a>
        </div>
      </section>

      <section className="quote-section">
        <span className="quote-flower">✳</span>
        <p>THE LITTLE THINGS ARE THE BIG THINGS</p>
        <h2>
          Made slowly.
          <br />
          <em>Enjoyed fully.</em>
        </h2>
        <span className="quote-bottom">
          A LITTLE MORE JOY IN EVERYDAY MOMENTS
        </span>
      </section>

      <section className="section ordering" id="ordering">
        <div className="section-topline">
          <span>03 / BRING HOME THE GOOD STUFF</span>
          <span>✳</span>
        </div>

        <div className="ordering-grid">
          <div className="ordering-copy">
            <p className="section-kicker">LET&apos;S TALK SOURDOUGH</p>
            <h2>
              Your next loaf
              <br />
              <em>starts here.</em>
            </h2>
            <p>
              Want to ask about a loaf or find out what&apos;s
              available? Connect with Wink & Rise on Instagram
              for ordering details and local pickup information.
            </p>
            <a
              className="button button-green"
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
            >
              MESSAGE TO ORDER <span>↗</span>
            </a>
          </div>

          <div className="ordering-steps">
            <div className="order-step">
              <span className="step-number">01</span>
              <div>
                <h3>Explore the latest bakes</h3>
                <p>
                  Visit Instagram to see what Wink & Rise has
                  been sharing.
                </p>
              </div>
              <span className="step-arrow">↗</span>
            </div>

            <div className="order-step">
              <span className="step-number">02</span>
              <div>
                <h3>Send a message</h3>
                <p>
                  Ask about current availability, quantities,
                  and ordering.
                </p>
              </div>
              <span className="step-arrow">↗</span>
            </div>

            <div className="order-step">
              <span className="step-number">03</span>
              <div>
                <h3>Arrange local pickup</h3>
                <p>
                  Confirm the pickup details directly with
                  the bakery.
                </p>
              </div>
              <span className="step-arrow">↗</span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="contact-content">
          <p className="contact-kicker">GOOD BREAD IS CALLING</p>
          <h2>
            Let&apos;s make
            <br />
            <em>your day.</em>
          </h2>
          <p>
            A little sourdough happiness is just a message away.
          </p>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            FIND US ON INSTAGRAM <span>↗</span>
          </a>
        </div>
        <div className="contact-decor" aria-hidden="true">
          rise.
        </div>
      </section>

      <footer className="footer">
        <div className="footer-main">
          <div>
            <a href="#top" className="footer-brand">
              wink <i>&</i> rise
            </a>
            <p>
              Slow-baked goodness.
              <br />
              Made for everyday moments.
            </p>
          </div>

          <div className="footer-column">
            <span>EXPLORE</span>
            <a href="#about">Our Bakery</a>
            <a href="#bakes">The Bakes</a>
            <a href="#ordering">How to Order</a>
          </div>

          <div className="footer-column">
            <span>GET IN TOUCH</span>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram ↗
            </a>
            <p>Meridian, Idaho</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 WINK & RISE</span>
          <span>MADE WITH A LITTLE EXTRA LOVE ✳</span>
        </div>
      </footer>
    </main>
  );
}