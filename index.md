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
  {% assign all_recent_items = site.posts | concat: site.projects %}
  {% assign sorted_recent_items = all_recent_items | sort: "date" | reverse %}
  {% for item in sorted_recent_items limit:3 %}
    <li>
      <a href="{{ item.url | relative_url }}">{{ item.title }}</a>
    </li>
  {% endfor %}
</ul>



