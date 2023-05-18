let catalog = [
    {   
        _id:1,
        name:"Egg",
        price: 10.5,
        img: "egg.jpg",
        category: "Fruit"
    },
    {
        _id:2,
        name:"Banana",
        price: 5.0,
        img: "banana.jpg",
        category: "Fruit"
    },
    {
        _id:3,
        name:"Carrot",
        price: 27.0,
        img: "carrot.jpg",
        category: "Fruit"
    },
    {
        _id:4,
        name:"Cucumber",
        price: 40.6,
        img: "cucumber.jpg",
        category: "Fruit"
    },
    {
        _id:5,
        name:"Green Bell Poper",
        price: 20.1,
        img: "green_bell_poper.jpg",
        category: "Fruit"
    },
    {
        _id:6,
        name:"Lettuce",
        price: 27.0,
        img: "lettuce.jpg",
        category: "Vegetable"
    },
    {
        _id:7,
        name:"Mushroom",
        price: 27.0,
        img: "mushroom.jpg",
        category: "Vegetable"
    },
    {
        _id:8,
        name:"Onion",
        price: 27.0,
        img: "onion.jpg",
        category: "Vegetable"
    },
    {
        _id:9,
        name:"Potato",
        price: 27.0,
        img: "potato.jpg",
        category: "Vegetable"
    },
    {
        _id:10,
        name:"Red Bell Poper",
        price: 27.0,
        img: "red_bell_poper.jpg",
        category: "Vegetable"
    },
    {
        _id:11,
        name:"Tomato",
        price: 27.0,
        img: "tomato.jpg",
        category: "Vegetable"
    }
]

class DataService{
    getProducts() {
        return catalog;

        // TODO: Get catalog from server
    }
}

export default DataService