import NewsStory from "./NewsStory";
import React from "react";
import {Link, Route} from "react-router-dom";

// when the url matches `/tacos` this component renders
export const News = ({ match }) => (
    // here's a nested div
    <div className={"blag-news"}>
        {/* here's a nested Route,
        match.url helps us make a relative path */}
        <nav>
            <Link to={match.url + "/story"}>Story</Link>
        </nav>
        <Route path={match.url + "/story"} component={NewsStory} />
        <h1>Nyheter</h1>
    </div>
);