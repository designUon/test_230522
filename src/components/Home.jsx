import React from 'react';
import { Link } from 'react-router-dom';
// import './App.css';
// import "tailwindcss/tailwind.css";
import style from '../css/sass.module.scss'

export default function Home() {
    return (
        <div>
            {/* <h3 className="bg-indigo-500">HOME</h3>
            <p className="underline">로그인에 실패하면 HOME로 돌아옵니다</p> */}
            <h3 className={style.header}>HOME</h3>
            <p className={style.main}>로그인에 실패하면
            <br />
            HOME로 돌아옵니다!</p>
            <Link to="/loginform" className={style.button}>로그인</Link>
        </div>
    );
}
