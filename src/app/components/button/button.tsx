export default function Button({ children, onClick }: { children: React.ReactNode, onClick?: any }) {
    return (
        <button className="bg-gradient-to-b from-hpi-blue-dark to-[#001737] rounded-full px-5 py-2 mt-4 
        hover:bg-gradient-to-b hover:from-hpi-blue-light hover:to-hpi-blue-dark 
        active:bg-gradient-to-b active:from-hpi-blue-light active:to-hpi-celeste" onClick={onClick}>
            {children}
        </button>
    )
}