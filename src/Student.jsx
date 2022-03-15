import Score from "./Score";

const Student = (props) => {
    return ( 
        <>
        <h2>Name: {props.student.name}</h2>
        <h4>Bio: {props.student.bio}</h4>


        {props.student.scores.map(score => <Score name={props.student.name} score={score} />)}
        </>
     );
}
 
export default Student;