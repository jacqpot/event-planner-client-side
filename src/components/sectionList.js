import React from "react";
import { connect } from "react-redux";

const SectionList = ({ sections }, even) => {
  return (
    <div>
      <ul>
        {sections.map((section) => (
          <li key={section.id}>
            {section.title} <br /> {section.start} <br /> {section.set_duration}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { sections: state.sections };
};

export default connect(mapStateToProps)(SectionList);


const sections = even.sections.map((section, i) => <Section key={i} section={section} />);


<ul>{sections}</ul> 