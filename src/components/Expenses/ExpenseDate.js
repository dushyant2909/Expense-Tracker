import React from "react";
const ExpenseDate = (props) => {
    let newdate = new Date(props.date); //Converted string date to correct format to extract year
    const month = newdate.toLocaleString("en-US", { month: "long" });
    const day = newdate.toLocaleString("en-US", { day: "2-digit" });
    const year = newdate.getFullYear();
        
    return (
        <div>
            {month} {day}, {year}
        </div>
    )
}

export default ExpenseDate;