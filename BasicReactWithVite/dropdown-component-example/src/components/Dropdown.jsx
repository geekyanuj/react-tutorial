import { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import Panel from "./Panel";

export default function Dropdown({options,value,onChange}){


    const [isOpen, setisOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(value);

    useEffect(()=>{
        const handler = (event) =>{
            console.log(event);
            
        };
        document.addEventListener('click',handler,true);
    },[]);


    const handleClick = ()=>{
        setisOpen(!isOpen);
    };


    const handleOptionClick = (option)=>{
        setisOpen(false);
        setSelectedOption(option.label);
        onChange(option);
    };

    const renderedOptions = options.map((option)=>{
        return <div onClick={()=>handleOptionClick(option)} key={option.value} className="hover:bg-blue-100 cursor-pointer">{option.label}</div>
    });

    //conditional rendering in line 27x
    return (
        <div className="">
            
            <Panel onClick={handleClick} className="flex justify-between cursor-pointer">{selectedOption} <span> {isOpen ?<IoMdArrowDropup className="text-xl"/> : <IoMdArrowDropdown className="text-xl"/>} </span></Panel> 
            
            {isOpen && <Panel className="top-full">{renderedOptions}</Panel>}
        </div>

    );

};