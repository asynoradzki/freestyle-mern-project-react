import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function UsersReviews({ allComments }) {

    return (
        <div className=''>
            {allComments.map(comment => (
               
                    <div className="usersReviews" key={comment._id}>
                        <div className='userInfo'>
                            <AccountCircleIcon />
                            <h3>{comment.userName}</h3>
                        </div>
                        <p>{comment.comment}</p>
                    </div>
                
            ))}
        </div>)
}

export default UsersReviews;