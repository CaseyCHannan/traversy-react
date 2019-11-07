import React, {Component} from 'react';

class User extends Component {
    componentDidMount(){
        this.props.getUser(this.props.match.params.login)
        console.log(this.props.match.params.login)
        console.log(this.props.user)
    }
    

    render() {
        const { name } = this.props.user;
        const { loading } = this.props

        console.log(name)
        return (
           <div>
            {name}
           </div> 
        );
    }
}

export default User;