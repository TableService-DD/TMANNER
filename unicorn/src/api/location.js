export const getLocation = () => {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    // console.log('Latitude:', position.coords.latitude);
                    // console.log('Longitude:', position.coords.longitude);
                    resolve(position);
                },
                error => {
                    // 위치 접근이 거부된 경우에는 특별한 에러 코드를 반환합니다.
                    if (error.code === error.PERMISSION_DENIED) {
                        reject({ code: 'PERMISSION_DENIED' });
                    } else {
                        reject(error);
                    }
                }
            );
        } else {
            reject(new Error('위치정보를 받아올 수 없습니다.'));
        }
    });
};
