import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "../../constants";
import { XMarkIcon } from "@heroicons/react/24/solid";
type Props = {
  id: string;
  title: string;
  onCardHandler: (sourceId: string, targetId: string) => void;
  onCardDeleteHandler: (id: string) => void;
};
const Card = ({ id, title, onCardHandler, onCardDeleteHandler }: Props) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.CARD,
    drop: () => ({
      targetId: id,
    }),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: {
      sourceId: id,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    end: (draggedItem, monitor) => {
      const { sourceId } = draggedItem;
      const dropResult = monitor.getDropResult<{ targetId: string }>();
      if (dropResult) {
        onCardHandler(sourceId, dropResult.targetId);
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
        <span>
          {title} {id}
        </span>
        <button
          className="absolute top-2 right-2"
          onClick={() => onCardDeleteHandler(id)}
        >
          <XMarkIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Card;
