
export default function Item(props) {
    let isChecked = false;
    let Styles = {}
    if (props.done === 1) {
        isChecked = true;
        Styles = {textDecoration: 'line-through'}
    } 
    
    return (
        <div>
            <input type='checkbox' checked={isChecked}
            onChange={()=>props.onCheck(props.id, props.done)}/>
            <span style={Styles}>{props.body}</span>
        </div>
    )

}