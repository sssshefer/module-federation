import React from 'react';

export const UserCard = ({username}:{username?:string}) => {
    return (
        <div style={{border:'2px solid green', padding:'20px'}}>
username: {username??'no username'}
        </div>
    );
};
