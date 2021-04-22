const garv = {
    name: "Garv",
    age: 20,
    gender: "male"
}

const resolvers = {
    Query: {
        person: () => garv
    },
}

export default resolvers
