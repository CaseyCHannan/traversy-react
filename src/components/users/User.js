import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos'
import GithubContext from '../../context/github/githubContext'


const User = ({ match }) =>  {
    const githubContext = useContext(GithubContext)

    const { getUser, loading, user,getUserRepos, repos } = githubContext
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
                        User Repos:
        </div>
        <Repos repos={repos} />
        </Fragment> 
        );
}

export default User;