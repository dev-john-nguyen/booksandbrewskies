import axios from 'axios';
import { isEmpty } from 'lodash';

export const insert_rating = async(rating, id) => {

    if (isEmpty(rating)) throw 'Rating is Empty';

    if (isEmpty(id)) throw 'No Item';

    let response;

    try {
        response = await axios.post('reviews/rating', {rating, id});
    }catch(e){
        console.log(e)
        return {err : 'Sorry, we are having issues submitting your rating'};
    }

    return {rating: rating};
}

export const insert_comment = async(name, comment, id) => {

    if(isEmpty(comment)) throw 'No Comment';

    if(isEmpty(name)) throw 'No Name';
    
    if(isEmpty(id))  throw 'No Item';

    let response;

    try {
        response = await axios.post('reviews/comment', {name, comment, id});
    }catch(e){
        console.log(e)
        return {err: 'Sorry, we are having issues submitting your comment'};
    }

    return {name, comment}
}