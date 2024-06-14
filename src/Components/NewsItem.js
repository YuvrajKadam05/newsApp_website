import React from 'react'

export default function NewsItem({ title, description, imageUrl, newsUrl, author, date, source }) {
    return (
        <div className="card my-3">
            <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                position: 'absolute',
                right: '0'
            }
            }>
                <span className="badge rounded-pill bg-danger">
                    {source}
                </span>
            </div>
            <img src={imageUrl ? imageUrl : 'https://www.reuters.com/resizer/vNqx-z6bTrO7LucFVxa3F4sf-tY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/7RR732VBRBN2TBUTYHSTC7DUXU.jpg'} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title ? title.slice(0, 60) : ""}...</h5>
                <p className="card-text">{description ? description.slice(0, 100) : ""}...</p>
                <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-dark">Read More</a>
                <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            </div>
        </div>
    )
}
