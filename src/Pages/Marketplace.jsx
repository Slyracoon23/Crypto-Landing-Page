import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Index'
import Sidebar from '../Components/SideBar/Index'
import Hero from '../Components/Hero/Index'
import InfoSection from '../Components/Info/Index'
import Services from '../Components/Services/Index'
import { homeObj1, homeObj2, homeObj3 } from '../Components/Info/Data'
import Footer from '../Components/Footer/Index'
import ListingItem from '../Components/ListingItem'

const Marketplace = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='category'>
        <header>
            <p className="pageHeader">
              Offers
            </p>
        </header>
        {loading ? <Spinner /> 
        : listings && listings.length > 0 ?
        <>
        <main>
            <ul className="categoryListings">
                {listings.map((listing) => {
                    return(
                   <ListingItem listing={listing.data} id={listing.id} key={listing.id}/>
                    )
                })}
            </ul>
        </main>
        </>
        : <p>No offers available</p>}
    </div>
    )
}

export default Marketplace
