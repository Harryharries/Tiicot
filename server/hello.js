var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
  type Account{
    userId: String
    age: Int
  }
  type Query {
    hello: String
    age: Int
    account: Account
    getClassMates(classNo: Int!):[String]
    salary(userId: String): Salary
  }
  type Salary {
    name: String
    sex: String
    money(city: Int): Int
  }
`);

var root = { 

  hello: () => { return 'Hello world!'}, 
  age: () => {return 18},
  account: ()=> {
    return {
      userId: "1234",
      age: 2
    }
  },
  getClassMates({ classNo}){
    const obj = {
      31:["harry","shen"],
      61:["hhaha","dadada"]
    }
    return obj[classNo];
  },
  salary({ userId}) {
    const name = userId;
    const sex = "male";
    const money = ({city}) => {
      if(city == 0){
        return 10000;
      }
      return 2000;
    }
    return{
      name,
      sex,
      money
    }
  }

};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.use(express.static('public'))
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));

