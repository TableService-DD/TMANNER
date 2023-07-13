import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
    const [user_name, setUserName] = useState('');
    const [user_id, setUserId] = useState('');
    const [user_pw, setPassword] = useState('');
    const [user_email, setEmail] = useState('');
    const [user_phone, setPhone] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // const response = await axios.post('/api/signup', {
            //     user_name,
            //     user_id,
            //     user_pw,
            //     user_email,
            //     user_phone,
            // });
            const response = {
                user_name,
                user_id,
                user_pw,
                user_email,
                user_phone,
            }
            axios.post('http://hoshi-kirby.xyz/api/v1/user/register',
                response)
                .then((res) => {
                    console.log(res);
                    alert('회원가입이 완료되었습니다.');
                })
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4'>
            <div className='max-w-md w-full space-y-8'>
                <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
                    회원가입
                </h2>
                <form className='mt-6 space-y-6' onSubmit={handleSubmit}>
                    <div className='rounded-md shadow-sm'>
                        <input
                            id='user_name'
                            name='user_name'
                            type='text'
                            autoComplete='name'
                            required
                            value={user_name}
                            onChange={(e) => setUserName(e.target.value)}
                            className='appearance-none block w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary'
                            placeholder='사용자 이름'
                        />
                        <input
                            id='user_id'
                            name='user_id'
                            type='id'
                            autoComplete='username'
                            required
                            value={user_id}
                            onChange={(e) => setUserId(e.target.value)}
                            className='appearance-none block w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary'
                            placeholder='아이디 입력'
                        />
                        <input
                            id='user_pw'
                            name='user_pw'
                            type='password'
                            autoComplete='password'
                            required
                            value={user_pw}
                            onChange={(e) => setPassword(e.target.value)}
                            className='appearance-none block w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary'
                            placeholder='비밀번호 입력'
                        />
                        <input
                            id='user_email'
                            name='user_email'
                            type='email'
                            autoComplete='email'
                            required
                            value={user_email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='appearance-none block w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary'
                            placeholder='이메일 입력'
                        />
                        <input
                            id='user_phone'
                            name='user_phone'
                            type='tel'
                            autoComplete='tel'
                            required
                            value={user_phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className='appearance-none block w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary'
                            placeholder='전화번호'
                        />
                    </div>

                    <button
                        type='submit'
                        className='py-2 w-full bg-primary text-white font-bold rounded-md'
                    >
                        가입하기
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;

