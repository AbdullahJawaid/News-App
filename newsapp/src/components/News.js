import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner"; // Import your Spinner component
import propTypes from "prop-types";

export default function News(props) {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  // Function to capitalize the first letter of a string
  const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;

        setLoading(true);
        let response = await fetch(url);
        let data = await response.json();
        setArticle(data.articles);
        setTotalResults(data.totalResults);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, [props.pageSize]);


  const handleFetchMoreData = async () => {
    try {
      const nextPage = page + 1;
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${nextPage}&pageSize=${props.pageSize}`;

      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      setArticle((prevArticles) => [...prevArticles, ...data.articles]);
      setTotalResults(data.totalResults);
      setPage(nextPage);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching more data:", error);
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="text-center" style={{margin: '80px 0px 30px 0px'}}>
        NewsMonkey- Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner/>}

      <InfiniteScroll
        dataLength={article.length}
        next={handleFetchMoreData}
        hasMore={article.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
        <div className="row my-5">
          {article.map((element) => (
            <div className="col-md-4" key={element.url}>
              <NewsItem
                cardTitle={element.title ? element.title.slice(0, 40) : ""}
                cardDes={
                  element.description ? element.description.slice(0, 88) : ""
                }
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                author={element.author}
                date={element.publishedAt}
                source={element.source.name}
              />
            </div>
          ))}
        </div>
        </div>
      </InfiniteScroll>
    </>
  );
}

News.propTypes = {
  country: propTypes.string,
  pageSize: propTypes.number,
  category: propTypes.string,
};
News.defaultProps = {
  country: "us",
  pageSize: 5,
  category: "general",
};
