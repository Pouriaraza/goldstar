"use client"
import Link from 'next/link';
import "./navbar.scss"
import HeaderNavLink from './HeaderNavLink';
import { useState, useEffect, useRef } from 'react';
import Mobilemenu from './Mobilemenu';
import Image from 'next/image';
import logo from "../../public/Images/logo/logo-v1.png"


const menuItems = [
    { label: `Home`, url: `/#` },
    { label: `About us`, url: `/#` },
    { label: `Contact us`, url: `/#` },
    { label: `Classes`, url: `/#` },
    { label: `FAQ`, url: `/#` }

];

const Navbar = () => {

    return (
        <header className='navbar'>
            <Mobilemenu />
            <section className='logo'>
                <Image src={logo} alt='logo' />
            </section>
            <nav className='desktopmenu'>
                <nav>
                    <ul>
                        {menuItems.map(({ url, label }, index) => (
                            <HeaderNavLink key={index} href={url}>{label}</HeaderNavLink>
                        ))}
                        {/* <li><Link href="#">Home</Link></li>
                        <li><Link href="#">About Us</Link></li>
                        <li><Link href="#">Contact Us</Link></li>
                        <li><Link href="#">Classes</Link></li>
                        <li><Link href="#">FAQ</Link></li> */}
                    </ul>
                </nav>
            </nav>


        </header>
    );
};


export default Navbar;