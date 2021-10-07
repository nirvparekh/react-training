import List from "./List";
import PostForm from "./PostForm";

export const Posts = () => {
  return (
    <div>
      <div className="row">
        <div className="col-3">
          <PostForm />
        </div>
        <div className="col-9">
          <List />
        </div>
      </div>
    </div>
  );
};

export default Posts;
