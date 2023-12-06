import Link from "next/link";

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={`h-16 fixed top-0 left-0 right-0 bg-white z-50 ${styles.root}`}>
      <div className="h-16">
        <Link className="h-full flex justify-center items-center uppercase font-bold tracking-[6px] text-xl text-font" href="/"><span className="text-[#29CB5E]">clon</span>every</Link>
      </div>
    </header>
  );
};

export default Header;
