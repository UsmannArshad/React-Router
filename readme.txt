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
We can send an objet tooo in out to attribute of link like:
<Link to={{pathname:'/',hash:'usman' etcc}}><Link/>

Nested Links:
Imagine we have readmore link in our about page and we set up like this:
<Link to={{pathname:'/readmore'}}><Link/> 
but it will not redirect to /about/readmore,it will redirect to /readmore which we dont want?
How to solve it?
Use hooks like useLoaction,useMatch(path) etc
useLocation and useMatch are the hooks that provide useful info like params,hash,search,pathname etc
so now we will write:
location=useLocation()
<Link to={{pathname:`${location.pathname}/readme`}}>Readme</Link>
now we will redirect to  about/readmore

=>Params:
React parameters are used in React routing, where we have parameters we need to access in the route.
For example, if we had a route such as <Route path=”/:id” />
we could access that particular string or value in the route by calling the useParams hook.

=>BrowserRouter:
<BrowserRouter> is the recommended interface for running React Router in a web browser. A <BrowserRouter> stores the current location 
in the browser's address bar using clean URLs and navigates using the browser's built-in history stack.

=>HashRouter:
<HashRouter> is for use in web browsers when the URL should not (or cannot) be sent to the server for some reason. 
This may happen in some shared hosting scenarios where you do not have full control over the server. In these situations, <HashRouter> makes it possible to store the current location in the hash portion of the current URL, so it is never sent to the server.
In short we can send the things after # instead of sending whole url
It is not recommended until u have no other choice

=>Memory Router:
(Everything done internally adress bar not changed)
A <MemoryRouter> stores its locations internally in an array. Unlike <BrowserHistory> and <HashHistory>, it isn't tied to an external source, like the history stack in a browser. This makes it ideal for scenarios where you need complete control over the history stack, like testing.

=>NavLink:
we can use navlink instead of link now we can change its properties when its active etc like in code

=>Redirect:
U can use redirect for different purposes like to block user from specific page like
if username is ali we can redirect to home else show the page.
1)<Redirect from="" to=""/>
2)Usenavigate