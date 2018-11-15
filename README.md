This web app is called SendIT. 
It is a courier service that helps users deliver parcels to different destinations. 
It provides courier quotes based on the weight categories.
It has Signin, Signup, Create parcel delivery order, User profile and Admin pages.

ENDPOINTS						

`GET /parcels`:Fetch all parcel delivery orders

`GET /parcels/<parcelId>`:Fetch a specific parcel delivery order

`GET /users/<userId>/parcels`:Fetch all parcel delivery orders by a specific user

`PUT /parcels/<parcelId>/cancel`:Cancel the specific parcel delivery order

`POST /parcels`:Create a parcel delivery order
