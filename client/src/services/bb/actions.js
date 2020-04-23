import axios from 'axios';
import { isEmpty } from 'lodash';

export const insert_rating = async(rating, id) => {

    if (isEmpty(rating))  throw Object.assign(
        new Error('No Rating'),
        { code: 402 }
     );

    if (isEmpty(id))  throw Object.assign(
        new Error("Id is empty"),
        { code: 402 }
     );

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

    if(isEmpty(comment))  throw Object.assign(
        new Error("No Comment"),
        { code: 402 }
     );

    if(isEmpty(name))  throw Object.assign(
        new Error("No Name"),
        { code: 402 }
     );
    
    if(isEmpty(id)) throw Object.assign(
        new Error("Id is Empty"),
        { code: 402 }
     );

    let response;

    try {
        response = await axios.post('reviews/comment', {name, comment, id});
    }catch(e){
        console.log(e)
        return {err: 'Sorry, we are having issues submitting your comment'};
    }

    return {name, comment}
}