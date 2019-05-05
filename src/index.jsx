import React from 'react';
import { render } from 'react-dom';
import './_manifest.scss';
import Grid from "./layouts/grid/Grid";
import PrimarySearchAppBar from "./components/menu/Menu";
import { BrowserRouter, Route } from "react-router-dom";

import Page from "./layouts/page/Page";
import Stallen from "./pages/stallen/Stallen";
import Kamper from "./pages/kamper/Kamper";
import News from "./pages/news/News";
import Home from "./pages/home/Home";
import { BannerImage } from "./components/bannerImage/BannerImage";

// Should be state-free
const App = () => {
    return (
        <div className="site">
            <Grid>
                <PrimarySearchAppBar/>
                <BannerImage/>
            </Grid>
            <Page>
                <Route path="/nyheter" component={News} />
                <Route path="/kamper" component={Kamper} />
                <Route path="/sesong" component={News} />
                <Route path="/stallen" component={Stallen} />
                <Route path="/profil" component={News} />
                <Home/>
            </Page>
        </div>
    );
};

App.displayName = "App";

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);