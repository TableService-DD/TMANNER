// get location information
export async function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(
                    "경도 :",
                    position.coords.latitude,
                    "위도 :",
                    position.coords.longitude);
                return position;
            },
            (error) => {
                console.log(error);
                return false;
            }
        );
    }
}