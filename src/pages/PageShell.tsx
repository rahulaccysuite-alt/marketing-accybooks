import type { ReactNode } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Seo from "../components/Seo";

export default function PageShell({ title, description, className = "", children }: { title: string; description: string; className?: string; children: ReactNode }) {
  return (
    <>
      <Seo title={title} description={description} />
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main" className={className}>{children}</main>
      <Footer />
    </>
  );
}
