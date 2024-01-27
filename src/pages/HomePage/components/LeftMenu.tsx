import React from 'react'
import ListContainer from './ListContainer'


function LeftMenu() {
    return (
        <div className="fixed top-0 left-0 h-screen w-80 bg-gray-800 text-white p-4">
            <ListContainer />
        </div>
    )
}

export default LeftMenu