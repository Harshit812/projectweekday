const API_BASE_URL = 'https://api.weekday.technology';

const fetchWeekDayJobsData = async(limit=10, offset=0) => {
    const myHeaders  = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const body = JSON.stringify({
        limit,
        offset
    });
    const requestOptions  = {
        method: "POST",
        headers: myHeaders ,
        body
    };
    try{
        const response = await fetch(`${API_BASE_URL}/adhoc/getSampleJdJSON`, requestOptions );
        const data = await response.text();
        return data;
    }
    catch(error){
        console.log('Error fetching WeekDayJobs Data: ', error);
        throw error;
    }
};

export {fetchWeekDayJobsData};