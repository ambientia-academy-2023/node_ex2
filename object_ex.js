//objekti esimerkki
const person={
  fname:"Teppo",
  lname:"Testi",
  setFname:function(fn){
    this.fname=fn;
  } ,
  getFname:function(){
    return this.fname;
  } 
}

console.log(person.getFname());
person.setFname("Matti");
console.log(person.getFname());