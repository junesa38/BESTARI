---
layout: default
title: Projects
permalink: /projects/
---

## My Projects

<ul>
  {% for project in site.projects %}
    <li>
      {{ project.date | date: "%d %b, %Y" }} - <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
      {% if project.status %} (Status: {{ project.status }}){% endif %}
    </li>
  {% endfor %}
</ul>
