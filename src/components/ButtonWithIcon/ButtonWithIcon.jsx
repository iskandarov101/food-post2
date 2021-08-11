import { Link } from 'react-router-dom'

const ButtonWithIcon = ({
    icon,
    btnClass,
    text,
    subtext,
    path,
    setActiveClass,
    activeClass
  }) => {
    return (
      <Link 
      to={path} 
      className={`${btnClass} ${activeClass === text ? 'active' : ' ' }`}
      onClick={() => setActiveClass(text)}
      >
        {icon}
        <div className = {
          `text-wrapper`
        } >
          <h3>{text}</h3>
          <span>{subtext}</span>
        </div>
      </Link>
    );
}

export default ButtonWithIcon;
