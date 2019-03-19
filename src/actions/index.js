import axios from 'axios';

export const fetchSessions = () => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8081/api/qa`);
        debugger
        dispatch({
            type: 'FETCH_SESSION',
            payload: res
        })
        console.log('res', res.data);
    } catch (err) {
        console.log(err)
    }
}


export const fetchResult = (textInput) => async dispatch => {
    try {
        const res = await axios.get(`http://cqms.tech/bkcqms/public/api/night/search/${textInput}`);

        dispatch({
            type: 'GET_RESULT',
            payload: res.data
        })

    } catch (err) {
        console.log(err)
    }
}

export const  getCompanyDetail = (id) => async dispatch => {
    const res = await axios.get(`http://cqms.tech/bkcqms/public/api/night/get/${id}`);
    dispatch({
        type: 'GET_DETAIL',
        payload: res.data
    })
}

 export const fetchUpdate = (data) =>  async dispatch => {
     const res = await axios.post(`http://cqms.tech/bkcqms/public/api/night/update`, data);
     debugger
     dispatch({
         type: 'FETCH_UPDATE',
         payload: res.data
     })
 }

 export const fetchDelete = (id) =>  async dispatch => {
    const res = await axios.get(`http://cqms.tech/bkcqms/public/api/night/delete/${id}`);
    debugger
    dispatch({
        type: 'FETCH_DELETE',
        payload: id
    })
}

export const sendTextInput = (textInput) => dispatch => {
    // console.log('textInput:',textInput)
    dispatch({
        type: 'SEND_TEXT_INPUT',
        payload: textInput
    })
}