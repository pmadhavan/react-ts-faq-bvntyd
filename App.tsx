import * as React from 'react';
import { FAQContainer } from './FAQContainer';
import './style.css';

const QUESTIONS_DATA = [
  {
    question: 'How many bones does a cat have?',
    answer: 'A cat has 230 bones - 6 more than a human',
  },
  {
    question: 'How much do cats sleep?',
    answer: 'The average cat sleeps 12-16 hours per day',
  },
  {
    question: 'How long do cats live',
    answer:
      'Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.',
  },
];
export default function App() {
  return <FAQContainer questions={QUESTIONS_DATA} />;
}
