import React from 'react';
import { render } from 'react-dom';
import './_manifest.scss';
import {Grid} from "./layouts/grid/Grid";
import {Button} from "./components/button/Button";
import PrimarySearchAppBar from "./components/menu/Menu";
import { BrowserRouter, Link, Route } from "react-router-dom";
import {News} from "./components/news/News";

const App = () => {
    return (
        <div>
            <PrimarySearchAppBar/>
            <Grid>
                <Button>
                    Hello from button!
                </Button>
            </Grid>
            <nav>
                <Link to="/nyheter">Nyheter</Link>
            </nav>
            <div>
                <Route path="/nyheter" component={News} />
            </div>
        </div>
    );
};

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);