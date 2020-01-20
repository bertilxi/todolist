import { Box, Button, Form, FormField, Image, Layer, TextArea } from "grommet";
import { observer } from "mobx-react";
import React from "react";
import { useStores } from "../stores";

export const EditTodoModal: React.FC = observer(() => {
  const { todo } = useStores();

  if (!todo.showCreateTodo) {
    return null;
  }

  return (
    <Layer onEsc={todo.closeCreateTodo} onClickOutside={todo.closeCreateTodo}>
      <Box pad="small" width="large">
        <Form onSubmit={todo.handleEditTodo}>
          <FormField name="description" label="Description">
            <TextArea
              rows={10}
              placeholder="Your todo here."
              value={todo.currentTodo.description}
              onChange={todo.setTodoDescription}
            />
          </FormField>

          <FormField
            name="image"
            label="Image"
            value={todo.currentTodo.image}
            onChange={todo.setTodoImage}
          />

          {todo.currentTodo.image && (
            <Box pad="small" height="small" width="small">
              <Image fit="cover" src={todo.currentTodo.image} />
            </Box>
          )}

          <Box direction="row" justify="end">
            <Button
              type="button"
              label="Cancel"
              onClick={todo.closeCreateTodo}
            />
            <Button type="submit" primary label="Save" />
          </Box>
        </Form>
      </Box>
    </Layer>
  );
});
