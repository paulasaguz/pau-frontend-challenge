import Link from "next/link";

const Header = () => {
  return (
    <header className="h-16">
      <div className="h-16">
        <Link className="h-full flex justify-center items-center uppercase font-bold tracking-[6px] text-xl " href="/"><span className="text-[#29CB5E]">clon</span>every</Link>
      </div>
    </header>
  );
};

export default Header;
