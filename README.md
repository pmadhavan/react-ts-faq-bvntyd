# react-ts-faq-bvntyd

### Summary

This is a small react challenge that implements a static FAQ page. The app displays a set of Question and Answers, answers being hidden under accordian.Except the first question and displaying the answer until another question is opened.

### UI

- FAQComponent
  - QuestionBlock
    - AnswerBlock

### Data- State/Props

- question and answer data- props
- cuurentOpenIndex - state, initial 0
- isOpen - prop

### My new learnings as part of this exercise

- Habit of layout out the initial UI components and its data flow state/prop
- Building the basic UI with min CSS, use padding, margin, border, border radius and gap, flex display to make it look decent
- role="button" should be used for accordian and aria-expanded="isOpen"

  [Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-ts-bvntyd)
