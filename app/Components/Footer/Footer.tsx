import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="py-10 px-4"
      style={{ backgroundColor: "var(--background-color)", borderTop: "1px solid var(--surface-border)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo / Brand */}
        <div>
          <h1 className="text-xl font-bold" style={{ color: "var(--primary)" }}>
            Shortly
          </h1>
        </div>

        {/* Copyright */}
        <div className="text-sm text-white">
          © 2026 Shortly. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
