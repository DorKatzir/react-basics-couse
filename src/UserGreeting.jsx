import PropTypes from 'prop-types'

export default function UserGreeting({isLoggedIn, username}) {

    const welcomeMsg = <h2 className="welcome-msg">
                        Welcome {username}</h2>

    const loginPrompt = <h2 className="login-prompt">
                        Please log in to continue</h2>

    return(
        isLoggedIn ? welcomeMsg : loginPrompt
    )
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: 'Guest'
}