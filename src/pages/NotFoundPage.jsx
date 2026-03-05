function NotFoundPage() {
  return (
    <main className="page">
      <section className="">
        <h1 className="page-title">Page not found</h1>
        <p className="page-description">
          The route you tried to open does not exist. This fallback view shares
          the same Tailwind-powered layout as the other pages.
        </p>
      </section>
    </main>
  );
}

export default NotFoundPage;

