import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from "../src/components/Dashboard"
import Step1 from "../src/components/Step1"
import Step2 from "../src/components/Step2"
import Step3 from "../src/components/Step3"


export default (
    <Switch>

        <Route exact path="/" component={Dashboard}></Route>
        <Route  path="/step1" component={Step1}></Route>
        <Route  path="/step2" component={Step2}></Route>
        <Route  path="/step3" component={Step3}></Route>
    </Switch>
)