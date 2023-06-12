// import React, { useState } from 'react'
import React, { useState } from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap';

const State = () => {
    const [mode, setMode] = useState("light");

    let classNames = "bg-dark text-light p-5";

    if (mode === "light") {
        classNames = "bg-light text-dark p-5"
    }

    // setMode("dark"); =>   mode = "dark"

    return (
        <Container className={classNames} style={{ height: 500 }}>
            <h1>Dark/Light Mode</h1>
            <ButtonGroup>
                <Button
                    variant='dark'
                    onClick={() => setMode("dark")}
                >
                    Dark Mode
                </Button>
                <Button 
                variant='light'
                onClick={() => setMode("light")}
                >
                    Light Mode
                </Button>
            </ButtonGroup>
        </Container>
    )
};

export default State;
