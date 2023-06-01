import React from 'react'
import styles from './04-external.module.css'

export default function ExternalModuleStyling() {
    const {externalModuleStyling,title} = styles; // destructuring
  return (
    <div className={externalModuleStyling}>
        <h2 className={title}>React Hooks</h2>
        <p>zcjklcjxklzjasdasdasdsckljczkxczlkxcjklc</p>
    </div>
  )
}
