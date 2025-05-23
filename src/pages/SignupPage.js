import styles from './signup-page.module.css';

function SignupPage() 
{
    return (
        <div className={styles['signup-container']}>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
        </div>
    )
}

export default SignupPage;