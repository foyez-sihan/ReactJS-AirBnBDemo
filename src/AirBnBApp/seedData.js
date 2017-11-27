const generatePrice = () => Math.floor((Math.random() * 50) + 15)
let filterTypes = [
    {
        id: 1,
        title: "Home",
        image: "https://a0.muscache.com/ac/pictures/8b7519ec-2c82-4c09-8233-fd4d2715bbf9.jpg?interpolation=lanczos-none&size=large&output-format=jpg&output-quality=70",
        isSelected: false

    },
    {
        id: 2,
        title: "Experiences",
        image: "https://a0.muscache.com/ac/pictures/d3811ff7-cc34-471b-8aee-b0d613db0052.jpg?interpolation=lanczos-none&size=large&output-format=jpg&output-quality=70",
        isSelected: false
    },
    {
        id: 3,
        title: "Restaurants",
        image: "https://a0.muscache.com/ac/pictures/da2d8e97-90b7-409f-94ac-5ab0327c289b.jpg?interpolation=lanczos-none&size=large&output-format=jpg&output-quality=70",
        isSelected: false
    }
]
const seedSections = [
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
                title: "Quiet Central Georgian Property.",
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
        listings: [
            {
                id: 22,
                category: "PHOTO CLASS",
                title: "Look like a star in your photos in Barceloneta neighbourhood",
                isFavorite: false,
                price: generatePrice(),
                image:"https://a0.muscache.com/im/pictures/c1419863-1d61-4670-89e8-1817c092c4de.jpg?aki_policy=large"
            },
            {
                id: 23,
                category:"CULTURE WALK",
                title: "Hidden Sagrada Familia's secrets & typical Catalan breakfast",
                isFavorite: false,
                price: generatePrice(),
                image: "https://a0.muscache.com/im/pictures/e961b091-0fb9-4c17-b4d7-6a86c375c53c.jpg?aki_policy=large"
            },
            {
                id: 24,
                category: "SHOPPING",
                title: "Meet local designers & the trendiest places in Barcelona",
                isFavorite: false,
                price: generatePrice(),
                image: "https://a0.muscache.com/im/pictures/1090104d-caa1-4378-aa41-95c1a57c8e20.jpg?aki_policy=large"
            },
            {
                id: 25,
                categoryName :"PHOTO CLASS",
                title: "Learn the art of film photography",
                isFavorite: false,
                price: generatePrice(),
                image: "https://a0.muscache.com/im/pictures/61b06f65-c8e0-49bb-a5e1-871efa4d6e91.jpg?aki_policy=large"
            },
            {
                id: 26,
                categoryName: "MURAL WORKSHOP",
                title: "Join a multidisciplinary artist in creating a mural on the neighborhood streets",
                isFavorite: false,
                price: generatePrice(),
                image: "https://a0.muscache.com/im/pictures/81059420-2193-4532-b358-665a2647fcda.jpg?aki_policy=large"
            },
            {
                id:27,
                categoryName: "BIKE RIDE",
                title: "Ride an e-bike through Gaudi’s history",
                isFavorite: false,
                price: generatePrice(),
                image: "https://a0.muscache.com/im/pictures/e0d2bd9a-aad5-42b4-a026-d1e60e5ee6fa.jpg?aki_policy=large"
            }
        ]
    },
    {
        id: 4,
        typeId: 3,
        title: "Popular restaurants",
        listings: [
            {
                id: 17,
                categoryName: "FOOD & DRINK",
                title: "Indulge in Izakaya food & drink culture in Shinjuku",
                isFavorite: false,
                price: generatePrice(),
                image: "https://a0.muscache.com/im/pictures/de11348b-4689-4984-bd10-7cf1ab1ff834.jpg?aki_policy=large"
            },
            {
                id: 18,
                categoryName: "PIZZERIA",
                title: "Pasquale Jones",
                isFavorite: false,
                price: generatePrice(),
                image: "https://a0.muscache.com/ac/pictures/0fdd0c36-c6c7-4ca3-beb1-7dfdbf7471bd.jpg?interpolation=lanczos-none&size=large&output-format=jpg&output-quality=70"
            },
            {
                id: 19,
                categoryName: "FINE SHUSHI BAR",
                title: "sushi AMANE",
                isFavorite: false,
                price: generatePrice(),
                image: "https://a0.muscache.com/ac/pictures/456e1325-74b4-4ec6-a1e5-ecf48c2ef507.jpg?interpolation=lanczos-none&size=large&output-format=jpg&output-quality=70"
            },
            {
                id: 20,
                categoryName: "NEW AMERICAN",
                title: "Banter",
                isFavorite: false,
                price: generatePrice(),
                image: "https://a0.muscache.com/ac/pictures/c84f7961-93c3-4966-a8bf-b64bec847afc.jpg?interpolation=lanczos-none&size=large&output-format=jpg&output-quality=70"
            },
            {
                id: 21,
                categoryName: "PIZZERIA",
                title: "Osteria Cotta",
                isFavorite: false,
                price: generatePrice(),
                image: "https://a0.muscache.com/ac/pictures/285e91af-af15-48db-98f8-c893c4de3620.jpg?interpolation=lanczos-none&size=large&output-format=jpg&output-quality=70"
            },
        ]
    }
]
export  {seedSections, filterTypes}