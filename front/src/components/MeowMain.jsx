import {useState, useEffect} from 'react';
import {useMediaQuery, useTheme} from '@mui/material';
import Cats from './Cats';
import CheckMeal from './CheckMeal';
import DetailCats from './DetailCats';
import MealMeowLogo from './MealMeowLogo';
import blackCat from "../assets/까망이.png";
import CheeseCat from "../assets/치즈.png";
import WhiteCat from "../assets/흰둥이.png";
import Meal from "../assets/사료.png"
import Chicken from "../assets/닭가슴살.png"
import Churu from "../assets/츄르.png"
import Water from "../assets/물.png"

function MeowMain () {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const catsData = [
        { id: 1, name: "까망이", image: blackCat },
        { id: 2, name: "치즈", image: CheeseCat },
        { id: 3, name: "흰둥이", image: WhiteCat },
    ];

    const userData = [
        { id: 1, name: '태리'},
        { id: 2, name: '영하'},
    ]

    const foodData = [
        {id: 1, name: '사료', src: Meal}, 
        {id: 2, name: '닭가슴살', src: Chicken}, 
        {id: 3, name: '츄르', src: Churu}, 
        {id: 4, name: '물', src: Water}
    ]

    const takeMeal = [
        { id: 1, cat: '까망이', person: '태리', food: ['사료', '츄르'], notes: '너무 귀여움', taketime: '2025-11-06 10:23:14', lastTake: ''},
        { id: 2, cat: '까망이', person: '태리', food: ['물'], notes: '', taketime: '2025-11-06 11:22:19', lastTake: ''},
        { id: 3, cat: '치즈', person: '영하', food: ['사료'], notes: '귀에 상처가 남', taketime: '2025-11-06 15:00:12', lastTake: ''},
        { id: 4, cat: '치즈', person: '태리', food: ['물', '츄르'], notes: '', taketime: '2025-11-06 10:09:38', lastTake: ''},
        { id: 5, cat: '치즈', person: '태리', food: ['물', '사료'], notes: '', taketime: '2025-11-06 13:03:09'},
        { id: 6, cat: '치즈', person: '영하', food: ['닭가슴살'], notes: '배가 빵빵함', taketime: '2025-11-06 15:51:52', lastTake: ''},
        { id: 7, cat: '치즈', person: '영하', food: ['물'], notes: '', taketime: '2025-11-06 19:35:45', lastTake: ''},
        { id: 8, cat: '치즈', person: '영하', food: ['츄르'], notes: '먹다가 사레걸림', taketime: '2025-11-06 23:04:59', lastTake: ''},
        { id: 9, cat: '치즈', person: '영하', food: ['물'], notes: '', taketime: '2025-11-06 23:51:52', lastTake: ''},
        { id: 10, cat: '흰둥이', person: '영하', food: ['물'], notes: '', taketime: '2025-11-06 11:58:52', lastTake: ''},
        { id: 11, cat: '흰둥이', person: '영하', food: ['사료'], notes: '', taketime: '2025-11-06 19:30:06', lastTake: ''},
    ]

    const [selectCat, setSelectCat] = useState({});
    const [mealData, setMealData] = useState([]);
    const [openDetail, setOpenDetail] = useState(false);
    const [openCheckMeal, setOpenCheckMeal] = useState(false);
    const handleDetailOpen = (data) => {
        setSelectCat(data); //받아온 data > 고양이의 id, name이 같은걸 db에서 찾아서 해당 고양이의 데이터만 가져오는 api만들기
        const catMeal = takeMeal.filter(meal => meal.cat === data.name)
        setMealData(catMeal)
        console.log(catMeal)    
        setOpenDetail(true);
    }
    const handleDetailClose = () => {
        setOpenDetail(false);
        setMealData([])
        setSelectCat({});
    }

    const handleCheckMealOpen = () => {
        setOpenCheckMeal(true);
    }
    
    const handleCheckMealClose = () => {
        setOpenCheckMeal(false);
    }

    useEffect(()=>{
        setOpenDetail(false);
        setOpenCheckMeal(false);
        setMealData([])
        setSelectCat({});
    },[])
    return(
        <>
            <MealMeowLogo />
            <Cats handleDetailOpen={handleDetailOpen} data={catsData}/>
            {openDetail && <DetailCats openDetail = {openDetail} handleDetailClose={handleDetailClose} handleCheckMealOpen={handleCheckMealOpen} data={mealData} selectCat={selectCat} isMobile={isMobile}/>}
            {openCheckMeal && <CheckMeal openCheckMeal = {openCheckMeal} handleCheckMealClose={handleCheckMealClose} data={selectCat} foodData={foodData} isMobile={isMobile}/>}
        </>
    )
}

export default MeowMain;