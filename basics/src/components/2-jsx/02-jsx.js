import React from 'react'

function Jsx2() {
    const isAdmin = false;
    const loading = false;
  return (
    
    <>
    {
        isAdmin 
        ? <>
            <h2>
                Admin Menu
            </h2>
            <ul>
                <li>Kullanici olustur</li>
                <li>Kullaniciyi Guncelle</li>
                <li>Sil</li>
            </ul>
        </>
        : 
        <>
            <li>Kullanici silme</li>
            <li>Kullaniciyi Guncelleme</li>
            <li>Sil</li>
        </>
        
    }
    </>
  )
}

export default Jsx2