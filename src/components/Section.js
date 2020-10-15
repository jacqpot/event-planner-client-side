import React from "react";



const Section = ({ section }) => {
  // debugger;
  return (
    <div>
      {console.log(section)}
      <li>
        <h4>
          {section.title}
        </h4>
      </li>
    </div>
  );
};



export default Section;
