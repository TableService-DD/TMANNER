import React, { useEffect, useState } from 'react';
import { UserLogin } from '../api/data';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
    const [user_id, setUserId] = useState('');
    const [user_pw, setPassword] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        UserLogin({ user_id, user_pw });
        console.log('user_id:', user_id, 'user_pw:', user_pw);
    };

    const handleCheck = () => {
        axios.get('http://hoshi-kirby.xyz/api/v1/user/check')
            .then((res) => {
                console.log(res);
            })
    };
    return (
        <div className="min-h-screen flex flex-col items-start justify-center bg-gray-50 py-12 px-4">
            <button onClick={() => handleCheck()} className='p-4 bg-black text-white'>Check</button>
            <div className="max-w-md w-full space-y-8">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">로그인</h2>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <label htmlFor="email-address" className="sr-only">
                            아이디 입력
                        </label>
                        <input
                            id="user-id"
                            name="userId"
                            type="text"
                            autoComplete="username"
                            required
                            className="appearance-none rounded-none 
                            relative block w-full px-3 py-2 border 
                            border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md 
                            focus:outline-none focus:primary focus:border-primary focus:z-10 sm:text-sm"
                            placeholder="아이디 입력"
                            value={user_id}
                            onChange={e => setUserId(e.target.value)}
                        />
                        <div>
                            <label htmlFor="password" className="sr-only">
                                비밀번호
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none 
                            relative block w-full px-3 py-2 border 
                            border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md 
                            focus:outline-none focus:primary focus:border-primary focus:z-10 sm:text-sm"
                                placeholder="비밀번호"
                                value={user_pw}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <button className='py-2 bg-primary text-white rounded-md w-full font-bold'>LOG IN</button>

                </form>
                <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-sm">계정이 없으신가요?</span>
                    <Link
                        to="/signup"
                        className="text-primary text-sm font-semibold hover:underline">
                        회원가입
                    </Link>
                </div>
            </div>

        </div>

    )
}