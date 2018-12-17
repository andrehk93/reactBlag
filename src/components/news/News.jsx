import NewsStory from "./NewsStory";
import React from "react";
import {Link, Route} from "react-router-dom";
import Page from "../page/Page";
import newsArticles from "../../../mockdata/newsArticles";
import parseMockData from "../../utils/JsonParser";

// when the url matches `/tacos` this component renders
export const News = ({ match }) => (
    // here's a nested div
    <Page>
        {/* here's a nested Route,
        match.url helps us make a relative path */}
        <h1>Nyheter</h1>
        {parseMockData(newsArticles, 2, NewsStory)}
        <nav>
            <Link to={match.url + "/story"}>Story</Link>
        </nav>
        <Route path={match.url + "/story"} component={NewsStory} />

    </Page>
);