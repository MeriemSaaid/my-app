export class UserService {
  constructor() {}

  users = [
    {
      id: "123",
      username: "meriem",
      password: "meriem",
      lastName: "saaid",
      email: "meriem.saaid@gmail.com"
    },
    {
      id: "456",
      username: "ahmed",
      password: "ahmed",
      lastName: "bella",
      email: "ahmed.bella@gmail.com"
    },
    {
      id: "789",
      username: "yassine",
      password: "yassine",
      lastName: "bella",
      email: "yassine.bella@gmail.com"
    }
  ];
  //Add theb user parameter to the array users
  createUser(user: any) {
    this.users.push(user);
  }
  //Return the user thar matches the userId
  findUserById(userId: string) {
    for (let i = 0; i < this.users.length; i++) {
      const element = this.users[i];
      if (element.id == userId) {
        return element;
      }
    }
  }
  //Search for a user by name
  findUserByUsername(username) {
    for (let i = 0; i < this.users.length; i++) {
      const element = this.users[i];
      if (element.username == username) {
        return element;
      }
    }
  }
}
