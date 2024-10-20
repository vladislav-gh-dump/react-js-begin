import { useContext } from "react";
import { AuthContext } from "./../../../providers/AuthProvider";
import { Link } from "react-router-dom";
import styles from './Login.module.css';


const Login = () => {
    const { user, setUser } = useContext(AuthContext);

    return (
        <form className={styles.form}>
            <input 
                className='input'
                placeholder='username' 
                onChange={e => setUser(prevUser => ({
                    ...prevUser, username: e.target.value 
                }))}
                value={user.username}
            />

            <Link 
                className="btn" 
                to={'/'} 
                onClick={() => setUser(prevUser => ({
                    ...prevUser, isLogin: true    
                })
            )}>Login</Link>
        </form>
    )
}

export default Login;