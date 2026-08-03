"use client";

const FOOTER_COLUMNS = [
  {
    heading: "Soramap",
    links: ["Our Work", "About Us", "Insights"],
  },
  {
    heading: "Services",
    links: ["Tech Development", "Product Design", "Strategy & Consulting", "Growth"],
  },
  {
    heading: "Solutions",
    links: ["Web Development", "Cloud Infrastructure", "AI Solutions", "Application Security"],
  },
  {
    heading: "Company",
    links: ["About Us", "Our Team",  "Privacy Policy"],
  },
];

const SOCIALS = ["LinkedIn", "Twitter", "Instagram"];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer" data-nav-theme="dark">
      <div className="footer-wordmark" aria-hidden="true">
        SORAMAP
      </div>

      <div className="footer-content">
        <div className="footer-columns">
          {FOOTER_COLUMNS.map((col) => (
            <div className="footer-column" key={col.heading}>
              <h3>{col.heading}</h3>
              <ul>
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer-column">
            <h3>Socials</h3>
            <ul>
              {SOCIALS.map((social) => (
                <li key={social}>
                  <a href="#" target="_blank" rel="noreferrer">
                    {social} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Soramap</span>
          <button onClick={scrollToTop} className="footer-back-to-top">
            ↑ Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}