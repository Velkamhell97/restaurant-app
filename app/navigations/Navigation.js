import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";

/*los componentes empiezan en mayuscula, las funciones en minuscula*/

import Restaurants from "../screens/Restaurants";
import Favorites from "../screens/Favorites";
import Accounts from "../screens/Account";
import Search from "../screens/Search";
import TopRestaurants from "../screens/TopRestaurants";

const Tab = createBottomTabNavigator();

//Al parecer la transision vertical dependia del tipo de nvigator y stack
function Navigation() {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="restaurants" component={Restaurants} options={{title:"Restaurantes"}} />
                <Tab.Screen name="favorites" component={Favorites} options={{title:"Favoritos"}} />
                <Tab.Screen name="account" component={Accounts} options={{title:"Cuentas"}} />
                <Tab.Screen name="search" component={Search} options={{title:"Busqueda"}} />
                <Tab.Screen name="top-restaurants" component={TopRestaurants} options={{title:"Top 5"}} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Navigation