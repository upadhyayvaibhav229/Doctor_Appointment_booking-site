const api =  'https://fakestoreapi.com/products/';

const getData = async () => {
        const response = await fetch(api);
        const data = await response.json();
        console.log(data);
}

getData();


const appendData = (data) => {
        const detaildiv = document.createElement('div');
        // const 
}