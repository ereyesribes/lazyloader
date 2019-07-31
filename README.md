# Responsive lazy loader

## So, why did I do this?

Okay, so, in my quest for increased landing page speed, I inevitably came across
the really interesting topic of lazy loading. However, I noticed one thing, persistently,
in the examples of this practice I found around: not only were the gray lazy boxes
unresponsive, sometimes they were just all the exact same size.

I could not use this. So I created my own solution. it's a lazy loading library
that makes unloaded images behave exactly like a loaded bootstrap img.img-responsive would.

This functionality is optional, though, so don't panic if you don't need it.

This library requires jQuery.

## How do I use it?
Simple:

```
  <script src = "dist/lazyload.min.js"></script>
  <link rel = "stylesheet" href = "dist/lazyload.min.css"/>
```

Then, use this code to indicate a lazy loaded image:
```
  <img data-src = "route/to/file.jpg" class = "lazy" style = "width: 30px; height: 30px;"/>
```

Whoa, hold the phone, that image is not responsive!
Yes, that's correct, let me show you how we'd go about lazy loading

## Responsive images

```
  <img data-src = "route/to/file2.jpg" class = "lazy lazy-resp img-responsive" data-width = "750" data-prop = "1.50"/>
```

Okay, what's this? Let's take it apart, shall we?

- data-src is the future src parameter, like in the previous example.
- the "lazy-resp" class is the class that makes sure that the unloaded image behaves
just like its loaded counterpart
- data-width is the width of the image, meaning, the actual file.
- data-prop is the Width to height ratio of the image. In our example it's implied
that file2 is 500px tall, since 500 x 1.50 = 750. It's important that you use "." in the ratio, not ",".


Oh, on a side note, I recommend you set the "alt" attribute on lazy loaded images to " ". Otherwise,
browsers ignore the border:0 property.
