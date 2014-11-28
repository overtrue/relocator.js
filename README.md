relocator.js
============

relocate images to fit image box.

![image](https://cloud.githubusercontent.com/assets/1472352/5231259/ed2763ce-776f-11e4-9310-6f6ce491e7ee.png)


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
<script src="assets/js/relocator-1.0.0.min.js"></script>
```
### relocate all images

```html
<script>
    jQuery(document).ready(function($){
        $('.image-list img').relocate();
    });
</script>
```

# License
MIT