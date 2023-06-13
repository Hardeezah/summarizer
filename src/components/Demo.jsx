import { useState, useEffect } from "react"
import linkIcon from '../assets/link.svg'
import loader from '../assets/loader.svg'

import copy from '../assets/copy.svg'
import tick from '../assets/tick.svg'
import { useLazyGetSummaryQuery } from "../services/article"

function Demo() {

    const [getSummary , {error, isFetching}] = useLazyGetSummaryQuery();
    const [allArticle, setAllArticle]=useState([]);


    useEffect(()=> {
        const articlesFromLocalStorage = JSON.parse(localStorage.getItem('articles'))
        
        if(articlesFromLocalStorage){
            setAllArticle(articlesFromLocalStorage)
        }
    
    }, [])
    const [article, setArticle] = useState({
        url: '',
        summary: '',
    });
    const handleSubmit = async (e) => {
         e.preventDefault();
         const { data } = await getSummary({articleUrl: article.url}); 
       

        if(data?.summary){
            const newArticle = {...article, summary: data.summary}

            const UpdatedArticle = [newArticle, ...allArticle]
            setArticle(newArticle)
            setAllArticle(UpdatedArticle)
            console.log(newArticle);
            
            localStorage.setItem('articles', JSON.stringify(UpdatedArticle))
            
        }
        
    };
  return (
    <section className="mt-16 w-full max-w-xl"> 
        <div className="flex flex-col w-full gap-2">
    
       <form action="" className="relative flex justify-center items-center"
            onSubmit={handleSubmit} >
            <img src={linkIcon} alt="link_icon"
            className="absolute left-0 my-2 ml-3 w-5" />
            <input type="url" placeholder="Enter a URL"
                value={article.url} onChange={(e) => setArticle({ ...article, url:e.target.value})} required 
                className="url_input peer"
            />
            <button type="submit" className="submit_btn 
                peer-focus:border-gray-700 peer-focus:ring-1 
                peer-focus:text-gray-900 
              ">↵ </button>
        </form>

        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto ">
            {allArticle.map((item, index) =>(
                <div
                    key={`link-${index}`}
                    onClick={()=> setArticle(item)}
                    className="link_card"
                >
                   <div className="copy_btn">
                    <img src={copy} alt="copy"
                    className="w-[40%] h-[40%] object-contain"
                    />
                    
                   </div>
                   <p className="flex-1 font-satoshi text-blue-700
                    font-medium text-sm truncate
                    ">
                        {item.url}
                    </p>
                </div>
            ))}
        </div>


                <div className="my-10 max-w-full flex justify-center items-center">
                    {article.summary}
                </div>
        </div>
    </section>
    
  )
}

export default Demo
