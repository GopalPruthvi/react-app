import { useState } from "react";

const SearchYear = ({onAdd}) => {
       const [date, setDate] = useState('')
    
       const onSubmit= (e) => {
           e.preventDefault()
           if(!date){
               alert('Please Enter Year in Search Field')
               return
           }
           onAdd({date})
        //    setDate('')
       }
    return (
        <div className='search-form' onSubmit={onSubmit}>
            <form>
                <div>
                    <input className='search-box' type="search" placeholder='Enter Year eg:2015' id="searchYear" 
                    value={date} 
                    onChange={(e) => setDate(e.target.value)}/>
                    <input type='submit' className='btn' value='Search' />
                </div>
            </form>
        </div>
    )
}

export default SearchYear;