import React from 'react';
import { render } from 'react-dom';
import './_manifest.scss';
import GridLayout from "./layouts/grid/Grid";
import {BlagButton} from "./components/button/Button";
import PrimarySearchAppBar from "./components/menu/Menu";
import { BrowserRouter, Link, Route } from "react-router-dom";
import {News} from "./components/news/News";
import Site from "./components/site/Site";
import Page from "./components/page/Page";

const App = () => {
    return (
        <Site>
            <GridLayout container={false} item={true}>
                <PrimarySearchAppBar/>
            </GridLayout>
            <Page>
                <GridLayout classes={"blag-grid-required-class"} item={true} container={false}>
                    <BlagButton>
                        Hello from button!
                    </BlagButton>
                </GridLayout>
                <GridLayout container={true} item={true} direction={"column"} alignItems={"center"}>
                    <GridLayout container={false} item={true}>
                        <Route path="/nyheter" component={News} />
                        <Route path="/kamper" component={News} />
                        <Route path="/sesong" component={News} />
                        <Route path="/stallen" component={News} />
                    </GridLayout>
                </GridLayout>
            </Page>
        </Site>
    );
};

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);