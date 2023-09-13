import React, {useState} from "react";
import './search.css';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {

        return (
            <div className="search-container">
                <form action="/public/">
                    <div className="search-inpt">
                        <input type="text" placeholder="Procure seu Artigo Aqui" />
                        <button>
                            <SearchIcon sx={{color: 'snow'}}/>
                        </button>
                    </div>
                </form>            
            </div>
        )
}

export default Search;