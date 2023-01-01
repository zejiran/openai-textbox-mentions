import React, { useContext, useRef } from 'react';
import { Context } from './../Context.jsx';
import Button from '@mui/material/Button';
import { deepPurple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { generateUsers, getLastCreatedUsers } from '../App.js';

export default function UserGenerator(props) {
    const GeneratorButton = styled(Button)(() => ({
        color: '#fffff',
        backgroundColor: deepPurple[500],
        '&:hover': {
            backgroundColor: deepPurple[700],
        },
        margin: '5% 0'
    }));
    const BorderLinearProgress = styled(LinearProgress)(() => ({
        height: 15,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: deepPurple[200],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: deepPurple[800],
        },
    }));

    const [loading, setLoading] = React.useState(false);
    const { setUsers } = useContext(Context);
    const ref = useRef(null);

    function handleGeneratorClick() {
        setLoading(true);
        generateUsers()
            .then((message) => console.log(message))
            .then(() => {
                getLastCreatedUsers()
                    .then((data) => (setUsers(data)))
                    .then(setLoading(false))
                    .then(ref.current?.scrollIntoView({ behavior: 'smooth' }));
            });
    }

    return (
        <div>
            <h3>User Generator</h3>
            <p>Click the button below to create 25 new users.</p>
            <GeneratorButton
                onClick={handleGeneratorClick}
                endIcon={<SendIcon />}
                variant="contained"
            >
                Let's go
            </GeneratorButton>
            {loading ? <BorderLinearProgress /> : <></>}
            <div ref={ref}></div>
        </div>
    );
}
