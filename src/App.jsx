import {useState} from 'react';
import WorkoutItem from './components/WorkoutItem';
import WorkoutForm from './components/WorkoutForm';
import NewWorkout from './components/NewWorkout';
import './App.css'
import WorkoutList from './components/WorkoutList';



const  INITIAL_WORKOUTS = [
  {
    id: 'w1', title: 'Morning Run', duration: 30, type: 'Cardio'
  },
   {
    id: 'w2', title: 'Weight training', duration: 45, type: 'Strength'
  }
]

function App() {

  const [workouts, setWorkouts] =useState(INITIAL_WORKOUTS);

  const addWorkoutHandler = (workout) =>{
    setWorkouts((prevWorkouts) => [workout, ...prevWorkouts])
  }
  const clickHandler= (title)=>{
    console.log("Workout clicked: " + title);
  };


  return (
    <div>
      <h1>FitLog - Fitness Activity Tracker</h1>
      {/* Workout Form Mockup */}
        <NewWorkout onAddWorkout={addWorkoutHandler} />

      {/* Mock workout list */}
      <WorkoutList items={workouts} />
    </div>
  );
}

export default App
