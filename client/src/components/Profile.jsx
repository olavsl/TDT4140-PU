import { TravelCard } from "./TravelCard"
import TravelRoutes from "./TravelRoutes"

const Profile = () => {
    return (
        <div className="profile">
            <div>
                <label for="usename">Username</label>
                <input type="text" id="username" name="username" >User.username()</input>
                <label for="name">Name</label>
                <input type="text" id="name" name="name" >User.name()</input>
            </div>

            <div>
                <div>
                    <table id="myTravels">
                    <tr>
                        <th>My Travels</th>
                    </tr>
                    <tr>
                        <td>TravelRoutes.title()</td>
                    </tr>
                    </table>
                </div>
                <div>
                    <table id="likedTravels">
                    <tr>
                        <th>Liked Travels</th>
                    </tr>
                    <tr>
                        <td>TravelRoutes.title()</td>
                    </tr>
                    </table>
                </div>
                <button type="button" id="saveButton">Save</button>
            </div>
        </div>
        )
     }