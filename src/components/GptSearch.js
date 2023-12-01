import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
    return (
        <>
            <div className="fixed -z-10">
                <img
                    className="md:h-full h-screen object-cover"
                    src={BG_URL}
                    alt="logo"
                />
            </div>
            <div >
                <GptSearchBar />
                <GptMovieSuggestions />
            </div>
        </>
    )
}

export default GptSearch