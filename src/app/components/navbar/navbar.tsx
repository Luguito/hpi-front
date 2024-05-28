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
    const [isTop, setTop] = useState(false);
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
                    ref.current.classList.remove('py-4')
                    // @ts-ignore
                    ref.current.classList.add('py-8')
                    // @ts-ignore
                    ref.current.classList.add('xs:py-4')
                    setTop(true)
                } else {
                    // @ts-ignore
                    ref.current.classList.remove('py-8')
                    // @ts-ignore
                    ref.current.classList.remove('xs:py-4')
                    // @ts-ignore
                    ref.current.classList.add('py-4')
                    setTop(false)
                }
            })
        }
    }, []);

    return (
        <nav className="flex items-center justify-around bg-hpi-white py-8 px-24 snap-end fixed w-full z-10 shadow-md transition-all 
        xs:justify-between xs:px-5" ref={ref}>
            <section>
                <article>
                    <Image src={profilePic} alt="Hutchison Port" width="200" height="20" priority className="xs:w-[100px]"></Image>
                </article>
            </section>
            <section className="gap-10 
            md:flex
            xs:hidden">
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
            <section className="xs:flex md:hidden">
                <Image src={menu} alt="Menu" />
            </section>
        </nav>
    );
}