import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-[#0A2342] text-white py-12">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Features Menu */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 border-b border-dashed inline-block pb-2">Features menu</h4>
                        <ul className="space-y-2" style={{ paddingLeft: "0PX" }}>
                            <li style={{ color: "white", textDecoration: "none" }}>
                                <a href="/blog" style={{ textDecoration: "none", color: "inherit" }}>Blog</a></li>

                            <li style={{ color: "white", textDecoration: "none" }}>
                                <a href="/services" style={{ textDecoration: "none", color: "inherit" }}>Services</a></li>

                            <li style={{ color: "white", textDecoration: "none" }}>
                                <a href="/hire-developer" style={{ textDecoration: "none", color: "inherit" }}>Hire Developer</a></li>

                            <li style={{ color: "white", textDecoration: "none" }}>
                                <a href="/career" style={{ textDecoration: "none", color: "inherit" }}>Career</a></li>

                            <li style={{ color: "white", textDecoration: "none" }}>
                                <a href="/who-we-are" style={{ textDecoration: "none", color: "inherit" }} >Who We Are</a></li>
                        </ul>
                    </div>

                    {/* Service Menu */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 border-b border-dashed pb-2 inline-block">Service Menu</h4>
                        <div className="grid grid-cols-2 gap-2 text-left">
                            <div>
                                <ul className="space-y-2" style={{ paddingLeft: "0px" }}>
                                    <li style={{ color: "white", textDecoration: "none" }}>
                                        <a href="/web-development" style={{ textDecoration: "none", color: "inherit" }}>Web Development</a></li>
                                    <li style={{ color: "white", textDecoration: "none" }}>
                                        <a href="/mobile-app-development" style={{ textDecoration: "none", color: "inherit" }} >Mobile App Development</a></li>
                                    <li style={{ color: "white", textDecoration: "none" }}>
                                        <a href="/game-development" style={{ textDecoration: "none", color: "inherit" }} >Game Development</a></li>
                                    <li style={{ color: "white", textDecoration: "none" }}>
                                        <a href="/UI/UX Design" style={{ textDecoration: "none", color: "inherit" }} >UI/UX Design</a></li>
                                    <li style={{ color: "white", textDecoration: "none" }}>
                                        <a href="/Graphics Design" style={{ textDecoration: "none", color: "inherit" }} >Graphics Design</a></li>
                                </ul>
                            </div>
                            <div>
                                <ul className="space-y-2 text-left w-full">
                                    <li style={{ color: "white", textDecoration: "none" }}>
                                        <a href="/DevOps" style={{ textDecoration: "none", color: "inherit" }}>
                                            DevOps</a></li>
                                    <li style={{ color: "white", textDecoration: "none" }}>
                                        <a href="/E-Commerce" style={{ textDecoration: "none", color: "inherit" }}>
                                            E-Commerce</a></li>
                                    <li style={{ color: "white", textDecoration: "none" }}>
                                        <a href="/Digital Marketing" style={{ textDecoration: "none", color: "inherit" }}>
                                            Digital Marketing</a></li>
                                            <li style={{ color: "white", textDecoration: "none" }}>
                                        <a href="Cloud Computing" style={{ textDecoration: "none", color: "inherit" }}>
                                        Cloud Computing</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h4 className="text-lg font-semibold mb-2 border-b border-dashed inline-block pb-2">Contact Information</h4>
                        <div className="space-y-3">
                            <div className="flex items-start">
                                <img src="/images/location.svg" alt="Location Icon" className="h-5 w-5 mr-2 text-orange-500" />

                                <span>904, Skywalk The Elements, Jagatpur Rd, near BSNL Office, off Sarkhej - Gandhinagar Highway, Jagatpur, Ahmedabad, Gujarat 382470</span><br />

                            </div>
                            <div className="flex items-center">
                                <img src="/images/call.webp" alt="call-svg" className='h-5 w-5 mr-2 text-orange-500' />
                                <div>
                                    <div>HR - +91 63527 25452</div>
                                    <div>Sales - +91 85117 46476</div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <img src="/images/mail.svg" alt="mail-svg" className='h-5 w-5 mr-2 text-orange-500' />
                                <a href="mailto:sales@tecoreng.com" className="hover:text-orange-500">sales@tecoreng.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 mt-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pb-2">
                    <div className="flex flex-col items-center md:flex-row md:items-center w-full">
                        <div className="mr-4">
                            <img src="/images/logo.svg" alt="tecoreng-logo" className="w-40 h-40" />
                        </div>

                        <div className="text-md text-white font-bold text-center w-full">
                            Copyright © 2025 Tecoreng
                        </div>
                    </div>

                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="text-white hover:text-orange-500">
                            <img src="/images/x.svg" alt="Ximage" />
                        </a>
                        <a href="#" className="text-white hover:text-orange-500">
                            <img src="/images/fb.svg" alt="FBimage" />
                        </a>
                        <a href="#" className="text-white hover:text-orange-500">
                            <img src="/images/li.svg" alt="LIimage" />
                        </a>
                        <a href="#" className="text-white hover:text-orange-500">
                            <img src="/images/pin.svg" alt="Pinimage" />
                        </a>
                        <a href="#" className="text-white hover:text-orange-500">
                            <img src="/images/be.svg" alt="Beimage" />
                        </a>
                        <a href="#" className="text-white hover:text-orange-500">
                            <img src="/images/bf.svg" alt="Bfimage" />
                        </a>
                    </div>
                </div>


            </footer>
        </div>
    );
};

export default Footer;