import { Link, NavLink, useNavigate } from "react-router";
import { currentUser } from "../../data/mockData";
import Avatar from "../../components/Avatar";
import { HomeIcon, UserIcon, LogoutIcon } from "../../components/Icons";
import { Constants } from "../../constants/constants";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `flex flex-col items-center gap-0.5 border-b-2 px-3 py-1 text-xs font-medium transition ${
    isActive
      ? "border-blue-600 text-blue-600"
      : "border-transparent text-slate-500 hover:text-slate-800"
  }`;

export default function Navbar() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem(Constants.TOKEN);
    localStorage.removeItem(Constants.USER);
    navigate("/login");
  }

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-md bg-blue-600 text-lg font-bold text-white">
            L
          </span>
          <span className="hidden text-lg font-bold text-slate-900 sm:block">
            Linked Posts
          </span>
        </Link>

        <input
          type="search"
          placeholder="Search"
          className="mx-4 hidden w-64 rounded-md bg-slate-100 px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 md:block"
        />

        <div className="flex items-center">
          <NavLink to="/" end className={linkClass}>
            <HomeIcon />
            Home
          </NavLink>
          <NavLink to="/profile" className={linkClass}>
            <UserIcon />
            Profile
          </NavLink>
          <button
            type="button"
            onClick={logout}
            className="flex cursor-pointer flex-col items-center gap-0.5 px-3 py-1 text-xs font-medium text-slate-500 hover:text-red-600"
          >
            <LogoutIcon />
            Logout
          </button>
          <div className="ml-2 hidden sm:block">
            <Avatar
              name={currentUser.name}
              photo={currentUser.photo}
              size="sm"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
