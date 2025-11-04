<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex, nofollow">
    <title>Document</title>
    @vite('resources/js/app.js')
</head>
<body>
    {!! file_get_contents(public_path('assets/sprites/project.svg')) !!}
    {!! file_get_contents(public_path('assets/sprites/fa.svg')) !!}
    <div id="app">
        <app/>
    </div>
</body>
</html>