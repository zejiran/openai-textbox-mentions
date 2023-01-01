import React, { useState, useEffect } from 'react';
import { serverHostname, serverPort } from './../index.js';

export default function LastCreatedUsers() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch(`http://${serverHostname}:${serverPort}/users`)
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
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
}