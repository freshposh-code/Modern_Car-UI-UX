'use client'

import React, {Dispatch, SetStateAction, useState} from "react"
import SearchManufacturer from "./SearchManufacturer"
import Image from "next/image"
import { useRouter } from "next/navigation"

interface SearchBarProps {
  setManufacturer: Dispatch<SetStateAction<string>>;
  setModel: Dispatch<SetStateAction<string>>;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const SearchButton = ({otherClasses}: {otherClasses: string}) => {
  return (
  <button type="submit"
  className={`-ml-3 z-0`}
  >
    <Image src='/magnifying-glass.svg' alt='magnifying glass' width={40} height={40}
    className="object-contain" />
  </button>
  )
}

const SearchBar: React.FC<SearchBarProps> = ({setManufacturer, setModel}) => {
  const [searchManufacturer, setSearchManufacturer] = useState('')
  const [searchModel, setSearchModel] = useState('')

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchManufacturer === "" && searchModel === "") {
      return alert("Please provide some input");
    }

    setModel(searchModel)
    setManufacturer(searchManufacturer)
  };

  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer 
            selected={searchManufacturer}
            setSelected={setSearchManufacturer}
            />

            <SearchButton  otherClasses='sm:hidden' />
        </div>

        <div className="searchbar__item">
          <Image src='/model-icon.png' alt="car Model" width={25} height={25}
           className="absolute w-[20px] h-[20px] ml-4" />

           <input type="text" name="searchModel" value={searchModel} onChange={(e) => setSearchModel(e.target.value)}
           placeholder="Tiguan" className="searchbar__input" />

           <SearchButton otherClasses="sm:hidden" />
        </div>
           {/* <SearchButton otherClasses="max-sm:hidden" /> */}
    </form>
  )
}

export default SearchBar