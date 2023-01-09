import React, { useEffect, useState } from "react";
import "../style/list.css";
import Fade from "react-reveal/Fade";

const List = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://houselistcrud.000webhostapp.com/data.php")
      .then((response) => response.json())
      .then((result) => {
        setList(result);
        console.log(result);
      });
  };

  return (
    <div className='list'>
      <div className='list-container'>
        <div className='list-bar'></div>
        <Fade bottom>
          <h1 className='list-title'>Find your next place to live</h1>
        </Fade>

        <div className='drop-down'>
          <div className='list-item-container'>
            <div className='item'>
              <span>Looking for</span>
              <i className='bx bx-chevron-down'></i>
            </div>

            <div className='item'>
              <span>Location</span>
              <i className='bx bx-chevron-down'></i>
            </div>
          </div>

          <div className='list-item-container'>
            <div className='item'>
              <span>Property Type</span>
              <i className='bx bx-chevron-down'></i>
            </div>

            <div className='item'>
              <span>Price for</span>
              <i className='bx bx-chevron-down'></i>
            </div>
          </div>
        </div>

        <div className='house-list' id='list'>
          {list.map((list) => (
            <Fade key={list.id}>
              <div className='card'>
                <div className='card-img-container'>
                  <img
                    src={`https://houselistcrud.000webhostapp.com/img/${list.images}`}
                    alt={list.name}
                  />
                </div>

                <h3 className='card-title'>{list.name}</h3>

                <div className='specs'>
                  <div className='car'>
                    <i className='bx bxs-car'></i>
                    <span>{list.parking}</span>
                  </div>
                  <div className='shower'>
                    <i className='bx bxs-shower'></i>
                    <span>{list.shower}</span>
                  </div>
                  <div className='floor'>
                    <i className='bx bx-grid-alt'></i>
                    <span>{list.floor}</span>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
