import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setexpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    if (expandedIndex === nextIndex) {
      setexpandedIndex(-1);
    } else {
      setexpandedIndex(nextIndex);
    }
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span> {isExpanded ? <GoChevronDown /> : <GoChevronLeft />} </span>
    ); //conditional icon rendering
    const content = isExpanded && (
      <div className="border-b p-5">{item.content}</div>
    ); //conditional content rendering
    return (
      <div key={item.id}>
        <div
          className="flex p-2 justify-between items-center bg-gray-200 border-b cursor-pointer"
          onClick={()=> handleClick(index)} //important for toggling the accordion
        >
          {item.label}
          {icon}
        </div>
        {content}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
