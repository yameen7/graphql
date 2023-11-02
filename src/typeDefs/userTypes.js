const userTypes =`#graphql

type User {
    fname: String
    lname: String
    mobile: String
    active: Boolean
    city: String
}
input userInput{
    fname: String
    lname: String
    mobile: String
    active: Boolean
    city: [String]
}
`

const users =`#graphql
type Query{
    users(search:userInput): [User]
    searchUsers(search:String!):[User]
}
`

module.exports=[users,userTypes]