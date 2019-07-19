import React, { Component } from 'react';
import './style.css'


class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <form>
                <div className="row justify-content-center">
                    <div className="col-md-11 col-9">
                        <input
                         type="text"
                          placeholder="Search"
                           id="search-form" 
                           className="form-control"
                           />
                    </div>
                    <div className="col-md-1 col-3 px-0">
                        <button type="submit" className="btn btn-secondary border border-primary btn-sm px-2 py-2">
                            search
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

export default SearchForm;