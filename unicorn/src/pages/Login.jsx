import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { checkUser, loginUser } from "../api/user";
import { ImSpinner9 } from "react-icons/im";

const INPUT_STYLE =
  "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:primary focus:border-primary  sm:text-sm";

export default function Login() {
  const [user_id, setUserId] = useState("");
  const [user_pw, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const success = await loginUser({ user_id, user_pw });
    setIsLoading(false);
    if (success) {
      console.log("로그인 성공");
      navigate("/order/1");
    }
  };

  const handleCheck = () => {
    checkUser();
  };

  return (
    <div className="min-h-screen-lg flex flex-col items-start justify-center bg-gray-50 py-12 px-4 relative">
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center z-20 bg-black bg-opacity-50">
          <div className="flex flex-col items-center gap-4 px-8 py-4 rounded-xl shadow-lg border-4 loading-background">
            <ImSpinner9 className="text-white animate-spin text-4xl" />
            <h1 className="text-white font-bold loading-text">
              로그인 요청 중...
            </h1>
          </div>
        </div>
      )}
      <button onClick={handleCheck} className="p-4 bg-black text-white">
        Check
      </button>
      <div className="max-w-md w-full space-y-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          로그인
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <input
              id="user-id"
              name="userId"
              type="text"
              autoComplete="username"
              required
              className={`${INPUT_STYLE} rounded-t-md`}
              placeholder="아이디 입력"
              value={user_id}
              onChange={(e) => setUserId(e.target.value)}
              disabled={isLoading}
            />
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className={`${INPUT_STYLE} rounded-b-md`}
              placeholder="비밀번호"
              value={user_pw}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <button
            className="py-2 bg-primary text-white rounded-md w-full font-bold"
            disabled={isLoading}
          >
            {isLoading ? "로그인 중..." : "로그인"}
          </button>
        </form>
        <div className="flex items-center justify-between">
          <span className="text-gray-600 text-sm">계정이 없으신가요?</span>
          <Link
            to="/signup"
            className="text-primary text-sm font-semibold hover:underline"
          >
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
}
