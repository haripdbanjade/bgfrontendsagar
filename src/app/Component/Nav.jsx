import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const posts = [
  {
    id: 1,
    title: "Top 5 Upcoming Action Games of 2025",
    date: "October 8, 2025",
    image: "/images/5.jpg",
    description:
      "Get ready for adrenaline! Here's a sneak peek at the most awaited action games launching next year.",
  },
  {
    id: 2,
    title: "How to Build a Gaming PC on a Budget",
    date: "October 4, 2025",
    image: "/images/2.jpg",
    description:
      "Build your dream rig without breaking the bank. Tips and component recommendations for every budget.",
  },
  {
    id: 3,
    title: "E-Sports Marketing Trends You Should Know",
    date: "September 30, 2025",
    image: "/images/3.jpg",
    description:
      "Learn the newest trends in e-sports marketing, sponsorships, and influencer collaborations.",
  },
  {
    id: 4,
    title: "Top Streamers Changing the Gaming Scene",
    date: "September 25, 2025",
    image: "/images/4.jpg",
    description:
      "These streamers aren't just playing—they're reshaping the future of online entertainment.",
  },
  {
    id: 5,
    title: "Best Indie Games You Might Have Missed",
    date: "September 22, 2025",
    image: "/images/5.jpg",
    description:
      "Discover hidden indie gems that flew under the radar but deliver big on gameplay and story.",
  },
];

export default function Blog() {
  return (
    <>
      <section className="bg-gray-950 text-white py-10 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
         
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Gaming News & Marketing Insights
            </h2>
            <button className="flex items-center gap-2 bg-red-600 px-4 py-1.5 rounded-full text-sm">
              Read All Articles <FaArrowRight className="text-white text-sm" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">

         
          <div className="md:col-span-2 lg:col-span-2 flex flex-col bg-gray-900 rounded-xl overflow-hidden shadow-md">
  <Image
    src={posts[0].image}
    alt={posts[0].title}
    width={600}
    height={400}
    className="w-full h-64 md:h-100 object-cover rounded-t-xl"
  />
  <div className="p-4">
    <p className="text-xs text-gray-400">{posts[0].date}</p>
    <h3 className="text-xl font-semibold mt-1">{posts[0].title}</h3>
    <p className="text-gray-400 text-xs mt-2">{posts[0].description}</p>
  </div>
</div>


      
            <div className="md:col-span-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {posts.slice(1).map((post) => (
                <div
                  key={post.id}
                  className="bg-gray-900 rounded-xl overflow-hidden flex flex-col shadow-md"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-36 object-cover"
                  />
                  <div className="p-3 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-xs text-gray-400">{post.date}</p>
                      <h3 className="text-sm font-semibold mt-1">{post.title}</h3>
                      <p className="text-xs text-gray-400 mt-1 line-clamp-2">{post.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
