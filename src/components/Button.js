import React from "react";
const Button = ({text, textColor, bgColor,IcAfter}) => {
    return(
        <button type="button" className={`py-2 px-4 ${textColor} ${bgColor} outline-none rounded-md hover:underline flex item-center justify-center gap-0.5`}>
        {text}
        {IcAfter && <span><IcAfter/></span> }
        </button>
    )
}
export default Button