import React, { useEffect, useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { useNavigate } from 'react-router-dom';
import { getLocation } from '../api/location';
import Modal from '../components/Modal';

export default function QrPage() {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);

    const requestLocation = () => {
        getLocation().then(() => {
            setError(null);
        }).catch(error => {
            if (error.code === 'PERMISSION_DENIED') {
                setError('서비스를 이용하려면 위치 액세스가 필요합니다. 브라우저 설정에서 위치 액세스를 활성화하세요.');
                setModalOpen(true);  // 위치 정보 요청이 거부되면 모달창이 뜹니다.
            } else {
                setError('알 수 없는 에러가 발생했습니다. 다시 시도해주세요.');
            }
        });
    };

    const closeModalAndNavigate = () => {
        setModalOpen(false);
        navigate('/login');  // 모달창의 확인 버튼을 누르면 '/login'으로 라우팅됩니다.
    };

    useEffect(() => {
        requestLocation();
    }, []);

    return (
        <section className='w-full h-[50vh] flex items-center justify-center flex-col'>
            <h1 className='text-primary text-4xl mb-4 font-bold'>QR CODE</h1>
            {error && (
                <>
                    <p className='w-2/3 text-sm leading-4'>{error}</p>
                    <button className='my-2 bg-blue-500 text-white p-2 rounded' onClick={requestLocation}>
                        Check Location Access
                    </button>
                </>
            )}
            {isModalOpen && (
                <Modal onClose={closeModalAndNavigate}>
                    서비스를 이용하려면 위치 액세스가 필요합니다. 브라우저 설정에서 위치 액세스를 활성화하세요.
                </Modal>
            )}
            <QRCodeCanvas
                className='border-primary border-4 rounded-xl'
                includeMargin
                fgColor="#393E46"
                size={200}
                onClick={() => navigate('/login')} value="/" />
        </section>
    )
}
