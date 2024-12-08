
import Course from "./course"

const CoursesList = ({courses})=>{

    return(
        <>
        
            <div className="row">
            {
                courses.map((coures)=> (
                    <div className="col-3" key={coures.id}>
                        <Course {...coures}/>
                    </div>
                ))
            }
            </div>
           
        
        </>
    )
}
export default CoursesList
