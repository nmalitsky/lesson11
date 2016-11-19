**Установка**: npm install

**Запуск**: node index.js

 

Задача реализована как CRUD API

 

### **Пользователи**

 

**Создание** - POST

-   /api/users, body: { “name”, “U1”, “email”: “...” }  
    Обязательные поля: *name*

 

**Поиск** - GET

-   /api/users, query: ?name=U1&email=... или ПУСТО (найти все)  
    Фильтрует по комбинации полей (req.query)

-   /api/users/:user\_id, где user\_id = \_id из коллекции users  
    Поиск по \_id пользователя

**Редактирование** - PUT

-   /api/users/:user\_id, где user\_id = \_id из коллекции users, { “name”,
    “U1”, “email”: “...” }  
    Обновление по \_id пользователя

 

**Удаление** - DELETE

-   /api/users, body: { “name”, “U1”, “email”: “...” } или ПУСТО (удалить все)  
    Удаляет согласно фильтру (req.body)

-   /api/users/:user\_id, где user\_id = \_id из коллекции users  
    Поиск по \_id пользователя

 

### **Задачи**

 

**Создание** - POST

-   /api/tasks, body: { “name”, “killAll”, “status”: “open”, “user”: “....”}  
    Обязательные поля: *name, status*

 

**Поиск** - GET

-   /api/tasks, query: ?name=KillAll&status=open&user=... или ПУСТО (найти все)  
    Фильтрует по комбинации полей (req.query)

-   /api/tasks/:task\_id, где task\_id = \_id из коллекции tasks  
    Поиск по \_id задачи

     

**Редактирование** - PUT

-   /api/tasks/:task\_id, где task\_id = \_id из коллекции tasks, body: {
    “name”, “killAll”, “status”: “open”, “user”: “....”}

    1.  Открыть задачу  
        /api/tasks/xxxxxx, body: {“status”: “open”}

    2.  Закрыть задачу  
        /api/tasks/xxxxxx, body: {“status”: “close”}

    3.  Делегировать задачу на пользователя  
        /api/tasks/xxxxxx, body: {“user”: “U1”}

 

**Удаление** - DELETE

-   /api/tasks, body: { “name”, “killAll”, “status”: “open”, “user”: “....”} или
    ПУСТО (удалить все)  
    Удаляет согласно фильтру (req.body)

-   /api/tasks/:task\_id, где task\_id = \_id из коллекции tasks  
    Удаляет по \_id задачи

 

### **Статистика по закрытым задачам**

 

-   GET /api/users\_closed\_tasks\_stat

    Выдает список пользователей и количество у них закрытых задач,
    отсортированных по убыванию.
