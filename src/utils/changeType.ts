const changeType = (
  questions: QuestionInterface[],
  setQuestions: Function,
  id: number,
  toType: string
) => {
  const tmpArray: QuestionInterface[] = [...questions];
  const numQuestion: number = tmpArray.findIndex(item=>item.id===id);
  tmpArray[numQuestion].type=toType;
  setQuestions(tmpArray);
};
export default changeType;
