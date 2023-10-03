import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Souz from '../../components/Souz'
import TabsComponent from '../../components/Tabs'


const VALUES={
        souz:"souz",
        history:"history",
        organ:"organ",
        projects:"projects",
        ourTeam:"ourTeam"
    }
const getCategories=({action})=>{

    
    switch(categoriesSelect){
        case VALUES.souz:{
            return <Souz/>
        }
        case VALUES.history:{
            reuturn 
        }
        default:{
            return <></>
        }
        
    }
}


const main=({valueKey, labelKey})=> {
    const {categories}=useSelector(state=>state.mainReducer)
    
    const categoriesSelect=[
        { value:VALUES.souz,label:"о союзе"},
         {value:VALUES.history,label:"История организации"},
        { value:VALUES.organ,label:"Органы управления и их деятельность"},
        { value:VALUES.projects,label:"Реализуемые проекты"},
         {value:VALUES.ourTeam,label:"Наша команда"}
 
    ]

    const [value, setValue]=useState(categoriesSelect?.[0].value)
   

  return (
    <>
    <h1>
        O союзе МСУ КР
    </h1>
    <TabsComponent categoriesSelect={categoriesSelect}/>
    <getCategories action={value}/>
    </>

  )
}
 
export default main