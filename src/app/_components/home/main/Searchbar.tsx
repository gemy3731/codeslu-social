import {  TextInput } from "flowbite-react";
import { CiSearch } from "react-icons/ci";

const Searchbar = () => {
  return (
    <div className="md:w-[30%] w-full">
      <div className="mb-2 block">
      </div>
      <TextInput id="searchbar" type="search" rightIcon={CiSearch} placeholder="Search..." className="searchbar ring-black" />
    </div>
  )
}

export default Searchbar