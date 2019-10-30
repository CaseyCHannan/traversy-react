import React, { Component } from 'react';


class Users extends Component {
    state = { 
        users: [           
                {
                login: "mojombo",
                id: 1,
                avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
                url: "https://api.github.com/users/mojombo",
                html_url: "https://github.com/mojombo",
                },
                {
                login: "defunkt",
                id: 2,
                avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
                url: "https://api.github.com/users/defunkt",
                html_url: "https://github.com/defunkt",
                },
                {
                login: "pjhyett",
                id: 3,
                avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
                url: "https://api.github.com/users/pjhyett",
                html_url: "https://github.com/pjhyett",
                },
                {
                login: "wycats",
                id: 4,
                avatar_url: "https://avatars0.githubusercontent.com/u/4?v=4",
                url: "https://api.github.com/users/wycats",
                html_url: "https://github.com/wycats",
                },
                {
                login:  "ezmobius",
                id:5,
                avatar_url: "https://avatars0.githubusercontent.com/u/5?v=4",
                url: "https://api.github.com/users/ezmobius",
                html_url: "https://github.com/ezmobius",
                },
                {
                login:  "ivey",
                id: 6,
                avatar_url: "https://avatars0.githubusercontent.com/u/6?v=4",
                url: "https://api.github.com/users/ivey",
                html_url: "https://github.com/ivey",
                },
                {
                login: "evanphx",
                id: 7,
                avatar_url: "https://avatars0.githubusercontent.com/u/7?v=4",
                url: "https://api.github.com/users/evanphx",
                html_url: "https://github.com/evanphx",
                }
        ]
     }
    render() {
        return (
            <div>
                {this.state.users.map(user=> (
                    <div>{user.url}</div>
                ))}

            </div>
            
        );
    }
}

export default Users;