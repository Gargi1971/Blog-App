export default function LoginPage(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    function register(){

    }

    return(
            <form className="register" onSubmit={register}>
                <h1>Register</h1>
                <input type="text" 
                placeholder="username"
                value = {username}
                onChange= {ev => setUsername(ev.target.value) }/>
                <input type="password" 
                placeholder="password"
                value = {password}
                onChange = {ev => setPassword(ev.target.value)}/>
                <button>Register</button>

            </form>
    );
}