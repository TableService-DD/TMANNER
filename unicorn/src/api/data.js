import { useEffect } from "react";

export default function Menu() {
    const [menu, setMenu] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get('/data/menu.json');
            // JSON 데이터를 가져온 후 상태를 설정합니다.
            setMenu(result.data);
        }
        fetchData();
    }, []);