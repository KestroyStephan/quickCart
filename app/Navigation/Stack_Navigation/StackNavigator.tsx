import {createStackNavigator} from '@react-navigation/stack';
import HomeBottomTabNavigation from "@/app/Navigation/tab_Navigation/HomeBottomTabNavigation";

import DailyDealsScreen from "@/components/ui/screen/other/DailyDealsScreen";
import CustomerCareScreen from "@/components/ui/screen/other/CustomerCareScreen";
import LatestProductsScreen from "@/components/ui/screen/other/LatestProductsScreen";
import VouchersScreen from "@/components/ui/screen/other/VouchersScreen";
import SettingsScreen from "@/components/ui/screen/other/SettingsScreen";
import ProfileScreen from "@/components/ui/screen/other/ProfileScreen";
import NotificationsScreen from "@/components/ui/screen/other/NotificationsScreen";
import MyOrderScreen from "@/components/ui/screen/other/MyOrderScreen";
const Stack = createStackNavigator();

export default function StackNavigator(){
    return(
        <Stack.Navigator >
            <Stack.Screen name={'Process'}
                          options={{headerLeft:()=>null, headerShown:false}}
                          component={HomeBottomTabNavigation}/>
            <Stack.Screen name={'DailyDeals'}
                          options={{title:'Daily Deals'}}
                          component={DailyDealsScreen}/>
            <Stack.Screen name={'CustomerCare'}
                          options={{title:'Customer Care'}}
                          component={CustomerCareScreen}/>
            <Stack.Screen name={'LatestProducts'}
                          options={{title:'Latest Products'}}
                          component={LatestProductsScreen}/>
            <Stack.Screen name={'MyOrder'}
                          options={{title:'My Order'}}
                          component={MyOrderScreen}/>
            <Stack.Screen name={'Notifications'}
                          options={{title:'Notifications'}}
                          component={NotificationsScreen}/>
            <Stack.Screen name={'Profile'}
                          options={{title:'Profile'}}
                          component={ProfileScreen}/>
            <Stack.Screen name={'Settings'}
                          options={{title:'Settings'}}
                          component={SettingsScreen}/>
            <Stack.Screen name={'Vouchers'}
                          options={{title:'Vouchers'}}
                          component={VouchersScreen}/>
        </Stack.Navigator>
    )
}