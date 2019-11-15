import React, {useState, useEffect} from 'react';
import axios from 'axios';

const initial = {
    title: '',
    director: '',
    metascore: '',
    stars: [],
}

export const UpdateMovie = props => {


    return(
        <div>
            <form>
                <imput 
                    type="text"
                    name="title"
                    placeholder="title"
                    // value=""
                    // onChange=""
                />

                <imput 
                    type="text"
                    name="director"
                    placeholder="director"
                    // value=""
                    // onChange=""
                />

                <imput 
                    type="text"
                    name="metascore"
                    placeholder="metascore"
                    // value=""
                    // onChange=""
                />

                {/* <imput 
                    type="text"
                    name="star"
                    placeholder="star"
                    // value=""
                    // onChange=""
                /> */}

            </form>
        </div>
    )
}