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

import { FaPlusCircle, FaTimes, FaCheck } from "react-icons/fa";
const List = ({
  finishEditTodo,
  handleChangeEditTodoName,
  selectedTodo,
  editTodo,
  todoList,
  todoName,
  todoJob,
  deleteToDo,
  finishTodo,handleChangeEditTodoJob
}) => {

  return todoList.map((value, index) => {
    return (

      <Card border={value.status ? "primary" : "warning"}>
        <Card.Body>
          <Row>
            {/* Nama todo */}

            <Col>
              {selectedTodo.index === index ? (
                <>
                <div className="d-flex">
                  <Form.Control
                    type="text"
                    placeholder="Masukkan Todo . . ." className='me-2'
                    onChange={handleChangeEditTodoName}
                    value={selectedTodo.name}
                  />
                  <Form.Control
                    type="text" className='customwidth'
                    placeholder="Masukkan Priority . . ."
                    onChange={handleChangeEditTodoJob}
                    value={selectedTodo.job}
                  />
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  <h3>{value.todoName}</h3>
                  <h5>{value.todoJob}</h5>{" "}
                </>
              )}
            </Col>
            {/* Button */}
            <Col md="1">
              <Button
                className="w-100"
                onClick={() => finishTodo(index)}
                variant={value.status ? "secondary" : "primary"}
              >
                {value.status ? <FaTimes /> : <FaCheck />}
              </Button>
            </Col>
          </Row>
          <div className="mt-4">
            {selectedTodo.index === index ? (
              <Button onClick={finishEditTodo}>Save</Button>
            ) : (
              <>
                {" "}
                <Button
                  variant="danger"
                  onClick={() => deleteToDo(index)}
                  className="me-3"
                >
                  Hapus
                </Button>
                <Button
                  variant="warning"
                  onClick={() => editTodo(index, value.todoName, value.todoJob)}
                >
                  Edit
                </Button>{" "}
              </>
            )}
          </div>
        </Card.Body>
      </Card>
    );
  });
};

export default List;
