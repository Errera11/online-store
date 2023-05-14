import React, {useEffect, useState} from 'react';
import filledStar from '../../assets/filledStar.png';
import unfilledStar from '../../assets/unfilledStar.png';

const Rate = ({onClick, count = 5, isRated, rate}) => {
    const [currentStar, setCurrentStar] = useState(-1);

    const stars = count => {
        return Array(count).fill(0).map((_, idx) => idx);
    }

    return (
        <div className={'flex flex-row'}>
            {isRated ?
                <div className={'flex flex-col items-center'}>
                    <div>You have already rated this item!</div>
                    <div className={'flex'}>
                        {stars(count).map(star =>
                            <div
                                className={'pr-2 w-[30px] h-[30px] '}>
                                {star < rate ? <img src={filledStar}
                                /> : <img src={unfilledStar}/>}
                            </div>)}
                    </div>
                </div>
                :
                <div className={'flex flex-col items-center'}>
                    <div>Rate the item!</div>
                    <div className={'flex'}>
                        {stars(count).map(star =>
                            <div
                                className={'pr-2 w-[30px] h-[30px] '}
                                onMouseLeave={() => setCurrentStar(-1)}
                                onMouseOver={() => setCurrentStar(star)} onClick={() => onClick(star + 1)}>
                                {star <= currentStar ? <img src={filledStar}
                                /> : <img src={unfilledStar}/>}
                            </div>
                        )}
                    </div>
                </div>}
        </div>

    );
};

export default Rate;