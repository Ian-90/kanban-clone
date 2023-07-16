import Board from "./components/board";

function App() {
  return (
    <div className="px-10 py-8">
      <header>
        <h1 className="text-3xl text-white font-bold">Project Kanvan</h1>
      </header>
      <main className="mt-10">
        <section className="flex gap-x-10">
          <Board title="To Do" />
          {/* <Board title="In Progress" /> */}
          {/* <Board title="Done" /> */}
        </section>
      </main>
    </div>
  );
}

export default App;
