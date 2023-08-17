import React, { useState } from 'react'
import classes from './Card.module.scss'
import Form from '../Form/Form'
import Result from '../Result/Result'

const Card = () => {
  const [fullDate, setFullDate] = useState(null)
  const getDateHandler = (enteredDate) =>{
    setFullDate(enteredDate)
  }
  return (
    <main className={classes.card}>
        <Form submitHandler={getDateHandler}/>
        <Result birthday={fullDate}/>
    </main>
  )
}

export default Card