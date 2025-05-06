import {
    FaYoutube,
    FaInstagram,
    FaXTwitter,
    FaLinkedinIn,
  } from 'react-icons/fa6'
  
  export default function Footer() {
    return (
      <footer className="bg-[#f4ecec] text-[#231f20] px-2 pt-6 pb-6">
        {/* Logo + Social + Copyright */}
        <div className="mt-12 max-w-7xl mx-auto flex flex-col flex-row justify-between items-center gap-6 border-t border-[#d5c9c9] pt-6">
          {/* Logo */}
          <div className="text-3xl font-bold">ravie</div>
  
         
  
          {/* Copyright */}
          <div className="text-sm text-center md:text-right">
            2025 © Ravie LLC All Rights Reserved
          </div>
           {/* Social Icons */}
           <div className="flex items-center gap-6 text-2xl text-[#231f20]">
            <a href="#" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="X (Twitter)">
              <FaXTwitter />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </footer>
    )
  }
  