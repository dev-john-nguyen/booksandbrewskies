import React from 'react';

const starSvg = (
    <svg className="bi bi-star" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 00-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 00-.163-.505L1.71 6.745l4.052-.576a.525.525 0 00.393-.288l1.847-3.658 1.846 3.658a.525.525 0 00.393.288l4.052.575-2.906 2.77a.564.564 0 00-.163.506l.694 3.957-3.686-1.894a.503.503 0 00-.461 0z" clipRule="evenodd" />
    </svg>
)

const fullStarSvg = (
    <svg className="bi bi-star-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
)

const halfStartSvg = (
    <svg className="bi bi-star-half" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M5.354 5.119L7.538.792A.516.516 0 018 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0116 6.32a.55.55 0 01-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.519.519 0 01-.146.05c-.341.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 01-.171-.403.59.59 0 01.084-.302.513.513 0 01.37-.245l4.898-.696zM8 12.027c.08 0 .16.018.232.056l3.686 1.894-.694-3.957a.564.564 0 01.163-.505l2.906-2.77-4.052-.576a.525.525 0 01-.393-.288L8.002 2.223 8 2.226v9.8z" clipRule="evenodd" />
    </svg>
)


export const handleStarRating = (ratings) => {
            //calc customer rating avg

            if(ratings.length < 1){
                ratings.push(0)
            }
            let sum = 0;
            for (let i = 0; i < ratings.length; i++) {
                sum += parseInt(ratings[i], 10);
            }

            let avgCustomerRating = sum / ratings.length;

            avgCustomerRating % 1 !== 0 && (avgCustomerRating = avgCustomerRating.toFixed(1))

            let avgCustStarRating = [];

            for (let i = 1; i < 6; i++) {
                if (avgCustomerRating >= i) {
                    avgCustStarRating.push(<p className="p-1" key={'avg' + i}>{fullStarSvg}</p>);
                } else {
                    if (avgCustomerRating <= (i - .5) && avgCustomerRating > (i - 1)) {
                        avgCustStarRating.push(<p className="p-1" key={'avg' + i}>{halfStartSvg}</p>);
                    } else {
                        avgCustStarRating.push(<p className="p-1" key={'avg' + i}>{starSvg}</p>);
                    }
                }
            }

            return {avgCustomerRating, avgCustStarRating}
}