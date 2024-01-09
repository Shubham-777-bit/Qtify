import React from "react";
import styles from "./Card.module.css";
// import banner from "../../asstes/banner.png"
import {Chip, Tooltip} from '@mui/material';

const Card = ({ data, type }) => {
    const getCard = (type) => {
        switch(type) {
            case "album": {
                const {image, title, follows, songs} = data;
                return (
                    <Tooltip title={`${songs.length} songs`} placement="top" arrow>
                    <div className={styles.wrapper}>
                        <div className={styles.card}>
                            <img src={image} alt="album"/>
                            <div className={styles.banner}>
                                <Chip className={styles.chip} label={`${follows}`} Follows size = "small"/>
                            </div>
                        </div>
                        <div className={styles.tittleWrapper}>
                            <p>{title}</p>
                        </div>
                    </div>
                    </Tooltip>
                );
            }
            case "song": {  
                const {image, title, likes} = data;
                return (
                    <div className={styles.wrapper}>
                        <div className={styles.card}>
                            <img src={image} alt="song" loading="lazy"/>
                            <div className={styles.banner}>
                                <Chip className={styles.chip} label={`${likes} Likes`} size="small" />
                            </div>
                        </div>
                        <div className={styles.titleWrapper}>
                            <p>{title}</p>
                        </div>
                    </div>
                );
            }
            default: 
              return <></>;
        }
    };
    return getCard(type);
}
export default Card;



