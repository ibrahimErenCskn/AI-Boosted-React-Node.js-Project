import { useState } from "react";

function App() {
  const [todos, setTodos] = useState<
    {
      text: string;
      id: number;
      completed: boolean;
      date?: string;
      priority: string;
    }[]
  >([]);
  const [inputValue, setInputValue] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      fetch("http://192.168.1.20:5000/api/prioritize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          task: inputValue,
          dueDate: dateInput,
        }),
      }).then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            setTodos([
              ...todos,
              {
                text: inputValue,
                id: Date.now(),
                completed: false,
                date: dateInput,
                priority: data.priority,
              },
            ]);
            setInputValue("");
            setDateInput("");
          });
        } else {
          alert("Bir hata oluştu");
        }
      });
    }
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const startEdit = (id: number, text: string) => {
    setEditId(id);
    setEditText(text);
  };

  const saveEdit = (id: number) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: editText } : todo))
    );
    setEditId(null);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Todo Listesi
      </h1>

      <form onSubmit={handleSubmit} className="flex gap-2 mb-8">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Yeni todo ekle..."
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="date"
          value={dateInput}
          onChange={(e) => setDateInput(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          Ekle
        </button>
      </form>

      <div className="space-y-3">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 flex-1">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
                className="w-5 h-5 text-blue-500 rounded focus:ring-blue-500"
              />

              {editId === todo.id ? (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="flex-1 px-2 py-1 border rounded"
                />
              ) : (
                <span
                  className={`flex-1 ${
                    todo.completed
                      ? "line-through text-gray-400"
                      : "text-gray-700"
                  }`}
                  onDoubleClick={() => startEdit(todo.id, todo.text)}>
                  {todo.text}
                  {todo.date && (
                    <span className="ml-2 text-sm text-gray-500">
                      ({new Date(todo.date).toLocaleDateString()})
                    </span>
                  )}
                  {` Öncelik: ${
                    todo.priority === "low"
                      ? "Düşük"
                      : todo.priority === "medium"
                      ? "Orta "
                      : "Yüksek"
                  }`}
                </span>
              )}
            </div>

            <div className="flex gap-2 ml-4">
              {editId === todo.id ? (
                <button
                  onClick={() => saveEdit(todo.id)}
                  className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">
                  Kaydet
                </button>
              ) : (
                <button
                  onClick={() => startEdit(todo.id, todo.text)}
                  className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                  Düzenle
                </button>
              )}
              <button
                onClick={() => deleteTodo(todo.id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                Sil
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
