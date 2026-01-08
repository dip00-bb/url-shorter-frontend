const CTASection = () => {
  return (
    <section
      className="py-20 flex flex-col items-center justify-center text-center px-4"
      style={{ backgroundColor: "var(--surface-border)" }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "var(--primary)" }}>
        Ready to Shorten Your First URL?
      </h2>

      <p className="text-white text-lg max-w-xl mb-8">
        Create an account today and start generating short, shareable links in seconds.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="/register"
          className="px-6 py-3 rounded-lg font-semibold transition-all duration-300"
          style={{
            backgroundColor: "var(--primary)",
            color: "var(--background-color)"
          }}
        >
          Get Started Free
        </a>

        <a
          href="/login"
          className="px-6 py-3 rounded-lg font-semibold border transition-all duration-300"
          style={{
            borderColor: "var(--primary)",
            color: "var(--primary)"
          }}
        >
          Login
        </a>
      </div>
    </section>
  );
};

export default CTASection;
