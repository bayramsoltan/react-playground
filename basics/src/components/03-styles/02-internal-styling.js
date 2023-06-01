import React from 'react'

const InternalStyling = () => {
    const styles = {
        color:"red",
        fontSize:"2rem",
        fontWeight:'bold',
        textAlign:"right"
    }
    const styleParagraph = {
        ...styles,//spread kullandik
        color:"green",
        fontSize:"3rem"

    }
  return (
    <div>
        <h2 style={styleParagraph}>React Loops</h2>
        <p style={styles}>lreom impusmsdasdnaksd aodas
        </p>
        <p style={{...styles,//spread kullandik
        color:"green",
        fontSize:"3rem"}}>
            sdaoisdhasdjadjasldasjdoadjlsakdkldjaskdjasdklasjdlkasjd
        </p>
    </div>
  )
}

export default InternalStyling