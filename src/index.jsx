import React from 'react';
import { render } from 'react-dom';
import './_manifest.scss';
import GridLayout from "./layouts/grid/Grid";
import PrimarySearchAppBar from "./components/menu/Menu";
import { BrowserRouter, Route } from "react-router-dom";
import {News} from "./components/news/News";
import Site from "./components/site/Site";
import Page from "./components/page/Page";
import Stallen from "./components/stallen/Stallen";
import Kamper from "./layouts/kamper/Kamper";

const App = () => {
    return (
        <Site>
            <GridLayout container={false} item={true}>
                <PrimarySearchAppBar/>
            </GridLayout>
            <Page>
                <GridLayout container={true} item={true} direction={"column"} alignItems={"center"} xs={8} >
                    <Route path="/nyheter" component={News} />
                    <Route path="/kamper" component={Kamper} />
                    <Route path="/sesong" component={News} />
                    <Route path="/stallen" component={Stallen} />
                    <Route path="/profil" component={News} />
                </GridLayout>
            </Page>
        </Site>
    );
};

App.displayName = "App";

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);