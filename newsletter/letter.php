<?php include 'sendemail.php'; ?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Stay connect with Barîmb Eusebiu."/>
        <!-- Stilizarea pagini -->
        <link rel = "stylesheet" href = "http://localhost/wait/newsletter/style_let.scss"> 
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <!--Google Fonts-->
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata" rel="stylesheet">
        <!-- Title -->
        <title>Gir Desk</title>
        <!-- Logo loaded page -->
        <link rel="icon" href="http://localhost/wait/vector_rastru/logo.svg"> 
    </head>
    <!--Main part of the site-->
    <body>
        <!-- contact form -->
        <section class="coming_soon">
            <div>
                <h2>Fii alături de noi!</h2>
                <div class="countdown">
                    <!--Container for our day-->
                    <div class="container_day">
                        <form type="POST" action="" method="post" id="fruitkha-contact" onSubmit="return valid_datas( this );">
                            <input type="text" placeholder="Nume" name="name" id="name" required>
                            <input type="email" placeholder="E-mail" name="email" id="email" required>
                            <p>
                                <textarea name="message" id="message" cols="30" rows="10" placeholder="împărtășește-te cu ideile tale! aștept feedback-ul tău..."></textarea>
                            </p>
                            <p>
                                <input type="submit" name = "submit" value="abonare">
                            </p>
                        </form>
                    </div>
            </div>
        </section>
        <!-- end contact form -->
    </body>
    <!--Parte de jos a saitul-ui-->
     <footer>
        <!--Link către pagina home-->
        <div class = "home">
            <a href = "http://localhost/wait/index.php/">acasă</a>			
        </div>
         <!-- Legare cu pagina javascript -->
         <script src = "http://localhost/wait/newsletter/app.js"></script>
    </footer>
</html>