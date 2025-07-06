from datetime import datetime

today = datetime.now().strftime("%Y-%m-%d")
filename = f"_posts/{today}-artikel-python.md"

content = f"""---
layout: post
title: "Artikel Otomatis dari Python"
date: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
---

Ini adalah artikel otomatis dari Python.

- Dibuat pada {datetime.now().strftime('%d %B %Y')}
- Tes integrasi Python ke Jekyll lokal
"""

with open(filename, "w", encoding="utf-8") as f:
    f.write(content)

print(f"✅ Artikel berhasil dibuat: {filename}")
