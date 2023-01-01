import React, { useRef } from 'react';
import { searchUsers } from '../App.js';

export default function MentionsTextBox() {
    const [input, setInput] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [suggestions, setSuggestions] = React.useState([]);
    const [inputColor, setInputColor] = React.useState('');
    const ref = useRef(null);

    React.useEffect(() => {
        if (!open) {
            setSuggestions([]);
        }
    }, [open]);

    const handleChange = (event) => {
        let text = event.target.value;
        setInput(text);

        let term = input;
        if (term.startsWith('@')) {
            term = input.slice(1);
        } else {
            term = input.split('@')[0]
        }
        searchUsers(term).then((data) => setSuggestions(data));

        setInputColor('');
    };

    function getOptionLabel(option) {
        return `${option._source.name} - ${option._source.label} (${option._source.email})`;
    }
    function getOptionColor(option) {
        let color;
        if (option._source.label === 'employee') {
            color = 'darkred';
        } else if (option._source.label === 'customer') {
            color = '#0066CC';
        }
        return color;
    }

    function setMention(user) {
        setInput(getOptionLabel(user));
        setInputColor(getOptionColor(user));
        setOpen(false);
    }

    return (
        <div className='text-container'>
            <h3>Mentions Text Box</h3>
            <p className='regular-text'>
                Here you can mention users by typing part of their name starting with '@' or
                just by writing a valid existing email.
                These mentions would highlight according to the corresponding user role.
            </p>
            <input
                ref={ref}
                className='mentions-textbox'
                type='text'
                placeholder="Mention a user name with '@' or type a valid email..."
                style={{ backgroundColor: inputColor, color: Boolean(inputColor) ? 'white' : '' }}
                value={input}
                onChange={handleChange}
                onSelect={() => { setOpen(true); ref.current?.scrollIntoView({ behavior: 'smooth' }); }}
            />
            {open & (input.includes('@')) ?
                <ul className="user-suggestions">
                    {suggestions.map(user =>
                        <li
                            key={user._id}
                            onClick={() => { setMention(user); }}
                            style={{ color: getOptionColor(user) }}
                            className='list-items'
                        >
                            {getOptionLabel(user)}
                        </li>
                    )}
                </ul>
                : <></>}
        </div>
    );
}
