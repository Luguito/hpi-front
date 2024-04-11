import Image from "next/image";
import Button from "../button/button";
import Text from "../text/text";
import Logo from '../../../../public/logo-hutchison-en.svg'

export default function Footer() {
    const footOptions = ['CONTACT US', 'PRIVACY POLICY', 'TERMS & CONDITIONS'];

    return (
        <>
            {/* Contact ... section */}
            <footer className="snap-center">
                <section className="text-center my-48">
                    <article className="bg-gradient-to-r from-hpi-blue-dark via-hpi-blue-dark to-[#000102] text-transparent bg-clip-text">
                        <Text type="bold" classes="text-[60px]">
                            Explore How We Can Transform <br />
                            Container Terminal Operations Together
                        </Text>
                    </article>
                    <article className="mt-16">
                        <Button>
                            <Text type="bold" classes="text-[30px] text-hpi-white">
                                Contact Now
                            </Text>
                        </Button>
                    </article>
                </section>
                <nav className="flex justify-between bg-hpi-blue-sea py-14 px-24">
                    <section>
                        <article>
                            <Image src={Logo} alt="Logo" />
                        </article>
                    </section>
                    <section className="flex gap-10">
                        <article className="flex gap-10">
                            {
                                footOptions.map((option, key) => (
                                    <Text type="medium" classes="text-[16px] text-hpi-white" key={key}>
                                        {option}
                                    </Text>
                                ))
                            }
                        </article>
                        <article>
                            <Text type="medium" classes="text-[16px] text-hpi-white">
                                2024 HUTCHISON PORT HOLDINGS LIMITED. ALL RIGHTS RESERVED.
                            </Text>
                        </article>
                    </section>
                </nav>
            </footer>
        </>
    );
}