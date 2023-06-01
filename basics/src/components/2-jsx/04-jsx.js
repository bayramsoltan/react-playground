import React from 'react'

const Jsx4 = () => {
    const names = ["Maria Rodriguez", "Michael Chen", "Sarah Kim", "Ahmed Hassan"];
    const cities = ["Miami", "Toronto", "Seoul", "Cairo"];

    const nameInfo = names.map((name) => {
        return <div>{name}</div>
    });

    return (
        <div>
            <ul>
                {
                    names.map((name)=>{
                        return <li>{name}</li>
                    })
                }
            </ul>
        </div>
    )

}

export default Jsx4;