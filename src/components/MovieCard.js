import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
    if (!posterPath) return null;
    const handleCard = () => {
        alert("We don't have any movie data. Explore our GPT search!!")
    }
    return (
        <>
            <div className="w-36 md:w-48 pr-4 ">
                <img
                    alt="Movie Card"
                    src={IMG_CDN_URL + posterPath}
                    onClick={handleCard}
                />
            </div>
        </>
    );
};
export default MovieCard;