const mongoose= require("mongoose")

const movieScheme = new mongoose.Schema(
    {
        movieName:String,
        movieImage:String,
        movieDes:String
    }
)

module.exports= mongoose.model("movie",movieScheme)