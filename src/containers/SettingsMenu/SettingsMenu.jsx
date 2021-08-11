import { useState } from "react";
import {
  HeartIcon,
  Info,
  BellIcon,
  Preferences,
  RestaurantIcon,
  Security,
} from "../../assets/icon/BaseIcons";

import ButtonWithIcon from "../../components/ButtonWithIcon";




const data = [
  {
    path: "/settings/appearance",
    text: "Appereance",
    subtext: "Dark and Light mode, Font size",
    icon: <HeartIcon />,
  },
  {
    path: "/settings/restaurant",
    text: "Your Restaurant",
    subtext: "Dark and Light mode, Font size",
    icon: <RestaurantIcon />,
  },
  {
    path: "/settings/managment",
    text: "Products Management",
    subtext: "Manage your product, pricing, etc",
    icon: <Preferences />,
  },
  {
    path: "/settings/notification",
    text: "Notifications",
    subtext: "Customize your notifications",
    icon: <BellIcon />,
  },
  {
    path: "/settings/security",
    text: "Security",
    subtext: "Configure Password, PIN, etc",
    icon: <Security />,
  },
  {
    path: "/settings/security",
    text: "Security ",
    subtext: "Configure Password, PIN, etc",
    icon: <Security />,
  },
  {
    path: "/settings/aboutus",
    text: "About Us",
    subtext: "Find out more about Posly",
    icon: <Info />,
  },
];
const SettingsMenu = () => {

    const [activeClass, setActiveClass] = useState('');
    return (
      <div className="settings-menu">
        {data.map((btn) => (
          <ButtonWithIcon
            activeClass={activeClass}
            setActiveClass={setActiveClass}
            path={btn.path}
            text={btn.text}
            icon={btn.icon}
            subtext={btn.subtext}
          />
        ))}
      </div>
    );
}

export default SettingsMenu;
