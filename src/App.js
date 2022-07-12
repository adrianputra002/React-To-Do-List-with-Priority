import { useState } from "react";
import {
  Container,
  Form,
  Button,
  Stack,
  Card,
  Row,
  Col,Toast , Alert
} from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";
import logo from "./logo.svg";
import "./App.css";
import Add from "./Add";
import List from "./List";
function App() {
  const [todoName, setToDoName] = useState("");
  const [todoJob, setToDoJob] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState({});
  const [openNotificationSuccess,setOpenNotificationSuccess]=useState(false);
  const [openNotificationDelete,setOpenNotificationDelete]=useState(false);
  const [openNotificationValidation,setOpenNotificationValidation]=useState(false);
  const addTodo = () => {
    const dataTodo = { todoName, status: false, todoJob };
    if(
          todoName.length<3 || todoJob.length<3
    ){
      setOpenNotificationValidation(true);

    }
    else{
      setTodoList([dataTodo, ...todoList]);
      setToDoName("");
      setToDoJob("");
      setOpenNotificationSuccess(true);
    }
   
  };
  const handleChangeTodoName = (e) => {
    const data = e.target.value;
    setOpenNotificationValidation(false);
    setToDoName(data);
    // console.log(data);
  };

  const handleChangeTodoJob = (e) => {
    
    setOpenNotificationValidation(false);
    const data = e.target.value;
    setToDoJob(data);
  };
  const finishTodo = (index) => {
    const cloneTodoList = [...todoList];
    cloneTodoList[index].status = !cloneTodoList[index].status;
    setTodoList(cloneTodoList);
  };
  const editTodo = (index, name, job) => {
    setSelectedTodo({ index, name,job });
    // console.log(selectedTodo);
  };
  const deleteToDo = (index) => {
    setTodoList(todoList.filter((value, idx) => index !== idx));
    setOpenNotificationDelete(true);
  };
  const handleChangeEditTodoName = (e) => {
    const name=e.target.value;
    setSelectedTodo({...selectedTodo,name})
  };
  const handleChangeEditTodoJob = (e) => {
    const job=e.target.value;
    setSelectedTodo({...selectedTodo,job})
  };
  const finishEditTodo=()=>{
    console.log(selectedTodo);
    if(selectedTodo.name.length<3 || selectedTodo.job.length<3 ){
      setOpenNotificationValidation(true);
    }else{
    const cloneTodoList=[...todoList];
    cloneTodoList[selectedTodo.index].todoName=selectedTodo.name; 
    cloneTodoList[selectedTodo.index].todoJob=selectedTodo.job; 
setTodoList(cloneTodoList);
setSelectedTodo({});
}
  };
  const [myName, setMyName] = useState("Nama awal");

  // setMyName("UBAAH");

  const [myAge, setMyAge] = useState(100);
  // console.log(selectedTodo);
  return (
    <Container>
  
      <h1 className="text-center mt-5 ">Todo web app</h1>

      {/* Notifikasi */}
      <div className="fixed-top ms-3 mt-3">
      <Toast bg="success" show={openNotificationSuccess} autohide delay={2000} onClose={()=>setOpenNotificationSuccess(false)}>
        <Toast.Body className="text-white font-weight-bold">
          Insert Success
        </Toast.Body>
      </Toast>
      <Toast bg="danger" show={openNotificationDelete} autohide delay={2000} onClose={()=>setOpenNotificationDelete(false)}>
        <Toast.Body className="text-white font-weight-bold">
         File deleted
        </Toast.Body>
      </Toast>
      </div>
      {/* Input to do  */}
      <Add
        handleChangeTodoName={handleChangeTodoName}
        handleChangeTodoJob={handleChangeTodoJob}
        addTodo={addTodo}
        todoJob={todoJob}
        todoName={todoName} openNotificationValidation={openNotificationValidation}
      />
      {/* List Todo */}
      <div className="mt-5">
        {
          <List finishEditTodo={finishEditTodo}
            handleChangeEditTodoName={handleChangeEditTodoName}
            todoList={todoList}
            selectedTodo={selectedTodo}
            editTodo={editTodo}
            todoName={todoName}
            todoJob={todoJob}
            deleteToDo={deleteToDo}
            finishTodo={finishTodo} handleChangeEditTodoJob={handleChangeEditTodoJob}
          />
        }
      </div>
    </Container>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       {myName}
    //     </p>

    //     <button className="custbtn mb-5" onClick={()=>
    //     myName=="Nama awal"?setMyName("Ganti nama awal"):setMyName("Nama awal")
    //     }
    //     >{myName=='Nama awal'?"Ubah Nama" : "Balikin Nama"}</button>
    //     <br></br>
    //   <div className="d-flex mt-3 aligncust">
    //    <button className='custbtn' onClick={()=> setMyAge((state)=>state+1)}>+</button>

    //  <p className='mx-3 '>{myAge}</p>
    //   <button className='custbtn' onClick={()=> setMyAge((state)=>state-1)}>-</button>
    //    </div>
    //    <br></br>

    //   </header>
    // </div>
  );
}

export default App;
