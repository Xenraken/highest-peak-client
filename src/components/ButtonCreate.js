import './button.css';

function ButtonCreate({ className, text, onClick }) 
{
    return <button className={className} onClick={onClick}>{text} </button>;
}

export default ButtonCreate;
