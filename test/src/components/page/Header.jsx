import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ Home, Movie, Tv, Celebirity }) {
    return (
        <div className="navbar">
            <Link className="navbarMenu-logo" to={'/'}>
                로고자리
            </Link>
            <Link className="navbarMenu" to={'/Movie'}>
                영화
            </Link>
            <Link className="navbarMenu" to={'/TV'}>
                TV프로그램
            </Link>
            <Link className="navbarMenu" to={'/Celebirity'}>
                인물
            </Link>
        </div>
    );
}
