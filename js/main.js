const API_URL ='https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72';

let currentPage = 1;

const ITEMS_PER_PAGE = 8;

const filterPlaces = (input, places) => {
    return places.filter(place => place.name.toLowrCase().includes(input.value.toLowerCase))
}

const paginaDate = data => {
    return data.reduce((total, current, index) =>{
        const belongArrayIndex = Math.ceil((index +1)/ ITEMS_PER_PAGE)-1;
        total[belongArrayIndex]
            ? total[belongArrayIndex].push(current)
            : total.push([current]);
        return total;
    }, []);
    };

const fetchAPI = async url =>{
    let response = await fetch(url);
    const texteResponse = await response.text();
    return JSON.parse(textResponse);
}




