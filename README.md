# Gift Card Page

This is a simple greeting card template. It only contains three subpages in default. You can simply change pictures, text. And you can also generate many greeting cards by setting different routes. Here is a simple guide:

### 0. Dependencies

- node.js (My own version is v10.5.0)
- Other dependencies please see `package.json`

You can simply install all these dependencies except node.js by running `npm install` in this folder.

### 1. Add your own page:

Edit file `routes/index.js`. And add code:

```javascript
router.get('/to_my_son', function (req, res, next) {
    res.render('card', {
        p1_h1: 'Happy new year',
        p1_h2: '2019',
        p2_stong_header: 'HERE',
        p2_header: 'IS',
        p2_content: 'my text there. Blablablabla...',
        p3_header: 'FROM',
        p3_strong_header: 'Your dad',
        p3_content: 'Here is the 3rd contents'
    });
});
```

### 2. Change pictures

Edit file `public/stylesheeets/style.css`. Find code like this:

```css
.image_0{
    ...
    background-image: url(https://i.loli.net/2019/02/04/5c585afa6a150.jpg);
    ...
}

.image_1{
    ...
    background-image: url(https://i.loli.net/2019/02/04/5c585af6e2ea4.jpg);
    ...
}

.image_2{
    ...
    background-image: url(https://i.loli.net/2019/02/04/5c585af9ef7fe.jpg);
    ...
}
```

Change the URL that direct to your own pictures.

### 3. Run and enjoy

Run `node bin/www` in terminate(`cd` to this folder first) to start your serve.

Visit `http://localhost:5000/to_my_son/` in your browser to see your own page.

##### Bug shoot:

If it arise an error like: `Port XXXX requires elevated privileges`

you can edit the file `bin/www` that contains the code below and just change the port(5000 in default) to what you want.

```
var port = normalizePort(process.env.PORT || '5000');
```

### 4. Advance editing

Please change my template and stylesheets. It's easy to read and edit. Enjoy!



Here is [My own blog](https://www.mrxzh.com)