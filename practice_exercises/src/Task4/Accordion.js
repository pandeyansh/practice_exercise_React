import React, { useState } from 'react';
const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};
const Accordion = () => {
  const accordionData = [
    { title: 'Section 1', content: 'Content for Section 1' },
    { title: 'Section 2', content: 'Content for Section 2' },
    { title: 'Section 3', content: 'Content for Section 3' },
  ];
  return (
    <div className="accordion">
      {accordionData.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};
export default Accordion;