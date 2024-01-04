import React from 'react';
import styles from './FaqPage.module.scss';
import { questionData } from '../../../data';
import AccordionItem from '../../../components/site/AccordionItem/AccordionItem';
const FaqPage = () => {
  return (
    <>
      <div class="hero_questions bg_white">
        <div class="container">
          <div class="space-y-20">
            <h1 class="text-center">Вопросы и ответы</h1>
          </div>
        </div>
      </div>{' '}
      <div className="questions__page col-8 mx-auto mt-100">
        <div class="questions__box space-y-30">
          {questionData?.map((question) => (
            <AccordionItem {...question} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FaqPage;
