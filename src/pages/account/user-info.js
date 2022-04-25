import { useState,useEffect } from "react";
import countries from '../register/countries'

function UserInfo({ user,userInfo }) {
    // console.log(userInfo)
    let countryInput = document.getElementById('country-input-user-info')
    let mobileInput = document.getElementById('mobile-input-user-info')
    let nameInput = document.getElementById('name-input-user-info')

    let [editName, setEditName] = useState(false)
    let [editMobile, setEditMobile] = useState(false)
    let [editCountry, setEditCountry] = useState(false)

    let [name,setName] = useState(user["name"])
    let [mobile,setMobile] = useState()
    let [country,setCountry] = useState()

    let [correctCountry,setCorrectCountry] = useState(true)
    let [correctName,setCorrectName] = useState(true)
    let [correctMobile,setCorrectMobile] = useState(true)

    // let updateName = () => {
    //     correctName ? 
    //     : nameInput.classList.add('error')
    // }

    // let updateMobile = () => {
    //     correctName ? 
    //     : nameInput.classList.add('error')
    // }

    // let updateCountry = () => {
    //     correctName ? 
    //     : nameInput.classList.add('error')
    // }

    let handleCountry = (country = country) =>{
        let checkCountry = false;

        countries.forEach((element)=>{
            element["name"].toLowerCase() === country.toLowerCase() && (checkCountry = true)
        })
        
        checkCountry ? (countryInput.classList.contains('error') && countryInput.classList.remove('error'))
        :  countryInput.classList.add('error');

        setCorrectCountry(checkCountry)
    }

    let handleMobile  = (mobile) => {
        let checkMobile = /^([0|+[0-9]{1,5})?([7-9][0-9]{9})$/

        checkMobile.test(mobile) ? (mobileInput.classList.contains('error') && mobileInput.classList.remove('error')) 
        : mobileInput.classList.add('error') ;

        setCorrectMobile(checkMobile.test(mobile))
    }

    let handleName = (name) => {
        let checkName = /[a-zA-Z]{2,20}/
        
        checkName.test(name) ? (nameInput.classList.contains('error') && nameInput.classList.remove('error')) 
        : nameInput.classList.add('error') 

        setCorrectName(checkName.test(name))
    }
    
    let codeToCountry = (code=userInfo["Country"]) =>{
        countries.forEach((country) => {
            if(country.code === code){
                setCountry(country.name)
            }
        })
    }
    
    useEffect(()=>{
        setMobile(userInfo["Mobile"])
        setCountry(userInfo["Country"])
        codeToCountry()
    },[])

    
    return (
        <>
            <div className="edit-manager">
                <div id="user-name" className="pb-fit">
                    <div className="container input-text" >
                        <p><b>Name</b></p>
                    </div>
                    <div className="container container-spliter" >
                        <div className="field">
                            <div id="name-input-user-info" class="ui big icon input">
                                <input onChange={(e)=>{setName(e.target.value)
                                handleName(e.target.value)
                                }} value={name} disabled={!editName} type="text" />
                                <i onClick={() => { setEditName(true) }} class="edit link icon"></i>
                            </div>
                        </div>
                        <button class="ui inverted big blue button"
                            disabled={!editName}
                        >Confirm</button>
                    </div>
                </div>
                <div id="user-country" className="pb-fit">
                    <div className="container input-text" >
                        <p><b>Mobile Number</b></p>
                    </div>
                    <div className="container container-spliter" >
                        <div className="field">
                            <div id="mobile-input-user-info" class="ui big icon input">
                                <input value={mobile} onChange={(e) => {setMobile(e.target.value)
                                    handleMobile(e.target.value)
                                }} disabled={!editMobile} type="text" placeholder="Search..." />
                                <i onClick={() => { setEditMobile(true) }} class="edit link icon"></i>
                            </div>
                        </div>
                        <button class="ui inverted big blue button"
                            disabled={!editMobile}
                        >Confirm</button>
                    </div>
                </div>
                <div id="user-name" className="pb-fit">
                    <div className="container input-text" >
                        <p><b>Country</b></p>
                    </div>
                    <div className="container container-spliter" >
                        <div className="field">
                            <div id="country-input-user-info" class="ui big icon input">
                                <input value={country}
                                onChange={(e)=>{setCountry(e.target.value)
                                handleCountry(e.target.value)
                                }}
                                disabled={!editCountry} type="text" placeholder="Search..." />
                                <i onClick={() => { setEditCountry(true) }} class="edit link icon"></i>
                            </div>
                        </div>
                        <button class="ui inverted big blue button"
                            disabled={!editCountry}
                        >Confirm</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default UserInfo;