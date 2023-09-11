## *API*
***
* **Description:** An app that compiles different restaurants/bars within North Carolina that I have personally visited or aspire to visit. Only admin will be able to add, update, or delete an entry.
* **Technologies/Methods Used:** Express, Mongoose, MongoDB

### *Models*
***
![Model](https://i.imgur.com/Slfhfbz.png)

### *Routes*
***
| Endpoint | Method | Description |
| -------- | ------ | ----------- |
| /nceatz | GET | grabs every restaurant/bar within the database |
| /nceatz/:id | GET | reads a specific restaurant/bar entry |
| /nceatz | POST | creates a new restaurant/bar entry |
| /nceatz/:id | PUT | updates a specific restaurant/bar based on the ID |
| /nceatz/:id | DELETE | deletes a restaurant/bar entry |


<br />
<br />

## *Frontend*
***
* **Description:** An app that compiles different restaurants/bars within North Carolina that I have personally visited or aspire to visit. Only admin will be able to add, update, or delete an entry.
* **Technologies/Methods Used:** Next.js, CSS, JavaScript/JSX, API, Tailwind, Vercel

### *Wireframes*
***
#### Site Design Mockup
![Index Page](https://i.imgur.com/s1ZBOCt.png)
![Show Page](https://i.imgur.com/oo9PxkN.png)
![New Page - ADMIN ONLY](https://i.imgur.com/v0CXzZc.png)
![Edit/Delete Page - ADMIN ONLY](https://i.imgur.com/is16Hmu.png)


#### *Deployed App*
***
[Live Site](https://restaurantapp-kohl.vercel.app/)