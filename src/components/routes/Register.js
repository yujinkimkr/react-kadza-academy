import React from 'react';
import Top from '../common/Top';
import classes from './Register.module.scss';
import Talk from '../../images/talk.svg';
import Arrow from '../../images/arrow.svg';
import Test from '../../images/test.svg';
import Lesson from '../../images/lesson.svg';
import Result from '../../images/result.svg';

const Register = () => {
  return <div>
    <Top title='Register' imgName='register' />
    <h1>Process of Resgister</h1>
    <div className={classes.process_container}>
      <div className={classes.process}>
        <img className={classes.icon} src={Talk} />
        <p>Consulting</p>
      </div>
      <img className={classes.icon} src={Arrow} alt="arrow" />
      <div className={classes.process}>
        <img className={classes.icon} src={Test} />
        <p>Test</p>
      </div>
      <img className={classes.icon} src={Arrow} alt="arrow" />
      <div className={classes.process}>
        <img className={classes.icon} src={Result} />
        <p>Result</p>
      </div>
      <img className={classes.icon} src={Arrow} alt="arrow" />
      <div className={classes.process}>
        <img className={classes.icon} src={Lesson} />
        <p>Start</p>
      </div>
    </div>
    {/* <p className={classes.content}>
      Diagnose the current level through counseling and level tests, and assign a teacher who fits the level. <br />
      Conduct group or individual classes with native or Polish teachers.
      <br />
      Please don't hesitate to contact me if you have any questions.
    </p> */}
  </div>
}

export default Register;