import {Container, TaskContent, Row, TopBox, TaskBox, InputContainer, ButtonContainer, CloseContainer} from "./styles"
import {Button} from "./components/Button";
import {Input} from "./components/Input";
import {useState} from "react";
import {Task} from "./components/Task";
import {Timer} from "./components/Timer";
import {CloseButton} from "./components/CloseButton";
import { HiOutlineClipboardDocument, HiOutlineBookmarkSquare } from "react-icons/hi2";


function App() {
    const [id, setId] = useState(1)
    const [task, setTask] = useState("")
    const [taskDesc, setTaskDesc] = useState("")
    const [tasks, setTasks] = useState([])
    const [deadline, setDeadline] = useState('')
    // eslint-disable-next-line no-unused-vars
    const [minData, setMinData] = useState(new Date().toISOString().slice(0, 16))
    const handleAddTask = () => {
        if (!task || !taskDesc || !deadline) {
            return
        }

        setTasks([{id: id, task: task, desc: taskDesc, timeLimit: deadline}, ...tasks])
        setId(prev => prev += 1)
        setTaskDesc('')
        setTask('')
        setDeadline('')
    }
    const handleClearAll = () => {
        if (!tasks.length) {
            return
        }
        setTasks([])
        setTaskDesc('')
        setTask('')
        setDeadline('')
    }

    function handleClearBox(task) {
        setTasks(tasks.filter(t => t !== task))
    }


    return (
        <Container>
            <TopBox>
                <Row>
                    <InputContainer>
                        <Input placeholder={"Tarefa"} value={task} onChange={(e) => setTask(e.target.value)} leftIcon={HiOutlineClipboardDocument()}/>
                        <Input placeholder={"Descrição da Tarefa"} value={taskDesc} leftIcon={HiOutlineBookmarkSquare()}
                               onChange={(e) => setTaskDesc(e.target.value)}/>
                        <Input placeholder={"Defina o tempo limite da tarefa"} value={deadline}
                               min={minData} onChange={(e) => setDeadline(e.target.value)}
                               onFocus={(event) => event.target.type = 'datetime-local'}/>
                    </InputContainer>
                    <ButtonContainer>
                        <Button onClick={handleAddTask} label={"Adicionar"}/>
                        <Button onClick={handleClearAll} label={"Clear list"}/>
                    </ButtonContainer>
                </Row>
            </TopBox>

            {tasks.map(taskIndex => (
                <TaskBox key={taskIndex.id}>
                    <TaskContent>
                        <CloseContainer>
                            <CloseButton onClick={() => handleClearBox(taskIndex)} label={'X'}/>
                        </CloseContainer>
                        <Task task={taskIndex.task} description={taskIndex.desc}/>
                        <Timer deadline={taskIndex.timeLimit}/>
                    </TaskContent>
                </TaskBox>
            ))}


        </Container>
    );
}

export default App;
