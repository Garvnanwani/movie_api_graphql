export const people = [{
    id: 1,
    name: "Garv",
    age: 20,
    gender: "male"
}, {
    id: 2,
    name: "Something",
    age: 20,
    gender: "female"
}, {
    id: 3,
    name: "name",
    age: 20,
    gender: "hello"
}, {
    id: 4,
    name: "hey",
    age: 20,
    gender: "female"
}, {
    id: 5,
    name: "kuch bhi",
    age: 20,
    gender: "female"
}]

export const getById = (id) => {
    const filteredPeople = people.filter(person => id === person.id)
    return filteredPeople[0]
}
