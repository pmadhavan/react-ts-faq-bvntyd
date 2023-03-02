import * as React from 'react';
import { Question as QuestionComponent } from './Question';

export interface Question {
  question: string;
  answer: string;
}
interface FAQContainerProps {
  questions: Question[];
}
export const FAQContainer = ({ questions }: FAQContainerProps) => {
  const [currentOpenIndex, setCurrentOpenIndex] = React.useState(0);

  const onClick = (index: number) => {
    const isOpen = index === currentOpenIndex;
    setCurrentOpenIndex(isOpen ? null : index);
  };
  return (
    <div className="container">
      {questions &&
        questions.map((question, index) => {
          return (
            <QuestionComponent
              question={question.question}
              answer={question.answer}
              isOpen={index === currentOpenIndex}
              onOpen={() => onClick(index)}
            />
          );
        })}
    </div>
  );
};
