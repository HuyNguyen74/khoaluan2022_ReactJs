import productApi from "../services/product.services"

// Authentication
export const USER_LOGIN = "USER_LOGIN"
export const USER_LOGOUT = "USER_LOGOUT"

// Cart
export const ADD_CART = "ADD_CART"
export const REMOVE_CART = "REMOVE_CART"
export const DELETE_CART = "DELETE_CART"
// const fetchProduct = async () =>{
//     try {
//         const res = await productApi.getAll();
//         console.log("data ",res);
//         return res.data;
//     } catch (error) {
//         alert("loi product",error);
//     }
// }
// export const PRODUCTSS=fetchProduct();

export const PRODUCTS = [
    {
        id:'product1',
        title:'Tiered Hem Maxi Dress 1',
        description:'Tiered Hem Maxi Dress',
        price:98000,
        images:[
            'https://www.gap.com/webcontent/0028/877/152/cn28877152.jpg',
            'https://www.gap.com/webcontent/0028/877/249/cn28877249.jpg'
        ],
        size:['XS','S','ML','XL','XXL'],
        idCategory:'category1',

    },
    {
        id:'product2',
        title:'Tiered Hem Maxi Dress 2',
        description:'Tiered Hem Maxi Dress',
        price:98000,
        images:[
            'https://www.gap.com/webcontent/0028/947/888/cn28947888.jpg',
            'https://www.gap.com/webcontent/0028/948/115/cn28948115.jpg'
        ],
        size:['XS','S','ML','XL','XXL'],
        idCategory:'category2',

    },
    {
        id:'product3',
        title:'Tiered Hem Maxi Dress 3',
        description:'Tiered Hem Maxi Dress',
        price:98000,
        images:[
            'https://www.gap.com/webcontent/0028/874/645/cn28874645.jpg',
            'https://www.gap.com/webcontent/0028/874/684/cn28874684.jpg'
        ],
        size:['XS','S','ML','XL','XXL'],
        idCategory:'category3',

    },
    {
        id:'product4',
        title:'Tiered Hem Maxi Dress 4',
        description:'Tiered Hem Maxi Dress',
        price:98000,
        images:[
            'https://www.gap.com/webcontent/0028/916/906/cn28916906.jpg',
            'https://www.gap.com/webcontent/0028/916/941/cn28916941.jpg'
        ],
        size:['XS','S','ML','XL','XXL'],
        idCategory:'category2',

    },
    {
        id:'product6',
        title:'Tiered Hem Maxi Dress 5',
        description:'Tiered Hem Maxi Dress',
        price:98000,
        images:[
            'https://www.gap.com/webcontent/0028/916/906/cn28916906.jpg',
            'https://www.gap.com/webcontent/0028/916/941/cn28916941.jpg'
        ],
        size:['XS','S','ML','XL','XXL'],
        idCategory:'category2',

    },
    {
        id:'product7',
        title:'Tiered Hem Maxi Dress',
        description:'Tiered Hem Maxi Dress',
        price:98000,
        images:[
            'https://www.gap.com/webcontent/0028/916/906/cn28916906.jpg',
            'https://www.gap.com/webcontent/0028/916/941/cn28916941.jpg'
        ],
        size:['XS','S','ML','XL','XXL'],
        idCategory:'category2',

    },
    {
        id:'product8',
        title:'Tiered Hem Maxi Dress',
        description:'Tiered Hem Maxi Dress',
        price:98000,
        images:[
            'https://www.gap.com/webcontent/0028/916/906/cn28916906.jpg',
            'https://www.gap.com/webcontent/0028/916/941/cn28916941.jpg'
        ],
        size:['XS','S','ML','XL','XXL'],
        idCategory:'category2',

    },
    {
        id:'product9',
        title:'Tiered Hem Maxi Dress',
        description:'Tiered Hem Maxi Dress',
        price:98000,
        images:[
            'https://www.gap.com/webcontent/0028/916/906/cn28916906.jpg',
            'https://www.gap.com/webcontent/0028/916/941/cn28916941.jpg'
        ],
        size:['XS','S','ML','XL','XXL'],
        idCategory:'category2',

    },
    {
        id:'product10',
        title:'Tiered Hem Maxi Dress',
        description:'Tiered Hem Maxi Dress',
        price:98000,
        images:[
            'https://www.gap.com/webcontent/0028/916/906/cn28916906.jpg',
            'https://www.gap.com/webcontent/0028/916/941/cn28916941.jpg'
        ],
        size:['XS','S','ML','XL','XXL'],
        idCategory:'category2',

    },
    {
        id:'product11',
        title:'aTiered Hem Maxi Dress',
        description:'Tiered Hem Maxi Dress',
        price:98000,
        images:[
            'https://www.gap.com/webcontent/0028/916/906/cn28916906.jpg',
            'https://www.gap.com/webcontent/0028/916/941/cn28916941.jpg'
        ],
        size:['XS','S','ML','XL','XXL'],
        idCategory:'category2',

    },
]
export const CATEGORIES = [
    {
        id:'category1',
        name:'Quần'
    },
    {
        id:'category2',
        name:'Áo'
    },
    {
        id:'category3',
        name:'Hoodies'
    },
    {
        id:'category4',
        name:'Boomber'
    },{
        id:'category5',
        name:'Quần jean'
    }
]