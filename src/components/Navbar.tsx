import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Product", href: "/product" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const getHref = (href: string) => {
    if (href.startsWith("#") && !isHomePage) {
      return `/${href}`;
    }
    return href;
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30"
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src="/logo.png?v=202404101055" alt="ElyntisTec Logo" className="h-10 w-auto" />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={getHref(link.href)}
              className="text-sm text-[#000000] hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/product"
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-heading font-bold hover:bg-primary/90 transition-colors glow-primary tracking-wide"
          >
            Launch ElyntisTec AI
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="lg:hidden glass-card border-t border-border/30 px-4 pb-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={getHref(link.href)}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm text-[#000000] hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/product"
            onClick={() => setMobileOpen(false)}
            className="mt-2 block text-center px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold"
          >
            Launch ElyntisTec AI
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
