const generatePrice = () => Math.floor((Math.random() * 50) + 15)
const experienceType = [
    {
        id: 1,
        title: "Home",
        image: "https://a0.muscache.com/ac/pictures/8b7519ec-2c82-4c09-8233-fd4d2715bbf9.jpg?interpolation=lanczos-none&size=large&output-format=jpg&output-quality=70"
    },
    {
        id: 2,
        title: "Experiences",
        image: "https://a0.muscache.com/ac/pictures/d3811ff7-cc34-471b-8aee-b0d613db0052.jpg?interpolation=lanczos-none&size=large&output-format=jpg&output-quality=70"
    },
    {
        id: 3,
        title: "Restaurants",
        image: "https://a0.muscache.com/ac/pictures/da2d8e97-90b7-409f-94ac-5ab0327c289b.jpg?interpolation=lanczos-none&size=large&output-format=jpg&output-quality=70"
    }
]
const sections = [
    {
        id: 1,
        typeId: 1,
        title: "Where to stay",  
        listings: [
            {
                id: 1,
                categoryName: "ENTIRE HOME/APT - 2 BED",
                title: "Sunny flat in the centre of Edinburgh Sunny flat in the centre of Edinburgh Sunny flat in the centre of Edinburgh",
                isFavorite: false,
                price: generatePrice(),
                image: "https://a0.muscache.com/im/pictures/12426057/2292b61c_original.jpg?aki_policy=large",
            },
            {
                id: 2,
                categoryName: "PRIVATE ROOM - 1 BED",
                title: "Cosy city apartment",
                isFavorite: false,
                price: 12,
                image: "https://a0.muscache.com/im/pictures/e6cd5b80-f66f-419a-ae8d-69bd6e514c9f.jpg?aki_policy=large",
            },
            {
                id: 3,
                categoryName: "ENTIRE APT - 2 BED",
                title: "Sunshine on Abbeyhill",
                isFavorite: false,
                price: generatePrice(),
                image: "https://a0.muscache.com/im/pictures/55109506/c7f7bae9_original.jpg?aki_policy=large",
            },
            {
                id: 4,
                categoryName: "ENTIRE APT - 3 BED",
                title: "Carlton Terrace Mews",
                isFavorite: false,
                image: "https://a0.muscache.com/im/pictures/55112199/f0a8b227_original.jpg?aki_policy=large",
                price: generatePrice()
            },
            {
                id: 5,
                categoryName: "PRIVATE ROOM - 1 BED",
                title: "Spacious room in a victorian apartment",
                isFavorite: false,
                image: "https://a0.muscache.com/im/pictures/36873442/2eaf770b_original.jpg?aki_policy=large",
                price: generatePrice()
            },
            {
                id: 6,
                categoryName: "ENTIRE APT - 3 BED",
                title: "Quiet Central Georgian Property",
                isFavorite: false,
                image: "https://a0.muscache.com/im/pictures/13973712/9b644b54_original.jpg?aki_policy=large",
                price: generatePrice()
            },
            {
                id: 7,
                categoryName: "PRIVATE ROOM - 2 BED",
                title: "Brand new flat. We've got hot water :)",
                isFavorite: false,
                image: "https://a0.muscache.com/im/pictures/e6cd5b80-f66f-419a-ae8d-69bd6e514c9f.jpg?aki_policy=large",
                price: generatePrice()
            },
            {
                id: 8,
                categoryName: "PRIVATE ROOM - 2 BED",
                title: "Brand new flat. We've got hot water :)",
                isFavorite: false,
                image: "https://a0.muscache.com/im/pictures/26200185/8e034960_original.jpg?aki_policy=large",
                price: generatePrice()
            },
            {
                id: 9,
                categoryName: "ENTIRE APT - 1 BED",
                title: "Bright room,set in the❤️of EasterRD",
                isFavorite: false,
                image: "https://a0.muscache.com/im/pictures/36873442/2eaf770b_original.jpg?aki_policy=large",
                price: generatePrice()
            }

        ]
    },
    {
        id: 2,
        typeId: 2,
        title: "Food and Drink experiences",
        listings: [
            {
                id: 10,
                categoryName: "PASTRY CLASS",
                title: "Bake w/ a Michelin starred pastry chef",
                image: "https://a0.muscache.com/im/pictures/99ea40ea-9cdc-4f1d-92b8-d684071bd7a1.jpg?aki_policy=large",
                price: generatePrice(),
                isFavorite: false,
            },
            {
                id: 11,
                categoryName: "WINE TASTING",
                title: "Taste wine with a Master Sommelier",
                image: "https://a0.muscache.com/im/pictures/99ea40ea-9cdc-4f1d-92b8-d684071bd7a1.jpg?aki_policy=large",
                price: generatePrice(),
                isFavorite: false,
            },
            {
                id: 12,
                categoryName: "WHISKEY TASTING",
                title: "Taste whiskey with a master blender",
                image: "https://a0.muscache.com/im/pictures/5492d764-3dca-478f-b264-f152bf14566a.jpg?aki_policy=large",
                price: generatePrice(),
                isFavorite: false,
            },
            {
                id: 13,
                categoryName: "BAKING CLASS",                
                title: "Make macarons with a Pastry Chef",
                image: "https://a0.muscache.com/im/pictures/5492d764-3dca-478f-b264-f152bf14566a.jpg?aki_policy=large",
                price: generatePrice(),
                isFavorite: false,
            },
            {
                id: 14,
                categoryName: "BAKING CLASS",                
                title: "Learn to bake goods from South America",                
                image: "https://a0.muscache.com/im/pictures/5492d764-3dca-478f-b264-f152bf14566a.jpg?aki_policy=large",
                price: generatePrice(),
                isFavorite: false,
            },            
            {
                id: 15,
                categoryName: "PASTRY CLASS",                
                title: "We'll cook and eat Pastry",
                image: "https://a0.muscache.com/im/pictures/26200185/8e034960_original.jpg?aki_policy=large",
                price: generatePrice(),
                isFavorite: false,
            }, 
            {
                id: 16,
                categoryName: "FOOD TASTING",
                image: "https://a0.muscache.com/im/pictures/de11348b-4689-4984-bd10-7cf1ab1ff834.jpg?aki_policy=large",
                price: generatePrice(),
                title: "We'll cook and eat in a food truck",
                isFavorite: false,
            }
        ]
    },
    {
        id: 3,
        typeId: 2,
        title: "Art and History experiences",
        listings: []        
    },
    {
        id: 4,
        typeId: 3,
        title: "Popular reservations",
        listings: []        
    }
]
export  {sections, experienceType}