import React from 'react'
import style from '../css/sass.module.scss'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <h3 className={style.header}>
                <Link to='/' className={style.menu}>Home</Link>
                <Link to='/main' className={style.menu}>Main</Link>
                <Link to='/loginform' className={style.menu}>Login</Link>
            </h3>
        </div>
    )
}
