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

## Most Recent Post

{% if site.posts == empty %}
⚠️ Belum ada post yang terdeteksi di folder _posts/
{% endif %}

<ul>
  {% assign sorted_recent_items = site.posts | sort: "date" | reverse %}
  {% for item in sorted_recent_items limit:3 %}
    <li>
      <a href="{{ item.url | relative_url }}">{{ item.title }}</a>
    </li>
  {% endfor %}
</ul>

