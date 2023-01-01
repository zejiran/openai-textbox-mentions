import * as React from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

export default function MentionsTextBox() {
    const TextBox = styled(TextField)({
        background: 'white',
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },
        }
    });

    let input;

    function handleChange() {
        //
    }

    return (
        <div className='text-container'>
            <h3>Mentions Text Box</h3>
            <p className='regular-text'>
                Here you can mention users by typing part of their name starting with '@' or
                just by writing a valid existing email.
                These mentions would highlight according to the corresponding user role.
            </p>
            <TextBox
                id="outlined-multiline-static"
                multiline
                fullWidth
                rows={4}
                placeholder="Mention names with '@' or type valid emails..."
                value={input}
                onChange={handleChange}
            />
        </div>
    );
}
