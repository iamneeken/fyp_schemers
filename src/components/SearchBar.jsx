import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import './searchBar.css'

function SearchBar() {

    const [keyword, setKeyword] = useState('')

    let history = useHistory()
    const submitHandler= (e) =>{
        e.preventDefault()
        if(keyword){
            history.push(`/?keyword=${keyword}`)
        }
        else{
            history.push(history.push(history.location.pathname)) //Sending to the current URL
        }
    }
    return (
        <div>
            <form onSubmit={submitHandler} inline>
                <input 
                type="text" 
                name='q'
                onChange={(e) => setKeyword(e.target.value)}
                className='mr-sm-1 ml-sm-1'
                placeholder="Search Products....."
                />
                <button 
                type='submit'
                className="btn btn-outline-success"
                style={{padding:2, width:200}}
                >Search</button>
            </form>
        </div>
    )
}

export default SearchBar
