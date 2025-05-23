import './button.css';

function ButtonCreate({ className, text }) 
{
    return <button className={className}>{text}</button>;
}

export default ButtonCreate;
