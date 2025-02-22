import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

export default function Dropdown({options,value,onChange}){


    const [isOpen, setisOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(value);
    const handleClick = ()=>{
        setisOpen(!isOpen);
    };


    const handleOptionClick = (option)=>{
        setisOpen(false);
        setSelectedOption(option.label);
        onChange(option);
    };

    const renderedOptions = options.map((option)=>{
        return <div onClick={()=>handleOptionClick(option)} key={option.value} className="hover:bg-gray-200 cursor-pointer">{option.label}</div>
    });

    //conditional rendering in line 27x
    return (
        <div>
            <div onClick={handleClick} className="border rounded flex justify-between p-2 cursor-pointer bg-gray-100">{selectedOption} <span> {isOpen ?<IoMdArrowDropdown className="text-xl"/> : <IoMdArrowDropup className="text-xl"/>} </span></div> 
            {isOpen && <div className="border rounded mx-2">{renderedOptions}</div>}
        </div>

    );

};