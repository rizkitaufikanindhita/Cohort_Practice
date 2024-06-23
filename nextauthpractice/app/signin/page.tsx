"use client"
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const signin = () => {
    const router = useRouter();
    
    return <div>
        <button onClick={async () => {
            await signIn("google");
        }}>Login with google</button>

        <br />
        <button onClick={async () => {
            await signIn("github");
        }}>Login with Github</button>
        <br />
        <input type='text' placeholder='username' className='border mr-3'/>
        <input type='password' placeholder='*******' className='border ml-3'/>
        <button onClick={async () => {
            const res = await signIn("credentials", {
                username: "",
                password: "",
                redirect: false,
            });
            console.log(res);
            router.push("/")
        }}>Login with email</button>
        
    </div>
}

export default signin
