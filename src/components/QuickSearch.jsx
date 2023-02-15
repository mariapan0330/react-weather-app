import React, { useState } from 'react';

export default function QuickSearch(props) {
    const [cityInput, setCityInput] = useState('');

    function handleCityInputChange(e) {
        setCityInput(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit(cityInput);
    }

    return (
        <>
        <h1>QUICK SEARCH</h1>
        <form className="mx-5 d-flex" onSubmit={handleSubmit}>
            <input
                className="form-control me-2 mt-2 px-3 py-2 fs-5"
                type="text"
                placeholder="Quick Search By City..."
                value={cityInput}
                onChange={handleCityInputChange}
            />
            <button
                className="btn btn-outline-warning me-2 mt-2 px-3 py-2 fs-5"
                type="submit"
            >
                Search
            </button>
            <button
                className="btn btn-outline-light me-2 mt-2 px-3 py-2 fs-5"
                type="button"
                onClick={props.onAdvancedClick}
            >
                Advanced Search
            </button>
        </form>
        </>
    );
}
