## Fullstack Amazon-Styled SOA Item Description Service 

Service-Oriented Architecture app modeled from the Amazon Item Description service. This service renders 
the description for different speaker items, and is built to: <br />
  • seed and persist data (description summary, item name, item brand) for 100 unique product IDs, <br />
  • Run alongside five other services via proxy server, <br />
  • Display the description information and other information (price, reviews, ratings) fetched from other services, <br />
  • Run locally, or be deployed via Amazon EC2.
  
Built with the MERN stack using MongoDB, and styled using React Styled-Components. 

## Default view 

  ![Description App Single](https://user-images.githubusercontent.com/66794449/118710808-0b960000-b7dc-11eb-95ca-7adc7331bd8a.jpg)
  
## Technologies Used

• React <br />
• Express <br />
• MongoDB <br />
• Mongoose <br />
• Styled Components <br />
• CircleCI <br />
• Jest <br />
• Mocha <br />
  
## Setup on Local

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

1. git clone 
2. install dependencies with "npm install"
3. start server with "npm run server-dev"
4. build bundle by running "npm run build"
5. verify app is running at "http://localhost:4004/:id" (for id values 1000-1099)

## Related Projects

These projects are the other microservices involved. 

• [Photos Service - Alek O.](https://github.com/blitva/photos-service) <br />
• [Checkout Service - Alek O.](https://github.com/blitva/checkout-service) <br />
• [Customer Questions Service - Justin R.](https://github.com/blitva/customer-questions-service) <br />
• [Reviews Service - Barsha S.](https://github.com/blitva/reviews-service) <br />
• [Product Features Service - Justin R.](https://github.com/blitva/product-features-service) <br />
• [Navigation Bar - Justin R.](https://github.com/blitva/nav-bar) <br />
• [Footer - Alek O.](https://github.com/blitva/footer) <br />


