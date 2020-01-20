import { Box, Button, Image, Paragraph, Text } from "grommet";
import { Checkmark, Edit, Trash } from "grommet-icons";
import { observer } from "mobx-react";
import React from "react";
import { useStores } from "../stores";
import { TodoState } from "../types";

interface Props {
  id: number;
  image: string;
  description: string;
  state: TodoState;
}

export const Todo: React.FC<Props> = observer(
  ({ id, image, description, state }) => {
    const { todo } = useStores();

    return (
      <Box
        direction="row"
        pad="medium"
        fill
        elevation="medium"
        margin={{ bottom: "medium" }}
      >
        <Box flex="grow">
          <Paragraph margin="none">{description}</Paragraph>
        </Box>

        {!!image && (
          <Box
            margin={{ right: "small" }}
            overflow="hidden"
            style={{ borderRadius: 12 }}
          >
            <Image fit="contain" src={image} width="128px" />
          </Box>
        )}

        <Box align="center" flex="shrink" alignSelf="end">
          <Box
            pad="small"
            background={
              state === TodoState.DONE ? "status-ok" : "status-warning"
            }
            style={{ borderRadius: "128px" }}
          >
            <Text
              color="white"
              weight="bold"
              style={{ width: "100px", textAlign: "center" }}
            >
              {state}
            </Text>
          </Box>

          <Box direction="row" justify="end">
            <Button icon={<Trash />} onClick={todo.deleteTodo(id)} />
            <Button icon={<Edit />} onClick={todo.editTodo(id)} />
            <Button
              icon={<Checkmark />}
              onClick={todo.setTodoState(id, TodoState.DONE)}
            />
          </Box>
        </Box>
      </Box>
    );
  }
);
