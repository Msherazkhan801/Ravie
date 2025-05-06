import Adress from "@/components/Adress";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Head from "next/head";

export default function Home() {
  return (
     <>
      <Head>
        <title>ravie – Branding Agency</title>
        <meta name="description" content="ravie creates cult followings for brands." />
      </Head>
      <Header />
      <main>
        <Hero />
        <Work />
        <ContactSection/>
        <Adress/>
      </main>

      <Footer />
    </>

  );
}
