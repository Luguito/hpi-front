export default function Button({ children, onClick }: { children: React.ReactNode, onClick?: any }) {
    return (
        <button className="bg-gradient-to-r from-hpi-blue-dark to-[#001737] rounded-full px-5 py-2 mt-4 
        hover:bg-gradient-to-r hover:from-hpi-blue-light hover:to-hpi-blue-dark hover:font-[17px]
        active:bg-gradient-to-r active:from-hpi-blue-light active:to-hpi-celeste transition" onClick={onClick}>
            {children}
        </button>
    )
}