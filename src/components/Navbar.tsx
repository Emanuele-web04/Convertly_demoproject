import { convertly, close, menu } from "../assets";
import { navLinks } from "../constants";
import { useState } from "react";
export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex justify-between py-6 navbar items-center">
      <img src={convertly} alt="Convertly" className="w-[175px] h-41px object-contain" />
      <ul className="list-none font-poppins sm:flex hidden justify-end flex-1 items-center">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={nav.title}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden block">
        <img
          src={toggle ? close : menu}
          alt="close"
          className="w-[20px] h-[20px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>

      <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none sm:flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text[16px] ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                } text-white`}
              >
                <a href="`${nav.id}`">{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
    </nav>
  );
}
