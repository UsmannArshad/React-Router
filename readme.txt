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
Now we can change the content by changing after / e.g like /home for home and so on
but there are probems users sould nt change url he must navigate to to other url by clicking link.
so we will use <a href="/home">Home</a>
but there is a more error as we have single page website its re-rendering everytime which is not needed.
Solution:Links
=>Links
<Link to='/home'>Home</Link> Now page will not reload everytime as in code

