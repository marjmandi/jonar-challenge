

# Simple E-commerce

This application is written on Express.js and using Postgresql for database.
It has five Restful APIs to get a list of users, retrive products list, Submit and order, retrive all submitted orders and get an already submitted order.
I uses JWT for authorizatio. Since this application has no authentication page I provided a JWT Token in .env file which can be used in making API calls.
## Authors

- Sam Arjmandi [@marjmandi](https://www.github.com/marjmandi)


## Deployment

To deploy this project run

```bash
  docker composer up -d
```

Plus I mapped port 5433 on host to port 5432 on db container to make accessing db easier in sake of reviewing.
## API Reference
Add JWT bearer token to all request header as **Authorization**

I added a Postman collection to repository for testing APIs.