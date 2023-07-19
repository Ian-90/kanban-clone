import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "../../constants";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Position } from "../../types";

type Props = {
  position: Position;
  title: string;
  handleMoveCard: (sourcePosition: Position, targetPosition: Position) => void;
  handleDeleteCard: (position: Position) => void;
};
const Card = ({ position, title, handleMoveCard, handleDeleteCard }: Props) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.CARD,
    drop: () => ({
      position,
    }),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: {
      position,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    end: (draggedItem, monitor) => {
      const dropResult = monitor.getDropResult<{
        position: Position;
      }>();
      if (dropResult) {
        handleMoveCard(draggedItem.position, dropResult.position);
      }
    },
  });

  return (
    <div
      ref={drop}
      className={`rounded-md ${isOver ? "border-2 border-blue-500" : ""}`}
    >
      <div
        ref={drag}
        className={`p-3 bg-white rounded-md cursor-pointer relative ${
          isDragging ? "opacity-50" : "opacity-100"
        }`}
      >
        <span>{title}</span>
        <button
          className="absolute top-2 right-2"
          onClick={() => handleDeleteCard(position)}
        >
          <XMarkIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Card;
