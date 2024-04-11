export default function Button({ children }: { children: React.ReactNode }) {
    return (
        <button className="bg-gradient-to-b from-hpi-blue-dark to-[#001737] rounded-full px-12 py-4 mt-4 
        hover:bg-gradient-to-b hover:from-hpi-blue-light hover:to-hpi-blue-dark 
        active:bg-gradient-to-b active:from-hpi-blue-light active:to-hpi-celeste">
            {children}
        </button>
    )
}