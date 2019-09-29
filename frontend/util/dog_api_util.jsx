export const fetchDogs = () => {
    return(
        $.ajax({
            method: 'GET',
            url: 'https://dog.ceo/api/breeds/list/all'
        })
    )
}