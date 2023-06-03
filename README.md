# Project REST-Rant

REST-Rant is an app where users can review restaurants.


https://medium.com/@silentlad/how-to-write-beautiful-and-meaningful-readme-md-for-your-next-project-897045e3f991


Fill in the blanks! User stories are most often phrased as: 
"As a ____(user type)_____ I need ____(feature)____ so I can ____(action)____"
 
 "As a power user I need groceries quick so I can get back tp coding."

 "As an artist I need food that looks as goood in pictures as it does in real life so I can enjoy my food and not loose my artistic taste."

 "As a stay at home mom I need real reviews from local restaurants so I can feed my family."

 _________________
 | Method | Path | Purpose|
 _______________________
 |GET | / | Home page |
 _______________________
 |GET | /places | Places index page|
  _______________________
 |POST | /places | Create new places |
  _______________________
 |GET | /places/new | Form page for creating a new place |
  _______________________
 |GET | places/:id | Details about a particular place |
  _______________________
 |PUT | places/:id | Update a particulas place |
  _______________________
 |GET | /places/:id/edit | Form page for editing an existing place |
  _______________________
 |DELETE | /places/:id | Delete a particular place |
  _______________________
 |POST | /places/:id/rant | Create a rant (comment) about a particular place |
  _______________________
 |GET | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place |
  _______________________
 |GET | * | 404 page (matches any route not defined above) |
  _______________________