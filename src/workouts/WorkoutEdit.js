import React, {useState} from 'react';

const WorkoutEdit = (props) => {

    const [editDesc, setEditDesc] = useState(props.workoutToUpdate.description);
    const [editDef, setEditDef] = useState(props.workoutToUpdate.definition);
    const [editRes, setEditRes] = useState(props.workoutToUpdate.result);

    return (
        <div>
            This is Workout Edit.
        </div>
    );

};

export default WorkoutEdit;