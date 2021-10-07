export default class users {
  TOTAL_USERS = 0;
  constructor() {}
  getUsers = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();
        this.TOTAL_USERS = users.length;
        resolve();
      } catch (error) {
        console.log(error);
      }
    });
  };
}

export const TOTAL_USERS = 1000;
// Named export
