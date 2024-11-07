// src/data/recipes.js

const recipes = [
    {
        id: 1,
        name: "Spaghetti Marinara",
        ingredients: ["spaghetti", "tomato", "onion", "garlic", "basil"],
        instructions: "Cook spaghetti according to package instructions. In a pan, cook onion and garlic until softened. Add tomato sauce and basil, simmer for 10 minutes. Combine with spaghetti and serve.",
        imgUrl: "https://countryrecipebook.com/wp-content/uploads/2018/08/spaghetti-marinara.jpg"
    },
    {
        id: 2,
        name: "Vegetable Stir Fry",
        ingredients: ["broccoli", "carrot", "bell pepper", "soy sauce", "garlic"],
        instructions: "In a pan, sauté garlic until golden. Add broccoli, carrot, and bell pepper. Stir fry with soy sauce for 5-7 minutes or until vegetables are tender.",
        imgUrl: "https://nyssaskitchen.com/wp-content/uploads/2022/03/Veggie-Stir-Fry-16-1365x2048.jpg"
    },
    {
        id: 3,
        name: "Chicken Caesar Salad",
        ingredients: ["chicken", "romaine lettuce", "croutons", "parmesan", "caesar dressing"],
        instructions: "Grill chicken until cooked through. Toss romaine lettuce with caesar dressing, top with chicken, croutons, and parmesan cheese.",
        imgUrl: "https://heartbeetkitchen.com/foodblog/wp-content/uploads/2022/06/ultimate-grilled-chicken-caesar-salad.jpg"
    },
    {
        id: 4,
        name: "Pancakes",
        ingredients: ["flour", "milk", "egg", "sugar", "butter"],
        instructions: "Mix flour, milk, egg, and sugar until smooth. Heat a pan with butter and cook pancakes on both sides until golden brown.",
        imgUrl: "https://img.freepik.com/premium-photo/stack-golden-brown-pancakes-drizzled-with-maple-syrup-white-plate_1282444-164763.jpg"
    },
    {
        id: 5,
        name: "Avocado Toast",
        ingredients: ["bread", "avocado", "salt", "pepper", "lemon"],
        instructions: "Toast bread slices. Mash avocado with salt, pepper, and a squeeze of lemon. Spread avocado mixture on toast and serve.",
        imgUrl: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/avocado-on-toast-96e3158.jpg"
    },
    {
        id: 6,
        name: "Garlic Bread",
        ingredients: ["bread", "garlic", "butter", "parsley", "salt"],
        instructions: "Mix softened butter with minced garlic and parsley. Spread on bread slices and bake until golden and crispy.",
        imgUrl: "https://foodbyjoe.com/wp-content/uploads/2021/02/IMG_7498-1.jpg"
    },
    {
        id: 7,
        name: "Broccoli Soup",
        ingredients: ["broccoli", "onion", "garlic", "cream", "chicken stock"],
        instructions: "Sauté onion and garlic until golden, add broccoli and chicken stock. Simmer until broccoli is tender, then blend and add cream.",
        imgUrl: "https://www.allrecipes.com/thmb/C54LUMeBsA9cHYruHmVKf1nxQ4A=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ALR-230882-best-cream-of-broccoli-and-potato-soup-VAT-4x3-3-a9b661618b504f48b11424e83ccfe6ec.jpg"
    },
    {
        id: 8,
        name: "Lemon Garlic Chicken",
        ingredients: ["chicken", "lemon", "garlic", "thyme", "olive oil"],
        instructions: "Marinate chicken with lemon juice, garlic, and thyme. Grill until chicken is golden brown.",
        imgUrl: "https://feelgoodfoodie.net/wp-content/uploads/2019/07/Grilled-Lemon-Chicken-4.jpg"
    },
    {
        id: 9,
        name: "Tomato Basil Soup",
        ingredients: ["tomato", "basil", "garlic", "onion", "cream"],
        instructions: "Sauté garlic and onion until golden, add tomatoes and basil. Simmer until tomatoes break down, blend until smooth, and add cream.",
        imgUrl: "https://cdn.loveandlemons.com/wp-content/uploads/2020/09/tomato-basil-soup-recipe-734x1024.jpg"
    },
    {
        id: 10,
        name: "Carrot and Bell Pepper Salad",
        ingredients: ["carrot", "bell pepper", "lettuce", "olive oil", "lemon"],
        instructions: "Slice carrot and bell pepper thinly. Toss with lettuce, olive oil, and lemon juice. Serve fresh.",
        imgUrl: "https://www.thescramble.com/wp-content/uploads/2020/07/Green-Salad-with-Red-Bell-Peppers-Toasted-Almonds-Shredded-Carrots-and-Ginger-Dressing-5691.opt_-500x500.jpg.webp"
    },
    {
        id: 11,
        name: "Tomato Bruschetta",
        ingredients: ["tomato", "basil", "garlic", "bread", "olive oil"],
        instructions: "Toast bread slices. Top with a mixture of diced tomato, basil, garlic, and olive oil.",
        imgUrl: "https://www.theclevercarrot.com/wp-content/uploads/2022/09/Sourdough-Bruschetta-with-Tomatoes-2.jpg"
    },
    {
        id: 12,
        name: "Mushroom Risotto",
        ingredients: ["mushrooms", "rice", "onion", "butter", "parmesan"],
        instructions: "Sauté onion and mushrooms in butter. Add rice and cook with broth until creamy, finish with parmesan.",
        imgUrl: "https://evergreenkitchen.ca/wp-content/uploads/2021/10/Creamy-Mushroom-Risotto-1.jpg"
    },
    {
        id: 13,
        name: "Eggplant Parmesan",
        ingredients: ["eggplant", "tomato sauce", "mozzarella", "parmesan", "basil"],
        instructions: "Bread and fry eggplant slices. Layer with tomato sauce and cheese, bake until bubbly.",
        imgUrl: "https://www.onceuponachef.com/images/2022/09/eggplant-parmesan-1120x1449.jpg"
    },
    {
        id: 14,
        name: "Chicken Tacos",
        ingredients: ["chicken", "taco shells", "cheese", "lettuce", "tomato"],
        instructions: "Cook chicken and assemble in taco shells with cheese, lettuce, and tomato.",
        imgUrl: "https://www.ourhappymess.com/wp-content/uploads/2023/07/Chicken-Tacos-with-Cilantro-Lime-Slaw-9x16-1.jpg"
    },
    {
        id: 15,
        name: "Zucchini Noodles",
        ingredients: ["zucchini", "tomato", "garlic", "olive oil", "basil"],
        instructions: "Spiralize zucchini into noodles. Sauté with garlic, tomato, and olive oil, and serve with basil.",
        imgUrl: "https://cdn-aboak.nitrocdn.com/QJsLnWfsWAiuukSIMowyVEHtotvSQZoR/assets/images/optimized/rev-ca18e1d/www.slenderkitchen.com/sites/default/files/styles/featured_750/public/recipe_images/tomato-basil-zucchini-noodles-turkey.jpg"
    },
    {
        id: 16,
        name: "Cauliflower Rice",
        ingredients: ["cauliflower", "olive oil", "garlic", "onion", "parsley"],
        instructions: "Pulse cauliflower in a food processor. Sauté with garlic, onion, and olive oil until tender.",
        imgUrl: "https://www.southernliving.com/thmb/6MD2TeeV410mp_LuyXuzFCRVeTI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/27162_FGFsuperbowl_0359_4x3-2000-0d9e3c72fed441849ad7773bc9909306.jpg"
    },
    {
        id: 17,
        name: "Chickpea Salad",
        ingredients: ["chickpeas", "cucumber", "tomato", "lemon", "parsley"],
        instructions: "Combine chickpeas, cucumber, tomato, and parsley. Toss with lemon juice.",
        imgUrl: "https://www.howsweeteats.com/wp-content/uploads/2023/09/chickpea-salad-bowl-6.jpg"
    },
    {
        id: 18,
        name: "Sweet Potato Fries",
        ingredients: ["sweet potato", "olive oil", "salt", "pepper", "paprika"],
        instructions: "Cut sweet potatoes into fries. Toss with olive oil, salt, pepper, and paprika. Bake until crispy.",
        imgUrl: "https://www.chewoutloud.com/wp-content/uploads/2023/01/Sweet-Potato-Fries-on-White-Plate-with-Ketchup-1024x1536.jpg"
    },
    {
        id: 19,
        name: "Cucumber Sandwiches",
        ingredients: ["bread", "cucumber", "cream cheese", "dill", "lemon"],
        instructions: "Spread cream cheese on bread, add thinly sliced cucumber, sprinkle with dill and lemon juice.",
        imgUrl: "https://www.themediterraneandish.com/wp-content/uploads/2022/07/cucumber-sandwich-recipe-1.jpg"
    },
    {
        id: 20,
        name: "Baked Salmon",
        ingredients: ["salmon", "lemon", "garlic", "olive oil", "thyme"],
        instructions: "Marinate salmon with lemon juice, garlic, olive oil, and thyme. Bake until cooked through.",
        imgUrl: "https://www.justalittlebitofbacon.com/wp-content/uploads/2019/05/slow-roasted-salmon-2.jpg"
    }
];

export default recipes;
