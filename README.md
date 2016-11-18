**Установка**: npm install

**Запуск**: node index.js

 

Задача реализована как CRUD API

 

### **Пользователи**

 

**Создание** - POST

/api/users, body: { “name”, “U1”, “email”: “av\@bbs.ru” }  
Обязательные поля: *name*

 

**Поиск** - GET

1.  /api/users, query: ?name=U1&email=av\@bbs.ru или ПУСТО (найти все)  
    Фильтрует по комбинации полей (req.query)

    1.  /api/users/:user\_id, где user\_id = \_id из коллекции users  
        Поиск по \_id пользователя

**Редактирование** - PUT

/api/users/:user\_id, где user\_id = \_id из коллекции users, { “name”, “U1”,
“email”: “av\@bbs.ru” }  
Обновление по \_id пользователя

 

**Удаление** - DELETE

1.  /api/users, body: { “name”, “U1”, “email”: “av\@bbs.ru” } или ПУСТО (удалить
    все)  
    Удаляет согласно фильтру (req.body)

    1.  /api/users/:user\_id, где user\_id = \_id из коллекции users  
        Поиск по \_id пользователя

 

### **Задачи**

 

**Создание** - POST

/api/tasks, body: { “name”, “killAll”, “status”: “open” (опц.), “user”: “....”
(опц.)}  
Обязательные поля: *name, status*

 

**Поиск** - GET

1.  /api/tasks, query: ?name=KillAll&status=open&user=... или ПУСТО (найти все)  
    Фильтрует по комбинации полей (req.query)

    1.  /api/tasks/:task\_id, где task\_id = \_id из коллекции tasks  
        Поиск по \_id задачи

     

**Редактирование** - PUT

/api/tasks/:task\_id, где task\_id = \_id из коллекции tasks, body: { “name”,
“killAll”, “status”: “open” (опц.), “user”: “....” (опц.)}

 

**Удаление** - DELETE

1.  /api/tasks, body: { “name”, “killAll”, “status”: “open” (опц.), “user”:
    “....” (опц.)} или ПУСТО (удалить все)  
    Удаляет согласно фильтру (req.body)

    1.  /api/tasks/:task\_id, где task\_id = \_id из коллекции tasks  
        Удаляет по \_id задачи

 

**Статистика по закрытым задача** - GET

/api/tasks\_close\_stat

Выдает список пользователей и количество у них закрытых задач, отсортированных
по убыванию.
