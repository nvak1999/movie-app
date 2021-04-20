import React from "react";
import Pagination from "react-bootstrap/Pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
const PaginationBar = ({
  end,
  now,
  paginationNumber,
  handleClickNext,
  handleClickPrevious,
  handleClickChoice,
  handleClickLast,
  handleClickFirst,
}) => {
  const renderPagiantion = () => {
    return paginationNumber.map((i) => {
      if (i == now) {
        return (
          <Pagination.Item active onClick={() => handleClickChoice(i)}>
            {i}
          </Pagination.Item>
        );
      } else if (i != 0) {
        return (
          <Pagination.Item onClick={() => handleClickChoice(i)}>
            {i}
          </Pagination.Item>
        );
      }
    });
  };
  // const finalFantasy = ()=>{
  //   if( )
  // }
  return (
    <div className="pagination">
      <Pagination>
        <Pagination.First onClick={() => handleClickFirst()} />
        <Pagination.Prev onClick={() => handleClickPrevious()} />
        {renderPagiantion()}

        <Pagination.Item
          active={now === paginationNumber.length}
          onClick={() => handleClickChoice(paginationNumber.length)}
        >
          {paginationNumber.length}
        </Pagination.Item>

        <Pagination.Next onClick={() => handleClickNext()} />
        <Pagination.Last onClick={() => handleClickLast()} />
      </Pagination>
    </div>
  );
};

export default PaginationBar;
