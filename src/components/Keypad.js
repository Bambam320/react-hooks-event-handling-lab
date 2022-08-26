// Code Keypad Component Here

function Keypad () {
    function  handlePasswordInput () {
        console.log('Entering password...')
    }
    return (
        <div>
            <input type="password" onChange={handlePasswordInput}></input>
        </div>
    )
}

export default Keypad;