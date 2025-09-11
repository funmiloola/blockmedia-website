export default function ModalSection({onCloseClick,onLogoutClick}) {
    return (
        
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white w-96 rounded-2xl shadow-xl relative">
            <h3 className="text-xl text-center text-gray-950 font-semibold border-b border-b-gray-300 py-3 px-2">Are you sure you want to logout?</h3>
            <div className="flex items-center justify-end pt-8 pb-3 gap-4 pr-3">
                <button className="bg-[#3279F3] border-[#3279F3] px-4 py-3 rounded-md text-[#ffffff] font-semibold" onClick={onLogoutClick}>Yes</button>
                <button className="bg-gray-300 border-gray-300 px-4 py-3 rounded-md text-[#3279F3] font-semibold" onClick={onCloseClick}>No</button>
                </div>
                </div>
          </div>
    )
}