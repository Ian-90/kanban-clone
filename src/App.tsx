import Board from "./components/board";
import useBoardList from "./hooks/useBoardList";

function App() {
  const { boardList, handleMoveCard, handleCreateCard } = useBoardList();
  return (
    <div className="px-10 py-8">
      <header>
        <h1 className="text-3xl text-white font-bold">Project Kanvan</h1>
      </header>
      <main className="mt-10">
        <section className="flex gap-x-10">
          {boardList.map(({ id, title, cardList }, idx) => (
            <Board
              key={id}
              positionX={idx}
              title={title}
              cardList={cardList}
              handleMoveCard={handleMoveCard}
              handleCreateCard={handleCreateCard}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
