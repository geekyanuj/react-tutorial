
function ProfileCard({name,email,image}) {
    return (
      <div>
        <img src={image} alt="pdaImage"/>
        <h2>Name : {name}</h2>
        <p>Email : {email}</p>
      </div>
    );
  }
  export default ProfileCard;