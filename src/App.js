import {Container, TaskContent, InputWrapper, ButtonWrapper, Row, TopBox, TaskBox, CloseWrapper} from "./styles"
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import {useState} from "react";
import {Task} from "./components/Task";
import {Timer} from "./components/Timer";
import {CloseButton} from "./components/CloseButton";

function App() {
  const [id, setId] = useState(1)
  const [task, setTask] = useState("")
  const [taskDesc, setTaskDesc] = useState("")
  const [tasks, setTasks] = useState([])
  const [deadline, setDeadline] = useState('')
  const handleAddTask = () => {
    if(!task || !taskDesc || !deadline) {
      return
    }

    setTasks([{id: id, task: task, desc: taskDesc, timeLimit: deadline} , ...tasks])
    setId(prev => prev+=1)
    setTaskDesc('')
    setTask('')
    setDeadline('')
  }
  const handleClearAll = () => {
      if (!tasks.length) {
          return
      }
      setTasks([])
  }

    function handleClearBox(task) {
        setTasks(tasks.filter(t => t !== task))
    }



  return (
    <Container>
      <TopBox >
          <Row>
          <InputWrapper>
            <Input placeholder={"Tarefa"} value={task} onChange={(e) => setTask(e.target.value)}/>
            <Input placeholder={"Descrição da Tarefa"} value={taskDesc} onChange={(e) => setTaskDesc(e.target.value)}/>
            <Input placeholder={"Defina o tempo limite da tarefa"} value={deadline} onChange={(e) => setDeadline(e.target.value)} onFocus={(event) => event.target.type = 'datetime-local'}/>
          </InputWrapper>
          <ButtonWrapper>
              <Button onClick={handleAddTask} label={"Adicionar"}/>
              <Button onClick={handleClearAll} label={"Clear list"}/>
          </ButtonWrapper>
          </Row>
      </TopBox>

            {tasks.map( taskIndex => (
                <TaskBox key={taskIndex.id}>
                        <TaskContent>
                            <CloseWrapper>
                                <CloseButton onClick={() => handleClearBox(taskIndex)} label={'X'}/>
                            </CloseWrapper>
                          <Task task={taskIndex.task} description={taskIndex.desc} />
                          <Timer deadline={taskIndex.timeLimit} />

                        </TaskContent>
                </TaskBox>
            ))}


    </Container>
  );
}

export default App;
