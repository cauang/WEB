import { useState } from "react"

export function Tarefa({ tarefas, setTarefas }){
    const [input, setInput] = useState("")
    const handleClickAdicionar = ()=>{
        if(input.trim() === "") return
        setTarefas([...tarefas, {tarefa:input}])
        setInput("")
    }
    return(
        <> 
        <input type="text" value={input} onChange={e=>setInput(e.target.value)} placeholder="Digite a Tarefa" />
        <button type="button" onClick={handleClickAdicionar}>Adicionar Tarefa</button>
        </>
    )
}