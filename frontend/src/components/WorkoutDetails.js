import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();
  const handleClick = async () => {
    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    } else {
    }
  };
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        Load (kg): <strong>{workout.load}</strong>
      </p>
      <p>
        Reps: <strong>{workout.reps}</strong>
      </p>
      <p>
        Created at: <strong>{workout.createdAt}</strong>
      </p>
      <span onClick={handleClick}>Delete</span>
    </div>
  );
};

export default WorkoutDetails;
