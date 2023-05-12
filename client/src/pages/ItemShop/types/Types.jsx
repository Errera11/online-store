import React from 'react';
import Selected from "../../../components/selected/Selected";
import {observer} from "mobx-react-lite";
import styles from './Types.module.css'

const Types = observer(({types, selectedTypeId, setType}) => {
    return (
        <div className={styles.container}>
            {types.map(type => (
                <Selected
                    key={type.id}
                    onClick={() => setType(type)}
                    isActive={type.id === selectedTypeId}>
                    {type.name}
                </Selected>
            ))}
        </div>
    );
});

export default Types;