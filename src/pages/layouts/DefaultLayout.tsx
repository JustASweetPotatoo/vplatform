import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import type { Layout, LayoutData } from "./interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket, faUserPlus } from "@fortawesome/free-solid-svg-icons";

import logo from "../../assets/logo2.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Tự động đóng menu khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="min-h-16 min-w-md w-full bg-[hsl(0,0%,31%)] dark:bg-[#1a1a1a] text-white fixed">
      <div className="container min-h-16 mx-auto flex flex-row items-center justify-between">
        <div className="flex">
          <div className="px-5 stroke-text text-2xl font-bold flex items-center" id="header-logo">
            <img className="h-40 w-auto object-contain" src={logo} alt="Logo" />
          </div>

          <div className="relative inline-block text-left lg:hidden" ref={menuRef}>
            {/* Nút mở menu */}
            <button onClick={() => setOpen(!open)} className="flex items-center gap-2 px-4 py-2 text-white rounded hover:bg-[#6b6b6b] transition">
              <ChevronDown className="w-8 h-8" />
            </button>

            {/* Dropdown menu */}
            <div className={`absolute mt-2 w-[200px] rounded-md shadow-lg bg-white transition-all duration-200 transform ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
              <div className="font-semibold text-lg">
                <a href="#" className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-all border-b">
                  Confession
                </a>
                <a href="#" className="block transition-all px-4 py-2 text-gray-700 hover:bg-gray-100">
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                  Market Place
                </a>
              </div>
            </div>
          </div>

          <nav className="hidden lg:flex pl-10 space-x-10 text-xl">
            <a className="flex items-center hover:font-extrabold cursor-pointer">
              <div className="hidden lg:flex">{"> Confession"}</div>
            </a>
            <a className="flex items-center hover:font-extrabold cursor-pointer">
              <div className="hidden lg:flex">{"> Market Place"}</div>
            </a>
          </nav>
        </div>

        <div className="flex space-x-3 text-[15px] font-semibold">
          <button className="lg:px-6 px-4 h-9 transition-all border-2 cursor-pointer hover:bg-white hover:text-[#4f4f4f] rounded-3xl flex items-center bg-[#4f4f4f] text-[#ffffff] space-x-3">
            <div className="hidden lg:flex">ĐĂNG NHẬP</div>
            <FontAwesomeIcon icon={faRightToBracket} />
          </button>
          <button className="lg:px-6 px-4 h-9 transition-all cursor-pointer hover:bg-[#ff65a0] border-0 rounded-3xl flex items-center bg-[#ff3974] space-x-3">
            <div className="hidden lg:flex">ĐĂNG KÝ</div>
            <FontAwesomeIcon icon={faUserPlus} />
          </button>
          <div>--lang-selector--</div>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return <footer className="w-full">jaslkdjalskdjaskl</footer>;
};

export const DefaultLayout = (data: LayoutData): Layout => {
  data.routeState;
  return { header: Header, footer: Footer, data: { heighMinus: `${4}rem` } };
};
