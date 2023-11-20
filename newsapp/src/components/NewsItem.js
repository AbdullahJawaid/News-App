import React from 'react'
import blankNews from './blankNews.jpg'

export default function NewsItem(props) {
  let blankNewsImg=blankNews;
  return (
    <div className='my-3'>
     <div className="card" style={{width: "18rem"}}>
        <img src={props.imageUrl || blankNewsImg} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.cardTitle}...</h5>
            <p className="card-text">{props.cardDes}</p>
            <a href={props.newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
        </div>
     </div>
      
    </div>
  )
}
