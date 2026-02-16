<img src="img/cs_white_all.png" style="width: 100px;">

# Cristian Ceni's (Ceni Dev) website

### Simple portfolio website, where you can find my:

- References.

- Curriculum Vitae. [Download here directly](ceni-curriculum.pdf)

- Projects (in development | Stopped | Deprecated).

- Jobs and School Education.


## Structure and porpouse

The site is entirely in [HTML](index.html), using a simple [script.js](script.js) for display the projects in it and an external [CSS](styles.css) for the styles.
I made this website just for upload all my contents in one place, and i think that's the best approach to share them
with the common people that doesn't know GitHub.

The site has this script in the `<head>` tag for the indicization and better search powered by [Schema.org](https://schema.org/)

``` js
    "@context":"https://schema.org",
    "@type":"Person",
    "name":"Cristian Ceni",
    "jobTitle":"Tutto fare",
    "address":{"@type":"PostalAddress","addressLocality":"Firenze","addressRegion":"FI","postalCode":"50136","addressCountry":"Italy"},
    "email":"mailto:cenicristian@yahoo.com",
    "telephone":"+393398923317",
    "sameAs":["https://instagram.com/cenicristian"],
    "url":"/"
```

and this one for the nav-bar behavior, that basically add a listener to the button that expand the nav-bar in the mobile version and control the state.

``` js
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.getElementById('site-menu');
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', toggle.classList.contains('active'));
    });
```

## Visit my projects

This one is a pretty simple project, but take a look to my other projects, simply visit [cenidev.com](https://cenidev.com) and enjoy.

© Copyright 2026 Ceni Dev