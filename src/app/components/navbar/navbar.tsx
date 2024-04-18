'use client';

import Text from "../text/text";
import Image from 'next/image';
import profilePic from '../../../../public/hp-logo.svg';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from "react";

export default function Navbar() {
    const ref = useRef(null);
    const [isTop, setTop] = useState(false);

    // const navOptions = ['HOME', 'AUTOMATION', 'SHARED SERVICES', 'DIGITAL SOLUTIONS', 'CONTACT US'];
    const navOptions = [
        { name: 'HOME', link: '/' },
        { name: 'AUTOMATION', link: '/' },
        { name: 'SHARED SERVICES', link: '/shared-services' },
        { name: 'DIGITAL SOLUTIONS', link: '/' },
        { name: 'CONTACT US', link: '/' },
    ]

    useEffect(() => {

        if (ref.current) {
            window.addEventListener('scroll', () => {
                if (window.scrollY === 0) {
                    // @ts-ignore
                    ref.current.classList.remove('py-4')
                    // @ts-ignore
                    ref.current.classList.add('py-8')
                    setTop(true)
                } else {
                    // @ts-ignore
                    ref.current.classList.remove('py-8')
                    // @ts-ignore
                    ref.current.classList.add('py-4')
                    setTop(false)
                }
            })
        }
    }, []);

    return (
        <nav className="flex items-center justify-around bg-hpi-white py-8 px-24 snap-end fixed w-full z-10 shadow-md transition-all" ref={ref}>
            <section>
                <article>
                    <Image src={profilePic} alt="Hutchison Port" width="200" height="20" priority></Image>
                </article>
            </section>
            <section className="flex gap-10">
                <article className="flex gap-10">
                    {
                        navOptions.map((option, key) => (
                            <Link href={option.link} key={key}>
                                <Text type="medium" classes="text-[14px] text-hpi-blue-dark cursor-pointer">
                                    {option.name}
                                </Text>
                            </Link>
                        ))
                    }
                </article>
                <article>
                    {/* <Text type="medium" classes="text-[14px] text-hpi-blue-dark">EN</Text> */}
                </article>
            </section>
        </nav>
    );
}