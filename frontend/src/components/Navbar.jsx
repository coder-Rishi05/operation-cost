import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePopup } from "../context/PopupContext";

const treatments = [
  { label: "Knee Replacement", path: "/treatment/knee-replacement" },
  { label: "Carpal Tunnel Syndrome", path: "/treatment/carpal-tunnel" },
  { label: "ACL Tear Treatment", path: "/treatment/acl-tear" },
  { label: "Meniscus Tear Treatment", path: "/treatment/meniscus-tear" },
  { label: "Hip Replacement Surgery", path: "/treatment/hip-replacement" },
  { label: "Spine Surgery", path: "/treatment/spine-surgery" },
  { label: "Shoulder Dislocation", path: "/treatment/shoulder-dislocation" },
  { label: "Shoulder Replacement", path: "/treatment/shoulder-replacement" },
  { label: "Rotator Cuff Repair", path: "/treatment/rotator-cuff-repair" },
  { label: "Arthroscopy Surgery", path: "/treatment/arthroscopy" },
  { label: "Knee Arthroscopy", path: "/treatment/knee-arthroscopy" },
  { label: "Shoulder Arthroscopy", path: "/treatment/shoulder-arthroscopy" },
  {
    label: "Total Knee Replacement",
    path: "/treatment/total-knee-replacement",
  },
];

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Doctors", path: "/doctors" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`group relative py-2 text-sm lg:text-base transition-colors duration-200 ${
        isActive
          ? "text-blue-600 font-medium"
          : "text-gray-700 hover:text-blue-600"
      }`}
    >
      {children}

      <span
        className={`absolute left-0 -bottom-0.5 h-[2px] bg-blue-600 transition-all duration-300 ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
};

const Navbar = () => {
  const { openPopup } = usePopup();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);

  const handleMobileLinkClick = () => {
    setMobileOpen(false);
    setMobileTreatmentsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}

        <Link to="/" className="flex items-center gap-3 shrink-0">
          {/* Uncomment if using logo */}

          {/* <img
            src="/Logos/optrans.png"
            alt="Operation Cost"
            className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 object-contain"
          /> */}

          <div className="leading-none">
            <h1 className="font-bold text-lg sm:text-xl lg:text-3xl">
              <span className="text-blue-600">Operation</span>{" "}
              <span className="text-cyan-500">Cost</span>
            </h1>

            <p className="hidden lg:block text-[11px] tracking-[0.35em] uppercase text-gray-500 mt-1">
              Compare • Choose • Care
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-7">
          <span className="group">
            <NavLink to="/">Home</NavLink>
          </span>

          {/* Treatments Dropdown */}

          <div className="relative group py-2">
            <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition">
              Treatments
              <ChevronDown
                size={16}
                className="transition-transform duration-300 group-hover:rotate-180"
              />
            </button>

            <span className="absolute left-0 -bottom-0.5 h-[2px] bg-blue-600 w-0 group-hover:w-full transition-all duration-300" />

            <div
              className="absolute left-0 top-full pt-2 invisible opacity-0 translate-y-2
              group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
              transition-all duration-200"
            >
              <div className="w-64 rounded-xl bg-white shadow-xl ring-1 ring-black/5 py-2">
                {treatments.map((t) => (
                  <Link
                    key={t.path}
                    to={t.path}
                    className="block px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    {t.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {navLinks.slice(1).map((link) => (
            <span key={link.path} className="group">
              <NavLink to={link.path}>{link.label}</NavLink>
            </span>
          ))}

          <button
            onClick={openPopup}
            className="bg-blue-600 text-white text-sm lg:text-base px-5 py-3 rounded-xl hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile / Tablet Menu Button */}
        <button
          className="lg:hidden text-gray-700 hover:text-blue-600 transition-colors"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile / Tablet Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 flex flex-col gap-1 border-t border-gray-100 bg-white">
          <Link
            to="/"
            onClick={handleMobileLinkClick}
            className="py-3 text-gray-700 hover:text-blue-600 transition-colors border-b border-gray-100"
          >
            Home
          </Link>

          {/* Treatments Accordion */}
          <button
            onClick={() => setMobileTreatmentsOpen((prev) => !prev)}
            className="flex items-center justify-between py-3 text-gray-700 hover:text-blue-600 transition-colors border-b border-gray-100"
          >
            Treatments
            <ChevronDown
              size={18}
              className={`transition-transform duration-300 ${
                mobileTreatmentsOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              mobileTreatmentsOpen ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            <div className="flex flex-col pl-4">
              {treatments.map((t) => (
                <Link
                  key={t.path}
                  to={t.path}
                  onClick={handleMobileLinkClick}
                  className="py-2.5 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {t.label}
                </Link>
              ))}
            </div>
          </div>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={handleMobileLinkClick}
              className="py-3 text-gray-700 hover:text-blue-600 transition-colors border-b border-gray-100"
            >
              {link.label}
            </Link>
          ))}

          <button
            onClick={() => {
              openPopup();
              handleMobileLinkClick();
            }}
            className="mt-5 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-all duration-200"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
