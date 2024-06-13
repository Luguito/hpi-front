import Image from "next/image";
import Button from "../button/button";
import Text, { H3 } from "../text/text";
import Logo from '../../../../public/logo-hutchison-en.svg'
import Link from "next/link";

function Footer() {
    const footOptions = ['CONTACT US', 'PRIVACY POLICY', 'TERMS & CONDITIONS'];
    const footerOptions = [
        {
            name: "CONTACT US",
            url: "https://hutchisonports.com/en/News-And-Media/Media-Contacts.html"
        },
        {
            name: "PRIVACY POLICY",
            url: "https://hutchisonports.com/en/Others/Privacy-Policy.html"
        },
        {
            name: "TERMS & CONDITIONS",
            url: "https://hutchisonports.com/en/Others/Terms-And-Conditions.html"
        }
    ]
    return (
        <>
            {/* Contact ... section */}
            <footer className="snap-center">
                {/* <section className="text-center mb-24">
                    <H3 color="text-gradient font-bold mx-24 2xl:mx-56">
                        EXPLORE HOW WE CAN TRANSFORM CONTAINER
                        TERMINAL OPERATIONS TOGETHER
                    </H3>
                    <article>
                        <Button>
                            <Text type="bold" classes="text-[16px] text-hpi-white">
                                <a href="mailto:grp_ops_product_management_team@hutchisonports.com">Contact Us</a>
                            </Text>
                        </Button>
                    </article>
                </section> */}
                <nav className="
                flex flex-col items-center justify-between
                lg:flex-row bg-hpi-blue-sea py-14 px-24 xl:px-14
                ">
                    <section>
                        <article>
                            <Image src={Logo} alt="Logo" />
                        </article>
                    </section>
                    <section className="
                    flex gap-10 flex-col items-center
                    md:flex-row md:items-start
                    ">
                        <article className="
                        flex gap-10 flex-col-reverse items-center 
                        md:flex-row md:items-start
                        ">
                            {
                                footerOptions.map((option, key) => (
                                    <Link href={option.url} key={key} target="_blank">
                                        <Text type="medium" classes="text-[14px] text-hpi-white">
                                            {option.name}
                                        </Text>
                                    </Link>
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