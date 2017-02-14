import React from 'react'
import { Route , IndexRoute} from 'react-router'

import Page1 from './component/page1'
import Page2 from './component/page2'
import Home from './component/Home'
export default (
<Route>
      <Route path="/" component={Home}> </Route>
     <Route path="page2" component={Page2} ></Route>
</Route>

)
