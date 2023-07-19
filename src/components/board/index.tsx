import { PlusIcon } from "@heroicons/react/24/solid";
import Card from "../card";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../constants";
import { ICard, Position } from "../../types";

type Props = {
  positionX: number;
  title: string;
  cardList: ICard[];
  handleMoveCard: (sourcePosition: Position, targetPosition: Position) => void;
  handleCreateCard: (positionX: number) => void;
  handleDeleteCard: (position: Position) => void;
};

const Board = ({
  positionX,
  title,
  cardList,
  handleMoveCard,
  handleCreateCard,
  handleDeleteCard,
}: Props) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.CARD,
    drop: () => ({
      position: [positionX, 0],
    }),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <article
      ref={drop}
      className={`w-80 px-6 py-4 rounded-lg flex flex-col gap-y-5 ${
        isOver ? "bg-blue-100" : "bg-gray-200"
      }`}
    >
      <header>
        <h3 className="text-lg font-semibold">{title}</h3>
      </header>
      <section className="flex flex-col gap-y-3">
        {cardList.map(({ id, title }, idx) => (
          <Card
            key={`card_${id}`}
            position={[positionX, idx]}
            title={title}
            handleMoveCard={handleMoveCard}
            handleDeleteCard={handleDeleteCard}
          />
        ))}
      </section>
      <footer>
        <button
          className="inline-flex items-center gap-x-2"
          onClick={() => handleCreateCard(positionX)}
        >
          <PlusIcon className="w-5 h-5" />
          <span className="font-medium">Add a card</span>
        </button>
      </footer>
    </article>
  );
};

export default Board;
