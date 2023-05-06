import React, {useState, useEffect, useContext} from 'react';
import LinkBox from '../components/LinkBox';
import UserHeader from '../components/UserHeader'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router';
import UserContext from "../context/userContext";
import styles from '../styles/apply.module.css'

const dashboard = () => {
    const router = useRouter();
    const [data, setData] = useState({});
    const { setUserData } = useContext(UserContext)

    const redirect = ()=>{
        router.push('/login');
    }

    useEffect(()=>{
        if(!localStorage.getItem('LinkifyToken')) return redirect;
        fetch(`https://linkstack-server.onrender.com/data/dashboard`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                tokenMail: localStorage.getItem('LinkifyToken')
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.status==='error'){
                return toast.error('Error happened');
            }
            setData(data.userData);
            setUserData(data.userData);
            localStorage.setItem('userHandle', data.userData.handle);
            // toast.success(data.message);
        }).catch(err=>{
            console.log(err);
        })
    }, [])

    return (
        <>
        <div className={styles.background + " main min-h-screen"}>
            <div>
            
                <UserHeader />
                <main>
                    <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
                        <LinkBox lbTitle="Links" lbNumber={data.links} lbSvg="links" lbTheme="orange"/>
                        <LinkBox lbTitle="Avg. Growth" lbNumber="30%" lbSvg="avggrowth" lbTheme="yellow"/>
                        <LinkBox lbTitle="Growth down" lbNumber="12" lbSvg="growthdown" lbTheme="blue"/>
                        <LinkBox lbTitle="Booming Links" lbNumber="30%" lbSvg="boominglinks" lbTheme="green"/>
                    </section>
                </main>
            </div>
        </div>
        </>
    )
}

export default dashboard