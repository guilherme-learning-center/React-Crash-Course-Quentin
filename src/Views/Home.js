import React from 'react'
import HelloWorld from '../Components/HelloWorld'


function Home() {
    return (
        <div>
            <h1 className="font-bold text-2xl">This is the HOME page situada na pasta Views</h1>
            <HelloWorld name="Gui" />
        </div>
        )
    }
    
export default Home