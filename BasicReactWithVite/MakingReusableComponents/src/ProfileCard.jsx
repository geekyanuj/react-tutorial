// function ProfileCard(props){
//     return(
//         <div>
//             <div>Profile Card</div>
//             <div>Title is {props.title}</div>
//             <div>Handle is {props.handle}</div>

//         </div>
//     );
// }

// export default ProfileCard;


//we can do the same thing with destructuring feature of javascript

function ProfileCard({ title, handle }){
    return(
        <div>
            <div>Profile Card</div>
            <div>Title is {title}</div>
            <div>Handle is {handle}</div>

        </div>
    );
}

export default ProfileCard;