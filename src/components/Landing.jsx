import React from 'react'
import './Landing.css'
import QuickSearch from "./QuickSearch"

export default function Landing(props){
    return (
        <div className="landing">
            <h1>This is the Landing Page</h1>
            <QuickSearch onSubmit={props.onSubmit}/>
        </div>
    )
}