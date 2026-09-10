function WorkoutItem(props){

    return(
         <div className='card' >
            <h3>{props.title}</h3>
            <p>Duration: {props.duration} mins</p>
            <p>Type: {props.type}</p>
            {/* <button>Log Details</button> */}
          </div>
    );
}

export default WorkoutItem;