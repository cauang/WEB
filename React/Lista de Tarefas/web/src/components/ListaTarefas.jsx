export function ListaTarefas({lista}){
    // const lista = [{tarefa:"tarefa1"}, {tarefa:"tarefa2"}]
    return(
        <>
            <ul>
                {lista.map((item)=><li key={item.tarefa}>{item.tarefa}</li>)}
            </ul>
        </>
    )
}