import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { checkUser, loginUser } from '../api/user';
import { ImSpinner9 } from 'react-icons/im';

const INPUT_STYLE = "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:primary focus:border-primary  sm:text-sm";
export default function Login() {
    const [user_id, setUserId] = useState('');
    const [user_pw, setPassword] = useState('');
    const [isloading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async e => {
        e.preventDefault();
        setIsLoading(true);
        const success = await loginUser({ user_id, user_pw });
        setIsLoading(false);
        if (success) {
            console.log("로그인 성공")
            navigate('/order/1');
        }
    };

    const handleCheck = () => {
        checkUser();
    };
    return (
        <div className="min-h-screen-lg flex flex-col items-start justify-center bg-gray-50 py-12 px-4 relative">
            {isloading && <div
                className='absolute flex items-center border-primary border-[1px] shadow-xl px-3 py-2 text-wite font-bold gap-4 rounded-full text-sm z-20 bg-white 
                top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                '>
                <ImSpinner9 className='text-primary animate-spin spin-in text-4xl' />
                <h1>Loading....</h1>
            </div>}
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
                            className={`${INPUT_STYLE} rounded-t-md`}
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
                                className={`${INPUT_STYLE} rounded-b-md`}
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