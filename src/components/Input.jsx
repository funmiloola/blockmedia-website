export default function Input({ label, input, placeholder}) {
    return (
        <>
            <div className="font-sans">
                <div className="flex flex-col w-full gap-1.5"> 
                <label className="text-gray-700 text-sm font-semibold">{label}</label>
                    <input type={input} name="" id="" placeholder={placeholder} className="py-2.5 outline-none border border-gray-300 rounded-lg " />
                    </div>
        </div>
        </>
    )
}