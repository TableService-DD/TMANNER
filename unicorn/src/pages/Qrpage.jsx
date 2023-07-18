import React, { useEffect } from 'react'
import { QRCodeCanvas } from 'qrcode.react';
import { useNavigate } from 'react-router-dom';
import { getLocation } from '../api/location';

export default function QrPage() {
    const navigate = useNavigate();
    useEffect(() => {
        getLocation();
    });

    return (
        <section className='w-full h-[50vh] flex items-center justify-center flex-col'>
            <h1 className='text-primary text-4xl mb-4 font-bold'>QR CODE</h1>
            <QRCodeCanvas
                className='border-primary border-4 rounded-xl'
                includeMargin
                fgColor="#393E46"
                size={200}
                onClick={() => navigate('/')} value="/" />
        </section>
    )
}
