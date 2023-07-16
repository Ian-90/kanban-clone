import { PlusIcon } from "@heroicons/react/24/solid";

type Props = {
  title: string
}

const Board = ({ title }: Props) => (
  <article className="w-80 px-6 py-4 rounded-lg bg-gray-200 flex flex-col gap-y-5">
    <header>
      <h3 className="text-lg font-semibold">{title}</h3>
    </header>
    <section>
      <div className="p-3 bg-white rounded-md">Task</div>
    </section>
    <footer>
      <button className="inline-flex items-center gap-x-2">
        <PlusIcon className="w-5 h-5" />
        <span className="font-medium">Add a card</span>
      </button>
    </footer>
  </article>
);

export default Board;
