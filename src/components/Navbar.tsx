import { useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logoo2.jpg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    // useEffect(() => {
    //     const handleClickOutside = (event) => {
    //         if (
    //             menuRef.current &&
    //             !menuRef.current.contains(event.target) &&
    //             buttonRef.current &&
    //             !buttonRef.current.contains(event.target)
    //         ) {
    //             setIsOpen(false);
    //         }
    //     };

    //     if (isOpen) {
    //         document.addEventListener("mousedown", handleClickOutside);
    //     } else {
    //         document.removeEventListener("mousedown", handleClickOutside);
    //     }

    //     return () => {
    //         document.removeEventListener("mousedown", handleClickOutside);
    //     };
    // }, [isOpen]);

    return (
        // <nav className="bg-white fixed w-full top-0 left-0 z-50">
        <nav className="bg-white fixed w-full top-0 left-0 z-50 shadow-[0_6px_15px_rgba(119,65,234,0.2)]">
            <div className="container mx-auto flex items-center justify-between px-2 py-5 xl:px-40">


                {/* Logo */}
                <div className="flex items-center">
                    <a href="#">
                        <img src={logo} alt="Petscio Logo" className="w-28 h-10" />
                    </a>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex space-x-10">
                    {[
                        { name: "Home", path: "/Home" },
                        { name: "Social Media", path: "/Media" },
                        { name: "About Us", path: "/About" },
                        { name: "Why Petscio?", path: "/WhyPetscio" },
                        { name: "Blog", path: "/Blog" },
                        { name: "Contact Us", path: "/ContactUs" },
                        // { name: "Faq", path: "/Faq" },
                        // { name: "Privacy Policy TC", path: "/PrivacyPolicyTC" },



                    ].map((item) => (
                        <li className="navbar_text" key={item.path}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    isActive ? "navbar_text_a active" : "navbar_text_a"
                                }
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Mobile Hamburger Button */}
                <button
                    ref={buttonRef}
                    className="lg:hidden text-gray-700 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div ref={menuRef} className="lg:hidden bg-white shadow-md">
                    <ul className="flex flex-col items-center space-y-8 pb-10">
                        {[
                            { name: "Home", path: "/Home" },
                            { name: "Social Media", path: "/Media" },
                            { name: "About Us", path: "/About" },
                            { name: "Why Petscio?", path: "/WhyPetscio" },
                            { name: "Blog", path: "/Blog" },
                            { name: "Contact Us", path: "/ContactUs" },
                            { name: "Faq", path: "/Faq" },
                            { name: "Privacy Policy TC", path: "/PrivacyPolicyTC" },

                        ].map((item) => (
                            <li className="navbar_text" key={item.path}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        isActive ? "navbar_text_a active" : "navbar_text_a"
                                    }
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
