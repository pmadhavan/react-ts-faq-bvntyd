import * as React from 'react';
import { Question as QuestionI } from './FAQContainer';

type QuestionProp = QuestionI & { isOpen: boolean; onOpen: () => void };
export const Question = ({
  question,
  answer,
  isOpen,
  onOpen,
}: QuestionProp) => {
  return (
    <div className="question" onClick={onOpen}>
      <span className="caret">{isOpen ? `-` : `+`}</span>
      {question}
      {isOpen && <div className="answer">{answer}</div>}
    </div>
  );
};
