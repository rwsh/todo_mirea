import Item from "./Item"

export default function Items(props) {
    if(props.items.length < 1) {
        return (
            <div>
                <hr/>
                Пока список пуст.
            </div>
        )
    } else {
        return (
            <div>
                {props.items.map((el) => (
                    <Item key={el.id} id={el.id} body={el.body} done={el.done} onCheck={props.onCheck}/>
                ))}
                <button onClick={()=>{props.onDelete();}}>Удалить завершенные дела</button>
            </div>
        )
    }
}