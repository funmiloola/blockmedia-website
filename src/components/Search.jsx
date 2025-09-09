import searchIcon from "../assets/Icons/ri_search-line (1).svg";
import moreIcon from "../assets/Icons/Vector (6).svg";
export default function Search() {
  const listItems = [{
    title:'Car racing',posts:'8.4k posts',img:moreIcon
  },
    {
    title:'Car racing',posts:'8.4k posts',img:moreIcon
    },
    {
    title:'Car racing',posts:'8.4k posts',img:moreIcon
    },
    {
    title:'Car racing',posts:'8.4k posts',img:moreIcon
  }
  ]
  return (
      <section className="font-sans">
          <div className="border-b border-b-gray-300 flex justify-center pb-5.75 pt-6">
      <div className="flex gap-2 items-center border border-[#ECEFF4] rounded-md pl-1.5 w-[92%] border-b border-b-gray-300 ">
        <img src={searchIcon} alt="" className="w-4 h-4" />
        <input
          type="text"
          placeholder="Search for post"
          className="outline-none py-0.5 md:py-1.5 text-sm text-gray-400"
        />
              </div>
              </div>
      <h2 className="font-semibold text-[20px] pb-6 pt-4 pl-4 ">Trends for you</h2>
      <ul className="flex flex-col gap-8 pl-6"> {listItems.map(({title,posts,img}) => (
          <li className="flex justify-between items-center pr-4">
            <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-[18px]">{ title}</h3>
            <p className="text-sm">{ posts}</p>
          </div>
          <div>
            <img src={img} alt="" />
          </div>
          </li>
        ))
        }
      </ul>
    </section>
  );
}
