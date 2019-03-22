//import axios from 'axios';

export const fetchSessions = () => async dispatch => {
    try {
        //Hardcoding the results object
        const res = {
            "results": [{
                    "qaId": 0,
                    "topic": "How 'bout them apples?",
                    "user": {
                        "id": 7,
                        "name": "Apple",
                        "picture": "/assets/apple.png"
                    }
                },
                {
                    "qaId": 1,
                    "topic": "Fruit ninja",
                    "user": {
                        "id": 11,
                        "name": "Avocado",
                        "picture": "/assets/avocado.png"
                    }
                }
            ]
        };

        dispatch({
            type: 'FETCH_SESSION',
            payload: res.results
        })
    } catch (err) {
        console.log(err)
    }
}

export const fetchSessionDetail = (id) => async dispatch => {
    let res;
//Hardcoding the response 
    if (id == 0) {
        res = {
            "qaId": 0,
            "topic": "How 'bout them apples?",
            "user": {
                "id": 7,
                "name": "Apple",
                "picture": "/assets/apple.png"
            },
            "questions": [{
                    "qid": 0,
                    "text": "Why are you so delicious?",
                    "user": {
                        "id": 8,
                        "name": "Banana",
                        "picture": "/assets/banana.png",
                        "location": "Palo Alto, US"
                    },
                    "answer": "I'm full of fructose!"
                },
                {
                    "qid": 1,
                    "text": "What is your nutritional value?",
                    "user": {
                        "id": 10,
                        "name": "Grape",
                        "picture": "/assets/grape.png",
                        "location": "Seattle, US"
                    },
                    "answer": "Great question! I'm packed with Vitamin C."
                }
            ]
        }
    }
    if (id == 1) {
        res = {
            "qaId": 1,
            "topic": "Fruit ninja",
            "user": {
                "id": 11,
                "name": "Avocado",
                "picture": "/assets/avocado.png"
            },
            "questions": [{
                "qid": 3,
                "text": "What's your high score?",
                "user": {
                    "id": 10,
                    "name": "Grape",
                    "picture": "/assets/grape.png",
                    "location": "Seattle, US"
                },
                "answer": "Eleventy million!!"
            }, {
                "qid": 4,
                "text": "Are you even a fruit?",
                "user": {
                    "id": 8,
                    "name": "Banana",
                    "picture": "/assets/banana.png",
                    "location": "Palo Alto, US"
                },
                "answer": "I plead the fif."
            }]
        }
    }
    try {
        dispatch({
            type: 'FETCH_DETAIL',
            payload: res
        })

    } catch (err) {
        console.log(err)
    }
}