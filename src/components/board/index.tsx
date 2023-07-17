import { PlusIcon } from "@heroicons/react/24/solid";
import Card from "../card";
import { useBoard } from "./Board.hook";

type Props = {
  title: string;
};

const Board = ({ title }: Props) => {
  const { cardList, createCard, updateCard } = useBoard();

  return (
    <article className="w-80 px-6 py-4 rounded-lg bg-gray-200 flex flex-col gap-y-5">
      <header>
        <h3 className="text-lg font-semibold">{title}</h3>
      </header>
      <section className="flex flex-col gap-y-3">
        {cardList.map(({ id, title }) => (
          <Card
            key={`card_${id}`}
            id={id}
            title={title}
            onCardHandler={updateCard}
          />
        ))}
      </section>
      <footer>
        <button className="inline-flex items-center gap-x-2" onClick={createCard}>
          <PlusIcon className="w-5 h-5" />
          <span className="font-medium">Add a card</span>
        </button>
      </footer>
    </article>
  );
};

export default Board;
