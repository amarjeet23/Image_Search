import React,{useState}from 'react'
import ImageList from './imageList'
import axios from 'axios'

const Search=(props)=> {
    const [search, setSearch] = useState('')
    const [image,setImage] = useState([])
    const [msg,setMsg] = useState('')
    const onSubmit= async(e)=>{
        e.preventDefault()
        console.log(search)
        const imagelist = await axios.get('https://api.unsplash.com/search/photos',{
           params:{query:search},
           headers:{
               Authorization: 'Client-ID 07Cz4xwi8XEQjDREaC6EJHAsfRInNAvUyjbfeT8vntw'
           },
        })
        if(imagelist.data.results.length>0){
        setImage(imagelist.data.results)
        console.log(image)
        setMsg('')
        }
        else{
            setMsg('sorry!!,No photo found.pls try different keywords.....')
        }
    }
    return (
        <div className="searchbar">
           <form onSubmit={(e)=>onSubmit(e)}>
               <input type="text" placeholder={"Enter image name to search..."} value={search} onChange={(e)=>setSearch(e.target.value)}/>
           </form>
           {msg ===''? <ImageList images ={image}/>:<h4>{msg}</h4>}
          
           
        </div>
    )
}
export default Search;