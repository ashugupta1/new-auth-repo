import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({catagory}) => {
  const [article, setArticle] = useState([]);
  const data = [1, 2, 4, 3, 5];
  //const NEWS_API_KEY = "975cf7b7a0714bd09a4eb01cc5f19370";
  console.log(catagory)


  function getData() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=in&category=${catagory}&apiKey=975cf7b7a0714bd09a4eb01cc5f19370`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setArticle(data.articles);
      });
  }

  useEffect(() => {
    getData();
  }, [catagory]);
  return (
    <div>
      <h2 className="text-center m-2"> 
        Letest <span className="badge bg-danger text-light p-2">News</span>
      </h2>
      {article.map((news, index) => {
        //console.log(news);
        return (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
  );

  // return (
  //   <div>
  //     {article.map((x) => {
  //       return (
  //         <div>
  //           <div className="card" >
  //             <img className="card-img-top" src="..." alt="Card image cap" />
  //             <div className="card-body">
  //               <h5 className="card-title">Card title</h5>
  //               <p className="card-text">
  //                 Some quick example text to build on the card title and make up
  //                 the bulk of the card's content.
  //               </p>
  //               <a href="#" className="btn btn-primary">
  //                 Go somewhere
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
};

export default NewsBoard;
