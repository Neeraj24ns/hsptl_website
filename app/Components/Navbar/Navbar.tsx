

export default function Navbar() {
    return (
        <div>

            <div className="flex items-center justify-between px-[8%] lg:px-[12%] pb-2 lg:pb-0 text-gray-700">
                 {/*logo*/}
                    <link href="/" className="text-4xl font-bold Merienda text-black">
                    Hospital<span className="text-[var(--prim-color)]">Website.</span>
                   </link>
            </div>
        </div>
    );
}