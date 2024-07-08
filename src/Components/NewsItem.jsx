import React from 'react'
import image from "../assets/BreakingNews.jpg"



const NewsItem = ({title, description, src, url}) => {
  return (
    // <div className="card bg-dark text-light mb-3 d-inline-block px-2 py-2" style={{maxWidth:"345px", width: '100%'}}>
    <div className="card bg-dark text-light px-2 py-2 d-flex flex-column">
  {/* <img src={src?src:image} style={{height:"200px" , width:"327px"}} className="card-img-top" alt="..."/> */}
  <img src={src?src:image} style={{ width: '100%', aspectRatio: '2/1', objectFit: 'cover' }} className="card-img-top" alt="..."/>
  <div className="card-body d-flex flex-column">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text" style={{ flex: 1}}>{description?description.slice(0,70):"Current Event, No Description from the API"}</p>
    <a href={url} className="btn btn-primary" target='_blank'>Read More</a>
  </div>
</div>
  )
}

export default NewsItem