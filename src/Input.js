

const Input = ({value, setValue}) => {
    
    const handleInput = (event) => {
        setValue(event.target.value)
    }

    return (
        <input type='text'
            value={value}
            onChange={handleInput}
            placeholder='Type text here'
        />
    );
}

export default Input