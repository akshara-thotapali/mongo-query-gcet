db.employees.insertMany([
  {
    name: "Brian C",
    email: "brian@gmail.com",
    department: "IT",
    salary: 2256,
    location: ["FL", "TX"],
    date: Date(),
  },
  {
    name: "Chastity J",
    email: "chastity@gmail.com",
    department: "HR",
    salary: 4556,
    location: ["AZ", "TX"],
    date: Date(),
  },
]);

db.employees.find().skip(2); //first 2 employee details will be skiped
db.employees.find().limit(2);//only first 2 employee details are shown
db.employees.findOne();//first entered employee details are shown
db.employees.find().sort({ name: 1 }); 
//try -1 (1 is acsending order and -1 is decsending order and 
// it follows ascii values (a-z...65-90 and a-z...97-122))
db.employees.find({ department: "IT" });//displaying employee details whose dept is IT
db.employees.find({}, { _id: 0, name: 1, email: 1 });
//{}->no filter(all records will be returned)
//{ _id: 0, name: 1, email: 1 }->the projection(it controls which firld to include or exclude)
//_id=0 is excluded ,name=1 is is included,email=1 is included
//so name and email are displayed
db.employees.find({ department: "IT" }, { _id: 0, name: 1, email: 1 });
//(department="IT")->returns employees whose dept is only It
//id is excluded and name,mail is included
db.employees.find(
  { department: "IT" },
  { _id: false, name: true, email: true }
);
db.employees.countDocuments()
db.employees.find({},{dept:"$department"})
