export default function RootNews({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className="bg-hpi-white">
            {children}
        </section>
    );
}

