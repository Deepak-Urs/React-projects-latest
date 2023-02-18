import React, { useEffect, useState } from 'react'
import axios from 'axios'

const pinAPI = `https://api.postalpincode.in/pincode/`

function Debouncing() {
    const [pin, setPin] = useState("")

    useEffect(() => {
        const debouncing = setTimeout(() => {
            //console.log('debouncing call data', pin);
            axios.get(pinAPI + pin)
                .then(res => {
                    console.log(res.data[0].PostOffice);
                })
                .catch(err => {
                    console.log(err)
                })
        }, 2000);

        return () => { 
            //console.log('return vali pin', pin);
            clearTimeout(debouncing)
        }
    }, [pin]);

    return (
        <div>
            <input onChange={(event) => setPin(event.target.value)} placeholder='Enter your pincode' />
        </div>
    )
}

export default Debouncing
