import {Container, Content} from "./styles";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { useState } from "react";
import { List } from "./components/List";

function App() {
  const [tarefa, setTarefa] = useState("")
  const [descricao, setDescricao] = useState("")
  const [listaTarefas, setListaTarefas] = useState([])

  const handleAdicionar = () => {
    setListaTarefas([{tarefa: tarefa, desc: descricao}, ...listaTarefas])
    console.log(listaTarefas)
  }






  return (
    <Container>
      <Content >
        <Input value={tarefa} onChange={(e) => setTarefa(e.target.event)} placeholder={"Tarefa"}/>
        <Input value={descricao} onChange={(e) => setDescricao(e.target.event)} placeholder={"Descrição da Tarefa"}/>
        <Button label={"Adicionar"} onClick={handleAdicionar}/>
        <List>
          {listaTarefas.map( i => 
            <>
            <h1>{i.tarefa}</h1>
            <p>{i.descricao}</p>
            </>
          )}
        </List>
      </Content>
    </Container>
  );
}

export default App;
