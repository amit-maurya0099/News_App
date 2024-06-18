import React, { Component } from 'react'

export class NewsItem extends Component {
  
        

    render() {
        let {title,description,imageUrl,newsUrl,author,date,source}=this.props;
        return (
            <div>
                <div className="card">
                    <img src={imageUrl?imageUrl:"https://st2.depositphotos.com/1561359/12101/v/950/depositphotos_121012076-stock-illustration-blank-photo-icon.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <span className="position-absolute start-0 top-0 translate-middle badge rounded-pill bg-danger" style={{marginTop:10,marginLeft:35}}>
    {source}
    <span className="visually-hidden">unread messages</span>
  </span>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-body-secondary">By {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer "href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read more..</a>
                    </div>
                </div>
            </div>
        )
    }

}
export default NewsItem
