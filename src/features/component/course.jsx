const Course = ({title,coverImageUrl,courseLevel,description,duration,numOfReview})=>{
return(
    <div className="card">
        <img className="card-img-top" src={coverImageUrl}/>
    </div>
)
}
export default Course
