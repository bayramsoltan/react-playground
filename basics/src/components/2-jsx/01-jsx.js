const Jsx1 = ()=>{
    const name = "Bayram Soltan";


    const user = {
        name: "Edgar",
        age: 28,
    };
    return(
        <>
        <p>
            Butun JSX kodlari bir eleman icinde olmalidir.
        </p>
        {
            /* This is comment row*/
        }
        <p>
            Merhab {name}
        </p>

        <p>
            username: {user.name};
        </p>
        </>
    )
}

export default Jsx1;