# ProductOrderList

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.2.
## Deployment link 
[![Check the Result](https://img.icons8.com/?size=100&id=jhVH1oNJKfCf&format=png&color=000000)](https://product-list-angular-sandy.vercel.app/)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# Product List Angular

This is an Angular application that allows users to select products and quantities, add them to an order, and use text-to-speech functionality to read the order out loud. The project showcases basic Angular features, form handling, and integration with a text-to-speech API.

## Features

- Dynamic product and quantity selection
- Adding products to an order list
- Displaying the final order list
- Text-to-speech functionality to read out the order
- Responsive and well-styled UI

## Technologies Used

- Angular
- TypeScript
- HTML
- CSS
- Text-to-Speech API

## Setup and Installation

To get this project up and running on your local machine, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/sahil1476/Product-list-Angular.git
    cd Product-list-Angular
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Run the application:**
    ```bash
    ng serve
    ```
    The application should now be running on `http://localhost:4200`.

## Usage

1. **Select Product and Quantity:**
    - Choose a product from the dropdown list.
    - Select the quantity from the dropdown list.
    - Click the "ADD" button to add the product to the order list.

2. **View Order:**
    - Click the "Show Order" button to display the final order list.
    - The order list will show the selected products and their quantities.

3. **Text-to-Speech:**
    - Click the "What is my Order?" button to activate the text-to-speech functionality.
    - The application will read out the order list.

## Project Structure
```
Product-list-Angular/
├── src/
│ ├── app/
│ │ ├── components/
│ │ │ ├── order/
│ │ │ │ ├── order.component.html
│ │ │ │ ├── order.component.css
│ │ │ │ ├── order.component.ts
│ │ │ ├── footer/
│ │ │ │ ├── footer.component.html
│ │ │ │ ├── footer.component.css
│ │ │ │ ├── footer.component.ts
│ │ ├── app.component.html
│ │ ├── app.component.css
│ │ ├── app.component.ts
│ │ ├── app.module.ts
│ ├── assets/
│ ├── environments/
│ ├── index.html
│ ├── main.ts
│ ├── styles.css
├── .gitignore
├── angular.json
├── package.json
├── README.md
├── tsconfig.json
```
## Contact

If you have any questions or suggestions, feel free to reach out.

- GitHub: [sahil1476](https://github.com/sahil1476)



