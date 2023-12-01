import React, { useEffect } from 'react'
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from "../utils/userSlice"
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from '../utils/configSlice'


const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user)
    const showGptSearch = useSelector(store => store.gpt.showGptSearch)

    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            navigate("/error")
        });

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate("/browse")
            } else {
                dispatch(removeUser())
                navigate("/")
            }
        });

        // Unsiubscribe when component unmounts
        return () => unsubscribe();

    }, [])

    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView());
    }

    const handleLanguageChange = (e) => {
        // console.log(e.target.value);
        dispatch(changeLanguage(e.target.value))
    }

    return (
        <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
            <a href='/'><img
                className='w-44 mx-auto md:mx-0'
                src={LOGO}
                alt='logo'
            /></a>
            {user &&
                (<div className='flex p-2 '>

                    {showGptSearch &&
                        (<select
                            className='p-2 bg-gray-900 text-white m-2'
                            onChange={handleLanguageChange}
                        >
                            {SUPPORTED_LANGUAGES
                                .map(lang =>
                                    <option key={lang.identifier}
                                        value={lang.identifier}>
                                        {lang.name}
                                    </option>)}
                        </select>)}

                    <button
                        className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg'
                        onClick={handleGptSearchClick}
                    >
                        {showGptSearch ? "Homepage" : "GPT Search"}
                    </button>

                    <img
                        className="hidden md:block w-12 h-12"
                        alt='user'
                        src={user?.photoURL}
                    />
                    <button className="font-bold text-white " onClick={handleSignOut}>(Sign Out)</button>
                </div>)}
        </div>
    )
}

export default Header