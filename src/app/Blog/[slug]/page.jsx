import { blogs } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage({ params }) {
  const { slug } = params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-2xl">
        Blog not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/Blog" className="text-blue-400 hover:underline mb-6 inline-block">
          ← Back to Blogs
        </Link>

   
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

        {blog.image && (
          <Image
            src={blog.image}
            alt={blog.title}
            width={900}
            height={400}
            className="rounded-2xl mb-6 object-cover"
          />
        )}

   
        <p className="text-gray-400 mb-4">{blog.date}</p>

  
        {blog.description && (
          <p className="text-gray-300 mb-6">{blog.description}</p>
        )}

     
        <div
          className="prose prose-invert max-w-none text-gray-200"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </div>
  );
}
