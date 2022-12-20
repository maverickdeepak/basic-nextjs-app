import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

function Navbar() {
  return (
    <nav className="NavBar">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
      <ThemeSwitch />
      <style jsx>
        {`
          nav {
            display: flex;
            justify-content: space-between;
            margin-top: 50px;
          }
          ul {
            list-style: none;
            padding: 0;
          }
          li {
            display: inline;
          }
          li:not(:first-child) {
            margin: 0 15px;
          }
        `}
      </style>
    </nav>
  );
}

export default Navbar;
