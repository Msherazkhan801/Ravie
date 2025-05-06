export default function ContactSection() {
    return (
      <>
        <section className="bg-[#2b1f1f] text-white px-6 py-16 text-center">
          <div className=" mx-auto">
            <hr className="border-gray-400 mb-8" />
            </div>
            <div className="flex justify-left flex flex-col sm:pl-0 md:pl-20 text-justify">
            <h2 className="text-2xl md:text-4xl font-semibold mb-4">
              Have a project to discuss?
            </h2>
            <p className="text-lg font-medium">
              New Business:{' '}
              <a
                href="mailto:work@ravie.co"
                className="underline hover:text-gray-300"
              >
                work@ravie.co
              </a>
            </p>
          </div>
        </section>
      </>
    );
  }
  