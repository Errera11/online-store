import React, {useState} from 'react';
import filledStar from '../../assets/filledStar.png';
import unfilledStar from '../../assets/unfilledStar.png';

const Rate = ({onClick, count = 5}) => {
    const [currentStar, setCurrentStar] = useState(-1);

    const stars = count => {
        return Array(count).fill(0).map((_, idx) => idx);
    }

    return (

            <div className={'flex flex-row'}>
                {stars(count).map(star =>
                    <div
                        className={'mr-2 w-[20px] h-[20px]'}
                        onMouseLeave={() => setCurrentStar(-1)}
                        onMouseOver={() => setCurrentStar(star)} onClick={() => onClick(star+1)}>
                        {star <= currentStar ? <img src={filledStar}
                        /> : <img src={unfilledStar}/>}
                    </div>
                )}
            </div>


    );
};

export default Rate;