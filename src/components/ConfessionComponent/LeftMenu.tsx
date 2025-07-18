import { faHome, faMessage, faBookmark, faClock, faUser, faGear, faGlobe, faLightbulb, faRightFromBracket, type IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLocalStorage } from "../../localStorage/storage";
import { useAppDispatch } from "../../redux/hooks";
import { changeTheme } from "../../redux/reducer/slices/ThemeSlices";
import { userHookData } from "../../assets/hooks/hookData";
import UserProfileShortCut from "./UserProfileShortCut";

interface MenuItem {
  readonly id: string;
  readonly name: string;
  readonly path: string;
  readonly icon?: IconDefinition;
  readonly itemType: "item" | "button" | "header";
}

const menuItems: MenuItem[] = [
  { id: "1", name: "Trang chủ", path: "/", itemType: "item", icon: faHome },
  { id: "2", name: "Tin nhắn", path: "/message", itemType: "item", icon: faMessage },
  { id: "3", name: "Đã lưu", path: "/saved", itemType: "item", icon: faBookmark },
  { id: "4", name: "Tương tác gần đây", path: "/recent", itemType: "item", icon: faClock },
  { id: "5", name: "Cài đặt", path: "/", itemType: "header", icon: faGear },
  { id: "6", name: "Tài khoản", path: "/my-account", itemType: "item", icon: faUser },
  { id: "7", name: "Ngôn ngữ", path: "/language", itemType: "button", icon: faGlobe },
  { id: "8", name: "Nền tối", path: "", itemType: "button", icon: faLightbulb },
  { id: "9", name: "Đăng xuất", path: "/logout", itemType: "button", icon: faRightFromBracket },
];

const LeftMenu = () => {
  const [_counter, _setCounter] = useLocalStorage("counter", 0);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState("");

  useEffect(() => {
    const matched = menuItems.find((itemData) => {
      const fullPath = "/confession" + itemData.path;
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
    <div className="w-[20rem] px-5 py-10 hidden lg:block font-bold text-[#4d4d4d] dark:text-white">
      <div className="fixed">
        <UserProfileShortCut userProfile={userHookData} data={userHookData.username} className="flex items-center gap-4 w-full mb-5" />
        <div className="w-full h-full">
          <nav className="flex flex-col">
            {menuItems.map((itemData) => {
              const icon = itemData.icon && <FontAwesomeIcon icon={itemData.icon} className="mr-2 w-[2rem]" />;

              if (itemData.itemType === "header") {
                return (
                  <div className="border-t-1 mt-3 pt-3 mb-3 text-lg border-[#4f4f4f]" key={itemData.id}>
                    {icon}
                    {itemData.name}
                  </div>
                );
              }

              if (itemData.itemType === "item") {
                return (
                  <Link
                    key={itemData.id}
                    to={"/confession" + itemData.path}
                    className={
                      "text-xl my-1 px-4 py-1 rounded-2xl transition-all duration-200 flex items-center text-black dark:text-white" +
                      (selectedItem === itemData.id ? " bg-gray-200 dark:bg-[#838383]" : " hover:bg-gray-300 dark:hover:bg-[#383838]")
                    }
                  >
                    {icon}
                    {itemData.name}
                  </Link>
                );
              }

              return (
                <button
                  key={itemData.id}
                  onClick={() => {
                    if (itemData.id === "8") dispatch(changeTheme());
                  }}
                  className={
                    "text-xl my-1 px-4 py-1 rounded-2xl flex items-center cursor-pointer transition-colors duration-200 text-black dark:text-white " +
                    (selectedItem === itemData.id ? " bg-gray-200 dark:bg-[#838383]" : " hover:bg-gray-300 dark:hover:bg-[#383838]")
                  }
                >
                  {icon}
                  {itemData.name}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;
