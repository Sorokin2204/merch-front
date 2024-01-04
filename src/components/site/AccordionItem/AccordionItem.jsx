import React, { useState } from 'react';
import styles from './AccordionItem.module.scss';
import AnimateHeight from 'react-animate-height';
const AccordionItem = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div class="accordion" id="accordionEx parent" role="tablist" aria-multiselectable="true">
        <div class="accordion-header" role="tab" id="headingOne1">
          <a
            style={{ cursor: 'pointer', userSelect: 'none' }}
            data-toggle="collapse"
            onClick={() => {
              setShow(!show);
            }}
            class={`accordion-button ${show ? '' : 'collapsed'}`}>
            {question}
          </a>
          <AnimateHeight duration={300} height={show ? 'auto' : 0}>
            {' '}
            <div class="accordion-desc">{answer}</div>
          </AnimateHeight>
        </div>
      </div>{' '}
    </>
  );
};

export default AccordionItem;
