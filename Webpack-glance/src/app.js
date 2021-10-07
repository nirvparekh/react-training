import userModule from "./users";
import { getPosts } from "./posts";
import './styles.css'

const usersObject = new userModule();
usersObject
  .getUsers()
  .then(() => {
    console.log(usersObject.TOTAL_USERS);
  })
  .catch((error) => {
    console.log(error);
  });

getPosts();
