'use client';

import Text from "../text/text";
import Image from 'next/image';
import profilePic from '../../../../public/hp-logo.svg';
import menu from '../../../../public/menu.svg';
import Link from 'next/link';
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const ref = useRef(null);
    const [isMenu, setMenu] = useState(false);
    const currentPath = usePathname();
    // const navOptions = ['HOME', 'AUTOMATION', 'SHARED SERVICES', 'DIGITAL SOLUTIONS', 'CONTACT US'];
    const navOptions = [
        { name: 'HOME', link: '/' },
        { name: 'AUTOMATION', link: '/automation' },
        { name: 'SHARED SERVICES', link: '/shared-services' },
        { name: 'DIGITAL SOLUTIONS', link: '/digital-solutions' },
    ]

    useEffect(() => {
        if (ref.current) {
            window.addEventListener('scroll', () => {
                if (window.scrollY === 0) {
                    // @ts-ignore
                    ref.current && ref.current.classList.remove('py-4')
                    // @ts-ignore
                    ref.current && ref.current.classList.add('md:py-8')
                    // @ts-ignore
                    ref.current && ref.current.classList.add('py-4')
                    // setTop(true)
                } else {
                    // @ts-ignore
                    ref.current && ref.current.classList.remove('md:py-8')
                    // @ts-ignore
                    ref.current && ref.current.classList.remove('py-4')
                    // @ts-ignore
                    ref.current && ref.current.classList.add('py-4')
                    // setTop(false)
                }
            })
        }
    }, []);

    return (
        <nav className="
        flex items-center bg-hpi-white fixed w-full z-20 shadow-md transition-all justify-between px-5 py-4
        md:py-8 md:px-24 md:justify-around
        " 
        ref={ref}>
            <section>
                <article>
                    <Image src={profilePic} alt="Hutchison Port" width="200" height="20" priority className="
                    w-[100px] md:w-auto xl:w-40
                    "></Image>
                </article>
            </section>
            <section className="
            gap-10 hidden
            md:flex
            ">
                <article className="flex gap-10">
                    {
                        navOptions.map((option, key) => (
                            <Link href={option.link} key={key}>
                                <p className={`text-[14px] text-hpi-blue-dark cursor-pointer ${currentPath == option.link ? 'font-bold' : 'font-medium'}`}>
                                    {option.name}
                                </p>
                            </Link>
                        ))
                    }
                    {/* <p className={`text-[14px] text-hpi-blue-dark cursor-pointer font-medium`}>
                        CONTACT US
                    </p> */}
                </article>
                <article>
                    {/* <Text type="medium" classes="text-[14px] text-hpi-blue-dark">EN</Text> */}
                </article>
            </section>
            <section className="flex relative md:hidden">
                <Image src={menu} alt="Menu" onClick={() => setMenu(!isMenu)} className="cursor-pointer" />
                {
                    isMenu &&
                    <ul className="absolute bg-hpi-white top-6 -right-5 rounded-br-2xl rounded-bl-2xl w-48 shadow">
                        {
                            navOptions.map((option, key) => (
                                <Link href={option.link} key={key} className="p-1" onClick={() => setMenu(false)}>
                                    <p className={`text-[14px] text-hpi-blue-dark cursor-pointer ${currentPath == option.link ? 'font-bold' : 'font-medium'}`}>
                                        {option.name}
                                    </p>
                                </Link>
                            ))
                        }
                    </ul>
                }
            </section>
        </nav>
    );
}