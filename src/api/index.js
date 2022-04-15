import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/attractions/list-in-boundary';


export const getPlaces = async (bounds) => {
 // console.log(sw, 'sw');
 // console.log(ne, 'ne');
 try {
  const { data: { data } } = await axios.get(URL, {
   params: {
    tr_longitude: bounds.ne.lng,
    tr_latitude: bounds.ne.lat,
    bl_longitude: bounds.sw.lng,
    bl_latitude: bounds.sw.lat,
   },
   headers: {
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    'X-RapidAPI-Key': 'a440b54b8dmsh2126e244984d027p144e16jsn4ae2a803e0cb'
   }
  });
  return data;

 } catch (error) {
  console.log(error);
 }
}