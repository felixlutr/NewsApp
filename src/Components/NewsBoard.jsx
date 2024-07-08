import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const NewsBoard = ({}) => {
  const { category } = useParams();

  const { data: articles, isLoading } = useQuery({
    queryKey: ["articles-list", category],
    queryFn: () =>
      fetch(
        `https://newsapi.org/v2/top-headlines?country=us${
          !!category ? `&category=${category}` : ""
        }&apiKey=${import.meta.env.VITE_API_KEY}`
      )
        .then((response) => response.json())
        .then((res) => res.articles),
  });

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "400px",
          maxHeight: "100vh",
        }}
      >
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <h2 className="text-center p-3">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr)",
          gap: 20,
        }}
      >
        {/* <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr' }}> */}
        {articles?.map((news, index) => {
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
    </div>
  );
};

export default NewsBoard;
