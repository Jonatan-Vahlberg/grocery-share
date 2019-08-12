import React from "react"
import {Router, Stack, Scene} from "react-native-router-flux" 
import Login from "./components/LoginPage";

class Router extends  React.Component {
    render(){
        return(
            <Router>
                <Stack>
                    
                    <Scene key="auth" hideNavBar>
                        <Scene
                            key="login"
                            component={Login}
                            hideNavBar={true}
                            initial/>
                    </Scene>
                    
                    <Scene key="main">
                        <Scene 
                            key="list"
                            component={login}
                            title="Grocery Share"/>

                    </Scene>

                </Stack>
            </Router>
        )
    }
}

export default Router