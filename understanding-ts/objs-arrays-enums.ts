// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Tony",
//   age: 37,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"]
// };

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
}

const person = {
  name: "Tony",
  age: 37,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN
};

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

console.log(person);
