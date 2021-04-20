import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import PaginationBar from "./PaginationBar";

const Api_key = process.env.REACT_APP_API_KEY;

const HomePage = () => {
  let [dataMovie, setDatamovie] = useState([]);
  const [pageEnd, setPageEnd] = useState(1);
  const [page_0w0, setPage_0w0] = useState([]);
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const getmovie = async () => {
    let url = `
    https://api.themoviedb.org/3/list/${page}?api_key=${Api_key}&language=en-US`;
    if (keyword.length > 1) {
      url = `
      https://api.themoviedb.org/3/search/movie?api_key=${Api_key}&language=en-US&query=${keyword}&page=${page}`;
      console.log(url);
      const res = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json;charset=utf-8",
          Authorization: Api_key,
        },
      });
      const data = await res.json();
      setDatamovie(data.results);
      setPageEnd(data.results.length);
      setPage_0w0(Array.from(Array(10).keys()));
      console.log(data);
      console.log(pageEnd);
    } else {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json;charset=utf-8",
          Authorization: Api_key,
        },
      });
      const data = await res.json();
      setDatamovie(data.items);
      setPageEnd(data.items.length);

      setPage_0w0(Array.from(Array(9).keys()));
      console.log(data);
      console.log(pageEnd);
    }
  };

  useEffect(() => {
    getmovie();
  }, [page, keyword]);

  const handleClickNext = () => {
    let count = page + 1;
    if (count < pageEnd.length + 1) setPage(count);
  };
  const handleClickPrevious = () => {
    let count = page - 1;
    if (count > 0) setPage(count);
  };
  const handleClickChoice = (a) => {
    setPage(a);
  };
  const handleClickLast = () => {
    setPage(page_0w0.length);
  };
  const handleClickFirst = () => {
    setPage(1);
  };
  const handleSearch = (e) => {
    if (e.length > 0) {
      setKeyword(e);
    }
    console.log(e);
  };
  return (
    <div className="content">
      <Header handleSearch={handleSearch} />
      <PaginationBar
        now={page}
        paginationNumber={page_0w0}
        handleClickNext={handleClickNext}
        handleClickPrevious={handleClickPrevious}
        handleClickChoice={handleClickChoice}
        handleClickLast={handleClickLast}
        handleClickFirst={handleClickFirst}
      />
      <div className="movie">
        {dataMovie.map((item) => {
          return (
            <Link className="link">
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                alt=""
              />
              <div className="overlay">{item.title}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
