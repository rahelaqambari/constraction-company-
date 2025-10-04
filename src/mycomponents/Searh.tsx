
import { SearchIcon } from "lucide-react";

export default function Search(){
    return(
        <div className="h-64 bg-stone-100 w-full flex items-center justify-center">
              <SearchIcon className="text-amber-700 absolute left-[26%] " size={26} />
                <input className="h-16 w-[50%] focus:outline-0 border rounded-full px-14 border-amber-700 relative" type="text" placeholder="Search here" />
        </div>
    )
}