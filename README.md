# Project REST-Rant

REST-Rant is an app where users can review restaurants.


https://medium.com/@silentlad/how-to-write-beautiful-and-meaningful-readme-md-for-your-next-project-897045e3f991


Fill in the blanks! User stories are most often phrased as: 
"As a ____(user type)_____ I need ____(feature)____ so I can ____(action)____"
 
 "As a power user I need groceries quick so I can get back tp coding."

 "As an artist I need food that looks as goood in pictures as it does in real life so I can enjoy my food and not loose my artistic taste."

 "As a stay at home mom I need real reviews from local restaurants so I can feed my family."

## Routes

| Method | Path | Purpose |
| ------ | ------------------------------------- | ----------------------------- |
| GET | `/` | The home page |
| GET | `/places` | Index page listing all places |
| GET | `/places/new` | New form for a place |
| POST | `/places` | Create a new place |
| GET | `/places/:id` | Show one place in detail (Associated rants, new rant form, delete rant button) |
| GET | `/places/:id/edit` | Edit form for a place |
| PUT | `/places/:id` | Make changes to existing place |
| DELETE | `/places/:id` | Delete a place |
| POST | `/places/:id/rant` | Add rant to a place |
| DELETE | `/places/:id/rant/:rantId` | Delete a rant |

## Database

**places** 

| Field | Type |
| ---------- | ------------ |
| _id | Object ID |
| name | String |
| city | String |
| state | String |
| cuisines | String |
| pic | String |

**rants**

| Field | Type |
| ---------- | ------------ |
| _id | Object ID |
| place_id | ref(places) Object_Id |
| rant | Boolean |
| rating | Number |
| comment | String |
| reviewer | String |

## Planning

### User Stories

TBD

### Wireframes

TBD

## Notes

Possible bonus ideas:

* Update for comments
* Aggregate rating for a place
* Auto-complete state dropdown