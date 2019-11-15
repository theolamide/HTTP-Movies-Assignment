import React, {useState, useEffect} from 'react';
import axios from 'axios';

const initial = {
    title: '',
    director: '',
    metascore: ''
    // stars: [],
}

export const UpdateMovie = props => {

    const[formDets, setFormDets] = useState(initial);

    useEffect(()=>{
        axios
      .get(`http://localhost:5000/api/movies/${props.match.params.id}`)
      .then(res => setFormDets(res.data))
      .catch(err => console.log(err.response));
    },[])

    
   const handleSubmit = event => {
       event.preventDefault();
       axios
       .put(`http://localhost:5000/api/movies/${formDets.id}`, formDets)
       .then(() =>{
           console.log(formDets.id)
           props.history.push(`/movies/${formDets.id}`);
         })
       .catch(err => console.log(err));
   } 

   const handleChange = event => {
      setFormDets({...formDets, [event.target.name]:event.target.value})
   };


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="title"
                    placeholder="title"
                    onChange={handleChange}
                    value={formDets.title}                   
                />

                <input 
                    type="text"
                    name="director"
                    placeholder="director"
                    value={formDets.director}
                    onChange={handleChange}
                />

                <input 
                    type="text"
                    name="metascore"
                    placeholder="metascore"
                    value={formDets.metascore}
                    onChange={handleChange}
                />

                {/* <input 
                    type="text"
                    name="star"
                    placeholder="star"
                    // value=""
                    // onChange=""
                /> */}

                <button>Update</button>

            </form>
        </div>
    )
}