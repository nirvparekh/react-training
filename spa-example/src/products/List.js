import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

// FLUX ARCHITECTURE

const List = () => {
  // initializing State variable;
  const [posts, set_Posts] = useState([]);

  // useEffect
  // componentDidUpdate
  useEffect(() => {
    console.log("I will do something here.");
  });

  // componentDidMount: first only when component mounted
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const result = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await result.json();
        set_Posts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row mt-4">
        {posts.map((post, i) => {
          return (
            <div key={i} className="col-3 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.body}</p>
                  <Link to={`/posts/${post.id}`} className="btn btn-primary">
                    Read more...
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default List;

// Class component
// export default class List extends Component {
//   constructor() {
//     super();
//     this.state = {
//       posts: [],
//     };
//   }

//   // FIRST TIME WHEN THE COMPONENT MOUNTED
//   async componentDidMount() {
//     try {
//       const result = await fetch("https://jsonplaceholder.typicode.com/posts");
//       const data = await result.json();
//       this.setState({ posts: data });
//     } catch (error) {
//       console.log(error);
//     }
//   }

// componentDidUpdate() {
//  console.log('I will do something here.')
// }

//   render() {
//     return (
//       <div className="container-fluid">
//         <div className="row mt-4">
//           {this.state.posts.map((post) => {
//             return (
//               <div className="col-3 mb-4">
//                 <div className="card">
//                   <div className="card-body">
//                     <h5 className="card-title">{post.title}</h5>
//                     <p className="card-text">{post.body}</p>
//                     <Link to={`/posts/${post.id}`} className="btn btn-primary">
//                       Read more...
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }
