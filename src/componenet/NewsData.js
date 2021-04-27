import React, { useEffect, useState } from 'react';
import axios from "axios";
import "../App.css"

const NewsData = () => {
    const [articles, setArticles] = useState([]);


    useEffect(() => {
        const getArticles = async () => {
            const res = await axios.get(
                "https://newsapi.org/v2/top-headlines?pageSize=100&country=in&category=Business&apiKey=69999b3267e4414aa0d7d4e5ad50bb2a"
            );
            setArticles(res.data.articles)
            console.log(res);
        }
        getArticles();
    });
    return (
        <div>
            <header>
                <h1 >📰||| Google News API | React.js |||📰</h1>
            </header>
            {articles.map(({ title, description, url, urlToImage, content, author, name }) => (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 sm-4 mt-3">
                            <div className="card">
                                <div style={{ backgroundColor: "lightblue", display: "flex" }} className="card-horizontal">
                                    <div className="img-square-wrapper">
                                        <img className="photo" src={urlToImage} alt="news_image" style={{ fontSize: "10px" }} />
                                    </div>
                                    <div className="card-body">
                                        <h1 className="card-title"><b> </b>{name}</h1>
                                        <h4 className="card-title"><b> </b>{author}</h4>
                                        <p className="card-text"><b> </b>{description}</p>
                                        <p className="card-text"><b> </b>{content}</p>
                                        <p className="card-text"><b> </b>{title}</p>
                                        <a className="card-text" href={url}><b> </b>{url}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
};

export default NewsData;