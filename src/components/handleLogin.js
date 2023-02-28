import '../css/handleLogin.css'
import React, { useState } from 'react'

const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

const handleLogin = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const [auth, setAuth] = useState(null)


    const handleSubmit = (event) => {
        event.preventDefault();

        for (let i = 0; i < users.length; i++) {
            if (username === users[i].username && password === users[i].password) {

                localStorage.setItem('isAuthenticated', true)
                props.setIsAuthenticated(true)
                return true;
            }
        };

        createError('usuario e/ou senha errados')
        return false
    }

    // cria uma mensagem de erro em uma 'div'
    function createError(msg) {
        //remove a mensagem de erro anterior
        if (document.querySelector('.error-text')) {
            let errorText = document.querySelector('.error-text')
            errorText.remove()
        }

        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('error-text')
        const campo = document.querySelector('.formulario')
        campo.insertAdjacentElement('afterend', div)
    }


    return (

                    <div className='centralizado'>
                        <div class="container2">
                            <h2>Login</h2>
                            <form className='formulario' onSubmit={handleSubmit}>


                                <input
                                    placeholder="usuario"
                                    id='username'
                                    type="text"
                                    value={username}
                                    onChange={event => setUsername(event.target.value)}
                                />

                                <input
                                    placeholder='senha'
                                    type="password"
                                    value={password}
                                    onChange={event => setPassword(event.target.value)}
                                />

                                {/* <input className='login' type="text" name="username" id="username" placeholder="username" />
                                <input className='login' type="password" name="pass" id="pass" placeholder="password" /> */}
                                <div class="btns">
                                    <button className='login' type="submit">Login</button>
                                </div>

                            </form>
                        </div>
                    </div>

    )
}

export default handleLogin