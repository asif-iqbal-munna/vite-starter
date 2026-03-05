function HomePage() {
  return (
    <main className="page">
      <section className="">
        <h1 className="page-title">
          Welcome to your <span>React starter</span>
        </h1>
        <p className="page-description">
          This home page is styled with custom CSS using variables,
          pseudo-classes, and selectors, while the other pages use Tailwind
          utilities via the @apply directive.
        </p>
      </section>
    </main>
  );
}

export default HomePage;

