import {Container, Column, Content} from "./styles"
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import {useState} from "react";
import {Task} from "./components/Task";
import {Timer} from "./components/Timer";

function App() {

  const [task, setTask] = useState("")
  const [taskDesc, setTaskDesc] = useState("")
  const [tasks, setTasks] = useState([])
  const [deadline, setDeadline] = useState('')
  const handleAddTask = () => {
    setTasks([{task: task, desc: taskDesc, timeLimit: deadline} , ...tasks])
    console.log(tasks)
    setTaskDesc('')
    setTask('')
    setDeadline('')
  }



  return (
    <Container>
      <Content >

        <Input placeholder={"Tarefa"} value={task} onChange={(e) => setTask(e.target.value)}/>
        <Input placeholder={"Descrição da Tarefa"} value={taskDesc} onChange={(e) => setTaskDesc(e.target.value)}/>
        <Input placeholder={"Defina o tempo limite da tarefa"} value={deadline} onChange={(e) => setDeadline(e.target.value)} onFocus={(event) => event.target.type = 'datetime-local'}/>
        <Button onClick={handleAddTask} label={"Adicionar"}/>
        <Column >
          {tasks.map( taskIndex => (
              <>
                <Task task={taskIndex.task} description={taskIndex.desc} />
                <Timer deadline={taskIndex.timeLimit} />
            </>
          ))}

        </Column>
      </Content>
    </Container>
  );
}

export default App;
