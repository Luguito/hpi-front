export default function NavBar() {
    const navOptions = ['HOME', 'AUTOMATION', 'SHARED SERVICES', 'DIGITAL SOLUTIONS', 'CONTACT US'];

    return (
        <nav className="flex justify-between bg-hpi-white py-14">
            <section>
                <article>
                    Hutchison Port
                </article>
            </section>
            <section className="flex gap-10">
                <article className="flex gap-10">
                    {
                        navOptions.map((option, key) =>  (
                            <p className="text-hpi-blue-dark" key={key}>
                                {option}
                            </p>
                        ))
                    }
                </article>
                <article>
                    <p className="text-hpi-blue-dark">EN</p>
                </article>
            </section>
        </nav>
    );
}