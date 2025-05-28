//insert documents
db.employees.insertOne({
    name:"john",
    email:"john@gamil.com",
    department:"it",
    salary:140000,
    location:["FL","OH"],
    date:Date(),
});
 
//to see result of the above
db.employees.find()

//to insert many at onces..the code goes like this
db.employees.insertMany([
  {
    name: "Mike Joseph",
    email: "mike@gmail.com",
    department: "IT",
    salary: 2456,
    location: ["FL", "TX"],
    date: Date(),
  },
  {
    name: "Cathy G",
    email: "cathy@gmail.com",
    department: "IT",
    salary: 3456,
    location: ["AZ", "TX"],
    date: Date(),
  },
]);

db.employees.find()

