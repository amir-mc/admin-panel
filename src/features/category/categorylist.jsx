import { useLoaderData } from "react-router-dom"

const CategoryList = ({category:{data,totalRecord}})=>{

    return(
        <>
        {
            data.map((category)=>(
                <div key={category.id}>
                    {category.name}
                </div>
            ))
        }
        </>
    )
}
export default CategoryList
