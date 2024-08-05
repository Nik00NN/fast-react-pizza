import { useSelector } from "react-redux";

const Alex = () => {
  const username = useSelector((state) => state.user.username);

  if (!username) return null;
  return (
    <div className="text-sm font-semibold sm:hidden md:block">{username}</div>
  );
};

export default Alex;
