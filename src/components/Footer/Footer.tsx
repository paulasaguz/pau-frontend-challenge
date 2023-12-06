import Link from 'next/link';

import Typography from "../ui/Typography";

const Footer = () => {
  return (
    <footer className='p-6 grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
      <div>
        <Typography Tag="h3" variant="subHeading">Learn More</Typography>
        <ul>
          <li>
            <Link className='footerItem' href="https://www.paulasaguz.com/en" target="_blank">About me</Link>
          </li>
          <li>
            <Link className='footerItem' href="https://www.linkedin.com/in/paulasaguz/" target="_blank">LinkedIn</Link>
          </li>
        </ul>
      </div>
      <div>
        <Typography Tag="h3" variant="subHeading">The stack</Typography>
        <ul>
          <li>
            <p className='footerItem'>Next.js V14</p>
          </li>
          <li>
            <p className='footerItem'>Typescript</p>
          </li>
          <li>
            <p className='footerItem'>Tailwind CSS</p>
          </li>
        </ul>
      </div>
      <div>
        <Typography Tag="h3" variant="subHeading">Support</Typography>
        <ul>
          <li>
            <a className='footerItem' href="mailto:email@example.com?subject=Aga, this test looks...">Contact Aga 💙</a>
          </li>
          <li>
            <a className='footerItem' href="mailto:paulajohanasaguz@gmail.com?subject=Paula, this test looks...">Contact Me!</a>
          </li>
        </ul>
      </div>
      <div>
        <Typography Tag="h3" variant="subHeading">Region</Typography>
        <p className='footerItem'>🇲🇽 Mexico</p>
      </div>
    </footer>
  );
};

export default Footer;
