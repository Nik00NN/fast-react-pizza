import { Link } from "react-router-dom";

const base =
  "inline-block rounded-md bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wider text-stone-800 transition-colors duration-500 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-stone-500";

const styles = {
  primary: base + "px-4 py-3 md:px-6 md:py-4",
  small: base + "py-2 px-3 md:px-5 md:py-2.5 text-xs",
  secondary:
    "inline-block px-4 py-2.5 md:px-6 md:py-3.5 rounded-md border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-500 hover:bg-stone-500 hover:text-stone-900 focus:outline-none ",
  round: base + "py-1 px-2 md:px-4 md:py-2 text-sm",
};
const Button = ({ children, disabled, to, type, onClick }) => {
  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
};

export default Button;
