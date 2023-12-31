const {Reviews, User} = require('../../db');

const getAllReviews = async ()=>{
    const reviews = await Reviews.findAll({
        include: [
            {
                model: User,
                attributes:["name", "nickName", "image"]

                },
            
        ]
    });
    return reviews;
}

const makeReview = async ( rating, reviewsText, userId, gameId )=>{
    const date = new Date(Date.now());
    const newReview = await Reviews.create({
        rating,
        reviewsText,
        userId,
        gameId
    });

console.log(newReview);
return newReview
};

const putReview =  async (id, changes)=>{
    const review = await Reviews.findByPk(id);
    let update = {
        rating: changes.rating,
        reviewsText: changes.textReview
        
    }
    review.set(update)
    await review.save()
    return review;
};

const deleteReview = async (id)=>{
    await Reviews.destroy({
        where: {id}
    });
    return "Review Deleted";
}
module.exports ={makeReview, putReview, deleteReview, getAllReviews}