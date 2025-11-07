import {Box, Modal, Typography, Button, Stack} from '@mui/material';

function DetailCats ({openDetail, handleDetailClose, handleCheckMealOpen, data, selectCat, isMobile}) {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1; // 월 (0부터 시작하므로 +1)
    const day = today.getDate();

    console.log(data)
    return(
        <Box>
            <Modal
                open={openDetail}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                >
                <Box
                    sx={{
                        width: {
                            xs: 280, // 모바일
                            sm: 300, // 태블릿
                            md: 400, // 데스크탑
                            lg: 500, // 대형 화면
                        },
                        // height:{
                        //     xs: 400, // 모바일
                        //     sm: 500, // 태블릿
                        //     md: 600, // 데스크탑
                        //     lg: 650, // 대형 화면
                        // },
                        minHeight: 200,
                        maxWidth: 650,
                        bgcolor: "background.paper",
                        borderRadius: 2,
                        boxShadow: 24,
                        p: 4,
                        backgroundColor: 'lightYellow'
                    }}
            >
                    <Stack sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Typography sx={{fontFamily: 'Goyang', mb: 2, color: 'black'}} variant="h6" component="h2">{`${year}년 ${month}월 ${day}일`}</Typography>
                        <Box sx={{width: {xs: 40, sm: 50, md: 70, lg: 90}, height: {xs: 50, sm: 60, md: 80, lg: 100}}} component="img" src={selectCat.image} />
                        <Typography sx={{fontFamily: 'Goyang', color: 'black'}} variant="h6" component="h2">{`${data[0].cat}`}</Typography>
                    </Stack>
                    <Box sx={{maxHeight: {xs: 200, sm: 200, md: 300, lg: 400}, overflowY: 'auto'}}>
                        {data.map((catmeal, i) =>(
                            <Box key={catmeal.id} backgroundColor='#fdf3cdff' sx={{display: 'flex', flexDirection: 'column', justifyContent:'center', p:2, m:1, height: {xs: 30, sm: 50, md: 70, lg: 70}}}>
                                <Typography sx={{fontFamily: 'Goyang', color: 'black'}} variant={isMobile ? "body1" : "h6"} component={isMobile ? "body1" : "h2"}>{`${i+1}) ${catmeal.person} ${catmeal.taketime.split(' ')[1]} : ${catmeal.food}`}</Typography>
                                {catmeal.notes != '' && <Typography sx={{fontFamily: 'Goyang'}}color='error' component={isMobile ? "body1" : "h6"}>{`※${catmeal.notes}`}</Typography>}
                            </Box>
                        ))}
                    </Box>
                    <Box sx={{display: 'flex', justifyContent: 'center', mt: 3}}>
                        <Button variant='contained'  sx={{mr:2, backgroundColor:'#805311ff'}} onClick={handleCheckMealOpen}>급식기록 등록</Button>
                        <Button variant='contained' sx={{backgroundColor:'#a8a49eff'}} onClick={handleDetailClose}>닫기</Button>
                    </Box>
                </Box>
            </Modal>
        </Box>
    )
}

export default DetailCats;