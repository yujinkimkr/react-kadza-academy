import classes from './FeaturedCard.module.scss';
import lesson1 from '../../images/lesson1.jpg';
import lesson2 from '../../images/lesson2.jpg';
import lesson3 from '../../images/lesson3.png';
const FeaturedCard = (props) => {
  return <div className={classes.card__container}>
    <div className={classes.card__pic}>
      {props.imgName === 'lesson1' &&
        <img src={lesson1} alt="online lesson" />
      }
      {props.imgName === 'lesson2' &&
        <img src={lesson2} alt="online lesson" />
      }
      {props.imgName === 'lesson3' &&
        <img src={lesson3} alt="online lesson" />
      }

    </div>
    <div className={classes.card__description}>
      <p>{props.field} {props.img}</p>
      <p>{props.title}</p>
      <p>By - {props.writer}</p>
    </div>
    <div className={classes.card__etc}>
    </div>
  </div>
}

export default FeaturedCard;