//Base URL

const base_url ="https://api.rawg.io/api/";

//get data
const getCurrentMonth = () => {
    const month = new Date().getMonth()+1;
    if(month<10){
        return `0${month}`;
    }else{
        return month;
    }
}

//get date
const getCurrentDay = () => {
    const day = new Date().getDay();
    if(day<10){
        return `0${day}`;
    }else{
        return day;
    }
}

//current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentDay}-${currentMonth}-${currentYear}`;
const lastYear = `${currentDay}-${currentMonth}-${currentYear-1}`;
const nextYear = `${currentDay}-${currentMonth}-${currentYear+1}`;

//Popular games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=20`;

export const popularGamesURL = () => `${base_url}${popular_games}`;