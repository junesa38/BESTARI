---
layout: default
title: Tools
permalink: /tools/
---

## Semua Tools

<ul style="padding-left: 20px;">
  {% assign all_tools = site.tools | sort: "date" | reverse %}
  {% for tool in all_tools %}
    <li><a href="{{ tool.url | relative_url }}">{{ tool.title }}</a></li>
  {% endfor %}
</ul>
