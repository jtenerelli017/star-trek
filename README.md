# Instructions
1.  Start a new connection to 127.0.0.1:3306 within MySQL.
2.  Open "jtener_star-trek_dump20230901.sql" within MySQL and execute the script.
3.  Open file "./server/index.js" within a code editor of your choice.
4.  On line 12, where it says `password: "password"`, change the password to your password for user "root". Save file.
5.  Open two new terminals within the root directory of the project.
6.  In the first terminal, run command `cd server`.
7.  Run command `node index.js`. The console should output `Server running on port 3001`.
8.  In the second terminal, run command `cd client`.
9.  Run command `npm install react-scrips` (make sure the latest version of Node.js is installed).
10. Run command `npm start`.