function WorkoutSummary (props){
    return(
        <div>
        <h3>Workout Summary</h3>
        <p> Showing {props.filteredWorkoutList.length} workouts ( {props.filteredWorkoutList.reduce((acc, current) => acc + current.duration, 0) } total mminutes) </p>
        </div>
    );
}

export default WorkoutSummary;