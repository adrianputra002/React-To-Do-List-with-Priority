import {
  Container,
  Form,
  Button,
  Stack,
  Card,
  Row,
  Col,
  Alert,
} from "react-bootstrap";

import { FaPlusCircle } from "react-icons/fa";
const Add = ({
  handleChangeTodoJob,
  handleChangeTodoName,
  todoName,
  addTodo,
  todoJob,
  openNotificationValidation,
}) => {
  return (
    <>
      {openNotificationValidation === true ? (
        <Alert variant="warning" classname="mt-2  ">
          To do list and priority length must be more than 3  characters!
        </Alert>
      ) : (
        ""
      )}
      <Card className="mt-5">
        <Card.Body>
          <Stack direction="horizontal" gap={3}>
            <Form.Control
              onChange={handleChangeTodoName}
              type="text"
              value={todoName}
              placeholder="Masukkan To do List . . ."
            ></Form.Control>
            <Form.Control
              className="customwidth"
              required
              onChange={handleChangeTodoJob}
              type="text"
              value={todoJob}
              placeholder="Masukkan Priority . . ."
            ></Form.Control>
            <Button onClick={addTodo}>
              <FaPlusCircle />{" "}
            </Button>
          </Stack>
        </Card.Body>
      </Card>
    </>
  );
};
export default Add;
