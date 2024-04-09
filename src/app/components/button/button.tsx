export default function Button({ children }: { children: React.ReactNode }) {
    return (
        <button className="bg-gradient-to-b from-hpi-blue-dark to-[#001737] rounded-full px-12 py-4 mt-4">
            {children}
        </button>
    )
}