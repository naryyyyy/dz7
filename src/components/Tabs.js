import { getStyleValue } from '@mui/system'
import React from 'react'
import { Tabs, Tab } from '@mui/base'

function TabsComponent(categoriesSelect, valueKey='value', label="labelKey") {

    const handleChange=(e , newValue)=>{
        getStyleValue(newValue)
    }


  return (
    <div className='categoriesList'>
    <Tabs
    value={value}
    onChange={handleChange}
    ></Tabs>
    {categories.map((tab)=>{
        <p 
        className='categoriesTitle'
        key={tad[valueKey]
    
        }
        value={tab[valueKey]}>
            {tab[labelKey]}
        </p>
      })}
    </div>
  )
}
      
    
export  default TabsComponent
