Установка: npm install

Запуск: node index.js

CRUD

1.  Пользователи  
    Создание - POST, /api/users, body: { “name”, “U1” }

    Чтение - GET,

    1.  /api/users, query: ?name=U1 или ПУСТО (найти все)  
        

    2.  /api/users/:user\_id, где user\_id = \_id из коллекции users  
        Редактирование - PUT  
        

    3.  /api/users, body: { “name”, “U1” }  
        

    4.  /api/users/:user\_id, где user\_id = \_id из коллекции users, body: {
        “name”, “U1” }

    Удаление - DELETE,

    1.  /api/users, body: { “name”, “U1” } или ПУСТО (удалить все)  
        

    2.  /api/users/:user\_id, где user\_id = \_id из коллекции users

2.  Задачи

    Создание - POST, /api/tasks, body: { “name”, “killAll”, “status”: “open”
    (опц.), “user\_id”: “....” (опц.)}

    Чтение - GET,

    1.  /api/tasks, query: ?name=KillAll&status=open&user\_id=... или ПУСТО
        (найти все)  
        

    2.  /api/tasks/:task\_id, где task\_id = \_id из коллекции tasks

    Редактирование - PUT

    1.  /api/tasks, body: { “name”, “killAll”, “status”: “open” (опц.),
        “user\_id”: “....” (опц.)}  
        

    2.  /api/tasks/:task\_id, где task\_id = \_id из коллекции tasks, body: {
        “name”, “U1” (опц)}

    Удаление - DELETE,

    1.  /api/tasks, body: { “name”, “killAll”, “status”: “open” (опц.),
        “user\_id”: “....” (опц.)} или ПУСТО (удалить все)  
        

    2.  /api/tasks/:task\_id, где task\_id = \_id из коллекции tasks
