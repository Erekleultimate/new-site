import './Card.css'

function Card(props) {
    return (
        <a href={props.link}>
            <div className="card">
                <img src={props.image} alt="img" />
                <div className="card-info">
                    <span>{props.type}</span>
                    <h5>{props.place}</h5>
                    <h3>{props.name}</h3>
                    <h4><span>₾</span>{props.price}</h4>
                </div>
            </div>
        </a>
    )
}

export default Card