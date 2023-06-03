import React from 'react'
import Welcome1 from './02-welcome'
import Welcome2 from './03-welcome'
import Welcome3 from './04-welcome'
const Greetings = () => {
  return (
    <div>
      <Welcome1 firstName= "John" lastName = "Doe" disabled desc = "Ben bir Dev'im"/>
      <Welcome1 firstname = "Rust" lastName = "Cohle" desc="time is flat circle"/>
      <Welcome2 firstName = "Kevin" lastName = "De bruyne"/>
      <Welcome3 firstName = "Lionel" lastName = "Messi"/>
    </div>
  )
}

export default Greetings