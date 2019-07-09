<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Search</title>
</head>
<style>
  .container{
  width: 600px;
  margin-top: 100px;
  border: 1px solid #ccc;
  padding-top: 50px;
  padding-bottom: 100px;
  padding-left: 25px;
  padding-right: 25px;
  align-items: center;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.28);
  border-radius: 6px;
  margin: 40px auto;
  }
  
  
  .logo{
        width: 100%;
    padding-right: 5px;
    padding-left: 5px;
  
  }
  * {
    box-sizing: border-box;
  }
  
  /* Style the search field */
  form.search input[type=text] {
    padding: 10px;
    font-size: 17px;
    border: 1px solid grey;
    float: left;
    width: 80%;
    background: #f1f1f1;
  }
  
  /* Style the submit button */
  form.search button {
    float: left;
    width: 20%;
    padding: 10px;
    background: #E25A28;
    color: white;
    font-size: 17px;
    border: 1px solid grey;
    border-left: none; /* Prevent double borders */
    cursor: pointer;
  }
  
  form.search button:hover {
   opacity:80px;
  }
  
  /* Clear floats */
  form.example::after {
    content: "";
    clear: both;
    display: table;
  }
  
  </style>
<body>

    <body center>
    <div class="container">
      <img class="logo" src="https://cft-za.org.za/home/wp-content/uploads/2019/06/Logo-1.png"alt="Logo"/>
      <h3 text-alignment="center">Search Database</h3>
      <!-- The form -->
    <form class="search" action="search.controller.php">
      <input type="text" placeholder="ID number.." name="search">
      <button type="submit">Search</button>
    </form>
    
    </div>
    </body>
    
</body>
</html>