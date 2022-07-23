import TodoList from "./components/TodoList";

function App() {
  console.log("render App");

  return (
    <>
      <div className="fixed top-10 left-20 right-20 bottom-10   overflow-auto shadow-lg-purple rounded-xl">
        <nav className="flex items-center justify-between h-12 shadow-lg  px-10">
          <div>
            <h4 className="text-gray-200 text-sm uppercase">Todo App</h4>
          </div>
        </nav>

        <div id="content" className="p-3 mt-2">
          <TodoList />
        </div>
      </div>
    </>
  );
}

export default App;
