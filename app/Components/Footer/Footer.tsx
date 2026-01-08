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

        {/* Links */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-white">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="#how-it-works" className="hover:underline">How It Works</Link>
          <Link href="#features" className="hover:underline">Features</Link>
          <Link href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</Link>
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
