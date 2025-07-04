---
layout: default
title: Home
permalink: /
---

## Hi, I'm Asa Putra.

I'm a professional sailor by trade, navigating across seas and oceans.  
When I'm not at sea, I also work on various private projects, bringing ideas to life on land.

I currently live in Jakarta, a vibrant and complex city full of contrast and inspiration.

---

## My Most Recent Posts

<ul>
  {% for post in site.posts limit:3 %}
    <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>


