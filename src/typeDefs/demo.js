
const userTypes =`#graphql

type User {
    fname: String
    lname: String
    mobile: String
    active: Boolean
    city: String
}

`

const users =`#graphql
type Query{
    users: [User]
}
`

module.exports=[users,userTypes]