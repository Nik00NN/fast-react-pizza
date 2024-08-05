import { Link, useNavigate } from "react-router-dom";

const className = "text-sm text-stone-500 hover:text-stone-900 hover:underline";

const LinkButton = ({ children, to }) => {
  const navigate = useNavigate();
  if (to === "-1")
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

export default LinkButton;
