import Charts from "./postman/layout/dispatchorder/Charts.tsx";
import React from "react";
import {Container, CssBaseline} from "@mui/material";

function App() {
    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="sm">
                <Charts/>
            </Container>
        </React.Fragment>
    )
}

export default App
