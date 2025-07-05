---
layout: default
title: Projects
permalink: /projects/
---

## All My Projects

{% assign all_projects = site.posts | sort: "date" | reverse %} {# Asumsi proyek adalah 'posts', jika menggunakan koleksi kustom 'projects', ganti 'site.posts' dengan 'site.projects' #}
{% assign grouped_projects = all_projects | group_by: "categories" %}

{% for group in grouped_projects %}
  {% assign category_name = group.name | first %} {# Mengambil kategori utama dari array kategori #}
  {% if category_name %}
    <h3 style="font-size: 1.2em; margin-top: 2em; margin-bottom: 0.5em;">{{ category_name }}</h3> {# Menampilkan nama kategori apa adanya #}
  {% endif %}
  <ul>
    {% for project in group.items %}
      <li>
        {{ project.date | date: "%d %b, %Y" }} - <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
      </li>
    {% endfor %}
  </ul>
{% endfor %}
