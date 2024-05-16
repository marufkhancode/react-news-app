import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, publishedAt, source } = props;
    return (
        <div className='my-3'>
            <div className="card">
                <img src={!imageUrl ? '/assets/image-not-found.png' : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}<span className="badge text-bg-danger ms-1">{source.name.length > 20 ? source.name.slice(0,20) + "...": source.name}</span></h5>
                    <p className="card-text">{description ? description : "No Description Found"}</p>
                    <p className="card-text"><small className="text-body-secondary">By {author ? author : "Unknown"} on {new Date(publishedAt).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        </div>

    )
}

export default NewsItem