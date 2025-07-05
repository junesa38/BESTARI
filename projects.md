---
layout: default
title: Projects
permalink: /projects/
---

## All My Projects

{% assign all_projects = site.projects | sort: "date" | reverse %} {# Urutkan semua proyek dulu dari terbaru ke terlama #}
{% assign grouped_projects = all_projects | group_by: "categories" %}

{% for group in grouped_projects %}
  {% assign category_name = group.name | first %} {# Ambil kategori pertama dari array #}
  {% if category_name %}
    <h3 style="font-size: 1.2em; margin-top: 2em; margin-bottom: 0.5em;">Tools {{ category_name }}</h3>
  {% endif %}
  <ul>
    {% for project in group.items %} {# Proyek sudah diurutkan di awal #}
      <li>
        {{ project.date | date: "%d %b, %Y" }} - <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
        {% if project.status %} (Status: {{ project.status }}){% endif %}
      </li>
    {% endfor %}
  </ul>
{% endfor %}
