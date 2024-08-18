import Link from "next/link";

export const Home = () => {
  return (
    <>
      <div>Welcome Home</div>
        <Link href="/blog">Blog</Link>
        <Link href="/products">Products</Link>
    </>
  );
};

export default Home;
