import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

export default function News() {
  const[article,setArticle]=useState([{
    source: { id: "the-washington-post", name: "The Washington Post" },
    author: "Nicolás Rivero",
    title: "Why companies are racing to build the world’s biggest bug farm",
    description:
      "Companies are building bigger and bigger insect farms that rear crickets, mealworms and fly larvae as a low-carbon protein source for pet and livestock feed.",
    url: "https://www.washingtonpost.com/climate-solutions/2023/11/12/biggest-insect-farm-record/",
    urlToImage:
      "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/ZZ2L5RKVC7QOZLD7XI4TDIKC3Q_size-normalized.jpg&w=1440",
    publishedAt: "2023-11-12T11:30:00Z",
    content:
      "Comment on this story\r\nComment\r\nAdd to your saved stories\r\nSave\r\nThe worlds largest insect farm a high-tech facility that sprawls across 35,000 square meters and will produce 15,000 metric tons of pr… [+6597 chars]",
  },
  {
    source: { id: "bbc-sport", name: "BBC Sport" },
    author: null,
    title:
      "World Cup: India bat first against Netherlands in final group game",
    description:
      "Follow live text, in-play video clips and radio commentary as India play the Netherlands in the Men's Cricket World Cup 2023.",
    url: "http://www.bbc.co.uk/sport/live/cricket/66859346",
    urlToImage:
      "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png",
    publishedAt: "2023-11-12T08:37:19.2133896Z",
    content:
      "India: Rohit Sharma (captain), Shubman Gill, Virat Kohli, Shreyas Iyer, KL Rahul (wicketkeeper), Suryakumar Yadav, Ravindra Jadeja, Mohammed Shami, Jasprit Bumrah, Kuldeep Yadav, Mohammed Siraj.\r\nNet… [+216 chars]",
  },
  {
    source: { id: "espn-cric-info", name: "ESPN Cric Info" },
    author: null,
    title:
      "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
    description:
      "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
    url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
    urlToImage:
      "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
    publishedAt: "2020-04-27T11:41:47Z",
    content:
      "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
  },
  {
    source: { id: "espn-cric-info", name: "ESPN Cric Info" },
    author: null,
    title:
      "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
    description:
      "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
    url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
    urlToImage:
      "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
    publishedAt: "2020-03-30T15:26:05Z",
    content:
      "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
  },])

 

  const articleObj = {
    article: article,
    loading: false,
    page:1
  };
  useEffect(() => {
    async function fetchData() {
      let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=946c212845cb4c649281c04ca5a01a92";
      let response = await fetch(url);
      let data = await response.json(); // Assuming the response is in JSON format
  
      setArticle(data.articles); // Update the state with the fetched data
    }
  
    fetchData(); // Call the fetchData function
  }, []);

  const handleNextClick=()=>{
    console.log('next')
  }
  const handlePrevClick=()=>{
    console.log('pre')
  }
   

  return (
    <div className="container my-5">
      <h1>NewsMonkey - Top Headlines</h1>
      <div className="row my-5">
      {article.map((element)=>{
        return <div className="col-md-4" key={element.url}>
        <NewsItem
          cardTitle={element.title? element.title.slice(0,40) : ""}
          cardDes={element.description? element.description.slice(0,88) : ""}
          imageUrl={element.urlToImage}
          newsUrl={element.url}
        />
      </div>
      })}    
      </div>
      <div className="container d-flex justify-content-between">
      <button type="button" className="btn btn-dark" onClick={handlePrevClick}>&larr; Previous</button>
      <button type="button" className="btn btn-dark"onClick={handleNextClick}>Next &rarr;</button>
      </div>
      
    </div>
  );
}
