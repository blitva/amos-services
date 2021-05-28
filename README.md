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
  
## Setup on Local:

1. git clone 
2. install dependencies with "npm install"
3. start server with "npm run server-dev"
4. build bundle by running "npm run build"

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

