const defaultBoards = () => {
  return [
    {
      id: 0,
      title: "Header 1",
      tasks: [
        {
          id: 0,
          text: "Element 1.1",
          description: "",
        },
        {
          id: 1,
          text: "Element 1.2",
          description: "",
        },
        {
          id: 2,
          text: "Element 1.3",
          description: "",
        },
        {
          id: 3,
          text: "Element 1.4",
          description: "",
        },
        {
          id: 4,
          text: "Element 1.5",
          description: "",
        },
      ],
    },
  ];
};
const setDefaultIfNoPresent = () => {
  const currentData = localStorage.getItem("trelloBoards");
  if (!currentData || currentData.length) {
    localStorage.setItem("trelloBoards", JSON.stringify(defaultBoards()));
  }
};
export default setDefaultIfNoPresent;
