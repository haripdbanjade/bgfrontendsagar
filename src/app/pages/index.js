import axios from "axios";

export default function Home({ posts }) {
  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          {post.image && <img src={post.image.url} alt={post.title} />}
        </div>
      ))}
    </div>
  );
}

// Static Props
export async function getStaticProps() {
  const res = await axios.get("http://localhost:1337/api/posts?populate=*");
  return {
    props: {
      posts: res.data.data.map((item) => ({
        id: item.id,
        title: item.attributes.title,
        description: item.attributes.description,
        image: item.attributes.image?.data?.attributes || null,
      })),
    },
  };
}
