###  **Shopping\_Cart Application**

# Technical Aspect

##### **Introduction**

The Shopping Application is the process of buying goods or services from a seller over the Internet. The application supports CRUD (Create, Read, Update, Delete) operations for the management of items to store, buy, etc. 

* **Architecture:** Three-tier architecture (presentation, application, data).  
* **Presentation Layer:** React (JavaScript).  
* **Application Layer:** Spring Boot (Java).  
* **Data Layer:** Relational database (MySQL)

##### **Technologies Used**

* **Backend:**  
  * Spring Boot  
  * Java 17 (or later)  
  * Spring Data JPA  
  * Lombok  
  * Maven  
  * MySQL Driver  
* **Frontend:**  
  * React  
  * JavaScript  
  * Axios  
  * React Router  
  * React Router dom  
  * npm  
* **Database:**  
  * MySQL

#### 

#####  **API Endpoints**

* **Add**:   
  To add the products at the Seller end.  
  **POST \- api/v1/shopping**  
  **Body \- JSON data that needs to be added are name, description, category, price, stock quantity**

* **Get**:   
  Fetch specific items by product\_id(path).  
  **GET \- api/v1/shopping/product\_id**

    
* **Get All:**    
  Retrieve all items  
  **GET \- api/v1/shopping**

* **Update**:  
  To Modify existing data with updated information by product id(path).(both in seller & customer end)  
  **PUT \- api/v1/shopping/product\_id**   
  **Body \-** **JSON data that needs to be added are name, description, category, price, stock quantity**  
     
* **Delete** :  
  Delete specific items by product id.  
  **DELETE \- api/v1/shopping/product\_id**