import Image from "next/image";
import Button from "../button/button";
import Text, { H3 } from "../text/text";
import Logo from '../../../../public/logo-hutchison-en.svg'

function Footer() {
    const footOptions = ['CONTACT US', 'PRIVACY POLICY', 'TERMS & CONDITIONS'];

    return (
        <>
            {/* Contact ... section */}
            <footer className="snap-center">
                <section className="text-center mb-24">
                    <H3 color="text-gradient font-bold">
                        EXPLORE HOW WE CAN TRANSFORM CONTAINER <br />
                        TERMINAL OPERATIONS TOGETHER
                    </H3>
                    <article>
                        <Button>
                            <Text type="bold" classes="text-[16px] text-hpi-white">
                                <a href="mailto:grp_ops_product_management_team@hutchisonports.com">Contact Us</a>
                            </Text>
                        </Button>
                    </article>
                </section>
                <nav className="
                flex items-center justify-between bg-hpi-blue-sea py-14 px-24
                ">
                    <section className="xs:hidden">
                        <article>
                            <Image src={Logo} alt="Logo" />
                        </article>
                    </section>
                    <section className="
                    flex gap-10
                    xs:flex-col xs:items-center
                    ">
                        <article className="
                        flex gap-10
                        xs:flex-col-reverse xs:items-center 
                        ">
                            {
                                footOptions.map((option, key) => (
                                    <Text type="medium" classes="text-[14px] text-hpi-white" key={key}>
                                        {option}
                                    </Text>
                                ))
                            }
                        </article>
                        <article>
                            <Text type="medium" classes="text-[14px] text-hpi-white">
                                2024 HUTCHISON PORT HOLDINGS LIMITED. ALL RIGHTS RESERVED.
                            </Text>
                        </article>
                    </section>
                </nav>
            </footer>
        </>
    );
}


export default Footer;