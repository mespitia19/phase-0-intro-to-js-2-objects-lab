// Write your solution in this file!
const employee = {
    name: "suga",
    streetAddress: "home",
}

function updateEmployeeWithKeyAndValue(employee, name, address) {
    return{
        name: 'Sam',
        streetAddress: '11 Broadway'
    }
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee

}

function deleteFromEmployeeByKey(employee, key) {
    const newObject = Object.assign({}, employee)
    delete newObject[key]
    return newObject;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    const newObject = Object.assign(employee, key)
    delete newObject[key]
    return newObject;
}