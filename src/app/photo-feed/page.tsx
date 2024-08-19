import Link from "next/link";
import natureImages from "./nature";
import Image from "next/image";

const Home = () => {
  return (
    <main className="container max-auto">
      <h1 className="text-center text-3xl font-bold my-4">
        Natures of the World
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {natureImages.map(({ id, src, name }) => (
          <Link key={id} href={`/photo-feed/${id}`}>
            <Image
              alt={name}
              src={src}
              className="w-full object-cover aspect-square"
            />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Home;
