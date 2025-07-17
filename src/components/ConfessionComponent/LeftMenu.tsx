import { faHome, faMessage, faBookmark, faClock, faUser, faGear, faGlobe, faRightFromBracket, type IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLocalStorage } from "../../localStorage/storage";

interface MenuItem {
  readonly id: string;
  readonly name: string;
  readonly path: string;
  readonly icon?: IconDefinition;
  readonly itemType: "item" | "button" | "header";
}

const menuItems: MenuItem[] = [
  {
    name: "Trang chủ",
    path: "/",
    itemType: "item",
    icon: faHome,
    id: "1",
  },
  {
    name: "Tin nhắn",
    path: "/message",
    itemType: "item",
    icon: faMessage,
    id: "2",
  },
  {
    name: "Đã lưu",
    path: "/saved",
    itemType: "item",
    icon: faBookmark,
    id: "3",
  },
  {
    name: "Tương tác gần đây",
    path: "/recent",
    itemType: "item",
    icon: faClock,
    id: "4",
  },
  {
    name: "Cài đặt",
    path: "/",
    itemType: "header",
    icon: faGear,
    id: "5",
  },
  {
    name: "Tài khoản",
    path: "/my-account",
    itemType: "item",
    icon: faUser,
    id: "6",
  },
  {
    name: "Ngôn ngữ",
    path: "/language",
    itemType: "button",
    icon: faGlobe,
    id: "7",
  },
  {
    name: "Đăng xuất",
    path: "/logout",
    itemType: "button",
    icon: faRightFromBracket,
    id: "8",
  },
];

const LeftMenu = () => {
  const [_counter, _setCounter] = useLocalStorage("counter", 0);

  //   console.log(_counter);

  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState("");

  useEffect(() => {
    // Xử lý khớp path
    const matched = menuItems.find((itemData) => {
      const fullPath = "/confession" + itemData.path;
      // Trường hợp đặc biệt với Trang chủ
      if (itemData.path === "/") {
        return location.pathname === "/confession" || location.pathname === "/confession/";
      }

      return location.pathname.startsWith(fullPath);
    });

    if (matched) {
      setSelectedItem(matched.id);
    }
  }, [location.pathname]);

  return (
    <div className="w-[20rem] px-5 py-10 border-r-1 hidden md:block font-bold">
      <div className="">Profile</div>
      <div className="w-full h-full">
        <nav className="flex flex-col">
          {menuItems.map((itemData) => {
            const icon = itemData.icon && <FontAwesomeIcon icon={itemData.icon} className="mr-2 text-[hsl(0,0%,30%)] dark:text-[hsl(0,0%,80%)]" />;

            if (itemData.itemType == "header") {
              return (
                <div className={`border-t-1 mt-3 pt-3 mb-3 text-lg`} key={itemData.id}>
                  {icon}
                  {itemData.name}
                </div>
              );
            } else if (itemData.itemType == "item") {
              return (
                <Link
                  to={"/confession" + itemData.path}
                  className={
                    "text-xl my-1 px-4 py-1 rounded-2xl transition-all duration-200" +
                    (selectedItem === itemData.id ? " bg-gray-200 dark:bg-gray-700 text-black dark:text-white" : " hover:bg-gray-300 dark:hover:bg-gray-600")
                  }
                >
                  {icon}
                  {itemData.name}
                </Link>
              );
            } else {
              return (
                <button
                  key={itemData.id}
                  className={
                    "text-xl my-1 px-4 py-1 rounded-2xl flex items-center cursor-pointer transition-colors duration-200 " + (selectedItem === itemData.id ? "bg-gray-200" : "hover:bg-gray-400")
                  }
                >
                  {icon}
                  {itemData.name}
                </button>
              );
            }
          })}
        </nav>
      </div>
    </div>
  );
};

export default LeftMenu;
