export const fetchDogs = () => {
    debugger
    return(
        $.ajax({
            method: 'GET',
            url: 'https://dog.ceo/api/breeds/list/all',
            contentType: 'application/json',
            dataType: 'jsonp',
            success: function(result){
                console.log(result);
            },
        })
    )
}