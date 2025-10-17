import { useState } from "react"
import { ListaTarefas } from "./ListaTarefas"
import { Tarefa } from "./Tarefa"
export function Main(){
    // inicializar como array simples de objetos
    const [tarefas, setTarefas] = useState([{tarefa:"tarefa1"}, {tarefa:"tarefa2"}])

    return(
        <>
            <Tarefa tarefas={tarefas} setTarefas={setTarefas}/>
            <ListaTarefas lista={tarefas}/>
        </>
    )
}