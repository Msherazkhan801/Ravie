const workItems = [
    {
      title: "Coinbase: OnChain Vision",
      image:
        "https://images.squarespace-cdn.com/content/v1/6501de4e1575b916c339b6f7/1728052830680-395JA5PAET4XYYHFG4M5/CoinbaseThumbnail.jpg",
      href:`/work/1`,
    },
    {
      title: "How We Got 25M+ Views On Our Side Project",
      image: "/images2.png",
      href: "`/work/2",
    },
    {
      title: "Club Publix How-To Series",
      image: "/images3.png",
      href: "/the-work/coachella",
    },
    {
      title: "Coachella 2024: Jhene Aiko",
      image: "/images4.jpg",
      href: "`/work/3",
    },
    {
      title: "Ozone.pro",
      image: "/images5.jpg",
      href: "`/work/4",
    },
    {
      title: "OSOS",
      image: "/images6.jpg",
      href: "/the-work/crunchyroll",
    },
    {
      title: "Chick-fil-A",
      image: "/images9.png",
      href: "/the-work/crunchyroll",
    },
    {
      title: "Keller Williams",
      image: "/images10.png",
      href: "/the-work/crunchyroll",
    },
    {
        title: "Space & Time",
        image: "/images11.png",
        href: "/the-work/crunchyroll",
      },
    {
        title: "Crunchyroll",
        image: "/images12.jpg",
        href: "/the-work/crunchyroll",
      },
    {
        title: "Grow",
        image: "/images13.jpg",
        href: "/the-work/crunchyroll",
      },
    {
        title: "Game Plan",
        image: "/images14.jpg",
        href: "/the-work/crunchyroll",
      },
  ];
  
  export default function Work() {
    return (
      <section id="work" className="py-16 px-6 bg-gray-50">
        <h3 className="text-3xl font-bold mb-8">Selected Work</h3>
  
        <div className="grid md:grid-cols-2 gap-8">
          {workItems.map((item, idx) => (
            <a
              href={item.href}
              key={idx}
              className="group block overflow-hidden"
            >
              <div className="relative aspect-video overflow-hidden rounded">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
  
                {/* Blur + White Overlay */}
                <div className="absolute inset-0 bg-white/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
  
              <h3 className="mt-4 text-lg font-medium">{item.title}</h3>
            </a>
          ))}
        </div>
      </section>
    );
  }
  