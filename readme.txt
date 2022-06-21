Problem:Create React App doesn't include page routing.
Solution:React Router is the most popular solution.
React Router is a fully-featured client and server-side routing library for React,
a JavaScript library for building user interfaces
Install react-router-dom@6 then import BrowserRouter,route and routes in index.js
wrap ur app in browserrouter.
Define the route in routes tag route has 2 attributes path and elemenet
<BrowserRouter>
<Routes>
<Route path="/home" element={<Home/>}"/>
</Routes>
</BrowserRouter>