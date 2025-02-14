import { useState } from 'react'


const Password = () => {
    const [password, setPassword] = useState("")
    const [weak, setWeak] = useState("")
    const [medium, setMedium] = useState("")
    const [strong, setStrong] = useState("")

    const knowPasswordStrength = (password) => {
        let test = 0;
        if (password.length >= 8) test += 1;
        if (password.length >= 12) test += 1;

        if (/[A-z]/.test(password)) test += 1
        if (/[a-z]/.test(password))  test +=1
        if (/[0-9]/.test(password)) test +=1
        if (/[^A-Za-z0-9]/.test(password)) test +=1

        return test;
    };


        const handlePasswordChange = (e) => {
            const newPassword = e.target.value;
            setPassword(newPassword);
        

        const testScore = knowPasswordStrength(password)

        if (testScore <= 2) {
            setWeak('red')
            setMedium('')
            setStrong('')
        } else if (testScore <= 4) {
            setWeak('red')
            setMedium('orange')
            setStrong('')
        } else {
            setWeak('red')
            setMedium('orange')
            setStrong('green')
        }
    };
    return (

            <div className='Shopingmain'>
                <h3>Password Verification</h3>
                <input
                    placeholder='Password'
                    type='text'
                    className='Storeinput'
                    onChange={handlePasswordChange}
                    value={password}
                />
                <article className='Storecontainer'>
                    <div className='Storecontainerraate' style={{ backgroundColor: weak }}></div>
                    <div className='Storecontainerraate' style={{ backgroundColor: medium }}></div>
                    <div className='Storecontainerraate' style={{ backgroundColor: strong }}></div>
                </article>
            </div>
    );
}

export default Password
