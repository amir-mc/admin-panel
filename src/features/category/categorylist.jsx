import { useLoaderData } from "react-router-dom"
 
const CategoryList = ({category:{data,totalRecord}})=>{

    return(
        <>
       <div className="row">
        <div className="col-12">
            <div className="card">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>
                                name
                            </th>
                            <th>
                                op
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((cate)=>{
                               return(
                                <tr key={cate.id}>
                                    <td >
                                        {cate.name}
                                    </td>
                                    <td className="table-action">
                                        <a>

                                        </a>
                                    </td>

                                </tr>
                               )

                            }
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
       </div>
        </>
    )
}
export default CategoryList
