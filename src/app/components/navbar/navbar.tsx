import Text from "../text/text";
import Image from 'next/image';
import profilePic from '../../../../public/hp-logo.svg';
import Link from 'next/link';

export default function Navbar() {
    // const navOptions = ['HOME', 'AUTOMATION', 'SHARED SERVICES', 'DIGITAL SOLUTIONS', 'CONTACT US'];
    const navOptions = [
        { name: 'HOME', link: '/'},
        { name: 'AUTOMATION', link: '/'},
        { name: 'SHARED SERVICES', link: '/shared-services'},
        { name: 'DIGITAL SOLUTIONS', link: '/'},
        { name: 'CONTACT US', link: '/'},
    ]
    return (
        <nav className="flex justify-between bg-hpi-white py-14 px-24">
            <section>
                <article>
                    <Image src={profilePic} alt="Hutchison Port" width="250" height="20" priority></Image>
                </article>
            </section>
            <section className="flex gap-10">
                <article className="flex gap-10">
                    {
                        navOptions.map((option, key) => (
                            <Link href={option.link} key={key}>
                                <Text type="medium" classes="text-[20px] text-hpi-blue-dark cursor-pointer">
                                    {option.name}
                                </Text>
                            </Link>
                        ))
                    }
                </article>
                <article>
                    <Text type="medium" classes="text-[20px] text-hpi-blue-dark">EN</Text>
                </article>
            </section>
        </nav>
    );
}