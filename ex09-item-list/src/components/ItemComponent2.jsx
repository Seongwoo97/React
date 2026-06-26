import "./ItemComponent2.css"

function ItemComponent2(props){
    return(
        <div className="item2" onClick={props.onClick}>
            <div className="line1">
                <span>{props.item.no}</span>
                <span>{props.item.name}</span>

            </div>
            <div className="line2">
                {props.item.message}
            </div>

            <div className="line3">
                <img src={props.item.img} alt="img" />
            </div>


        </div>
    )
}

export default ItemComponent2