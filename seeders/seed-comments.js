const db = require('../models')

// To use await, we need an async function.
async function seed() {
    // Get the place, H-Thai-ML
    let place = await db.Place.findOne({ name: 'Comida Tradicional' })

    // Create a fake sample comment.
    let comment = await db.Comment.create({
        author: 'Scar Face',
        rant: true,
        stars: 3.0,
        content: 'Food was ok, but the icecream was way too cold'
    })

    // Add that comment to the place's comment array.
    place.comments.push(comment.id)

    //save the place now that it has comment
    await place.save()
    
    // Exit the program
    process.exit()
}

// // To use await, we need an async function.
// async function seed() {
//     // Get the place, H-Thai-ML
//     let place = await db.Place.findOne({ name: 'Vicks' })

//     // Create a fake sample comment.
//     let comment = await db.Comment.create({
//         author: 'Cris Nambo',
//         rant: false,
//         stars: 5.0,
//         content: 'Simply delicious food 5 of 5'
//     })

//     // Add that comment to the place's comment array.
//     place.comments.push(comment.id)

//     //save the place now that it has comment
//     await place.save()
    
//     // Exit the program
//     process.exit()
// }

seed()
