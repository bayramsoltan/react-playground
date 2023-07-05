import React from 'react'
import northernLights from "../../assets/img/image1.jpg"
const Image = () => {
  return (
    <div>
        {/* External URL or CDN */}
        <img src="https://images.unsplash.com/photo-1688410053610-42290a7267df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" alt="" />

        {/* static yontemde public klasorunde olmasi lazim*/}
        <img src="assets/img/messi.jpg" alt="" />

        {/*Import ve require yonteminde dosyalar src icinde olmalidir */}

        <img src={northernLights} alt="" width={300} />

        <img src={require("../../assets/img/image2.jpg")} alt=""  width={300}/>
    </div>
  )
}

export default Image