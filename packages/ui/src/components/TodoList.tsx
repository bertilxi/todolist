import { Box } from "grommet";
import { observer } from "mobx-react";
import React from "react";
import { useStores } from "../stores";
import { Todo } from "./Todo";

export const TodoList: React.FC = observer(() => {
  const { todo } = useStores();

  return (
    <Box fill>
      {todo.todoList.map(item => (
        <Todo key={item.id} {...item} />
      ))}
    </Box>
  );
});
