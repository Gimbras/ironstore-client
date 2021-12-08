Iron ___ 

Description

A platform for selling/buying items.

User Stories 404 - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault 500 - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault homepage - As a user I want to be able to access the homepage so that I see what the app is about and login and signup sign up - As a user I want to sign up on the webpage so that I can see all the events that I could attend login - As a user I want to be able to log in on the webpage so that I can get back to my account logout - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account events list - As a user I want to be able to upload items so that i could sell my items - As a user I want to be able to log in on the webpage to buy items that I like As a user I want to be able to log in on the webpage to edit my profile - As a user I want to be able to log in on the webpage to delete my account 


Backlog

Stripe payment checkout
Itempage redirect after login 
Related items 
Rating
Comment



ROUTES: GET /
renders Homepage

POST / body:
search field to filter items

GET /signup
redirects to / if user logged in
renders the signup form

POST /signup body: username email password
if failed - renders auto/signup (with flash msg)
else redirects to / if user logged in

GET /login
redirects to / if user logged in
renders the login form

POST /login body: username password
if failed - renders auto/login (with flash msg)
else redirects to / if user logged in

GET /logout
end session.destroy()
redirect to /

GET /items/create
renders createpage if logged in
else homepage

POST /items/create body: Item Title Category Condition Description Add Images Add item
redirects homepage

GET /items/:itemId
redirects to /login if not logged in
else renders /:itemId page

GET /items/:itemId/update
redirects to /login if not logged in
if validates itemId with userId renders update forms
else renders items/:itemId

POST /items/:itemId/update
(with values from :itemId) body: Item Title Category Condition Description Add Images Add item
redirects /items/:itemsId

POST /items/:itemId/delete
renders profile

GET /items/:itemId/congrats
render congrats with item & user info
messages link**

GET /profile
redirects to /login if not logged in
renders /profile page

GET /settings
redirects to /login if not logged in
renders settings page + update info form
deactivate account? + flash msg + cruD (end session.destroy() / redirect to login)

POST /settings body: username* password*
validation new username (crUd) new email (crUd) new password (crUd)
redirects to /profile

POST /cart/create
render cart page
else error

PUT /cart/itemId/update
able to update the cart

DELETE /cart/:itemId/delete
render cart page

UserModel
username: String, email: String, password: String, img: {type: String}

ProductModel
title: String, condition: String, description: String, img: String, price: Number, buyer: { type: Schema.Types.ObjectId, ref: 'User' }, seller:{ type: Schema.Types.ObjectId, ref: 'User' }, categories: { type: Array },

CartModel
productId: {type: String}, quantity: {type: Number,default: 1}

OrderModel
productId: {type: String}, quantity: {type: Number,default: 1}

Links Figma Project Module 3

Git Iron ___

Deploy Link

Slides

Slides Link