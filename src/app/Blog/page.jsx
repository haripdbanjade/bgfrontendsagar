"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { blogs } from "@/data/blogs";

export default function Blog() {
  const featured = blogs[0];
  const rest = blogs.slice(1);

  return (
    <section className="bg-[#0a0a0a] text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-red-400">
            Gaming News & Insights
          </h2>
          <Link
            href="/blog"
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-5 py-2 rounded-full text-sm transition-all"
          >
            Read All Articles <FaArrowRight className="text-white text-sm" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featured && (
            <div className="md:col-span-2 lg:col-span-2 bg-[#111] rounded-2xl overflow-hidden shadow-lg hover:shadow-indigo-700/20 transition-all">
              <Image
                src={featured.image}
                alt={featured.title}
                width={600}
                height={400}
                className="w-full h-120 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="p-5">
                <p className="text-xs text-gray-400 mb-2">{featured.date}</p>
                <h3 className="text-2xl font-semibold mb-2">{featured.title}</h3>
                <p className="text-gray-300 text-sm">{featured.description}</p>
                <Link
                  href={`Blog/${featured.slug}`}
                  className="inline-flex items-center gap-2 text-red-400 mt-3 text-sm hover:underline"
                >
                  Read More <FaArrowRight size={12} />
                </Link>
              </div>
            </div>
          )}

          <div className="md:col-span-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {rest.map((post) => (
              <Link
                key={post.id}
                href={`/Blog/${post.slug}`}
                className="bg-[#111] hover:bg-[#1c1c1c] rounded-2xl shadow-md overflow-hidden transition-all group"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-4">
                  <p className="text-xs text-gray-400">{post.date}</p>
                  <h4 className="text-lg font-semibold mt-1 mb-1">{post.title}</h4>
                  <p className="text-sm text-gray-400 line-clamp-2">{post.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
