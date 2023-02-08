import Header from "../components/Header"
import Filter from "../components/Filter"
import Feed from "../components/Feed"

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Filter />
            <Feed />
        </div>
    )
}

export default Home