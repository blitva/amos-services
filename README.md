## Fullstack Amazon-Styled SOA Item Description Service 

Service-Oriented Architecture app modeled from the Amazon Item Description service. This service renders 
the description for different speaker items, and is built to:
  • seed and persist data (description summary, item name, item brand) for 100 unique product IDs,
  • Run alongside five other services via proxy server,
  • Display the description information and other information (price, reviews, ratings) fetched from other services,
  • Run locally, or be deployed via Amazon EC2.
  
Built with the MERN stack using MongoDB, and styled using React Styled-Components. 

## Default view 

  ![Description App Single](https://user-images.githubusercontent.com/66794449/118710808-0b960000-b7dc-11eb-95ca-7adc7331bd8a.jpg)
  
## Technologies Used

• React
• Express
• MongoDB
• Mongoose
• Styled Components
• CircleCI
• Jest
• Mocha
  
## Setup on Local

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

1. git clone 
2. install dependencies with "npm install"
3. start server with "npm run server-dev"
4. build bundle by running "npm run build"
5. verify app is running at "http://localhost:4004/:id" (for id values 1000-1099)

## Related Projects

These projects are the other microservices involved. 

• Photos Service - Alek O.
• Checkout Service - Alek O.
• Customer Questions Service - Justin R.
• Reviews Service - Barsha S.
• Product Features Service - Justin R.
• Navigation Bar - Justin R.
• Footer - Alek O.


