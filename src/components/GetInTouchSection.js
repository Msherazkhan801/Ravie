const team = [
    {
        name: "Noah Wilde",
        title: "CCO",
        image: "/ceo.png",
        description:
          "Hey I’m Noah, a motion and graphic designer with a heaping side of art director. I grew up in the lovely mountain town of Asheville, NC and have since moved to the much flatter and busier New York City. When I’m not working on impactful projects, I’m modeling or making content with interesting folks.",
      },
    {
      name: "Austin Bauwens",
      title: "COO + CFO",
      image: "/coceo.png",
      description:
        "Howdy! I’m Austin, I grew up in Houston, TX and have lived in Raleigh, NC for the past 6 years. Day-to-day I handle the business development side of things here at Ravie while still getting to jump into creative production and cook up some sleek design and animation.",
    },
    {
      name: "Noah Wilde",
      title: "CCO",
      image: "/cdb.jpg",
      description:
        "Hey I’m Noah, a motion and graphic designer with a heaping side of art director. I grew up in the lovely mountain town of Asheville, NC and have since moved to the much flatter and busier New York City. When I’m not working on impactful projects, I’m modeling or making content with interesting folks.",
    },
    {
      name: "Sam Essanoussi",
      title: "Creative Director, Brand",
      image: "/jackson.png",
      description:
        "Hey There, Nice to meet you! I’m Sam, and currently based in Morocco, enjoying its good food and beautiful scenery. At Ravie I'm animating and illustrating along with the team! Geometric shapes and fun colors are my language.",
    },
    {
      name: "Sam Essanoussi",
      title: "Creative Director, Brand",
      image: "/headshot.jpg",
      description:
        "Hey There, Nice to meet you! I’m Sam, and currently based in Morocco, enjoying its good food and beautiful scenery. At Ravie I'm animating and illustrating along with the team! Geometric shapes and fun colors are my language.",
    },
    {
      name: "Sam Essanoussi",
      title: "Creative Director, Brand",
      image: "/girls.jpg",
      description:
        "Hey There, Nice to meet you! I’m Sam, and currently based in Morocco, enjoying its good food and beautiful scenery. At Ravie I'm animating and illustrating along with the team! Geometric shapes and fun colors are my language.",
    },
  ];
  
  export default function GetInTouchSection() {
    return (
      <section className="bg-[#f4ecec] text-[#231f20] px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">Who We Are</h2>
  
          <div className="grid md:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <div key={index} className="text-left">
               <div className="w-full h-[400px] overflow-hidden rounded">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
                <h3 className="text-lg font-bold">
                  {member.name} ({member.title})
                </h3>
                <p className="mt-2 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  