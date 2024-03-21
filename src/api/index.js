import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lng,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            
            },
            headers: {
              'X-RapidAPI-Key': '89cd1c11d0mshcb8a4d7077a1c0cp18da05jsn8bb6622aa980',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          }
        ); 

        return data;
    } catch (error) {
        console.log(error)  
    }
}