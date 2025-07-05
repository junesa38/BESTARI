---
layout: default
title: Projects
permalink: /projects/
---

## All My Projects

{% comment %} Asumsi proyek adalah 'posts', jika menggunakan koleksi kustom 'projects', ganti 'site.posts' dengan 'site.projects' {% endcomment %}
{% comment %} Mengambil kategori utama dari array kategori {% endcomment %}

{% assign all_projects = site.projects | sort: "date" | reverse %}
{% assign grouped_projects = all_projects | group_by: "categories" %}

{% for group in grouped_projects %}
{% assign category_array = group.name %}
{% assign category_name = category_array | first %} {# Ambil elemen pertama dari array kategori #}

{% if category_name %}
<h3 style="font-size: 1.2em; margin-top: 2em; margin-bottom: 0.5em;">{{ category_name }}</h3>
{% else %}
<h3 style="font-size: 1.2em; margin-top: 2em; margin-bottom: 0.5em;">Uncategorized</h3> {# Untuk proyek tanpa kategori #}
{% endif %}
<ul>
{% for project in group.items %}
<li>{{ project.date | date: "%d %b, %Y" }} - <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
</li>
{% endfor %}
</ul>
{% endfor %}
