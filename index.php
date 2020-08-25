<!doctype html>
<html lang="en">
<head>
    <title>Тестовое задание</title>

    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css" integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous">
</head>
<body>
<div class="container">
    <form enctype="multipart/form-data" method="get" action="save_message.php">
        <div class="col">
            <label for="message" class="form-label">Текст SMS сообщения</label>
            <textarea id="message" name="message" class="form-control" rows="3" oninput=""></textarea>
        </div>
        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id="translateSwitch">
            <label class="form-check-label" for="translateSwitch">Транслитерировать</label>
        </div>
        <div class="row">
            <label for="symbolCounter" class="col-sm-2 col-form-label">Количество символов: </label>
            <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" id="symbolCounter" value="0" />
            </div>
        </div>
        <div class="row">
            <label for="smsCounter" class="col-sm-2 col-form-label">Количество SMS: </label>
            <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" id="smsCounter" name="smscount" value="0" />
            </div>
        </div>

        <button type="submit" class="btn btn-primary">Сохранить</button>
    </form>
</div>


<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js" integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/" crossorigin="anonymous"></script>
<script src="js/script.js"></script>
</body>
</html>
