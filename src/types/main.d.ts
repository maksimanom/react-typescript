declare interface QuestionInterface {
  id: number;
  type: string;
  title: string;
  choice: string[];
}
declare interface TextQuestion {
  title: string;
  choice: string;
}
declare interface SingleAnswerQuestion {
  title: string;
  choice: string[];
}
declare interface MultipleAnswerQuestion {
  title: string;
  choice: string[];
}

declare interface DescriptionAnswer {
  title: string;
  choice: string;
}
