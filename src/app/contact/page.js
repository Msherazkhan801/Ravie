import Adress from "@/components/Adress";
import Footer from "@/components/Footer";
import GetInTouchSection from "@/components/GetInTouchSection";
import Header from "@/components/Header";

export default function Contact() {
    return (
      <>
      <Header/>
      <section className="bg-[#f4ecec] text-[#231f20] px-6 py-16 border-b border-[#231f20]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold">
            Have a project in <em className="italic">mind</em>?
          </h2>
          <p className="mt-6 text-lg font-medium">
            New Business:{' '}
            <a
              href="mailto:work@ravie.co"
              className="text-red-600 underline underline-offset-4 hover:text-red-800"
            >
              work@ravie.co
            </a>
          </p>
        </div>
      </section>
      <Adress/>
      <GetInTouchSection/>
      <Footer/>
      </>

    );
  }
  