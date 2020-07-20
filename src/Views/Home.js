import React from 'react'
import HelloWorld from '../Components/HelloWorld'


function Home() {
    // Texto que vai para o PR
    return (
        <div>
            <h1 className="font-bold text-2xl">This is the HOME page situada na pasta Views</h1>
            <p>Texto que vai para o PR</p>
            <HelloWorld name="Gui" />
        </div>
        )
    }
    
export default Home