const addQuestion = (
  questions: QuestionInterface[],
  setQuestions: Function
) => {
  const newId: number =
    questions.reduce((maxId, item) => Math.max(maxId, item.id), 0) + 1;
  setQuestions(
    questions.concat([
      { id: newId, title: "Title", type: "text", choice: [""] },
    ])
  );
};
export default addQuestion;
