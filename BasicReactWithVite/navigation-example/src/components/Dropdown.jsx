import { useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import Panel from "./Panel";

export default function Dropdown({options,value,onChange}){


    const [isOpen, setisOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(value);
    const divEl = useRef();

    useEffect(() => { //code for clicking outside the dropdown may close the same
      const handler = (event)=>{

        if(!divEl.current){ // in some cases, divEl.current might be null. It might not be assigned to any element at all. So to handle that case, this is a really good practice, you're gonna see on a lot of projects, before we access divEl.current and just assume that some element is assigned to that property, we usually just check to make sure that is actually the case. So in this case, we could add in at the top of the handler if not divEl.current. So for some reason we did not assign that reference to any element. if we don't have a reference to any div right now, then just return early from the handler. Because if we don't have a reference to the element, then really there's nothing else for us to do inside of here.
            return;
        }
         
        if(!divEl.current.contains(event.target)){
            setisOpen(false);
        }
      };
      document.addEventListener('click',handler,true);

      return ()=>{
        document.removeEventListener('click',handler);
      };
    
    }, []);
    


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
        <div ref={divEl}>
            
            <Panel onClick={handleClick} className="flex justify-between cursor-pointer">{selectedOption} <span> {isOpen ?<IoMdArrowDropup className="text-xl"/> : <IoMdArrowDropdown className="text-xl"/>} </span></Panel> 
            
            {isOpen && <Panel className="top-full">{renderedOptions}</Panel>}
        </div>

    );

};