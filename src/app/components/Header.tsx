import React from "react"
import Link from "next/link"
import { FaShoppingCart } from "react-icons/fa";




const Header = () => {
    return (
       <header className="header">
        <h1 className="logo">Rizwan Clothes World</h1>
        <nav>
            <Link href="/">Home</Link>
            <Link href="about">About</Link>
            <Link href="cloth">Cloth</Link>
            <Link href="contact">Contact Us</Link>
            <FaShoppingCart style={{color:"white", fontSize:"20px"}}/>
        </nav>
       </header>
    )
}
export default Header
