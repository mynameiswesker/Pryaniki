export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST';
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS';

export function getPhotos(period) {
    return dispatch => {
        dispatch({
            type: GET_PHOTOS_REQUEST,
             payload: period
                 })

        fetch("arrPict.json")//Загрузили json с графиками
            .then(response=>{
                return response.json();
            })
            .then(data=>{
                return data;
            })
            .then(data=>{
               setTimeout(()=>{
                   dispatch({
                       type: GET_PHOTOS_SUCCESS,
                       payload: data
                   })
               },1000)
                }

            )
    }
}