import React from "react";
import { Container,Card } from "react-bootstrap";
import {Link} from 'react-router-dom'



const SubmitLoker =(props) =>{
    return(
    //     <div className='post'>
    //     <div className='img-thumb'>
    //         <img src="https://placeimg.com/200/150/tech" alt="dummy" />
    //     </div>
    //     <div className='content'>
    //         <p className='title'>{props.title}</p>
    //         <p className=''>{props.desc}</p>

    //     </div>

    // </div>
    <Container>
        
        <Card sx={{ maxWidth: 345 }}>
            <Card.Img className="image is-128x128" variant="top" src={props.data.poster} />
        <Card.Body>
            <Card.Title className="title">{props.data.posisi}</Card.Title>
            <Card.Text className="desc">{props.data.lokasi}</Card.Text>
            <Link to={'/DetailLoker/'+props.data.id}>See Detail</Link>
        </Card.Body>
        </Card>

        
      
        
    </Container>


    )
}

export default SubmitLoker;