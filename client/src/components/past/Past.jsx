/* eslint-disable jsx-a11y/img-redundant-alt */
import "./past.css";
  export default function Past() {
    return (
      <div className="past">
        <img
          className="postImg"
          src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="blog image"
        />

        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Tech</span>
            <span className="postCat">Sci-Fi</span>
          </div>
          <span className="postTitle">
            Lorem ipsum dolor sit amet consecteturriosam in.
          </span>
          <hr />
          <span className="postDate">1 Hour Ago</span>
        </div>
        <p className="postDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis possimus,
          eaque quas architecto sapiente magni cumque inventore, harum laudantium
          voluptatem dolor quibusdam ullam est aut culpa temporibus incidunt
          veniam et? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Omnis possimus, eaque quas architecto sapiente magni cumque inventore,
          harum laudantium voluptatem dolor quibusdam ullam est aut culpa
          temporibus incidunt veniam et? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Omnis possimus, eaque quas architecto sapiente magni
          cumque inventore, harum laudantium voluptatem dolor quibusdam ullam est
          aut culpa temporibus incidunt veniam et?
        </p>
      </div>
    );
  }
