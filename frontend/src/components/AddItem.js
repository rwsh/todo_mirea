import { useRef, useState } from "react"

export default function AddItem(props) {
    const [body, setBody] = useState('');
    const inputRef = useRef(null);

    function handlerChange(e) {
        setBody(e.target.value);
    }

    function handlerSubmit(e) {
        e.preventDefault();
        props.Add(body);
        setBody('');
        inputRef.current.focus();
    }

    function handlerKeyDown(e) {
        if (e.key === 'Enter') {
            e.preventDefault(); 
            handlerSubmit(e);
        }
    } 

    return(
        <div>
            Добавить дело:&nbsp;
            <form onSubmit={handlerSubmit} onKeyDown={handlerKeyDown}>
            <input type="text" placeholder="Сделать..." size={50} onChange={handlerChange}
            ref={inputRef} value={body}/>
            <button type="submit">Добавить!</button>
            </form>
        </div>
    )
}