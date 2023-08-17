import React from 'react'
import classes from './Card.module.scss'
import Form from '../Form/Form'
import Result from '../Result/Result'

const Card = () => {
  return (
    <main className={classes.card}>
        <Form/>
        <Result/>
    </main>
  )
}

export default Card