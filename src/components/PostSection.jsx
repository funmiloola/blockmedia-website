import moreIcon from "../assets/Icons/Vector (6).svg";
export default function PostSection() {
    return (
        <>
        <div className="flex items-center justify-between px-6 pt-4 pb-7.25">
                        <div className="flex items-center gap-2">
                        <div className= "w-6 md:w-12 h-6 md:h-12 rounded-full bg-[#D9D9D9]"></div>
                        <h2 className="font-bold text-base md:text-lg">
                          MovingUNcle{" "}
                          <span className="text-[#8E8E93] font-normal">
                            @movinggg - 20m
                          </span>
                        </h2>
                      </div>
                      <img src={moreIcon} alt="" />
                      </div>
                      <p className="font-medium text-base md:text-lg px-14 pb-4">
                      This the the content of the last article form ancient Greek tomb,
                      was shipped to Austria in 1745
                      </p>
                      <p className="font-medium text-base md:text-lg pl-14 pb-6">
                      Rumour says it’s still there
                      </p>
                      <div className="flex gap-1 pl-14 pr-8 pb-6 ">
                      <div className="w-64 md:w-76 h-56 md:h-68 bg-[#D9D9D9] rounded-l-md"></div>
                      <div className="w-64 md:w-76 h-56 md:h-68 bg-[#D9D9D9] rounded-r-md"></div>
                              </div>
        </>
    )
}