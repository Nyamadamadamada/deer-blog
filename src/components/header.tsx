import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-xl md:text2xl font-bold tracking-tight md:tracking-tighter leading-tight mb-16 mt-8">
      <Link href="/" className="hover:underline">
        鹿TechBlog
      </Link>
      .
    </h2>
  );
};

export default Header;
