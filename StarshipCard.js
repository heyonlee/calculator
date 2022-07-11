
function StarshipCard(props){

    return (
         
          <div className="container">
            <ul>
                <span className= {props.data.name} ><li>{props.data.name}</li></span>
                {/* <li>Model: {props.data.model} </li> */}
                {/* <li>Manyfacture: {props.data.manufacturer}</li>
                <li>Cost: {props.data.cost_in_credits}</li>
                <li>Length: {props.data.lengths}</li> */}
            </ul>
          </div>  
    )
}

export default StarshipCard;