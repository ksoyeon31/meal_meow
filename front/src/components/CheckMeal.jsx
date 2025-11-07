import {useState, useEffect} from 'react';
import {Box, Modal, Typography, Button, Stack} from '@mui/material';
import Check from '../assets/Check.png'

function CheckMeal ({openCheckMeal, handleCheckMealClose, data, foodData, isMobile}) {
    const [checkFood, setCheckFood] = useState({'사료': false, '닭가슴살': false, '츄르': false, '물': false})

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1; // 월 (0부터 시작하므로 +1)
    const day = today.getDate();

    const handleCheckFood = (food) => {
        setCheckFood((prev) => ({
            ...prev,
            [food]: !prev[food],
        }));
    }

    useEffect(()=>{
        setCheckFood({'사료': false, '닭가슴살': false, '츄르': false, '물': false});
    },[])
    return(
        <Box>
            <Modal
                open={openCheckMeal}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                >
                <Box 
                    sx={{
                        width: {
                            xs: 250, // 모바일
                            sm: 330, // 태블릿
                            md: 400, // 데스크탑
                            lg: 500, // 대형 화면
                        },
                        maxWidth: 600,
                        bgcolor: "background.paper",
                        borderRadius: 2,
                        boxShadow: 24,
                        p: 4,
                        backgroundColor: 'lightYellow',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >
                    <Typography variant="h6" component="h2" sx={{fontFamily: 'Goyang', display: 'flex', justifyContent:'center', color: 'black'}}>{`${year}년 ${month}월 ${day}일`}</Typography>
                    <Stack sx={{display:'flex', flexDirection: 'row', justifyContent:'center', gap: 1, alignItems:'center'}}>
                        {foodData.map((food) => {
                            return(
                                <Box 
                                    key = {food.id}
                                    sx={{
                                        position: "relative",
                                        width: {
                                                xs: 70,
                                                sm: 55,
                                                md: 85,
                                                lg: 100,
                                        },
                                        height: {
                                                xs: 65,
                                                sm: 75,
                                                md: 85,
                                                lg: 100,
                                            },
                                        display: "inline-block",
                                        margin: 1,
                                }}>
                                    {checkFood[food.name] && 
                                        <Box
                                            key = {food.id}
                                            component="img"
                                            src={Check}
                                            sx={{
                                                position: "absolute",
                                                width: {
                                                    xs: 20,
                                                    sm: 30,
                                                    md: 40,
                                                    lg: 50,
                                                },
                                                height: {
                                                    xs: 20,
                                                    sm: 30,
                                                    md: 40,
                                                    lg: 50,
                                                },
                                                transform: "translate(110%, 0%)",
                                                borderRadius: 2,
                                            }}
                                        />
                                    }
                                    <Box
                                        component="img"
                                        src={food.src}
                                        alt={food.name}
                                        sx={{
                                            width: {
                                                xs: 45,
                                                sm: 55,
                                                md: 85,
                                                lg: 100,
                                            },
                                            height: {
                                                xs: 65,
                                                sm: 75,
                                                md: 85,
                                                lg: 100,
                                            },
                                            borderRadius: 2,
                                            p: 0,
                                            mt: 1
                                        }}
                                        onClick={() => handleCheckFood(food.name)}
                                    />
                                    <Typography variant={isMobile ? "caption" : "h6"} component={isMobile ? "body1" : "h2"} sx={{fontFamily: 'Goyang', display: 'flex', justifyContent:'center', color: 'black', fontWeight: 'bold'}}>{food.name}</Typography>
                                </Box>
                            )
                        })}
                        
                    </Stack>
                    <Box sx={{display: 'flex', justifyContent: 'center', mt: 6}}>
                        <Button variant='contained' sx={{mr:2, backgroundColor:'#805311ff'}} onClick={()=>console.log(checkFood)}>저장</Button>
                        <Button variant='contained' sx={{backgroundColor:'#a8a49eff'}} onClick={handleCheckMealClose}>닫기</Button>
                    </Box>
                </Box>
            </Modal>
        </Box>
    )
}

export default CheckMeal;