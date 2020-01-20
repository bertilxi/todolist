import { Box, Grommet, Heading, Button } from "grommet";
import { observer } from "mobx-react";
import React, { useEffect } from "react";
import { AppBar, EditTodoModal, TodoList } from "./components";
import { useStores } from "./stores";
import { theme } from "./theme";

export const App: React.FC = observer(() => {
  const { todo } = useStores();

  useEffect(() => {
    todo.fetchTodos();
  }, [todo]);

  return (
    <Grommet theme={theme} full>
      <Box align="center">
        <Box fill width={{ max: "large" }}>
          <AppBar>
            <Heading level="3" margin="none">
              To Do List
            </Heading>
            <Button label="New Todo" onClick={todo.createTodo} />
          </AppBar>
          <Box direction="row" flex pad={{ top: "small" }}>
            <Box flex align="center">
              <TodoList />
            </Box>
          </Box>
        </Box>
      </Box>

      <EditTodoModal />
    </Grommet>
  );
});
