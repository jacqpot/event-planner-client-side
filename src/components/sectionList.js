import React from "react";
import Section from "./Section"


const SectionList = ({ event }) => {
  if (event){

    const sec = event.sections.map((section, i) => <Section key={i} section={section} />)
    
    return (
      <div>
      <ul>
        hi
          {sec}         
      </ul>
    </div>
  );
} 
};

// const mapStateToProps = (state, props) => {
//   return {
//     even: state.events.find((ev) => ev.id.toString() === props.event),
//   };
// };

export default SectionList;



