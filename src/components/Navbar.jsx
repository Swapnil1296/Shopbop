import '../css/Navbar.css'

export const Navbar = () => {
    const items = ["WHAT'S NEW", "OUR FAVORITES", "DESIGNERS", "CLOTHING", "ACTIVE", "SHOES", "BAGS", "ACCESSORIES", "MEN", "SALE"];
    return (
        <div className="d_navbar">
            <div className='d_heading'>
                <h1 className='d_title'>shopbop</h1>
            </div>
            <div className='d_nav_item'>
                {items.map(i => <p className='d_item_map'>{i}</p>)}
                <img className='d_item_map' width='1.5%' src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M1 6.5C1 3.467 3.467 1 6.5 1S12 3.467 12 6.5 9.533 12 6.5 12A5.506 5.506 0 011 6.5m13.932 8.102l-4.334-4.334a5.507 5.507 0 001.46-3.739C12.058 3.48 9.578 1 6.528 1A5.535 5.535 0 001 6.53c0 3.048 2.48 5.528 5.529 5.528 1.44 0 2.754-.554 3.739-1.46l4.334 4.334a.232.232 0 00.33 0 .233.233 0 000-.33' stroke='%23000' fill='none' fill-rule='evenodd'/%3E%3C/svg%3E" alt="search" />
            </div>
        </div>
    )
}

