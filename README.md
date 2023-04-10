## References
- https://dev.to/mekarosi/create-a-rails-app-with-react-for-frontend-using-esbuild-and-jsbundle-15a
- https://reactrouter.com/en/main/upgrading/v5
- https://github.com/learn-academy-2023-bravo/Syllabus/blob/main/apartment-app/react-in-rails.md
- https://esbuild.github.io/

## Create rails app with esbuild
- $ rails new capstone-test -j esbuild -d postgresql -T
- $ cd capstone-test
- $ gst
- $ ga .
- $ gcmsg "initial commit"
- $ git remote add origin https://github.com/SunkissedQueen/capstone_test.git
- $ git branch -M main
- $ git push -u origin main
- $ bin/dev

## Setup react inside rails app
- $ gco -b esbuild
- $ rails g stimulus react
- $ rails g controller pages home
```rb
  # Make pages/home view default page in config/routes.rb
  root 'pages#home'
  # home.html.erb
  <%= content_tag(:div, "", id:"app", data: {controller: "react"})%>
```
Test that app/javascript/controllers/react_controller.js file is connected  
`console.log("react controller connected")`

## Create App react component
- $ yarn add react react-dom
- $ bundle
- $ yarn
Stop server
```js
// Create app/javascript/controllers/App.js file
import React from "react"

const App = () => {
  
  return (
    <>
      <h1>Hello World!</h1>
    </>
  )
}

export default App


// import App.js, React, and ReactDOM to app/javascript/controllers/react_controller.js file
import { Controller } from "@hotwired/stimulus"
import App from "./App"
import React from "react"
import ReactDOM from "react-dom/client"
// Connects to data object on home.html.erb
export default class extends Controller {
  connect() {
    // console.log("react controller connected")

    // add render for App.js
    const root = ReactDOM.createRoot(document.getElementById("app"))
    root.render(<App />)
  }
}
```

```json
  // set esbuild loader to "jsx" to parse JSX syntax. Add "--loader:.js=jsx" to scripts on package.json
  "scripts": {
    "build": "esbuild app/javascript/*.* --bundle --sourcemap --outdir=app/assets/builds --public-path=assets --loader:.js=jsx"
  }
```
- $ bin/dev

## Create additional components
- $ yarn add react-router-dom
```js
  // Create app/javascript/controllers/CapstoneIndex.js file
  import React from "react"

  const CapstoneIndex = () => {
    
    return (
      <>
        <h3>Tips from Previous Cohorts</h3>
      </>
    )
  }

  export default CapstoneIndex

  // Create app/javascript/controllers/CapstoneShow.js file
  import React from "react"

  const CapstoneShow = () => {
    
    return (
      <>
        <h3>One Encouraging Thought</h3>
      </>
    )
  }

  export default CapstoneShow

  // import on App.js and setup routes
  import React from "react"
  import { BrowserRouter, Routes, Route } from "react-router-dom"
  import CapstoneIndex from "./CapstoneIndex"
  import CapstoneShow from "./CapstoneShow"

  const App = () => {
    
    return (
      <BrowserRouter>
        <h1>How to Have a Successful Capstone Experience</h1>
        <Routes>
          <Route path="/index" element={<CapstoneIndex />}/>
          <Route path="/show" element={<CapstoneShow />}/>
        </Routes>
      </BrowserRouter>
    )
  }

  export default App
```

```rb
  # Make add routes to config/routes.rb
  get '*path', to: 'pages#home', via: :all
```

## Add reactstrap and bootstrap
- $ bundle add bootstrap
- $ mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
- $ yarn add reactstrap
Add the following import to app/assets/stylesheets/application.scss
`@import "bootstrap"`
- $ bundle
- $ yarn
Stop and restart server

## Navigation
```js
  import React from "react"
  import { Nav, NavItem } from "reactstrap"
  import { NavLink } from "react-router-dom"

  const Navigation = () => {
    return (
      <Nav>
        <NavItem>
          <NavLink to="/">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/index">
            See all the categories
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/show">
            See the advice
          </NavLink>
        </NavItem>
      </Nav>
    )
  }

  export default Navigation
```
Import Navigation to App.js
Add component call to React routes

## Adding devise
- $ bundle add devise
- $ rails generate devise:install
- $ rails generate devise User
- $ rails db:migrate

```bash
  # from the terminal
  Depending on your application's configuration some manual setup may be required:

    1. Ensure you have defined default url options in your environments files. Here
      is an example of default_url_options appropriate for a development environment
      in config/environments/development.rb:

        config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }

      In production, :host should be set to the actual host of your application.

      * Required for all applications. *

    2. Ensure you have defined root_url to *something* in your config/routes.rb.
      For example:

        root to: "home#index"
      
      * Not required for API-only Applications *

    3. Ensure you have flash messages in app/views/layouts/application.html.erb.
      For example:

        <p class="notice"><%= notice %></p>
        <p class="alert"><%= alert %></p>

      * Not required for API-only Applications *

    4. You can copy Devise views (for customization) to your app by running:

        rails g devise:views
```
Add devise routes to the app/views/pages/home.html.erb
```rb
  <%= content_tag(
    :div, 
    "", 
    id:"app", 
    data: {controller: "react"},
    devise: {
      logged_in: user_signed_in?,
      current_user: current_user,
      new_user_route: new_user_registration_path,
      sign_in_route: new_user_session_path,
      sign_out_route: destroy_user_session_path
    }
  )%>
```

## Blocker
- console.log are undefined
- not sure how to add devise routes to the views