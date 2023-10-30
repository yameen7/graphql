const userMutationType =`#graphql

input userInputs{
    fname: String!
    lname: String!
    mobile: String!
    active: Boolean!
    city: String!
}
`

const userMutation =`#graphql
type Mutation{
    addUser(input:userInputs): String
}
`

module.exports=[userMutation,userMutationType]