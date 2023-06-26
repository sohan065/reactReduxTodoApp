import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "../services/actions/todosAction";
export default function Todos() {
  const { error, isLoading, todos } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);
  return (
    <div>
      <h1>Todos</h1>
      {isLoading && <h1>IS Loading...</h1>}
      {error && <h1>{error.messge}</h1>}
      {todos &&
        todos.map((todo) => {
          return (
            <article key={todo.id}>
              <h2>{todo.title}</h2>
            </article>
          );
        })}
    </div>
  );
}
