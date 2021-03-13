import React from "react"
import SEO from "./SEO"
import { Link } from "gatsby"
import "@fontsource/dancing-script"
import "@fontsource/raleway";
import "@fontsource/raleway/100.css";

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="flex flex-col min-h-screen bg-gray-200 font-default">
        <header className="p-4 bg-primary text-white font-semibold flex items-center justify-center">
          <Link to="/" className='header__link'>Home</Link>
          <Link to="/ceremony-afterparty/" className='header__link'>Ceremony &amp; Afterparty</Link>
          <Link to="/accomodation/" className='header__link'>Where to stay</Link>
          <Link to="/gifts/" className='header__link'>Gifts</Link>
          <Link to="/Gifts/" className='header__link'>RSVP</Link>
        </header>
        {children}
        <footer className="py-2 text-center text-gray-600 text-xs">
          &copy; Melanie Nolan 2020
        </footer>
      </div>
    </>
  )
}

export default Layout
