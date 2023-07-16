import Board from "./components/board";

function App() {
  return (
    <div className="px-10 py-8">
      <header>
        <h1 className="text-3xl text-white font-bold">Proeject Kanvan</h1>
      </header>
      <main className="mt-10">
        <section>
          <Board />
        </section>
      </main>
    </div>
  );
}

export default App;
