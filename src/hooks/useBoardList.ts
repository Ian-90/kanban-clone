import { useState } from "react";
import { IBoard, Position } from "../types";

const useBoardList = () => {
  const [boardList, setBoardList] = useState<IBoard[]>([
    {
      id: "todo",
      title: "To Do",
      cardList: [
        {
          id: "1",
          title: "Task 1",
          description: "des",
        },
        {
          id: "2",
          title: "Task 2",
          description: "des",
        },
      ],
    },
    {
      id: "progress",
      title: "In Progress",
      cardList: [],
    },
    {
      id: "done",
      title: "Done",
      cardList: [],
    },
  ]);

  const handleMoveCard = (
    sourcePosition: Position,
    targetPosition: Position
  ) => {
    const [sourceX, sourceY] = sourcePosition;
    const [targetX, targetY] = targetPosition;

    const source = boardList[sourceX].cardList[sourceY];
    const target = boardList[targetX].cardList[targetY];
    const copyBoardList = [...boardList];
    if (sourceX === targetX) {
      const copyBoard = { ...boardList[sourceX] };
      copyBoard.cardList[sourceY] = target;
      copyBoard.cardList[targetY] = source;
      copyBoardList[sourceX] = copyBoard;
    } else {
      copyBoardList[sourceX].cardList = copyBoardList[sourceX].cardList.filter(
        ({ id }) => id !== source.id
      );
      copyBoardList[targetX].cardList = [
        source,
        ...copyBoardList[targetX].cardList,
      ];
    }

    return setBoardList((prev) => copyBoardList);
  };

  const handleCreateCard = (positionX: number) => {
    const copyBoardList = [...boardList];
    copyBoardList[positionX].cardList = [
      ...copyBoardList[positionX].cardList,
      {
        id: crypto.randomUUID(),
        title: "New Task",
        description: "",
      },
    ];

    return setBoardList((prev) => copyBoardList);
  };
  return {
    boardList,
    handleMoveCard,
    handleCreateCard,
  };
};

export default useBoardList;
