import React, { useContext, useEffect } from 'react';
import { Context } from './../Context.jsx';
import { getLastCreatedUsers } from '../App.js';

export default function LastCreatedUsers() {
    const { users, setUsers } = useContext(Context);
    useEffect(() => {
        getLastCreatedUsers().then((data) => (setUsers(data)));
    }, [setUsers]);

    if (Boolean(users)) {
        const employees = users.filter(user => user._source.label === 'employee');
        const customers = users.filter(user => user._source.label === 'customer');

        return (
            <div>
                <h3>Last 25 created users</h3>
                <div className="last-users-table">
                    <h3>Customers</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map(user =>
                                <tr key={user._id}>
                                    <td>{user._source.name}</td>
                                    <td>{user._source.email}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                    <h3>Employees</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map(user =>
                                <tr key={user._id}>
                                    <td>{user._source.name}</td>
                                    <td>{user._source.email}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    } else {
        return (<div></div>);
    }
}
