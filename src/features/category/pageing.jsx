import _ from 'lodash'
import { useSearchParams } from 'react-router-dom'
const Pageing =({totalRecords,pageSize= import.meta.env.VITE_PAGE_SIZE})=>{
    const pages= Math.ceil(totalRecords/pageSize)
    const [searchparam , setSearchparam]=useSearchParams();
    const curentpage = +searchparam.get('page')||1
    const prevpage= ()=>{
        if(curentpage>1){
            setSearchparam({page:curentpage-1})
        }
    }
    const nextpage= ()=>{
        if(curentpage<pages){
            setSearchparam({page:curentpage+1})
        }
    }
return(

    <nav>
        <ul className="pagination pageination-lg">
            <li className="page-item">
                <a className="page-link"onClick={prevpage}>
              ◄
                </a>
            </li>
                {
                    _.times(pages,(index)=>(
                        <li key={`page${index+1}`} onClick={()=>setSearchparam({page:index+1})} >
                            <a className='page-link'>
                            {index+1}
                            </a>
                        </li>
                    ))
                }
            <li className="page-item" onClick={nextpage}>
                <a className="page-link">
                ►
                </a>
            </li>

        </ul>
    </nav>
)
}
export default Pageing
