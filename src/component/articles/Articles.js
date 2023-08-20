import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import {BsThreeDots} from 'react-icons/bs';
import postArticlesAPI from "./articlesSlice"
import { useSelector } from "react-redux";
import Comment from "../comment/Comment";

const GetArticles = () => {
  const articles = useSelector(state => state.articles.data)
 
  return(
    <div className="container mt-2">
      {articles.map((item, index) => {
        return (
          <div className="container mb-2 " style={{ backgroundColor: "#CCFFFF",borderRadius:'3px'}} key={"key" + index}>
            <div className="row" >
              <div className="col-sm-2 col-md-2 col-3 col-lg-1 pt-2" >
                <img
                  className="img-fluid rounded-circle"
                  src={item.author.image}
                  alt=""
                  width="50" height="50"
                />
              </div>
              <div className="  col-sm-9 col-md-9 col-7 col-lg-10 pt-1"  style={{textAlign:'left'}} >
                <div className="row" style={{fontSize:'20px',fontWeight:'700'}}>{item.author.username}</div>
                <div className="row" style={{ fontSize: "10px" }}>
                  {item.createdAt}
                </div>
              </div>
              <div type="button" className="col-sm-1 col-md-1 col-2 col-lg-1 pt-1 " style={{textAlign:'right'}} ><BsThreeDots/></div>
            </div>
            <hr style={{opacity:'1',color:'#DDDDDD'}}/>
            <div
              className="row-12 fs-4"
              style={{ fontWeight: "600", textAlign: "left" }}
            >
              {item.title}
            </div>
            <div className="row-12 mb-3" style={{ textAlign: "justify" }}>
                      {item.body}
            </div>
            <div className="row-12" style={{ textAlign: "justify" }}>
              {item.description}<br/>
              slug:{item.description}
              <div style={{fontStyle:'italic'}}>#{item.tagList}</div>
              <hr style={{opacity:'1',color:'#DDDDDD'}} />
            </div>
            <div className="row-12 pb-2" style={{ textAlign: "justify" }}>
            {
              // <LikeArticles slug={item.slug} count={item.favoritesCount} favorited={item.favorited}/>
            }
            </div>
            <div className="row-12 pb-2">
              {/* <GetComments slug={item.slug}/> */}
              <Comment slug="3"/>
            </div>
          </div>
        );
      })}
      <ReactPaginate
        nextLabel=">"
        // onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        pageCount={20}
        previousLabel="<"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default GetArticles;