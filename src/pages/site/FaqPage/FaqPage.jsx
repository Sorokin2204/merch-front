import React from 'react';
import styles from './FaqPage.module.scss';
import { questionData } from '../../../data';
import AccordionItem from '../../../components/site/AccordionItem/AccordionItem';
import Title from '../../../components/site/Title/Title';
const FaqPage = () => {
  return (
    <>
      <Title>Вопросы и ответы</Title>
      <div class="container">
        <div className="questions__page col-12 mx-auto ">
          <div class="questions__box space-y-15">
            {questionData?.map((question) => (
              <AccordionItem {...question} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqPage;
