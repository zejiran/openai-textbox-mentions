import * as React from 'react';
import { searchUsers } from '../App.js';

export default function MentionsTextBox() {
    const [input, setInput] = React.useState('')
    const [open, setOpen] = React.useState(false);
    const [suggestions, setSuggestions] = React.useState([]);

    React.useEffect(() => {
        if (!open) {
            setSuggestions([]);
        }
    }, [open]);

    const handleChange = (event) => {
        let text = event.target.value;
        setInput(text);
        let term = input;
        if (term.startsWith('@')) { term = input.slice(1); }
        searchUsers(term).then((data) => setSuggestions(data));
    };

    function getOptionLabel(option) {
        let label = `${option._source.name} - ${option._source.label}`;
        return label;
    }

    function getOptionColor(option) {
        let color;
        if (option._source.label === 'employee') {
            color = 'red';
        } else if (option._source.label === 'customer') {
            color = 'blue';
        }
        return color;
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
                className='mentions-textbox'
                type='text'
                placeholder="Mention a user name with '@' or type a valid email..."
                value={input}
                onChange={handleChange}
                onSelect={() => { setOpen(true); }}
            />
            {open & (input.includes('@')) ?
                <ul className="user-suggestions">
                    {suggestions.map(user =>
                        <li
                            key={user._id}
                            onClick={() => { setInput(user._source.name); }}
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
