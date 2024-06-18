// App.jsx
import React from 'react';
import ProfileCard from './components/ProfileCard';
import './App.css'; 

const App = () => {
    const users = [
        {
            name: 'Emmanuela',
            age: 30,
            profilePicture: 'https://randomuser.me/api/portraits/women/6.jpg',
            bio: 'Software Engineer from San Francisco.'
        },
        {
            name: 'Angeline',
            age: 30,
            profilePicture: 'https://randomuser.me/api/portraits/women/26.jpg',
            bio: 'Software Engineer from San Francisco.'
        },
        {
            name: 'Bolt',
            age: 30,
            profilePicture: 'https://randomuser.me/api/portraits/women/2.jpg',
            bio: 'Software Engineer from San Francisco.'
        },
        {
            name: 'Chebet',
            age: 30,
            profilePicture: 'https://randomuser.me/api/portraits/women/22.jpg',
            bio: 'Software Engineer from San Francisco.'
        },
        {
            name: 'Faith Chepkoech',
            age: 30,
            profilePicture: 'https://randomuser.me/api/portraits/women/2.jpg',
            bio: 'Software Engineer from San Francisco.'
        },
        {
            name: 'Eliana',
            age: 30,
            profilePicture: 'https://randomuser.me/api/portraits/women/23.jpg',
            bio: 'Software Engineer from San Francisco.'
        },
        {
            name: 'Elaine',
            age: 30,
            profilePicture: 'https://randomuser.me/api/portraits/women/2.jpg',
            bio: 'Software Engineer from San Francisco.'
        },
        {
            name: 'Chepngeno',
            age: 30,
            profilePicture: 'https://randomuser.me/api/portraits/women/2.jpg',
            bio: 'Software Engineer from San Francisco.'
        },
        {
            name: 'Elaine',
            age: 30,
            profilePicture: 'https://randomuser.me/api/portraits/women/2.jpg',
            bio: 'Software Engineer from San Francisco.'
        },
        {
            name: 'Bob',
            age: 25,
            profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg',
            bio: 'Designer from New York.'
        },
        {
            name: 'Ruto',
            age: 25,
            profilePicture: 'https://randomuser.me/api/portraits/men/15.jpg',
            bio: 'Designer from New York.'
        },
        {
            name: 'Brian',
            age: 25,
            profilePicture: 'https://randomuser.me/api/portraits/men/20.jpg',
            bio: 'Designer from New York.'
        },
        {
            name: 'Owen',
            age: 25,
            profilePicture: 'https://randomuser.me/api/portraits/men/30.jpg',
            bio: 'Designer from New York.'
        },
        {
            name: 'Bobby',
            age: 25,
            profilePicture: 'https://randomuser.me/api/portraits/men/40.jpg',
            bio: 'Designer from New York.'
        },
        {
            name: 'Bob',
            age: 25,
            profilePicture: 'https://randomuser.me/api/portraits/men/50.jpg',
            bio: 'Designer from New York.'
        },
        {
            name: 'Jack',
            age: 35,
            profilePicture: 'https://randomuser.me/api/portraits/men/60.jpg',
            bio: 'Product Manager from Chicago.'
        },

        {
            name: 'Laureen',
            age: 35,
            profilePicture: 'https://randomuser.me/api/portraits/men/12.jpg',
            bio: 'Product Manager from Chicago.'
        },

        {
            name: 'Victor',
            age: 35,
            profilePicture: 'https://randomuser.me/api/portraits/men/22.jpg',
            bio: 'Product Manager from Chicago.'
        },


        {
            name: 'James',
            age: 35,
            profilePicture: 'https://randomuser.me/api/portraits/men/32.jpg',
            bio: 'Product Manager from Chicago.'
        },


        {
            name: 'Charlie',
            age: 35,
            profilePicture: 'https://randomuser.me/api/portraits/men/42.jpg',
            bio: 'Product Manager from Chicago.'
        }



        
    ];

    return (
        <div className='app' >
            {users.map((user) => (
                <ProfileCard 
                    key={user.name} 
                    name={user.name} 
                    age={user.age} 
                    profilePicture={user.profilePicture} 
                    bio={user.bio} 
                />
            ))}
        </div>
    );
};

export default App;
