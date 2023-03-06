const Filter = () => {
    return (
        <div className="filter">
            <div>
                <input className="searchBar" onKeyUp="search_trip()" name="search" type="text" placeholder='Search trips' />
            </div>
        </div>
    )
}

export default Filter