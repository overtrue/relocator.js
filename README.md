relocator.js
============

relocate images to fit image box.

![relocator](https://cloud.githubusercontent.com/assets/1472352/5231323/191216d6-7771-11e4-8094-f54d3f75ee7a.jpg)



# Usage

html:
```html
...
<div class="container">
    <div class="box">
        <img src="images/height-image.jpg" alt="">
    </div>
    <div class="box">
        <img src="images/width-image.jpg" alt="">
    </div>
</div>
...
```

```html
<script src="assets/js/jquery.min.js"></script>
<script src="assets/js/relocator-1.0.1.min.js"></script>
```
### relocate all images

```html
<script>
    jQuery(document).ready(function($){
        $('.box img').relocate();
    });
</script>
```

### custom
$(imageSelector).relocate($imageBoxSelector);

- `imageBoxSelector` Specify picture reference container, default picture parent reference.

example:

```html
<div class="box">
    <div class="img-wrapper">
        <a href=""><img src="" alt=""></a>
    </div>
    <p>The image title</p>
</div>
...
<script>
    jQuery(document).ready(function($){
        $('.box img').relocate('.img-wrapper');  //Actually：$(img).closet(''.img-wrapper'')
    });
</script>
```

# License
MIT
