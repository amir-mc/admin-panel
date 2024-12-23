import { useLoaderData } from "react-router-dom"
import Pageing from "./pageing"
 
const CategoryList = ({category:{data,totalRecords},categorydelet})=>{

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
                                        <a className="ms-3" onClick={()=>categorydelet(cate.id)}> 
                                            DELEITE
                                        </a>
                                        <a className="ms-3">
                                            EDIT
                                        </a>
                                    </td> 

                                </tr>
                               )

                            }
                            )
                        }
                    </tbody>
                </table>
                <div className="card-footer">
                <Pageing totalRecords={totalRecords} />
                </div>
                
            </div>
        </div>
       </div>
        </>
    )
}
export default CategoryList
