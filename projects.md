---
layout: default
title: Projects
permalink: /projects/
---

## All My Projects

{% assign all_projects = site.projects | sort: "date" | reverse %}
{% assign all_categories = "" | split: "," %} 

{% for project in all_projects %}
{% if project.categories %}
{% assign all_categories = all_categories | concat: project.categories %}
{% endif %}
{% endfor %}

{% assign unique_categories = all_categories | uniq | sort %} 

{% if unique_categories.size > 0 %}
{% for category in unique_categories %}
<h3 style="font-size: 1.2em; margin-top: 2em; margin-bottom: 0.5em;">{{ category }}</h3>
<ul>
{% for project in all_projects %}
{% comment %} Periksa apakah kategori proyek mengandung kategori saat ini {% endcomment %}
{% if project.categories contains category %}
<li>
{{ project.date | date: "%d %b, %Y" }} - <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
</li>
{% endif %}
{% endfor %}
</ul>
{% endfor %}
{% else %}
<h3 style="font-size: 1.2em; margin-top: 2em; margin-bottom: 0.5em;">Uncategorized</h3>
<ul>
{% for project in all_projects %}
<li>
{{ project.date | date: "%d %b, %Y" }} - <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
</li>
{% endfor %}
</ul>
{% endif %}
