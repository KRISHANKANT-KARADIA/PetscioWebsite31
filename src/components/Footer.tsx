import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import logo from "../assets/logoo2.jpg";
import Divider from '../assets/Divider.svg'

export default function Footer() {
    return (
        <footer className="bg-white text-black lg:py-30 py-15 border-t border-gray-100">
            <div className="max-w-5xl mx-auto px-2">
                {/* Footer Columns */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8 text-start mb-8">

                    {/* COMPANY */}
                    <div>
                        <h6 className="footer_text">
                            COMPANY
                            <img src={Divider} alt="" className="w-14 py-4" />
                        </h6>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            <li><a href="About" className="hover:text-purple-600 transition-colors footer_text_P">About Us</a></li>
                            <li><a href="WhyPetscio" className="hover:text-purple-600 transition-colors footer_text_P">Why Petscio?</a></li>
                            <li><a href="Blog" className="hover:text-purple-600 transition-colors footer_text_P">Blog</a></li>
                        </ul>
                    </div>

                    {/* SUPPORT */}
                    <div>
                        <h6 className="footer_text">
                            SUPPORT
                            <img src={Divider} alt="" className="w-14 py-4" />
                        </h6>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            <li><a href="Faq" className="hover:text-purple-600 transition-colors footer_text_P">FAQs</a></li>
                            <li><a href="PrivacyPolicyTC" className="hover:text-purple-600 transition-colors footer_text_P">Privacy Policy</a></li>
                            <li><a href="PrivacyPolicyTC" className="hover:text-purple-600 transition-colors footer_text_P">Terms & Conditions</a></li>
                        </ul>
                    </div>

                    {/* CONTACT US */}
                    <div>
                        <h6 className="footer_text">
                            CONTACT US
                            <img src={Divider} alt="" className="w-14 py-4" />
                        </h6>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>
                                <a
                                    href="mailto:hello@example.com"
                                    className="hover:text-purple-600 transition-colors footer_text_P"
                                >
                                    hello@example.com
                                </a>
                            </li>
                            <li className="text-gray-500 footer_text_P">(405) 555-0128</li>
                            <li className="text-gray-500 footer_text_P">(252) 555-0126</li>
                        </ul>
                    </div>

                    {/* FOLLOW US */}
                    <div>
                        <h6 className="footer_text">
                            FOLLOW US
                            <img src={Divider} alt="" className="w-14 py-4" />
                        </h6>
                        <div className="flex items-center gap-4 text-lg ">
                            <a href="#" className="text-[#fbbc05] hover:opacity-70 transition ">
                                <FaInstagram className="mb-3" />
                            </a>
                            <a href="#" className="text-[#fbbc05] hover:opacity-70 transition ">
                                <FaFacebookF className="mb-3" />
                            </a>
                            <a href="#" className="text-[#fbbc05] hover:opacity-70 transition ">
                                <FaTwitter className="mb-3" />
                            </a>
                        </div>
                    </div>
                </div>



                {/* Bottom Section */}
                <div className="flex flex-col items-center text-center mt-15">
                    <p className="text-[#00000080] text-[15] font-[400] text-sm mb-5">
                        Copyright © 2022. All rights reserved.
                    </p>
                    <div className="items-center justify-center ">

                        <a href="#">
                            <img src={logo} alt="Petscio Logo" className="w-35 h-13" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
