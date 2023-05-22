import React, { useState } from 'react'
import { auth } from '../database/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import style from '../css/sass.module.scss'


export default function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    const onEmailLogin = (e) => {
        
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
                setUser(
                    {
                        uid : user.uid,
                        email : user.email,
                        displayName : user.displayName,
                    }
                )
                navigate('/main');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log(errorCode, errorMessage)
                if(errorCode == "auth/user-not-found " || errorCode == "auth/wrong-password") {
                    alert('존재하지않는 이메일이거나 비밀번호가 잘못입력되었습니다')
                    navigate('/');
                }
            });
    }

    const onClickLogin = () => {

        async function getLogin() {

            try{
                const userCredential = await signInWithEmailAndPassword(auth, email, password)
                const user = userCredential.user;
                console.log(user);
                setUser(
                    {
                        uid : user.uid,
                        email : user.email,
                        displayName : user.displayName,
                    }
                )
                navigate('/main');
            }

            catch(error){
                console.log(error.code, error.message);
                navigate('/');
            }

        }

        getLogin();
        
    }

    // const loginNavigation = () => {
    //     if(user){
    //         navigate('/main');
    //     } else {
    //         navigate('/');
    //     }
    // }


    return (
        <div>
            <h3 className={style.main}>로그인 또는 회원가입 페이지입니다</h3>

            <form onSubmit={onEmailLogin}>
                
                <label htmlFor="" className={style.input_label}>E-mail</label>
                <input type="email" required
                    onChange={(e) => { setEmail(e.target.value) }}
                    value={email}
                    className={style.input_box}
                />

                <br />

                <label htmlFor="" className={style.input_label}>PW</label>
                <input type="password" required
                    onChange={(e) => { setPassword(e.target.value) }}
                    value={password}
                    className={style.input_box}
                />

                <br />

                <input type="submit" value="회원가입" className={style.button}/>
                <button type='button' onClick={onClickLogin} className={style.button}>로그인</button>
            </form>

            <br />

            {/* <h3>{user ? user.email : "로그인되지않았습니다"}</h3> */}
            {/* <h3>{loginNavigation()}</h3> */}

        </div>
    )
}
