import {useState, useEffect} from 'react';
import {Box} from '@mui/material';

function Cats ({handleDetailOpen, data}) {
    const [position, setPosition] = useState([]);

    useEffect(()=>{
        const newPositions = data.map(()=>({
            top: Math.random()* 30 + 50,  // 50~90% 사이 (화면 중간~아래쪽)
            left: Math.random() * 70 + 10  // 10~80% 사이 (좌우 여백 유지)
        }))

        setPosition(newPositions)
    },[])

    return(
        <Box
            sx={{
                display: "flex",           // 가로 정렬
                justifyContent: "center",  // 가운데 정렬
                alignItems: "center",      // 세로 가운데 정렬
                gap: 2,                    // 이미지 간격
                width: "90vw",
                height: "100vh",
                overflow: "hidden",
            }}
            >
            {data.map((cat) => (
                <Box
                    key={cat.id}
                    component="img"
                    src={cat.image}
                    alt={cat.name}
                    sx={{
                        mt: 16,
                        width: 120,
                        height: 120,
                        borderRadius: 2,
                        transition: "transform 0.3s ease",
                    }}
                    onClick={() => handleDetailOpen(cat)}
                />
            ))}
        </Box>
    )
}

export default Cats;