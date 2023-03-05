export const getUsers = (param) => {
    return fetch(`https://jsonplaceholder.typicode.com/${param}`).then((res) => {
        console.log('users seen', res)
    })
}