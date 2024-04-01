export default {
  questions: [
    {
      q: 'What is the sum of 2 and 2?  (Bonus points for using a calculator!)',
      answers: [
        {
          text: '4',
          is_correct: true,
        },
        {
          text: '3 (Did you skip school today?)',
          is_correct: false,
        },
        {
          text: 'Fish (Maybe for a different question?)',
          is_correct: false,
        },
        {
          text: '5 (Almost there, but not quite!)',
          is_correct: false,
        },
      ],
    },
    {
      q: 'Including the vowels, how many letters are hiding in the word "Banana"?',
      answers: [
        {
          text: '5 (Not quite enough letters)',
          is_correct: false,
        },
        {
          text: '7 (A bit too many)',
          is_correct: false,
        },
        {
          text: '6 (You peeled the answer right off!)',
          is_correct: true,
        },
        {
          text: '12 (Woah, counting the fruit itself?)',
          is_correct: false,
        },
      ],
    },
    {
      q: 'Can you complete the delicious word: C_ke?',
      answers: [
        {
          text: 'e (Almost there, but a bit eggy!)',
          is_correct: false,
        },
        {
          text: 'a (You deserve a slice of cake for this one!)',
          is_correct: true,
        },
        {
          text: 'i (Maybe for a different dessert?)',
          is_correct: false,
        },
      ],
    },
  ],
  results: [
    {
      min: 0,
      max: 2,
      title: "Don't worry, keep practicing!",
      desc: "These questions might have been a little tricky, but keep studying and you'll be a quiz master in no time!",
    },
    {
      min: 3,
      max: 3,
      title: 'Congratulations, you aced the quiz!',
      desc: 'You obviously know your stuff!   Feel free to challenge yourself with some bonus questions.',
    },
  ],
}
