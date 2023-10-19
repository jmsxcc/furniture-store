import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="container" id="home">
      <div className="box1">
        <img src="https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" />
      </div>

      <div className="box2">
        <div className="grid-info">
          <div>
            <h2>HANDMADE PIECE</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem doloremque qui ad eveniet aperiam. Nam quis illum
              soluta accusantium fuga!
            </p>
            <button className="btn">Check Out</button>
          </div>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
        </div>
      </div>

      <div className="box3">
        <div>
          <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" />
        </div>
        <div className="grid-info">
          <div>
            <h2>HANDMADE PIECE</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod amet
              fugit consectetur inventore consequatur ex harum molestias facilis
              quis cupiditate.
            </p>
            <button className="btn">Check Out</button>
          </div>
        </div>
      </div>

      <div className="box4">
        <div>
          <img src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
        </div>
        <div className="grid-info">
          <div>
            <h2>HANDMADE PIECE</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores pariatur quia possimus illo suscipit molestiae aut.
              Accusantium praesentium facilis quod.
            </p>
            <button className="btn">Check Out</button>
          </div>
        </div>
      </div>

      <div className="box5">
        <img src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
      </div>
    </div>
  );
};

export default Home;
