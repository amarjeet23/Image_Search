import React from 'react'
import '../App.css'
import Container from '@material-ui/core/Container';

const imageList=(props)=> {
    const list = props.images.map((response)=>{
    return <img className="items"key = {response.id} src={response.urls.regular}/>
    })
    return (
        <Container fixed>
        <div >
            <div className="imageview">{list}</div>
            
        </div>
        </Container>
    )
}
export default imageList;