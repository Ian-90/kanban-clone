import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "../../constants";

type Props = {
  id: string;
  title: string;
  onCardHandler: (sourceId: string, targetId: string) => void;
};
const Card = ({ id, title, onCardHandler }: Props) => {
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
        className={`p-3 bg-white rounded-md cursor-pointer ${
          isDragging ? "opacity-50" : "opacity-100"
        }`}
      >
        {title} {id}
      </div>
    </div>
  );
};

export default Card;