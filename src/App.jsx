import { useState } from "react";
import TaskInputs from "./components/TaskInputs";
import TaskItem from "./components/TaskItem";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const addTask=(taskName)=>{
    const newTask={ taskName, checked:false};
    setToDoList([...toDoList, newTask])
  };

  function deletTask(deletTaskName){
    setToDoList(toDoList.filter(task=>task.taskName!== deletTaskName));
  }

  function toggleCheck(taskName){
    setToDoList((prevToDoList)=> prevToDoList.map((task)=> task.taskName=== taskName? {...task, checked:!task.checked}:task,
    ),
  );
  }

  console.log(toDoList);

  return (
  <>
  <div className="container">
    <h1>Taskify- Your Daily Planner</h1>
    <TaskInputs addTask={addTask}/>

    <div className="toDoList">
      <span> To Do </span>
      <u1 className="list-items">

        {toDoList.map((task, key)=>(
          <TaskItem task={task} key={key}
          deletTask={deletTask}
          toggleCheck={toggleCheck} />
          ))}
      </u1>

      {toDoList.length===0? (<p className="notify"> You are done! </p>):null}
    </div>

  </div>
  </>
  );
}

export default App;
