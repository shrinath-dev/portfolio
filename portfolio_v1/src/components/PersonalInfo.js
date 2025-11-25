// components/PersonalInfo.js

function PersonalInfo(){
    const name = 'Shrinath';
    const role = 'Fullstack Software Developer';
    const location = 'New Delhi, IND';
    const email = 'shrinath20082002@gmail.com';

    return(
        <div className="personal-info">
            <h2 className="name">{name}</h2>
            <p className="role">{role}</p>
            <p className="location">{location}</p>
            <p className="email">{email}</p>
        </div>
    );
};

export default PersonalInfo;