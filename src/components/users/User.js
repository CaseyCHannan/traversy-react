import React, { Fragment, useEffect } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos'
 
const User = ({ user, loading, getUser, getUserRepos, repos, match }) =>  {
useEffect( ()=>  {  
    getUser(match.params.login)
    getUserRepos(match.params.login)
},[])

    const {
        name,
        company,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable
    } = user;

    if (loading) return <Spinner />

    console.log(name)
    return (
        <Fragment>
            <Link to='/' className='btn btn-light' >Back to Search</Link>
            <h1>{name}</h1>
            hireable:{' '} 
            {hireable ? (<i className='fas fa-check text-success' /> ): (<i className='fas fa-times-circle text-danger' />
        )}    
            <div className="card grid-2">
                <div className="all-center">
                    <img src={avatar_url} 
                    className='round-img' 
                    alt="" 
                    style={{ width: '150px'}} 
                        />
                <h1>{name}</h1>
                <p>Location: {location}</p>
                </div>
                <div>
                {bio && (<Fragment> 
                    <h3>Bio:</h3>
                    <p>{bio}</p>
                    </Fragment>)}
                <a href={html_url} className="btn btn-dark my-1" > Visit Github Profile </a>
            </div>  
            </div>  
        <div className="card text-center">
                            HEY
        </div>
        <Repos repos={repos} />
        </Fragment> 
        );
}


User.propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired
}

export default User;