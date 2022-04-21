import axios from "axios";


// Anrop som görs till Rapid API:s api som hämtar datan beroende på vilken "type" användaren vill få fram. 
export const getPlaces = async (type, bounds) => {
 // console.log(sw, 'sw');
 // console.log(ne, 'ne');
 try {
  const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
   params: {
    tr_longitude: bounds.ne.lng,
    tr_latitude: bounds.ne.lat,
    bl_longitude: bounds.sw.lng,
    bl_latitude: bounds.sw.lat,
   },
   headers: {
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY
   }
  });
  return data;

 } catch (error) {
  console.log(error);
 }
}