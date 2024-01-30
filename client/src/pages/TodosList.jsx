import { useLoaderData } from "react-router-dom";
import SearchForm from "../components/SearchForm";

export default function TodosList() {
  const { todos, query } = useLoaderData();
  return (
    <div className="container">
      <h1 className="page-title">Todos - {todos.length}</h1>
      <SearchForm query={query} />
      <ul>
        {todos.map((t) => (
          <li className={t.completed ? "strike-through" : ""} key={t.id}>
            {t.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
