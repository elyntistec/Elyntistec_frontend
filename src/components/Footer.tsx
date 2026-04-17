import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Pinterest = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="m8 20 4-9" />
    <path d="m10.7 14c.4-1.6.4-3.5 0-5" />
    <path d="m13 9a2 2 0 1 1 0 4 2 2 0 0 1-2-2" />
  </svg>
);

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const getHref = (href: string) => {
    if (href.startsWith("#") && !isHomePage) {
      return `/${href}`;
    }
    return href;
  };

  return (
    <footer className="border-t border-border/30 pt-12 pb-28 md:pb-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <img src="/logo.png?v=202404101055" alt="ElyntisTec Logo" className="h-9 w-auto transition-transform group-hover:scale-110" />
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-xs text-justify">
              Turn complex data into clear, actionable intelligence streamlining workflows, improving efficiency, and enabling smarter decisions with AI-driven automation.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-heading font-bold text-foreground uppercase tracking-widest mb-4">Product</h4>
            <ul className="space-y-2">
              {[
                { label: "How It Works", href: "#how-it-works" },
                { label: "Features", href: "#features" },
                { label: "Use Cases", href: "#use-cases" },
                { label: "Testimonials", href: "#testimonials" },

              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={getHref(link.href)}
                    className="text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-heading font-bold text-foreground uppercase tracking-widest mb-4">Resources</h4>
            <ul className="space-y-2">
              {[
                { label: "Blog", href: "#blog" },
                { label: "FAQ", href: "#faq" },
                { label: "Documentation", href: "/docs" }
              ].map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('#') ? (
                    <Link
                      to={getHref(link.href)}
                      className="text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label} {link.label === "Documentation" ? <span className="text-[10px] font-bold text-[#ffcd00]">(Coming Soon)</span> : ""}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-heading font-bold text-foreground uppercase tracking-widest mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                { label: "Contact", href: "#contact" },
                { label: "Privacy", href: "/privacy" },
                { label: "Terms & Conditions", href: "/terms" }
              ].map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('/') ? (
                    <Link
                      to={link.href}
                      className="text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : link.href.startsWith('#') ? (
                    <Link
                      to={getHref(link.href)}
                      className="text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={getHref(link.href)}
                      target={link.href.startsWith('http') ? "_blank" : undefined}
                      rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                      className="text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border/30 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 md:pr-24">
          <p className="text-[11px] text-muted-foreground">© 2023 ElyntisTec AI. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="https://www.linkedin.com/company/elyntistec/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="https://www.facebook.com/elyntistec/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook size={18} />
            </a>
            <a href="https://x.com/ElyntisTec" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter size={18} />
            </a>
            <a href="https://www.youtube.com/@ElyntisTec" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-muted-foreground hover:text-primary transition-colors">
              <Youtube size={18} />
            </a>
            <a href="https://www.pinterest.com/elyntistec/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="text-muted-foreground hover:text-primary transition-colors">
              <Pinterest size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
