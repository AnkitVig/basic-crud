 A simple CRUD application using the Laravel framework that houses basic student information with the frontend is built using the React. 

To build project. Use the following commands from the root

```
cd frontend && npm install 
```

```
cd backend && composer install 
```

add the db details in the .env file

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=dbname
DB_USERNAME=root
DB_PASSWORD=***
```
 run the following command to input stub data
```
cd backend && php artisan migrate:fresh --seed 
```


run the backend server using the command
```
cd backend && php artisan serve   
```

run the frontend server using the command
```
cd frontend && npm start  
```